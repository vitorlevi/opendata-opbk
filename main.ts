import "./polyfills";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    try {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/ngsw-worker.js");
      }
    } catch (e) {}

    // Ensure Angular destroys itself on hot reloads.
    // if (window['ngRef']) {
    //   window['ngRef'].destroy();
    // }
    // window['ngRef'] = ref;

    // Otherise, log the boot error
  })
  .catch(err => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    try {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/ngsw-worker.js");
      }
    } catch (e) {}
  })
  .catch(err => console.log(err));
