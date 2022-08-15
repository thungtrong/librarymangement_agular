import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MemTypeListComponent } from './member-type/mem-type-list/mem-type-list.component';
import { MemberTypeComponent } from './member-type/member-type.component';
import { HttpClientModule } from '@angular/common/http';
import { MemTypeCreateComponent } from './member-type/mem-type-create/mem-type-create.component';
import { MemTypeUpdateComponent } from './member-type/mem-type-update/mem-type-update.component';
import { MemTypeViewComponent } from './member-type/mem-type-view/mem-type-view.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberCreateComponent } from './member/member-create/member-create.component';
import { MemberUpdateComponent } from './member/member-update/member-update.component';
import { MemberViewComponent } from './member/member-view/member-view.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookViewComponent } from './book/book-view/book-view.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LibrarianListComponent } from './librarian/librarian-list/librarian-list.component';
import { LibrarianCreateComponent } from './librarian/librarian-create/librarian-create.component';
import { LibrarianViewComponent } from './librarian/librarian-view/librarian-view.component';
import { LibrarianUpdateComponent } from './librarian/librarian-update/librarian-update.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookIssueListComponent } from './book-issue/book-issue-list/book-issue-list.component';
import { BookIssueCreateComponent } from './book-issue/book-issue-create/book-issue-create.component';
import { BookIssueUpdateComponent } from './book-issue/book-issue-update/book-issue-update.component';
import { BookIssueViewComponent } from './book-issue/book-issue-view/book-issue-view.component';
import { BookPickerComponent } from './book-issue/book-picker/book-picker.component';
import { MemberPickerComponent } from './book-issue/member-picker/member-picker.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    MemTypeListComponent,
    MemberTypeComponent,
    MemTypeCreateComponent,
    MemTypeUpdateComponent,
    MemTypeViewComponent,
    MemberComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
    MemberViewComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryViewComponent,
    BookComponent,
    BookListComponent,
    BookCreateComponent,
    BookViewComponent,
    BookUpdateComponent,
    LibrarianComponent,
    LibrarianListComponent,
    LibrarianCreateComponent,
    LibrarianViewComponent,
    LibrarianUpdateComponent,
    BookIssueComponent,
    BookIssueListComponent,
    BookIssueCreateComponent,
    BookIssueUpdateComponent,
    BookIssueViewComponent,
    BookPickerComponent,
    MemberPickerComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
