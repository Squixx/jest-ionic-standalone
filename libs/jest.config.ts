/* eslint-disable */
export default {
  displayName: 'test-lib',
  preset: '../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../coverage/libs',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)',
  ],
  // transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/|\\.pnpm/?!.*\\.mjs$|(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
