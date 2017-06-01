import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import "rxjs/Rx"

@Injectable()
export class HttpService {


  constructor(private _http: Http,private _router:Router) { }


  createThought(newItem){
    console.log('create Thought');
    console.log(newItem);
    this._http.post('/createItem',newItem).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  editStar(star,id){
    console.log('update Star')
    this._http.post('/editItem/'+id,star).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  createAnswer(answer,id){
    console.log('create answer')
    this._http.post('/addAnswer/'+id,answer).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  updateStars(answer,id){
    console.log('update Star')
    this._http.post('/editItem/'+id,answer).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
    this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

 }

  getStar(id){
    console.log("id",id)//id is a string
    return this._http.get('/getItem/'+id).map(data=>data.json()).toPromise()

  }

  //one item with populate
  oneAnswer(id) {
      return this._http.get('/oneItem/'+id).map(data=>data.json()).toPromise()

  }

  //all items with populate
  allThoughts() {

    return this._http.get('/allItems').map(data=>data.json()).toPromise()


  }


}
