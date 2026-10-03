import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Provide the HttpClient service for making HTTP requests
    provideHttpClient(),
    // Provide the router configuration for handling navigation and routing
    provideRouter(routes),
  ],
};
