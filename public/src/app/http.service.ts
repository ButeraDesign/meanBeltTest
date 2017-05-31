import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import "rxjs/Rx"

@Injectable()
export class HttpService {


  constructor(private _http: Http,private _router:Router) { }


  createStar(newItem){
    console.log('createStar');
    console.log(newItem);
    this._http.post('/createItem',newItem).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  editStar(star,id){
    console.log('updateStar')
    this._http.post('/editItem/'+id,star).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  createNote(note,starId){
    console.log('create Note')
    this._http.post('/addNote/'+starId,note).map(data=>data.json()).toPromise()
    .then((data) =>{
      console.log('IN Redir to dashboard');
      this._router.navigate(['/dashboard'])

    })
    .catch( err => { console.log(err); })

  }

  updateStar(star,id){
    console.log('updateStar')
    this._http.post('/editItem/'+id,star).map(data=>data.json()).toPromise()
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

  oneStar(id) {
      return this._http.get('/oneItem/'+id).map(data=>data.json()).toPromise()

  }

  allStars() {

    return this._http.get('/allItems').map(data=>data.json()).toPromise()
    //.then((data) =>{
    //  console.log(data);
    //  console.log('IN Redir to showall');
      //this._router.navigate(['/showall'])

  //  })
  //  .catch( err => { console.log(err); })


  }





}
