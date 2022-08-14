import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member, MemberType } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';
import { MemberTypeService } from 'src/app/service/membertype.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  member: Member =  {gender: undefined};
  memberTypes: MemberType[] = [];
  selectedMemberType: string = 'null';

  constructor(private memberService: MemberService,
              private router: Router,
              private memberTypeService: MemberTypeService) {    
   }

  ngOnInit(): void {
    this.memberTypeService.getList(0).subscribe({
      next: (data) => {
        this.memberTypes = data.content;
      },
      error: err => console.log(err)
    });
  }

  private saveMember(member: Member)
  {
    member.memberType = JSON.parse(this.selectedMemberType);
    console.log(member);
    this.memberService.create(member).subscribe(
      {
        next: (data) => {
          // console.log(data);  
          this.goBack();
        },
        error: err => console.log(err)
      }
    );
  }
  
  onSubmit(): void {
    this.saveMember(this.member);
  }

  goBack()
  {
    this.router.navigate(['/member'], {queryParams: {page: MemberService.pageNumber}});
  }

  stringify(obj: Object): string {
    return JSON.stringify(obj);
  }
}
