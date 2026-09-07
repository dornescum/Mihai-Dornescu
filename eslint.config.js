import js from "@eslint/js";
import globals from "globals";

export default [
	{
		ignores: ["dist/**", "src/certificates/**", "src/img/**"]
	},
	js.configs.recommended,
	{
		files: ["src/js/**/*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				marked: "readonly"
			}
		},
		rules: {
			"no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
		}
	}
];
