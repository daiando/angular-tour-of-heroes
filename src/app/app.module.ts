import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule} from './heros/heroes.module';
import { CrisisCenterModule} from './crisis-center/crisis-center.module';

import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
