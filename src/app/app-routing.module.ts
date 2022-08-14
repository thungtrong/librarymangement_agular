import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookUpdateComponent } from './book/book-update/book-update.component';
import { BookViewComponent } from './book/book-view/book-view.component';
import { BookComponent } from './book/book.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { MemTypeCreateComponent } from './member-type/mem-type-create/mem-type-create.component';
import { MemTypeListComponent } from './member-type/mem-type-list/mem-type-list.component';
import { MemTypeUpdateComponent } from './member-type/mem-type-update/mem-type-update.component';
import { MemTypeViewComponent } from './member-type/mem-type-view/mem-type-view.component';
import { MemberTypeComponent } from './member-type/member-type.component';
import { MemberCreateComponent } from './member/member-create/member-create.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberUpdateComponent } from './member/member-update/member-update.component';
import { MemberViewComponent } from './member/member-view/member-view.component';
import { MemberComponent } from './member/member.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {path: '', component: RootComponent,
    children: [
      {
        path: 'member-type', component: MemberTypeComponent, title: "Loại Thành Viên",
        children: [
          {path: 'list', component: MemTypeListComponent},
          {path: 'create', component: MemTypeCreateComponent},
          {path: 'update/:id', component: MemTypeUpdateComponent},
          {path: 'view/:id', component: MemTypeViewComponent},
          {path: '', component: MemTypeListComponent}
        ]
      },
      {
        path: 'member', component: MemberComponent, title: "Thành Viên",
        children: [
          {path: 'list', component: MemberListComponent},
          {path: 'create', component: MemberCreateComponent},
          {path: 'update/:id', component: MemberUpdateComponent},
          {path: 'view/:id', component: MemberViewComponent},
          {path: '', component: MemberListComponent}
        ]
      },
      {
        path: 'category', component: CategoryComponent, title: "Thể Loại Sách",
        children: [
          {path: 'list', component: CategoryListComponent},
          {path: 'create', component: CategoryCreateComponent},
          {path: 'update/:id', component: CategoryUpdateComponent},
          {path: 'view/:id', component: CategoryViewComponent},
          {path: '', component: CategoryListComponent}
        ]
      },
      {
        path: 'book', component: BookComponent, title: "Sách",
        children: [
          {path: 'list', component: BookListComponent},
          {path: 'create', component: BookCreateComponent},
          {path: 'update/:id', component: BookUpdateComponent},
          {path: 'view/:id', component: BookViewComponent},
          {path: '', component: BookListComponent}
        ]
      },
    ]
  },
  {path: 'login', component: LoginComponent, title: "Login In"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
