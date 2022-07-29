import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, filter, distinctUntilChanged, pluck } from 'rxjs/operators';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  navItems$: Observable<Link[]>;
  prevLink$: Observable<Link | boolean>;
  nextLink$: Observable<Link | boolean>;

  constructor(private readonly router: Router, private navService: NavigationService) {

    this.navItems$ = this.navService.getNavigationItems();

    const currentUrl$ = this.router.events.pipe(
      filter((event: Event) => (event instanceof NavigationEnd)),
      map((event: NavigationEnd) => event.url)
    );

    const infos$ = combineLatest([this.navItems$, currentUrl$]).pipe(
      distinctUntilChanged(),
      map(([n, curr]) => {

        // TODO: due to how Angular Router handles routes, fix paths (add slashes) at navigation.service in order to get rid of this "'/' +" hotfix
        // TODO: get rid of this hotfix within this html as well
        const idx = n.findIndex(({ route }) => ('/' + route) === curr);
        return {
          prev: idx ? n[idx-1] : false,
          next: (idx + 1) < n.length ? n[idx+1] : false,
          curr
        }
      })
    );

    this.prevLink$ = infos$.pipe(pluck('prev'));
    this.nextLink$ = infos$.pipe(pluck('next'));
  }

  public ngOnInit(): void { }
}

export interface Link {
  title: string;
  route: string;
}
