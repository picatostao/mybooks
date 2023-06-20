import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books:Book[]
  public buscar:string
  constructor( public bookService:BooksService, private toastrService:ToastrService ){
  this.books=[]
  this.bookService.getAll().subscribe((respuesta:Respuesta)=>{
    
  this.books=respuesta.data
console.log(this.books);
 } )
}


  public borrar(books:Book){
    this.bookService.delete(books.id_book).subscribe(()=>{
      this.books=this.books.filter((book)=>book.id_book!==books.id_book)
        this.toastrService.show("NO! el libro se fue a freir esparragos!","MyBooks",{toastClass:"toastError"}
        );
      })
}
  public find(id_book:HTMLInputElement){
    
    if (id_book){
      let bookId=parseInt(id_book.value)
      this.bookService.getOne(bookId).subscribe((respuesta:Respuesta)=>{
        if(respuesta.data){
          this.books= respuesta.data
          console.log(this.books)
        }else{
          this.toastrService.show("ID no existe.","MyBooks",{toastClass:"toastError"})
          this.bookService.getAll().subscribe((respuesta:Respuesta)=>{
    
            this.books=respuesta.data
            
    })
  }
})
    }else{
      this.toastrService.show("ID no existe. introduce id valida ","MyBooks",{toastClass:"toastError"})
      
  }
}
}































// public find(libro_1:HTMLInputElement){
//   this.bookService.getOne(parseInt(libro_1.value)).subscribe((book:Book)=>{ 
//   if (book){
//     this.books=[book]
//   }else{
    // this.toastrService.show("ID no existe.","MyBooks",{toastClass:"toastError"})
    // this.bookService.getAll().subscribe((data:object)=>{ 
    //   this.books=data as Book[]