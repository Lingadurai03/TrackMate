module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './src/app',
            '@pages': './src/pages',
            '@features': './src/features',
            '@entities': './src/entities',
            '@processes': './src/processes',
            '@shared': './src/shared',
          },
        },
      ],
    ],
  };
};
