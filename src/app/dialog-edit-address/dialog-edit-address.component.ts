import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  ngOnInit(): void {}

  saveUser() {}
}
