import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books:Book[]
  constructor( public bookService:BooksService){
  this.books=this.bookService.getAll()
}
  public borrar(books:Book){
    let libros=this.bookService.delete(books.id_book)
    if (libros){
      this.books=this.bookService.getAll()
      alert("NO! el libro se fue a freir esparragos!")
    }
}
  public find(libro_1:string){
    let find1=this.bookService.getOne(parseInt(libro_1))
    if (find1){
      this.books=[find1]
    }else{
      this.books=this.bookService.getAll()
      alert("ID no existe.")
    }
    
    
      
  }
}
