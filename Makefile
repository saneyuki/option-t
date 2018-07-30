NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin
NPM_CMD := npm

SRC_DIR := $(CURDIR)/src
SRC_TEST_DIR := $(CURDIR)/test

DIST_ESM_DIR := $(CURDIR)/esm
DIST_COMMONJS_DIR := $(CURDIR)/cjs
DIST_MIXED_LIB_DIR := $(CURDIR)/lib
export TEST_CODE_DIR := $(CURDIR)/__test_js
TEST_CACHE_DIR := $(CURDIR)/__test_cache
TYPE_TEST_DIR := $(CURDIR)/__type_test
TMP_MJS_DIR := $(CURDIR)/__tmp_mjs

BABEL_PRD_TRANSFORMER_LIST := transform-es2015-block-scoping

## In CI environment, we should change some configuration
ifeq ($(CI),true)
	MOCHA_REPORTER = spec
else
	MOCHA_REPORTER = nyan
endif


all: help

help:
	@echo "Specify the task"
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@exit 1


###########################
# Clean
###########################
.PHONY: clean
clean: clean_build clean_test_cache clean_type_test clean_tmp_mjs clean_test_js

.PHONY: clean_build
clean_build: clean_build_cjs clean_build_esm clean_build_mixedlib
	$(NPM_BIN)/del $(TMP_MJS_DIR)

.PHONY: clean_build_cjs
clean_build_cjs:
	$(NPM_BIN)/del $(DIST_COMMONJS_DIR)

.PHONY: clean_build_esm
clean_build_esm:
	$(NPM_BIN)/del $(DIST_ESM_DIR)

.PHONY: clean_build_mixedlib
clean_build_mixedlib:
	$(NPM_BIN)/del $(DIST_MIXED_LIB_DIR)

.PHONY: clean_test_cache
clean_test_cache:
	$(NPM_BIN)/del $(TEST_CACHE_DIR)

.PHONY: clean_test_js
clean_test_js:
	$(NPM_BIN)/del $(TEST_CODE_DIR)

.PHONY: clean_type_test
clean_type_test:
	$(NPM_BIN)/del $(TYPE_TEST_DIR)

.PHONY: clean_tmp_mjs
clean_tmp_mjs:
	$(NPM_BIN)/del $(TMP_MJS_DIR)


###########################
# Build
###########################
.PHONY: build
build: build_cjs build_esm build_mixedlib ## Build all targets.

.PHONY: build_cjs
build_cjs: build_cjs_js build_cjs_type_definition build_cjs_ts ## Build `cjs/`.

.PHONY: build_cjs_js
build_cjs_js: clean_build_cjs
	$(NPM_BIN)/babel $(SRC_DIR) \
    --out-dir $(DIST_COMMONJS_DIR) \
    --extensions .js \
    --no-babelrc \
    --plugins transform-es2015-modules-commonjs,$(BABEL_PRD_TRANSFORMER_LIST)

.PHONY: build_cjs_type_definition
build_cjs_type_definition: clean_build_cjs
	$(NPM_BIN)/cpx '$(SRC_DIR)/**/*.d.ts' $(DIST_COMMONJS_DIR) --preserve

.PHONY: build_cjs_ts
build_cjs_ts: clean_build_cjs
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_cjs.json


.PHONY: build_esm
build_esm: build_esm_js build_esm_ts build_mjs_cp_mjs_to_esm ## Build `esm/`.

.PHONY: build_esm_js
build_esm_js: build_esm_js_call_cpx build_esm_js_call_babel

.PHONY: build_esm_js_call_cpx
build_esm_js_call_cpx: clean_build_esm
	$(NPM_BIN)/cpx '$(SRC_DIR)/**/*.d.ts' $(DIST_ESM_DIR) --preserve

.PHONY: build_esm_js_call_babel
build_esm_js_call_babel: clean_build_esm
	$(NPM_BIN)/babel $(SRC_DIR) --out-dir $(DIST_ESM_DIR) --extensions=.js --no-babelrc --plugins $(BABEL_PRD_TRANSFORMER_LIST)

.PHONY: build_esm_ts
build_esm_ts: clean_build_esm
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_esm.json

.PHONY: build_mjs_cp_mjs_to_esm
build_mjs_cp_mjs_to_esm: build_mjs_rename_js_to_mjs
	$(NPM_BIN)/cpx '$(TMP_MJS_DIR)/**/*.mjs' $(DIST_ESM_DIR) --preserve

.PHONY: build_mjs_rename_js_to_mjs
build_mjs_rename_js_to_mjs: build_mjs_create_tmp_mjs
	$(NPM_BIN)/rename '$(TMP_MJS_DIR)/**/*.js' '{{f}}.mjs'

.PHONY: build_mjs_create_tmp_mjs
build_mjs_create_tmp_mjs: build_mjs_create_tmp_mjs_call_tsc build_mjs_create_tmp_mjs_call_babel

.PHONY: build_mjs_create_tmp_mjs_call_tsc
build_mjs_create_tmp_mjs_call_tsc: clean_tmp_mjs
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_esm.json --outDir $(TMP_MJS_DIR) --declaration false

.PHONY: build_mjs_create_tmp_mjs_call_babel
build_mjs_create_tmp_mjs_call_babel: clean_tmp_mjs
	$(NPM_BIN)/babel $(SRC_DIR) --out-dir $(TMP_MJS_DIR) --extensions=.js --no-babelrc --plugins $(BABEL_PRD_TRANSFORMER_LIST)


.PHONY: build_mixedlib
build_mixedlib: build_mixedlib_cp_mjs build_mixedlib_cp_cjs build_mixedlib_cp_dts ## Build `lib/`.

.PHONY: build_mixedlib_cp_mjs
build_mixedlib_cp_mjs: build_esm clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_ESM_DIR)/**/*.mjs' $(DIST_MIXED_LIB_DIR) --preserve

.PHONY: build_mixedlib_cp_cjs
build_mixedlib_cp_cjs: build_cjs clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_COMMONJS_DIR)/**/*.js' $(DIST_MIXED_LIB_DIR) --preserve

.PHONY: build_mixedlib_cp_dts
build_mixedlib_cp_dts: build_esm clean_build_mixedlib
	$(NPM_BIN)/cpx '$(DIST_ESM_DIR)/**/*.d.ts' $(DIST_MIXED_LIB_DIR) --preserve


###########################
# Lint
###########################
.PHONY: lint
lint: eslint tslint ## Run all lints

.PHONY: eslint
eslint:
	$(NPM_BIN)/eslint $(CURDIR) '$(CURDIR)/**/.eslintrc.js' --ext=.js,.jsx,.mjs

.PHONY: tslint
tslint:
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'


###########################
# Test
###########################
.PHONY: test
test: lint build mocha tscheck ## Run all tests
	$(MAKE) run_ava_only -C $(CURDIR)

.PHONY: tscheck
tscheck: clean_type_test build ## Test check typing consistency.
	$(NPM_BIN)/tsc --project $(CURDIR)/tsconfig_test.json --noEmit

.PHONY: generate_test_js
generate_test_js: build clean_test_js
	$(MAKE) build -C $(SRC_TEST_DIR)

.PHONY: test_preprocess
test_preprocess: clean_test_cache generate_test_js
	$(NPM_BIN)/babel $(TEST_CODE_DIR) --out-dir $(TEST_CACHE_DIR) --extensions .js --presets power-assert

.PHONY: mocha
mocha: test_preprocess build
	$(MAKE) run_mocha_with_power_assert -C $(CURDIR)

.PHONY: run_mocha_with_power_assert
run_mocha_with_power_assert:
	$(NPM_BIN)/mocha --recursive '$(TEST_CACHE_DIR)/**/test_*.js' --reporter $(MOCHA_REPORTER)

.PHONY: run_mocha
run_mocha: ## Run mocha without any transforms.
	$(NPM_BIN)/mocha --recursive '$(SRC_TEST_DIR)/**/test_*.js' --reporter $(MOCHA_REPORTER)

.PHONY: run_ava
run_ava: build
	$(MAKE) run_ava_only -C $(CURDIR)

.PHONY: run_ava_only
run_ava_only: ## Run ava only.
	$(NPM_BIN)/ava

.PHONY: git_diff
git_diff: ## Test whether there is no committed changes.
	git diff --exit-code


###########################
# CI
###########################
.PHONY: ci
ci:
	$(NPM_CMD) test
	$(MAKE) git_diff


###########################
# Tools
###########################
.PHONY: fmt
fmt: eslint_fmt tslint_fmt ## Apply all formatters

.PHONY: eslint_fmt
eslint_fmt: 
	$(NPM_BIN)/eslint $(CURDIR) $(CURDIR)/**/.eslintrc.js --ext .js --fix

.PHONY: tslint_fmt
tslint_fmt: 
	$(NPM_BIN)/tslint --config $(CURDIR)/tslint.json '$(CURDIR)/src/**/*.ts{,x}'

.PHONY: prepublish
prepublish: ## Run some commands for 'npm run prepublish'
	$(MAKE) clean -C $(CURDIR)
	$(MAKE) build -C $(CURDIR)
