import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  public isVisited1: boolean;
  public isVisited2: boolean;
  public isVisited3: boolean;
  cardList: {id: number, name: string, image: string, likes: number, comments: number,isLiked: boolean, isFollowed: boolean}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cardList = JSON.parse(localStorage.getItem('cardList')  || '{}')
  }

  onFollow(id: number)  {
    this.cardList = this.cardList.map(obj => {
      if (obj.id === id) {
        return {...obj, isFollowed: obj.isFollowed ? false : true};
      }
      return obj;
    });
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

}
