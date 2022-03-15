import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';
import {CComponent} from './components/c/c.component';
import {DComponent} from './components/d/d.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
