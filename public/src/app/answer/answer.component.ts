import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicateService } from '../communicate.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  users = null;

  item ={author: '', answer:'', details:''};

  id;

  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _communicateService: CommunicateService) {
    this._route.params.subscribe((param)=>{
      this.id = param.id;
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
    })

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
    this._httpService.createAnswer(this.item, this.id);

  }

}
