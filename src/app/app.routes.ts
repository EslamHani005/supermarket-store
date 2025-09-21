import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Home } from './home/home';
import { NotFound } from './components/not-found/not-found';
import { Details } from './components/details/details';
import { CartProducts } from './components/cart-products/cart-products';
import { Login } from './login/login';
import { SignupComponent } from './signup/signup';
import { Contant } from './components/contant/contant';
import { Usersetting } from './usersetting/usersetting';
export const routes: Routes = [
    {path:'',redirectTo:"home",pathMatch:"full"},
    {path:'home',component:Home},  
    {path:'usersetting',component:Usersetting},
    {path:'products',component:Products,children:[ 
        {path:'',pathMatch:'full',redirectTo:'home'}
    ]} ,  
    {path:'details/:id',component:Details}, 
    {path:'cart-produc',component:CartProducts},
{path:"login",component:Login},
{path:"Signup",component:SignupComponent},
{path:"contant",component:Contant},
    {path:'**',component:NotFound}
];
