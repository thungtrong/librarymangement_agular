import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member, Page } from 'src/app/model/models';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-picker',
  templateUrl: './member-picker.component.html',
  styleUrls: ['./member-picker.component.css']
})
export class MemberPickerComponent implements OnInit {

  tableHeaders: string[] = ['Họ', 'Tên', 'Số điện thoại', 'Ngày sinh'];
  members: Member[] = [];
  @Output() selectEvent = new EventEmitter();

  constructor(
    private memberService: MemberService,
    ) { 
  }

  ngOnInit(): void {
  }


  toggleDialog()
  {
    let dialog = document.getElementById('dialog-member-picker');
    dialog?.classList.toggle('d-none');
  }

  chooseMember(member: Member)
  {
    this.selectEvent.emit(member);
    this.toggleDialog();
  }

  search(lastname: string, firstname: string)
  {
    if (lastname === "" && firstname === "")
    {
      alert("Hãy nhập một trong hai");
    }
    this.memberService.findByName(lastname, firstname).subscribe({
      next: (data) => {
        this.members = data;
        console.log(this.members);
      },
      error: (error) => console.log(error)
    });
  }
}
