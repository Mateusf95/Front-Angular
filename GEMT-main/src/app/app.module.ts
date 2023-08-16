import { AlertComponent } from './modules/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule         } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule    } from '@angular/platform-browser';
import { AppRoutingModule   } from './app-routing.module';
import { AppComponent       } from './app.component';
import { HeaderComponent    } from './shared/components/header/header.component';
import { FooterComponent    } from './shared/components/footer/footer.component';
import { ContentComponent   } from './modules/content/content.component';
import { LoginComponent     } from './modules/content/login/login.component';
import { RequestsComponent  } from './modules/content/requests/requests.component';
import { DonationsComponent } from './modules/content/donations/donations.component';
import { QuemSomosComponent } from './modules/content/quem-somos/quem-somos.component';
import { ContatosComponent } from './modules/content/contatos/contatos.component';
import { CardComponent } from './shared/components/card/card.component';
import { ButtonsComponent } from './shared/components/buttons/buttons.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    RequestsComponent,
    DonationsComponent,
    QuemSomosComponent,
    ContatosComponent,
    CardComponent,
    ButtonsComponent,
    AlertComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule, {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
