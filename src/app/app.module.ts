import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componetns/partials/header/header.component';
import { HomeComponent } from './componetns/pages/home/home.component';
import { SearchComponent } from './componetns/partials/search/search.component';
import { CommanderPageComponent } from './componetns/pages/commander-page/commander-page.component';
import { NotFoundComponent } from './componetns/partials/not-found/not-found.component';
import { LoginPageComponent } from './componetns/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './componetns/partials/input-container/input-container.component';
import { InputValidationComponent } from './componetns/partials/input-validation/input-validation.component';
import { TextInputComponent } from './componetns/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './componetns/partials/default-button/default-button.component';
import { RegisterPageComponent } from './componetns/pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CommanderPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
