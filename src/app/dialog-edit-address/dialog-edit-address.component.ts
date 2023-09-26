import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../firebase-services/user.service';
import { addDoc } from '@firebase/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
  providers: [UserService],
})
export class DialogEditAddressComponent implements OnInit {
  loading = false;
  userId: string = '';
  user: any;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.userService.updateUser(this.user);

    this.loading = true;
    setInterval(() => {
      this.dialogRef.close();
    }, 1000);
  }
}
