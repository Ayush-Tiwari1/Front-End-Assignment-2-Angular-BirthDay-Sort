import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: any=[];
  result: any;
  json:any;
  constructor(private _appService:AppService){}
  
  ngOnInit(): void {
    this._appService.getUsers().subscribe(users=>{
      this.users=users;
      this.users=this.users.users;
      // console.log(this.users);
      this.json=this.users;
      // console.log(typeof(this.users))
    })
  }
  onPressName(){
      this.result=this.json.sort((a:any,b:any)=> a.firstName>b.firstName)
  }
  onPressAge(){

    this.result=this.json.sort((a:any, b:any)=>b.age-a.age)
  }
}
