import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-allanswers',
  templateUrl: './allanswers.component.html',
  styleUrls: ['./allanswers.component.css']
})
export class AllanswersComponent implements OnInit {

  @Input() myAnswers;

  item ={likes: 0};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmitLike(num){

    num = num +1;
    this.item.likes = num;
    //this._httpService.updateStars(item,id);
    
  }

}
