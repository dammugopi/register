import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { OutputComponent } from './output/output.component';
  import { GopiComponent } from './gopi/gopi.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',component:RegisterComponent },
   {path:'out',component:OutputComponent },
   {path:'gopi',component:GopiComponent},
{path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
