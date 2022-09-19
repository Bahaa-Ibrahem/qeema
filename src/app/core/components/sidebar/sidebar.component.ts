import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  selectedIndex: number;
  
  navItems: { class: string, name: string} [] = [
    { class: 'fa-solid fa-house', name: 'Home'},
    { class: 'fa-solid fa-comment-dots', name: 'Messages'},
    { class: 'fa-solid fa-user', name: 'Profile'},
    { class: 'fa-solid fa-bookmark', name: 'Saved Post'},
    { class: 'fa-sharp fa-solid fa-gear', name: 'Settinges'}
  ]

  constructor() {
    this.selectedIndex = Number(localStorage.getItem('selectedIndex'));
   }

  ngOnInit(): void { }
  
  setIndex(index: number) {
    this.selectedIndex = index;
    localStorage.setItem('selectedIndex', String(index));
  }

}
