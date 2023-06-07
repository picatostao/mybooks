import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  public getAll():Observable<object>{
    return this.http.get<Book[]>(this.url)
  }
  public getOne(id_book:number):Observable<object>{
    return this.http.get(this.url+"/"+id_book)
    // return this.http.get(libro=>libro.id_book == id_book);
  }
  public add(book:Book): Observable<object> {
    return this.http.post(this.url,book)
  }
  public edit(book:Book):Observable<object>{
    return this.http.put(this.url,book)
  }

    // let update=this.book_.findIndex(x=> x.id_book == book.id_book);
    // if(update!== -1){
    //   this.book_[update]={...book};
    //   return true;
    // }

  
  public delete(id_book:number):Observable<object>{
    return this.http.delete<object>(this.url+"/"+id_book )
  //  this.book_=this.book_.filter(book1 => book1.id_book !== id_book);
  //  return true;
  }
}


