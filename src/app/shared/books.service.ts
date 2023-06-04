import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';
import { BooksComponent } from '../pages/books/books.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  public book_:Book[];
  private url:string='http://localhost:3000/books'
  constructor(private http:HttpClient) 
  { 
    // this.book_=[
    //   new Book(117,117,"Sin noticias de Gurb","De bolsillo","Eduardo Mendoza",12,"https://i.pinimg.com/originals/af/3e/83/af3e832a5b849f48a9839a044f9ced7b.jpg"),
    //   new Book(118,118,"La inteligencia fracasada","De bolsillo","Jose Antonio Marina",10,"https://www.anagrama-ed.es/uploads/media/portadas/0001/13/ecb806fef2126f22ccb414df909745c3580f084b.jpeg"),
    //   new Book(119,119,"El capitán Alatriste","Tapa dura","Arturo Perez Reverte",15,"https://www.perezreverte.com/upload/fotos/libros/201002/alatristeanotado_med.jpg"),
    // ] 
  }
  public getAll():Observable<Respuesta>{
    return this.http.get<Respuesta>(this.url)
  }
  public getOne(id_book:number):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.url+"/"+id_book)
    // return this.http.get(libro=>libro.id_book == id_book);
  }
  public add(book:Book): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.url,+book)
  }
  public edit(book:Book):Observable<Respuesta>{
    return this.http.put<Respuesta>(this.url,book)

    // let update=this.book_.findIndex(x=> x.id_book == book.id_book);
    // if(update!== -1){
    //   this.book_[update]={...book};
    //   return true;
    // }

  }
  public delete(id_book:number):Observable<Respuesta>{
    return this.http.delete<Respuesta>(this.url+"?id_book="+id_book )
  //  this.book_=this.book_.filter(book1 => book1.id_book !== id_book);
  //  return true;
  }
}


