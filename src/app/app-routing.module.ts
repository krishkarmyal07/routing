import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { OffersComponent } from './offers/offers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './about/edit/edit.component';
import { authGuard } from './services/auth.guard';
import { authChildGuard } from './services/auth-child.guard';
import { canDeactivateGuardGuard } from './services/can-deactivate-guard.guard';
import { canMachGuardGuard } from './services/can-mach-guard.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent,
    canActivateChild: [authChildGuard],
    children: [{ path: 'edit', component: EditComponent}]
  },
  {
    path: "dashboard",
    // canMatch: [canMachGuardGuard],
    component: DashboardComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [authGuard]
  },
  {
    path: "Offers",
    component: OffersComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "access-denied",
    component: AccessDeniedComponent
  },
  {
    path: "products",
    canMatch: [canMachGuardGuard],
    // canActivate: [authGuard],
    loadChildren: () => 
      import('./products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: "contact",
    component: ContactComponent,
    canDeactivate: [canDeactivateGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
