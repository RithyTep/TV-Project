import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { RedirectComponent } from './redirect-component/redirect-component.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: '',
        component: SidenavComponent,
        // children: [
        //   {
        //     path: '',
        //     redirectTo: 'display/default-channel/draftChannel',
        //     pathMatch: 'full',
        //   },
        //   {
        //     path: 'display/:channelName/:index',
        //     component: MainDisplayComponent,
        //   },
        // ],
        children: [
          {
            path: '',
            redirectTo: 'test',
            pathMatch: 'full',
          },
          {
            path: 'test',
            component: TestComponent,
          },
        ],
      },
    ],
  },
  { path: 'redirect', component: RedirectComponent },
  { path: '**', redirectTo: 'redirect' }, // Add a catch-all route for unmatched URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
