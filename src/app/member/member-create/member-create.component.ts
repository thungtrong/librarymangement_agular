import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {

  member: Member =  {gender: undefined};
  constructor(private memberService: MemberService,
              private router: Router) {    
   }

  ngOnInit(): void {
  }

  private saveMember(member: Member)
  {
    console.log(member);
    this.memberService.createMember(member).subscribe(
      {
        next: (data) => {
          console.log(data);  
          this.goToMemberList();
        },
        error: err => console.log(err)
      }
    );
  }

  private goToMemberList()
  {
    this.router.navigate(['/member']);
  }

  onSubmit(): void {
    this.saveMember(this.member);
  }

  
  goBack()
  {
    this.router.navigate(['/member']);
  }
}
