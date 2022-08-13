import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemTypeCreateComponent } from './member-type/mem-type-create/mem-type-create.component';
import { MemTypeListComponent } from './member-type/mem-type-list/mem-type-list.component';
import { MemTypeUpdateComponent } from './member-type/mem-type-update/mem-type-update.component';
import { MemTypeViewComponent } from './member-type/mem-type-view/mem-type-view.component';
import { MemberTypeComponent } from './member-type/member-type.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {path: '', component: RootComponent,
  children: [
    {path: 'member-type', component: MemberTypeComponent, title: "Loại Thành Viên",
    children: [
      {path: 'list', component: MemTypeListComponent},
      {path: 'create', component: MemTypeCreateComponent},
      {path: 'update/:id', component: MemTypeUpdateComponent},
      {path: 'view/:id', component: MemTypeViewComponent},
      {path: '', component: MemTypeListComponent}
    ]
    }
  ]
  },
  {path: 'login', component: LoginComponent, title: "Login In"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
