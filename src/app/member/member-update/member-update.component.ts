import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  member: Member =  {gender: undefined};
  constructor(private memberService: MemberService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.memberService.getMemberById(id).subscribe({
      next: (data) => { 
        this.member = data;
      },
      error: err => console.log(err)
    });
  }

  private saveMember(member: Member)
  {
    this.memberService.updateMember(member).subscribe(
      {
        next: (data) => { 
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
