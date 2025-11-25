import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ActionService } from './Shared/action.service';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ActionService,
    provideRouter(APP_ROUTES)
  ]
};
