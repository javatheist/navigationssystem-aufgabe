import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AComponent} from './components/a/a.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: AComponent},
      {path: '**', redirectTo: ''},
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
