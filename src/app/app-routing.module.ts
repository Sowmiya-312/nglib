import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { BookComponent } from './Book/book/book.component';
import { ViewABookComponent } from './Book/view-abook/view-abook.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { AddbookComponent } from './Book/addbook/addbook.component';

const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'book-list',component:BookComponent},
  {path:'view-abook/:bookId',component:ViewABookComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
 // {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
