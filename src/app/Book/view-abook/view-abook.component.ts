import { Component, OnInit } from '@angular/core';
import { IBook } from '../Book.module';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-abook',
  templateUrl: './view-abook.component.html',
  styleUrls: ['./view-abook.component.css']
})
export class ViewABookComponent implements OnInit{
 fetchedBook:IBook={
  bookId:0,    
  title:'',
  author: '',    
  genre:'',   
  iSBN:'',     
  yearPulished:0,   
  available:true
 }

 constructor(private bookService:BookService,
  private activatedRoute:ActivatedRoute,
  private router:Router){}


  ngOnInit(): void {
    let bookId=this.activatedRoute.snapshot.paramMap.get('bookid');
    if(bookId!=null){
      this.bookService.getABook(+bookId).subscribe({
        next:(response)=>{
          this.fetchedBook=response},
        error:(err)=>console.log(err)
        
      })
    }
  }
  
             back(){
              this.router.navigate(['book-list']);
             }            
}
