import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routesConfig } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routesConfig),
  ]
};
