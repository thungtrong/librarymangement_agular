import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberType } from 'src/app/model/models';
import { MemberTypeService } from 'src/app/sevice/membertype.service';

@Component({
  selector: 'app-mem-type-view',
  templateUrl: './mem-type-view.component.html',
  styleUrls: ['./mem-type-view.component.css']
})
export class MemTypeViewComponent implements OnInit {

  memberType: MemberType =  {};
  constructor(private memberTypeService: MemberTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {    
   }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.memberTypeService.getMemberTypeById(id).subscribe({
      next: (data) => {
        this.memberType = data;
      },
      error: err => console.log(err)
    });
  }

  private goToMemberTypeList()
  {
    this.router.navigate(['/member-type']);
  }
  
  goBack()
  {
    this.goToMemberTypeList();
  }
}
