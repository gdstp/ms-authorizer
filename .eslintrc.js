module.exports = {
    env: {
        es2021: true,
        node: true
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'indent': ['error', 4, { ignoredNodes: ["PropertyDefinition"] }],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        'sort-imports': [
            'error',
            { ignoreCase: false, ignoreDeclarationSort: true }
        ],
        'import/order': [
            1,
            {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    'sibling',
                    'parent',
                    'index'
                ]
            }
        ]
    }
}
