import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { FormsModule } from '@angular/forms';
import { IBook } from '../Book.module';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  constructor(private bookservice:BookService, private router: Router) {}
  back(){
    this.router.navigate(['available-book'])
   }
 
addBook(form: any) { 
  let book:IBook={
    bookId:form.value.bookId,    
    title:form.value.title,
    author:form.value.author,    
    genre:form.value.genre,   
    iSBN:form.value.iSBN,     
    yearPulished:form.value.yearPulished,   
    available:form.value.available
  }
  const bookData = form.value;
  this.bookservice.addBook(book).subscribe({
    next: (response) => {
      console.log('Book added successfully:', response);
      this.router.navigate(['book-list'])
      //form.reset(); // Reset the form after successful submission
    },
    error: (error) => {
      console.error('Error adding book:', error,bookData);
  }
 
  });
}
}
