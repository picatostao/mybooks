import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{
  @Input() bookCard:Book;
  @Input() espar:boolean;
  @Input() libro:any;
  @Output() borrar_=new EventEmitter<Book> ();
  constructor(){}
  
  ngOnInit():void{}
  public borrar(){
    this.borrar_.emit(this.bookCard);
  }
}

