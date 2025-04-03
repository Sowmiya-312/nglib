import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { IBook } from '../Book.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
   public books:IBook[]=[];

   
   constructor(private bookService:BookService){}

   ngOnInit(): void {
     this.loaddata();   
}

loaddata(){
  this.bookService.getBooks().subscribe({
    next:(data)=>{
   this.books=data;
  // console.log(data);

 },
 error:(err)=>{
   console.log(err);
 }

})
}

viewBook(bookId:number){}


deleteBook(bookid:number){
this.bookService.DeleteBook(bookid).subscribe({
  next:(response)=>{
     this.loaddata();
  },
  error:(err)=>{
    console.log(err);
  }
})
}
}