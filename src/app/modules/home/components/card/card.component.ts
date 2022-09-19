import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input('filter') filter: string;
  cardList: {id: number, name: string, image: string, likes: number, comments: number,isLiked: boolean, isFollowed: boolean}[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.filter == 'following') {
      this.showFollowing();
    }
    else if(this.filter == 'all') {
      this.getAll();
    }
  }

  ngOnInit(): void {
    if(Number(localStorage.getItem('cardList')?.length) >  0) {
      this.cardList = JSON.parse(localStorage.getItem('cardList')  || '{}')
    } else {
      this.getcardList();
      localStorage.setItem('cardList', JSON.stringify(this.cardList));
    }
  }

  getcardList() {
    this.cardList.push({id: 1, name: 'Jan Cled', image: '../../../../../assets/images/users/user-7.jpg', likes: 2, comments: 5,isLiked: true, isFollowed: false});
    this.cardList.push({id: 2, name: 'Jan Cled', image: '../../../../../assets/images/users/user-7.jpg', likes: 2, comments: 5, isLiked: true, isFollowed: false});
  }

  onLike(id: number) {
    this.cardList = this.cardList.map(obj => {
      if (obj.id === id) {
        return {...obj, isLiked: obj.isLiked ? false : true};
      }
      return obj;
    });
    localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

  showFollowing() {
    this.cardList = JSON.parse(localStorage.getItem('cardList')  || '{}')
    console.log(this.cardList)
    this.cardList = this.cardList.filter(x => x.isFollowed == true);
    // localStorage.setItem('cardList', JSON.stringify(this.cardList));
  }

  getAll() {
    this.cardList = JSON.parse(localStorage.getItem('cardList')  || '{}')
  }
}
