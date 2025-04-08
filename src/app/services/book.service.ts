import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../Book/Book.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private Http: HttpClient) { }

  private url:string='https://localhost:7061/api/Books';

  addBook(bookinfo:IBook):Observable<IBook>{
    return this.Http.post<IBook>(this.url,bookinfo);
  }

  getBooks():Observable<IBook[]>{
    return this.Http.get<IBook[]>(this.url);
  }


  getABook(bookid:number):Observable<IBook>{
    return this.Http.get<IBook>(this.url+ '/'+bookid);
  }

  DeleteBook(bookid:number):Observable<void>{
    return this.Http.delete<void>(this.url+ '/'+bookid);
  }
}
