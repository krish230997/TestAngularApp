import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Pnf } from './pnf/pnf';
import { Pipes } from './pipes/pipes';
import { Form1 } from './form1/form1';
import { Form2 } from './form2/form2';
import { TestAPI } from './test-api/test-api';
import { Testcode } from './testcode/testcode';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:First},
    {path:'about',component:Second},
    {path:'pipe',component:Pipes},
    {path:'fm1',component:Form1},
    {path:'fm2',component:Form2},
    {path:'test',component:TestAPI},
    {path:'testc',component:Testcode},
    {path:'**',component:Pnf}
];
