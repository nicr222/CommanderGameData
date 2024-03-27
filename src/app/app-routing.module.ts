import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componetns/pages/home/home.component';
import { CommanderPageComponent } from './componetns/pages/commander-page/commander-page.component';
import { LoginPageComponent } from './componetns/pages/login-page/login-page.component';
import { RegisterPageComponent } from './componetns/pages/register-page/register-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchTerm', component: HomeComponent},
  {path:'commanders/:id', component:CommanderPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
