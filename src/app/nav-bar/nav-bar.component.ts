import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterModule, RouterOutlet, NgClass],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  navBarOpen = false;

  toggleNavBar(){
    this.navBarOpen = !this.navBarOpen;
  }
}
