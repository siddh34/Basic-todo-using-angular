import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string;

  onSelectedUser(id: string) {
    this.selectedId = id;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedId)!;
  }
}
