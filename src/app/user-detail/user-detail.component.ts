import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
} from '@angular/fire/firestore';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditInfoComponent } from '../dialog-edit-info/dialog-edit-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: any;

  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || '';
      console.log(this.userId);
      this.getUserDataFromId();
    });
  }

  getUserDataFromId() {
    onSnapshot(
      doc(this.firestore, 'user', this.userId),
      (docSnap: DocumentSnapshot<any>) => {
        this.user = docSnap.data();
        console.log(this.user);
      }
    );
  }

  editAddress() {
    // const dialog = this.dialog.open(DialogEditAddressComponent);
    // dialog.componentInstance.user = this.user;
  }

  editInfo() {
    // const dialog = this.dialog.open(DialogEditInfoComponent);
    // dialog.componentInstance.user = this.user;
  }
}
