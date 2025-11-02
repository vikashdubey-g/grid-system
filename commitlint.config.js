export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Formatting, missing semi colons, etc
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf', // Performance improvements
        'test', // Adding tests
        'chore', // Updating build tasks, package manager configs, etc
        'ci', // CI/CD changes
        'build', // Build system changes
      ],
    ],
    'subject-case': [0], // Allow any case for commit message
  },
}
