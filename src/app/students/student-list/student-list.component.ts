import { Component } from '@angular/core';
import { student } from './student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  stud: student[] = [
    { id:1, name: 'Monika', age:20, grade : 'A'},
    {id:2, name: 'Sowmiya', age:40, grade : 'B'},
    {id:3, name: 'Samarth', age:30 ,grade : 'A+'}
  ]
}
