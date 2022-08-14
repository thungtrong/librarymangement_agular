import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {

  member: Member =  {gender: undefined};
  constructor(private memberService: MemberService,
              private router: Router,
              private activatedRoute: ActivatedRoute
    ) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.memberService.getById(id).subscribe({
      next: (data) => { 
        this.member = data;
      },
      error: err => console.log(err)
    });
  }

  goBack()
  {
    this.router.navigate(['/member'], {queryParams: {page: MemberService.pageNumber}});
  }
}
