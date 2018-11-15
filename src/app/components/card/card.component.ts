import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card;

  public favorite: boolean;
  
  toFavorite(){
    this.favorite = !this.favorite;
    const favorites = (
      JSON.parse(
        localStorage.getItem('favorites') || '{}'
      )
    );
    favorites[this.card.id] = this.favorite;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  constructor() {}
  
  ngOnInit() {
    this.favorite = JSON.parse(localStorage.getItem('favorites') || '{}')[this.card.id];
  }

}
