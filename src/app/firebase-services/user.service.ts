import { Injectable, inject } from '@angular/core';
import { User } from 'src/interfaces/user.interface';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
} from '@angular/fire/firestore';

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

  async updateUser(item: User) {
    if (item.userId) {
      await updateDoc(
        this.getsingleDocRef('user', item.userId),
        this.getCleanJson(item)
      )
        .catch((err) => {
          console.error(err);
        })
        .then((docRef) => {
          console.log(docRef);
        });
    } else {
      console.error('No user id');
    }
  }

  getCleanJson(item: User) {
    return {
      id: item.userId,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      birthDate: item.birthDate,
      street: item.street,
      zipCode: item.zipCode,
      city: item.city,
    };
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
      userId: id,
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || '',
    };
  }
}
