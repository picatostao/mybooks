import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  
    constructor( public booksService:BooksService,  public router:Router , private toastrService:ToastrService){
      }
        newBook(newID: number,
                newIDUser: number,
                newTitle: string,
                newType: string,
                newAuthor: string,
                newPrice: number,
                newPhoto: string){
          let nuevo: Book = new Book(newID,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto)
          this.booksService.add(nuevo).subscribe((respuesta:Respuesta)=>{ 
            if(!respuesta.error){
              this.toastrService.show("libro añadido.","MyBooks",{toastClass:"toast1"})
              this.router.navigateByUrl("/books");
            }else
            this.toastrService.show("error! libro no añadido.","MyBooks",{toastClass:"toastError"});
          
          })
}
        }
        

