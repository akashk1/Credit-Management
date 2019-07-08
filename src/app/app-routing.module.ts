
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { ViewAllUsersComponent } from "./view-all-users/view-all-users.component";
import { ViewDetailComponent } from "./view-detail/view-detail.component";

import { SendCreditComponent } from "./send-credit/send-credit.component";
const appRoutes:Routes=[
    {
        path:'view-all-users',component:ViewAllUsersComponent
    },{
        path:'view-detail/:id/:index',component:ViewDetailComponent
    },
    {
        path:'send-credit/:id/:index',component:SendCreditComponent
    },
    {
        path:'send-credit',component:SendCreditComponent
    }
]
@NgModule(
    {
        imports:[RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]

    }
)
export class AppRouting{

}