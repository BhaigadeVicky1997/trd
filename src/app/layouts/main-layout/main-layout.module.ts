import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { FaqService } from 'src/app/services/faq.service';
import { HttpConfigInterceptor } from '../../interceptors/http-request.interceptor';
import { MainLayoutRoutes } from './main-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    HttpClientModule,
    ComponentsModule,
  ],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    FaqService
  ],
})
export class MainLayoutModule {}
