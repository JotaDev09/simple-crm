import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/interfaces/user.interface';
import { UserService } from '../firebase-services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [];
  @Input() user!: User;

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {}

  getListUsers(): User[] {
    return this.userService.user;
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {});
  }
}
