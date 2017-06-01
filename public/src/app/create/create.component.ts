import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicateService } from '../communicate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {

  users = null;

  item ={author: '', thought:'', discription:''};

  constructor(private _httpService: HttpService, private _communicateService: CommunicateService) {
    _communicateService.observedUsers.subscribe(
      (updatedUsers) => {  this.users = updatedUsers; },
      (err) => { console.log('error')},
      () => { }
    )
  }

  ngOnInit() {
  }

  onSubmit(){

    this.item.author = this.users.yourName;
    console.log(this.item);
    this._httpService.createThought(this.item);

  }

  clearForm() {
    this.item = {author: '', thought:'', discription:''};
    return true;
  }


}
