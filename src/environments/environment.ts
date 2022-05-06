// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:54806/api/v1/',
  fileUrl: 'http://localhost:54806/WazenUploads/',
  clientId:
    '232338756020-nm59sed4aufk0gtanlgoskdunmtluvin.apps.googleusercontent.com',
  appId: '270508575124274',
  firebaseConfig: {
    apiKey: 'AIzaSyBR-BT2rBIVdV19KHpQIGXmCy8zb0kauGE',
    authDomain: 'wazen-2087e.firebaseapp.com',
    projectId: 'wazen-2087e',
    storageBucket: 'wazen-2087e.appspot.com',
    messagingSenderId: '1093411183358',
    appId: '1:1093411183358:web:bd37dcc7a3bf444c6d63af',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.