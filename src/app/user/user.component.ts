import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // signal to hold the currently selected user
  // if we use signal here, the template will automatically update when the user changes
  selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  // we can ues computed instead of getter to make sure that the value is cached and only recalculated when the dependencies(signal) change
  // get imgPath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  imgPathComputed = computed( () => 'assets/users/' + this.selectedUser().avatar );
  setActiveUser() {
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    /// if we use signal we have to use set() to update the value
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
    setTimeout( ()=> {
      this.selectedUser.set(DUMMY_USERS[0]);
    }, 2000);
  }
}
