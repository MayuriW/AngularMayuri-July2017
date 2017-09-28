import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { WelcomeRouterComponent } from "./welcome-router/welcome-router.component";


const MyRouterModule = [
    { path:'', component:WelcomeRouterComponent},
    { path:'second', component:SecondComponent },
    { path:'second/:name', component:SecondComponent },
    { path:'**', component:WelcomeRouterComponent },
    { path:'forget', component:ForgetPassComponent }
     
    ];


export const MyRtModule = RouterModule.forRoot(MyRouterModule);