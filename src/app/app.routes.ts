import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryIssuedComponent } from './components/inventoryIssued/inventoryIssued.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' , data: {title:"Dashboard"}},
        { path: 'dashboard', component: DashboardComponent , pathMatch:"full",data: { title:"Dashboard"}},
        { path: 'materialsreceived', component: InventoryComponent , data: {title:"Materials Received"}},
        { path: 'materialsissued', component: InventoryIssuedComponent , data: {title:"Materials Issued"}},
        { path: 'suppliers', component: SuppliersComponent , data: {title:"Suppliers"}},
        { path: 'settings', component: SettingsComponent , data: {title:"Settings"} }
];
