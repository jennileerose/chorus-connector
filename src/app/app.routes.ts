import { Routes } from '@angular/router';
import { SearchGroups } from './search/search.component';
import { ViewAll } from './viewAll/view-all.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { HomeComponent } from './home/home.component';
import { AddNewChoirComponent } from './add-new-choir/add-new-choir.component';

export const routes: Routes = [
    {path: 'search', component: SearchGroups, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'manage-data', component: ManageDataComponent, pathMatch: 'full' },
    {path: 'view-all', component: ViewAll, pathMatch: 'full'},
    {path: 'add-new-choir', component: AddNewChoirComponent, pathMatch: 'full'}
];
