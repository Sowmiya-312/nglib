import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { BookComponent } from './Book/book/book.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AddbookComponent } from './Book/addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    StudentGradeComponent,
    BookComponent,
    HeaderComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
