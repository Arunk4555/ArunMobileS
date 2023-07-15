import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit{

  id!: number
  mobile: Mobile = new Mobile;
constructor(private route:ActivatedRoute,private mobileService:MobileService ){}



  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
     this.mobile=new Mobile();
     this.mobileService.getMobileById(this.id).subscribe(data =>{
this.mobile =data;
     });
  }
}
