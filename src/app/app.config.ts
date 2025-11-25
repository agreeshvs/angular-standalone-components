import { ApplicationConfig } from '@angular/core';
import { ActionService } from './Shared/action.service';

export const appConfig: ApplicationConfig = {
  providers: [ActionService]
};
