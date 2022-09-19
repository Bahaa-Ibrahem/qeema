import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filterName: string;

  constructor() { }

  ngOnInit(): void {

  }

  filterFollow() {
    this.filterName = 'following';
  }

  getAll() {
    this.filterName = 'all';
  }


}
