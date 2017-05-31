import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
//import { CreateComponent } from './create/create.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { EditComponent } from './edit/edit.component';
import { HttpService } from './http.service';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent  },

    //{ path: 'home', component: HomeComponent },
    //{ path: 'create', component: CreateComponent },
    //{ path: 'dashboard', component: DashboardComponent },
    //{ path: 'edit/:id', component: EditComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
