import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { Step1Component } from './components/step1/step1.component';

/* Routes */
const routes: Routes = [
    {
        path:'',
        component:Step1Component
    },
    {
        path:'step1',
        component:Step1Component
    } 
  ]

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);