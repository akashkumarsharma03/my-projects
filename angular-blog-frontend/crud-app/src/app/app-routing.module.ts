import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from './page/page.component'
import { HomeComponent } from './diplay/home/home.component';
import { SearchComponent } from './diplay/search/search.component';
import { SavedComponent } from './diplay/saved/saved.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TodoComponent } from './todo/todo.component';
import { StoreComponent } from './store/store.component';
import { NopageComponent } from './nopage/nopage.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'search', component:SearchComponent},
  { path: 'chat', component: ChatappComponent },
  { path: 'blogpage/:id', component: PageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'store', component: StoreComponent },
  { path: '**',  pathMatch: 'full', component: NopageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
