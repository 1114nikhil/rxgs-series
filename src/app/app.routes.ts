import { Routes } from '@angular/router';
import { PromisesComponent } from './includes/promises/promises.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/observable/interval/interval.component';
import { OfFromComponent } from './includes/observable/of-from/of-from.component';

export const routes: Routes = [
    {path:"promises",component:PromisesComponent},
    {path:"observable",component:ObservableComponent,children:[
        {path:'',component:ListComponent},
        {path:'fromEvent',component:FromEventComponent},
        {path:'interval',component:IntervalComponent},
        {path:'ofFrom',component:OfFromComponent},
    ]},
    {path:"**",redirectTo:"promises"},
];
