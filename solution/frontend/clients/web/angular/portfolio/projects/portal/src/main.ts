import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Application } from './app/components/application/application';

bootstrapApplication(Application, appConfig)
  .catch((err) => console.error(err));
