import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { ChildoneComponent } from './childone/childone.component';
import { ChildthreeComponent } from './childthree/childthree.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

const routes: Routes = [{ 
                         path:"page-one",component:PageoneComponent, 
                         children:[{path:"child-one", component:ChildoneComponent}],
                         canActivate : [AuthService],
                         
                         
                        },
                        {
                          path:"page-two",component:PagetwoComponent,
                          children:[{path:"child-two",component:ChildtwoComponent}],
                          canDeactivate : [AuthService]
                        },
                         {
                           path:"page-three",component:PagethreeComponent,
                           children:[{path:"child-three", component:ChildthreeComponent}],
                           canActivateChild:[AuthService]
                           
                          }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
