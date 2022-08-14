import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member, MemberType } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';
import { MemberTypeService } from 'src/app/service/membertype.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  member: Member =  {gender: undefined};
  memberTypes: MemberType[] = [];
  selectedMemberType: string = 'null';

  constructor(private memberService: MemberService,
              private memberTypeService: MemberTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.memberTypeService.getList(0).subscribe({
      next: (data) => { 
        this.memberTypes = data.content;
      },
      error: err => console.log(err)
    });
    this.memberService.getById(id).subscribe({
      next: (data) => { 
        this.member = data;
        this.selectedMemberType = JSON.stringify(data.memberType);
      },
      error: err => console.log(err)
    });


  }

  private saveMember(member: Member)
  {
    member.memberType = JSON.parse(this.selectedMemberType);
    this.memberService.update(member).subscribe(
      {
        next: (data) => { 
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
