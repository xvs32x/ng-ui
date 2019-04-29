module.exports = {
  name: 'demo-demo',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/demo/demo/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
