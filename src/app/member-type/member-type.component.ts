import { Component, OnInit } from '@angular/core';
import { MemTypeCreateComponent } from './mem-type-create/mem-type-create.component';
import { MemTypeUpdateComponent } from './mem-type-update/mem-type-update.component';


@Component({
  selector: 'app-member-type',
  templateUrl: './member-type.component.html',
  styleUrls: ['./member-type.component.css']
})
export class MemberTypeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
