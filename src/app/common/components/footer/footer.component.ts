import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion'
import { CommonModule } from '@angular/common';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterComponent,RouterModule,MatSidenavModule, MatToolbarModule, 
    MatIconModule,
    MatListModule,
    MatExpansionModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnDestroy{

    
  menu: NavItem [] = [
    {
      displayName: 'Settings',
      iconName: 'settings',
      route: 'settings', 
    },
    {
      displayName: 'Sign Out',
      iconName: 'logout',   
      route: 'signoff',       
    }
  ];
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  }

  ngOnDestroy(): void {
    //.mobileQuery.removeEventListener(this._mobileQueryListener);
  }

}
