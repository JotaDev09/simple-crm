import { Injectable, inject } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User[] = [];

  unsubUsers;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.unsubUsers = this.subUsersList();
  }

  async saveUser(item: User) {
    await addDoc(this.getUserRef(), item)
      .catch((err) => {
        console.error(err);
      })
      .then((docRef) => {
        console.log(docRef);
      });
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  subUsersList() {
    return onSnapshot(this.getUserRef(), (list) => {
      this.user = [];
      list.forEach((item) => {
        console.log(this.setUserObject(item.data(), item.id));
        this.user.push(this.setUserObject(item.data(), item.id));
      });
    });
  }

  usersList() {
    return onSnapshot(this.getUserRef(), (list) => {
      list.forEach((item) => {
        console.log(item);
      });
    });
  }

  getUserRef() {
    return collection(this.firestore, 'user');
  }

  getsingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, 'user', colId), docId);
  }

  setUserObject(obj: any, id: string): User {
    return {
      firstName: obj.firstName || 'firstName',
      lastName: obj.lastName || 'lastName',
      birthDate: obj.birthDate || 'birthDate',
      street: obj.street || 'street',
      zipCode: obj.zipCode || 'zipCode',
      city: obj.city || 'city',
    };
  }
}
