import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },

  {
    path: 'user',
    component: User,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'structural-directives',
    component: Directives,
  },
  {
    path: 'attribute-directives',
    component: AttributeDirectives,
  },
  {
    path: '**',
    component: PageNotFound,
    // redirectTo: '/user',
  },
  // {
  //   path: 'user',
  //   component: User,
  // },
];
