import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from 'src/app/data/nav-data';
import { INavbarData, fadeInOut } from 'src/app/models/helper';
import { SideNavToggle } from 'src/app/models/side-nav-toggle';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate(
          '350ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(180deg)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData = navbarData;
  multiple = false;
  active = "";

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
    }
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItem(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {

    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItem(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
