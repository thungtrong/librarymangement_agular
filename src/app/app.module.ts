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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
