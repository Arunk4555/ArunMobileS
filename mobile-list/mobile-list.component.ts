import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit{

  mobiles!: Mobile[];                                      //array object
  constructor(private mobileService:MobileService,        // injecting mobileservice in mobilelist component
    private router:Router ){}


ngOnInit(): void {
  this.getMobiles();

  
}
private getMobiles(){
  this.mobileService.getMobilesList().subscribe(data =>{      // this method returns observable object so that we can subscribe to this method it call once it get the data we are also going to handle respone of restApi
    this.mobiles=data;                                        // then we will assign response to the mobile property
  });
}
mobileDetails(id:number){
  this.router.navigate(['mobile-details',id]);
}
updateMobile(id:number){
  this.router.navigate(['update-mobile',id]);
}
deleteMobile(id:number){
  this.mobileService.deleteMobile(id).subscribe( data => {
    console.log(data);
    this.getMobiles();
  })
}
}
