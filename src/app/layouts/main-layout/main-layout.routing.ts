import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FaqComponent } from 'src/app/pages/faq/faq.component';

export const MainLayoutRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'dashboard/:id/:cid/:VerifyCode/:reset',
    loadChildren: () =>
      import('../../pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../../pages/profile/profile.module').then((m) => m.ProfileModule),
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'policy-details/:Id',
    loadChildren: () =>
      import(
        './../../pages/policies/policy-details/policy-details.module'
      ).then((m) => m.PolicyDetailsModule),
    data: {
      parent: 'Policy',
      title: 'Policy',
    },
  },
  {
    path: 'quotes',
    loadChildren: () =>
      import('../../pages/quote/quote-tabs/quote-tabs.module').then(
        (m) => m.QuoteTabsModule
      ),
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('../../pages/quote/quote-tabs/quote-tabs.module').then(
        (m) => m.QuoteTabsModule
      ),
  },
  {
    path: 'manage-policies',
    loadChildren: () =>
      import('../../pages/manage-policies/manage-policies.module').then(
        (m) => m.ManagePoliciesModule
      ),
  },
  {
    path: 'claim',
    loadChildren: () =>
      import('../../pages/submit-claim/submit-claim.module').then(
        (m) => m.SubmitClaimModule
      ),
  },

  {
    path: 'contact-us',
    loadChildren: () =>
      import('../../pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('../../pages/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('../../pages/terms-conditions/terms-conditions.module').then(
        (m) => m.TermsConditionsModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('../../pages/notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
  },
  {
    path: 'notification-details/:id',
    loadChildren: () =>
      import(
        '../../pages/notification-details/notification-details.module'
      ).then((m) => m.NotificationDetailsModule),
    data: {
      role: 'ICAdmin',
    },
  },
];
