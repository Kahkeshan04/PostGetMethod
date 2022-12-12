import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  santhoshini = "http://localhost:3000/vijaya";
  link = "http://localhost:3000/profile";
  postlink = "http://localhost:3000/posts";
  users:any;
  people:any;
  postdetails:any;

  constructor(public megh: HttpClient){
    megh.get(this.santhoshini).subscribe((mouni)=>{ this.users=mouni; }); 
    megh.get(this.link).subscribe((data)=>{this.people=data})
    megh.get(this.postlink).subscribe((Udata)=>{this.postdetails=Udata})
    console.log(this.users);
  }
  
  teams(us:any){
    this.megh.post(this.santhoshini,us).subscribe((rizwana)=>{this.users=rizwana;})
    console.warn(us);
  }
  post(data:any){
    this.megh.post(this.postlink,data).subscribe((userdata)=>{this.postdetails=userdata;})
    console.warn(this.postdetails)
  }
}
