import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import "rxjs/Rx"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users = {yourName:''};

  constructor(private _router:Router, private _communicateService: CommunicateService) {
    _communicateService.updateUsers(this.users)
  }



  updateUsers(){
    this._communicateService.updateUsers(this.users);
  }

  ngOnInit() {
  }

  onSubmit(){

    console.log('LoginComponent');
    this._router.navigate(['/home'])

  }

}
