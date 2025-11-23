import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Application } from './app/components/application/application';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Application, config, context);

export default bootstrap;
