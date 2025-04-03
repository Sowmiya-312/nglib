import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../students/student-list/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  private url:string='https://localhost:7061/api/Books';

   
}
