import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './diplay/home/home.component';
import { SearchComponent } from './diplay/search/search.component';
import { SavedComponent } from './diplay/saved/saved.component';
import { DiplayComponent } from './diplay/diplay.component';
import { DisplaycardComponent } from './displaycard/displaycard.component';
import { PageComponent } from './page/page.component';
import{ApiService} from './api.service';
import { ChatappComponent } from './chatapp/chatapp.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StoreComponent } from './store/store.component';
import { TodoComponent } from './todo/todo.component';
import { NopageComponent } from './nopage/nopage.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SavedComponent,
    DiplayComponent,
    DisplaycardComponent,
    PageComponent,
    ChatappComponent,
    ProfileComponent,
    AuthenticationComponent,
    StoreComponent,
    TodoComponent,
    NopageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
