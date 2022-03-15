import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Link } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private staticNavigationItems$: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>(null);
  private dynamicNavigationItems$: BehaviorSubject<Link[]> = new BehaviorSubject<Link[]>(null);

  constructor() {
    this.staticNavigationItems$.next([
      { title: 'M', route: 'm' },
      { title: 'A', route: 'a' },
      { title: undefined, route: 'x' },
      { title: 'B', route: 'b' },
      { title: 'H', route: null },
    ]);
    this.mockFetchNavigationItems();
  }

  public getNavigationItems(): any {
    // TODO: use static and remote navigation items sorted by title
    // and since the data is not curated well, please remove the invalid items
  }

  private mockFetchNavigationItems(): void {
    // as if it would come from an http request
    setTimeout(() => this.dynamicNavigationItems$.next([
      { title: 'C', route: 'c' },
      { title: 'Z', route: 'z' },
    ]), 500);
  }
}
