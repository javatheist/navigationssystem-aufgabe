import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/404/404.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { DComponent } from './components/d/d.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'a', pathMatch: 'full' },
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent },
      { path: 'c', component: CComponent },
      { path: 'd', component: DComponent },
      { path: '**', component: NotFoundComponent },
      // { path: '**', redirectTo: '' },  // TODO: add this line after implementing a dynamic component resolver
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
