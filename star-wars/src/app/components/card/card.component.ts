import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
    @Input()
    category!:String;
    @Input()
    linkTo!: String;
    @Input()
    starWarsApi!: String;
   
    ngOnInit() : void {}
}
