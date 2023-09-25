import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import { UserService } from '../firebase-services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  birthDate: Date = new Date();
  street = '';
  city = '';
  zipCode = 0;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    let user: User = {
      userId: '',
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate.getTime().toString(),
      street: this.street,
      city: this.city,
      zipCode: this.zipCode,
    };
    this.userService.saveUser(user);
    this.loading = true;
    setInterval(() => {
      this.dialogRef.close();
    }, 1000);
  }
}
