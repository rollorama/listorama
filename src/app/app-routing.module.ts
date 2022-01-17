import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tables',
    pathMatch: 'full'
  },
  {
    path: 'tables',
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'fields',
    loadChildren: () => import('./pages/fields/fields.module').then( m => m.FieldsPageModule)
  },
  {
    path: 'records',
    loadChildren: () => import('./pages/records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'structure',
    loadChildren: () => import('./pages/structure/structure.module').then(m => m.StructurePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
