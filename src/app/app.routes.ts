import { Routes } from '@angular/router';
import { PromisesComponent } from './includes/promises/promises.component';

export const routes: Routes = [
    {path:"promises",component:PromisesComponent},
    {path:"**",redirectTo:"promises"},
];
