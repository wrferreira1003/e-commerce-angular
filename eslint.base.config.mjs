import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*', //todas as libs
              onlyDependOnLibsWithTags: ['*'], //podem depender de todas as libs
            },
            {
              sourceTag: 'feature', //todas as libs
              onlyDependOnLibsWithTags: ['feature', 'ui', 'data-acess'], //podem depender de todas as libs
            },
            {
              sourceTag: 'ui', //todas as libs
              onlyDependOnLibsWithTags: ['ui', 'data-acess'], //podem depender de todas as libs
            },
            {
              sourceTag: 'data-acess', //todas as libs
              onlyDependOnLibsWithTags: ['data-acess', 'environments'], //podem depender de todas as libs
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {
      'no-console': 'error',
    },
  },
];
