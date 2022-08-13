import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberType } from 'src/app/model/models';
import { MemberTypeService } from 'src/app/service/membertype.service';

@Component({
  selector: 'app-mem-type-create',
  templateUrl: './mem-type-create.component.html',
  styleUrls: ['./mem-type-create.component.css']
})
export class MemTypeCreateComponent implements OnInit {
  memberType: MemberType =  {};
  constructor(private memberTypeService: MemberTypeService,
              private router: Router) {    
   }

  ngOnInit(): void {
  }

  private saveMemberType(memberType: MemberType)
  {
    this.memberTypeService.createMemberType(memberType).subscribe(
      {
        next: (data) => {
          console.log(data);  
          this.goToMemberTypeList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToMemberTypeList()
  {
    this.router.navigate(['/member-type']);
  }

  onSubmit(): void {
    this.saveMemberType(this.memberType);
  }

  
  goBack()
  {
    this.router.navigate(['/member-type']);
  }

}
