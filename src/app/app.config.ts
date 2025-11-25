import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { ActionService } from './Shared/action.service';
import { AppRouteModule } from './app-route.module';

export const appConfig: ApplicationConfig = {
  providers: [
    ActionService,
    importProvidersFrom(AppRouteModule)
  ]
};
