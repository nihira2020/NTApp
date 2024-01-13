import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './_service/token.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CustomerReducer } from './_store/Customer/Customer.Reducer';
import { CustomerEffects } from './_store/Customer/Customer.Effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withInterceptors([tokenInterceptor])), 
  provideStore({'customer':CustomerReducer}),provideEffects([CustomerEffects])]
};
