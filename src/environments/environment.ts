// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* REPLACE IT WITH YOUR FIREBASE CONFIG */
export const environment = {
  firebase: {
    projectId: 'angular-auth-template',
    appId: '1:565031608751:web:bffe08c8157e4a37ba0f5a',
    storageBucket: 'angular-auth-template.appspot.com',
    apiKey: 'AIzaSyCLZGF-AgV5i6_v_ulu7DU2cvaXwFaU6yY',
    authDomain: 'angular-auth-template.firebaseapp.com',
    messagingSenderId: '565031608751',
    measurementId: 'G-FQDRVSPN6Z',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
