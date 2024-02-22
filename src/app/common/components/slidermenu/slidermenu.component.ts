import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-slidermenu',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterModule,MatSidenavModule, MatToolbarModule, 
    MatIconModule,
    MatListModule,
    MatExpansionModule],
  templateUrl: './slidermenu.component.html',
  styleUrl: './slidermenu.component.scss'
})
export class SlidermenuComponent implements OnDestroy {

  
  menu: NavItem [] = [
        {
          displayName: 'Dashboard',
          iconName: 'home',
          route: 'dashboard',
        },        
        {
          displayName: 'Materials Received',
          iconName: 'inventory2',
          route: 'materialsreceived',
        },
        {
          displayName: 'Materials Issued',
          iconName: 'inventory2',
          route: 'materialsissued',
        },
        {
          displayName: 'Suppliers',
          iconName: 'people-carry',   
          route: 'suppliers',       
        }      
      ];
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    //.mobileQuery.removeEventListener(this._mobileQueryListener);
  }

  shouldRun = true;

}
