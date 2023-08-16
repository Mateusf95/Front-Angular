import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './modules/content/contatos/contatos.component';
import { ContentComponent } from './modules/content/content.component';
import { DonationsComponent } from './modules/content/donations/donations.component';
import { LoginComponent } from './modules/content/login/login.component';
import { QuemSomosComponent } from './modules/content/quem-somos/quem-somos.component';
import { RequestsComponent } from './modules/content/requests/requests.component';

const routes: Routes = [
    { path: '', redirectTo: 'content', pathMatch: 'full' }
  , { path: 'content'  , component : ContentComponent   }
  , { path: 'donations', component : DonationsComponent }
  , { path: 'requests' , component : RequestsComponent  }
  , { path: 'login'    , component : LoginComponent     }
  , { path: 'quemSomos', component : QuemSomosComponent }
  , { path: 'contatos' , component : ContatosComponent  }
  , {path: '**', redirectTo: 'content'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
