import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
} from './containers';
import {AuthGuardService} from './auth/authguard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./views/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuardService]

      },


      {
        path: 'input-system',
        loadChildren: () => import('./views/input-system/input-system.module').then(m => m.InputSystemModule),
        canActivate: [AuthGuardService]

      },
      {
        path: 'email',
        loadChildren: () => import('./views/components/email/email.module').then(m => m.EmailModule),
        canActivate: [AuthGuardService]


      },
      {
        path: 'profile',
        loadChildren: () => import('./views/components/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuardService]

      },
      {
        path: 'pusher',
        loadChildren: () => import('./views/components/pusher/pusher.module').then(m => m.PusherModule),
        canActivate: [AuthGuardService]

      },
      /*{
        path: 'sms',
        loadChildren: './views/components/sms/sms.module#SMSModule',
        canActivate: [AuthGuardService]

      },*/
      {
        path: 'manual-email-sender',
        loadChildren: () => import('./views/components/manual-email-sender/manual-email-sender.module').then(m => m.ManualEmailSenderModule),
        canActivate: [AuthGuardService]

      },

    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
 // providers: [AuthGuardService]
})
export class AppRoutingModule {}
