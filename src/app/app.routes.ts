import { Routes } from '@angular/router';
import { SearchGroups } from './search/search.component';
import { ViewAll } from './viewAll/view-all.component';
import { LoginComponent } from './login/login.component';
import { ManageDataComponent } from './manage-data/manage-data.component';

export const routes: Routes = [
    {path: 'search', component: SearchGroups, pathMatch: 'full'},
    {path: '', component: ViewAll, pathMatch: 'full'},
    {path: 'manage-data', component: ManageDataComponent, pathMatch: 'full' },
    {path: 'login', component: LoginComponent, pathMatch: 'full'}
];
