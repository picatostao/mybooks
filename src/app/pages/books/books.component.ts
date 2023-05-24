import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/models/book';
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
public nuevoslibros(idBookin:HTMLInputElement,idUserin:HTMLInputElement,titlein:HTMLInputElement,typein:HTMLInputElement,authorin:HTMLInputElement,pricein:HTMLInputElement,photoin:HTMLInputElement){
   let idB = idBookin
   let idU= idUserin
   let titin=titlein
   let typin=typein
   let autin=authorin
   let pricin=pricein
   let photin=photoin

   let newBook : Book ={
      id_book : parseInt(idB.value),
      id_user : parseInt(idU.value),
      title : titin.value,
      type: typin.value,
      author: autin.value,
      price: parseInt(pricin.value),
      photo:photin.value
   }
   this.books.push(newBook)
  }

}
