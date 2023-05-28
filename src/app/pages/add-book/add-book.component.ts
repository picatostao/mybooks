import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  
    constructor(public booksService:BooksService,  public router:Router){
      }
        newBook(newID: number,
                newIDUser: number,
                newTitle: string,
                newType: string,
                newAuthor: string,
                newPrice: number,
                newPhoto: string){
          let nuevo: Book = new Book(newID,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto)
          this.booksService.add(nuevo)
          alert("Libro añadido");
          this.router.navigateByUrl("/books");

}
        }
        

