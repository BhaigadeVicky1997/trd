import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { QuoteTabsComponent } from './quote-tabs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: QuoteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'choose-quotes',
        loadChildren: () =>
          import('../choose-quote/choose-quote.module').then(
            (n) => n.ChooseQuoteModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((x) => x.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'upgrade-policy',
    component: QuoteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'choose-quotes',
        loadChildren: () =>
          import('../choose-quote/choose-quote.module').then(
            (n) => n.ChooseQuoteModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((x) => x.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'cancel-policy',
    component: QuoteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((x) => x.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'feature',
    component: QuoteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((x) => x.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'renew',
    component: QuoteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'choose-quotes',
        loadChildren: () =>
          import('../choose-quote/choose-quote.module').then(
            (n) => n.ChooseQuoteModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((x) => x.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [QuoteTabsComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class QuoteTabsModule {}
