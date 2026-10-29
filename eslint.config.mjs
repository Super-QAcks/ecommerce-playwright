// @ts-check

import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default defineConfig(
	globalIgnores([
		"eslint.config.mjs",
		"playwright-report",
		"test-results",
		"playwright.config.ts",
	]),
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		files: ["**/*.ts"],
		rules: {
			"max-params": ["error", 4],
			"no-console": "error",
			"no-var": "error",
			"eol-last": "error",
		},
	},
	{
		// Type-aware rules: they catch calls nobody awaits
		files: ["ui/**/*.ts"],
		languageOptions: {
			parserOptions: { project: true },
		},
		rules: {
			"@typescript-eslint/no-floating-promises": "error",
			"@typescript-eslint/await-thenable": "error",
		},
	},
	{
		...playwright.configs["flat/recommended"],
		files: ["ui/**/*.ts"],
		rules: {
			...playwright.configs["flat/recommended"].rules,
			"playwright/valid-title": "off",
			"playwright/consistent-spacing-between-blocks": "off",
		},
	},
	{
		files: ["ui/tests/seed.spec.ts"],
		rules: { "playwright/expect-expect": "off" },
	},
);
