import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CommunicateService } from '../communicate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  users = null;
  //starId = 0;
  allThoughts = [];
  allAnswers = [];
  oneThought = [];
  //oneStar = [];
//  allNotes = [];
  constructor(private _httpService: HttpService, private _communicateService: CommunicateService) {
    _communicateService.observedUsers.subscribe(
      (updatedUsers) => {  this.users = updatedUsers; },
      (err) => { console.log('error')},
      () => { }
    )}

  setAnswers(theId) {
    //this.starId = theId;
    this._httpService.oneAnswer(theId)
    .then( data => { this.oneThought = data;
     console.log('one item');
      console.log(data);

      this.allAnswers = this.oneThought[0].answers;
    })

    .catch( err => { console.log(err); })
  }

  ngOnInit() {

      this._httpService.allThoughts()
      .then( data => { this.allThoughts = data;
        console.log('all items');
        console.log(data) })
     .catch( err => { console.log(err); })

  }

}
