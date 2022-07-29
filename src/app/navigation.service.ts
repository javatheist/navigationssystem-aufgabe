import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
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

  public getNavigationItems(): Observable<Link[]> {
    // TODO: use static and remote navigation items sorted by title
    // and since the data is not curated well, please remove the invalid items

    /*
     * TODO: as of RxJs v8, mind switching to combineLatestWith due to deprecation issues
    return this.dynamicNavigationItems$.pipe(
      combineLatestWith(this.staticNavigationItems$),
      ...
    )
    */

    return combineLatest([this.staticNavigationItems$, this.dynamicNavigationItems$]).pipe(

      // switchMap(([s, d]) => of([...new Set(s, d)]))  // TODO: upgrade tslib, so that spreadArray, Set and the like will be available
      map(([s, d]) => s.concat(d || [])),
      map(a => a.filter(({ title: t = false, route: r = false }) => t && r)), // depending on requirements, looping Object.keys/values would be a generic alternative
      map(a => a.sort(({ title: x }, { title: y }) => x < y ? -1 : x > y ? 1 : 0)),
      distinctUntilChanged()
    );
  }

  private mockFetchNavigationItems(): void {
    // as if it would come from an http request
    setTimeout(() => this.dynamicNavigationItems$.next([
      { title: 'C', route: 'c' },
      { title: 'Z', route: 'z' },
    ]), 500);
  }
}
