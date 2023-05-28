import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { BooksComponent } from '../pages/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  public book_:Book[];
  
  constructor() 
  { 
    this.book_=[
      new Book(117,117,"hola","tipo","autor",10,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
      new Book(118,118,"titulo1","tipo1","autor1",11,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
      new Book(119,119,"titulo2","tipo2","autor2",12,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
    ] 
  }
  public getAll():Book[]{
    return this.book_;
  }
  public getOne(id_book:number):Book{
    return this.book_.find(libro=>libro.id_book == id_book);
  }
  public add(book:Book):void{
    this.book_.push(book);
  }
  public edit(book:Book):boolean{
    let update=this.book_.findIndex(x=> x.id_book == book.id_book);
    if(update!== -1){
      this.book_[update]={...book};
      return true;
    }
    return false;
  }
  public delete(id_book:number):boolean{
   this.book_=this.book_.filter(book1 => book1.id_book !== id_book);
   return true;
  }
}
