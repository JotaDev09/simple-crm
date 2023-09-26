import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-info',
  templateUrl: './dialog-edit-info.component.html',
  styleUrls: ['./dialog-edit-info.component.scss'],
})
export class DialogEditInfoComponent implements OnInit {
  user: any;
  loading = false;
  birthDate: Date = new Date();

  constructor(public dialogRef: MatDialogRef<DialogEditInfoComponent>) {}

  ngOnInit(): void {}

  saveUser() {}
}
