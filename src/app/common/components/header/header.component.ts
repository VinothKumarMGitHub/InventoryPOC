import { Component } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = "" 
  constructor(private router: Router ) {
        
    router.events.subscribe
      ((event)=>{
        if(event instanceof ActivationEnd) {
          console.log(event.snapshot.data["title"]);
          this.title =  event.snapshot.data["title"]; 
        }
    });

  }
}
