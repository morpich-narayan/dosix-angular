import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { rootReducer } from './store';
import { provideStore } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChatEffects } from './store/chat/chat.effects';
import { provideEffects } from '@ngrx/effects';
import { fakebackendInterceptor } from './core/helpers/fake-backend';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CRMEffects } from './store/CRM/crm.effects';
import { NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import * as echarts from 'echarts';
import { OrdersEffects } from './store/Orders/order.effects';
import { InvoiceEffects } from './store/Invoices/invoices.effects';
import { LayoutEffects } from './store/layouts/layout-effects';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideStore(rootReducer),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: fakebackendInterceptor, multi: true },
    provideEffects(ChatEffects,CRMEffects,OrdersEffects,InvoiceEffects,LayoutEffects),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
      })
    ),

    { provide: NGX_ECHARTS_CONFIG, useValue: { echarts } }
  ]
};
