import { Component } from '@angular/core';
import { Mobile } from '../mobile';
import { OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit{
  mobiles!: Mobile[];
  constructor(private mobileService:MobileService ){}


ngOnInit(): void {
  this.getMobiles();

  
}
private getMobiles(){
  this.mobileService.getMobilesList().subscribe(data =>{
    this.mobiles=data;
  });
}

  

}
