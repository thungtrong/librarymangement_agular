import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberType } from 'src/app/model/models';
import { MemberTypeService } from 'src/app/service/membertype.service';

@Component({
  selector: 'app-mem-type-update',
  templateUrl: './mem-type-update.component.html',
  styleUrls: ['./mem-type-update.component.css']
})
export class MemTypeUpdateComponent implements OnInit {
  memberType: MemberType = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberTypeService: MemberTypeService
    ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.memberTypeService.getById(id).subscribe({
      next: (data) => {
        this.memberType = data;
      },
      error: err => console.log(err)
    });
  }

  onSubmit()
  {
    this.memberTypeService.update(this.memberType).subscribe({
      next: (data) => {
        this.router.navigate(['/member-type']);
      },
      error: (err) => console.log(err)
    })
  }

  goBack()
  {
    this.router.navigate(['/member-type']);
  }
}
