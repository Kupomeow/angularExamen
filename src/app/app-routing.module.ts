import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { AddDinosaurComponent } from './add-dinosaur/add-dinosaur.component';
import { ParksComponent } from './parks/parks.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DinosaursComponent },
    { path: 'add-dinosaur', component: AddDinosaurComponent },
    { path: 'parks', component: ParksComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }