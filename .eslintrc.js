module.exports = {
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        node: true,
        mocha: true,
        jest: true,
        es6: true
    },
    extends: [
        'plugin:vue/recommended',
        'standard'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "single"]
    }
};
