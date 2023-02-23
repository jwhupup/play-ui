import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'update',
        'fixbug',
        'refactor',
        'optimize',
        'style',
        'docs',
        'test',
        'chore',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never', ''],
    'subject-case': [0, 'never', []],
    'header-max-length': [0, 'always', 72],
  },
}

module.exports = Configuration
