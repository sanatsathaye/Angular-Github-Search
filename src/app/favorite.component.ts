import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
 
  styles:[
    `
    .glyphicon{
      color:yellow;
  }

  span{
    background:black;
}
    `
  ],
  styleUrls: ['./favorite.component.css'],
 
})
export class FavoriteComponent  {
  @Input() isFavorite: boolean;
  @Output()  change = new EventEmitter();

  


  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite,});
  }
}

export interface FavoriteChangedEventArgs{
  newValue : boolean;
}
