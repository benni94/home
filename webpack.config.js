const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

//https://github.com/angular/angular-cli/issues/9920
//https://exerror.com/module-not-found-error-cant-resolve-fs-in/

module.exports = {
  node:{global:true},
  output: {
    uniqueName: "home",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  //important to use if you want to import ewelink 
  resolve: {
    fallback: {
      "fs": false,
      "crypto": require.resolve('crypto-browserify'),
      "stream": false,
      //"stream": require.resolve('stream-browserify'),
  },
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      // name: "home",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },        

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};