import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent  implements OnInit {
  ngOnInit(): void {
  }

  public books:Book[];
  public findBook:Book;
  public updatedbook:Book;
  constructor(public bookservice:BooksService, public router:Router, private toastrService:ToastrService){

  }
  search(id:number):void{
    this.findBook=this.bookservice.getOne(id);
    if(this.findBook){
      this.updatedbook={...this.findBook};
      this.toastrService.show("Listo para modificar","MyBooks",{toastClass:"toast1"});
    }else{
      this.books=this.bookservice.getAll();
      this.toastrService.show("ID no encontrada","MyBooks",{toastClass:"toastError"});
    }
  }
  updateBook(titleMod: string, typeMod: string, authorMod: string, priceMod: number, imageMod: string, idMod: number){
  this.updatedbook.title = titleMod;
  this.updatedbook.type = typeMod;
  this.updatedbook.author = authorMod;
  this.updatedbook.price = priceMod;
  this.updatedbook.photo = imageMod;
  this.updatedbook.id_book = idMod;
  if(this.bookservice.edit(this.updatedbook)){
    this.books = this.bookservice.getAll();
    // alert("Libro modificado");
    this.toastrService.show("Libro modificado","MyBooks",{toastClass:"toast1"});
    this.router.navigateByUrl("/books");
  }else{
    this.toastrService.show("imposible modificar el libro","MyBooks",{toastClass:"toastError"});
  }
 }
}
