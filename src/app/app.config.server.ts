import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
// Import your server routes if needed
// import { serverRoutes } from './server.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    // If you have server-specific routes:
    // provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);