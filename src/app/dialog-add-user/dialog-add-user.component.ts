import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import { UserService } from '../firebase-services/user.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  firstName = '';
  lastName = '';
  birthDate: Date = new Date();
  street = '';
  city = '';
  zipCode = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser() {
    let user: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate.getTime().toString(),
      street: this.street,
      city: this.city,
      zipCode: this.zipCode,
    };
    this.userService.saveUser(user);
  }
}
