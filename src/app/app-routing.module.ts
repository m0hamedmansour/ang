import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"" ,redirectTo:"home" ,pathMatch:"full" },
  {path:"home" ,component:HomeComponent, title:'home'},
  {path:"about" ,component:AboutComponent,title:'about'},
  {path:"protofolio" ,component:ProtofolioComponent,title:'protofolio'},
  {path:"contact" ,component:ContactComponent,title:'contact'},
  {path:"**" ,component:NotfoundComponent,title:'notfound'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
