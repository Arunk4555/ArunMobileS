import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  

  mobile:Mobile=new Mobile();                      //mobile is a property of type Mobile class and creating object
  constructor(private mobileService:MobileService,
    private router:Router){}
  ngOnInit(): void {
    
  }
  saveMobile(){
    this.mobileService.addMobile(this.mobile).subscribe(data =>{
console.log(data);
this.goToMobileList();
    },
  error =>console.log(error));
    
  }

  goToMobileList(){
this.router.navigate(['/mobiles']);
  }
  onSubmit(){
    console.log(this.mobile);
this.saveMobile();
  }
}
