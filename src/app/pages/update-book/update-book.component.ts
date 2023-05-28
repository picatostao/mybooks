import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

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
  constructor(public bookservice:BooksService, public router:Router){

  }
  search(id:number):void{
    this.findBook=this.bookservice.getOne(id);
    if(this.findBook){
      this.updatedbook={...this.findBook};
      alert ("Listo para modificar.");
    }else{
      this.books=this.bookservice.getAll();
      alert ("Id incorrecta.");
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
    alert("Libro modificado");
    this.router.navigateByUrl("/books");
  }else{
    alert("imposible modificar el libro");
  }
 }
}
