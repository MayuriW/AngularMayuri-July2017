// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCdJQJIekYOQL_ILwax7FmqlyMJHVQ2niY",
    authDomain: "fir-angdemo.firebaseapp.com",
    databaseURL: "https://fir-angdemo.firebaseio.com",
    projectId: "fir-angdemo",
    storageBucket: "fir-angdemo.appspot.com",
    messagingSenderId: "581921898312"
  },

  // fireBaseLogin :
  // {
  //   apiKey: "AIzaSyA5UR_RcGsXDucmekqJTGRvkZmdwwQtRYE",
  //   authDomain: "firbaselogin-704e5.firebaseapp.com",
  //   databaseURL: "https://firbaselogin-704e5.firebaseio.com",
  //   projectId: "firbaselogin-704e5",
  //   storageBucket: "",
  //   messagingSenderId: "519031081001"
  // }

};
