import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { InternationalizationModule } from './utils/internationalization/internationalization.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
  declarations: [AppComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AuthLayoutModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  // localStorage.setItem('language', 'en-US');
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
