import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';
import { BookCardComponent } from 'src/app/component/book-card/book-card.component';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
public books:Book[]
constructor(){
  this.books=[
    new Book(0,0,"titulo","tipo","autor",10,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
    new Book(1,1,"titulo1","tipo1","autor1",11,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
    new Book(2,2,"titulo2","tipo2","autor2",12,"https://upload.wikimedia.org/wikipedia/en/d/da/Sin_City_Hard_Goodbye.jpg"),
  ]
  
}
public nuevoslibros(){
  }
  newBook(newID: number,
          newIDUser: number,
          newTitle: string,
          newType: string,
          newAuthor: string,
          newPrice: number,
          newPhoto: string){
    let nuevo: Book = new Book(newID,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto)
    this.books.push(nuevo)

  }
  public borrar(books:Book){
    let x = this.books.filter(v=> v.id_book != books.id_book)
    this.books=x
  }
}
