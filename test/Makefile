NPM_MOD_DIR := $(CURDIR)/../node_modules
NPM_BIN := $(NPM_MOD_DIR)/.bin

all:

.PHONY: build
build: build_ts build_js

.PHONY: build_ts
build_ts:
	$(NPM_BIN)/tsc --build --verbose

.PHONY: build_js
build_js:
	$(NPM_BIN)/cpx '$(CURDIR)/**/*.js' $(TEST_CODE_DIR) --preserve
