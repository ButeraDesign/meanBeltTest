import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {

  constructor() { }

  observedUsers = new BehaviorSubject(null);

  updateUsers(users) {
    this.observedUsers.next(users);
  }

}
