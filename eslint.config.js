import globals from "globals";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "quotes": ["error", "double"],
        "eqeqeq": "error",
        "no-redeclare": "error",
        "camelcase": "error",
        "curly": "error",
        "no-useless-assigments": "error",
        "no-dupe-keys": "error",
        "no-dupe-clas-members": "error",
        "noo-constant-condition": "error",
        "getter-return": "error",
        "for-directon": "error"
    }
}
];