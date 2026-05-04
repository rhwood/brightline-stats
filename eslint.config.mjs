import eslintReact from "@eslint-react/eslint-plugin";
import typescriptEslint from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig({
    files: [
        "**/*.ts",
        "**/*.tsx"
    ],
    extends: [
        js.configs.recommended,
        typescriptEslint.configs.recommended,
        eslintReact.configs["recommended-typescript"],
    ],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            window: "readonly",
            describe: "readonly",
            test: "readonly",
            expect: "readonly",
            it: "readonly",
            process: "readonly",
            document: "readonly",
            insights: "readonly",
            shallow: "readonly",
            render: "readonly",
            mount: "readonly",
        },

        parser: typescriptEslint.parser,
        ecmaVersion: 6,
        sourceType: "commonjs",

        parserOptions: {
            tsx: true,
            jsx: true,
            js: true,
            useJSXTextNode: true,
            projectService: true,
        },
    },

    settings: {
        react: {
            version: "^16.11.0",
        },
    },

    rules: {
        "sort-imports": ["error", {
            ignoreDeclarationSort: true,
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "prettier/prettier": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/prop-types": "off",
    },
});
