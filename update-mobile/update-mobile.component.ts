import { Component,OnInit} from '@angular/core';
import { MobileService } from '../mobile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit {
  id!: number;
  mobile: Mobile= new Mobile();
  constructor(private mobileService:MobileService,
    private route:ActivatedRoute,
    private router:Router){}


ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
    

  this.mobileService.getMobileById(this.id).subscribe(data=>{
    this.mobile = data;
  },
  error => console.log(error));
  
}
onSubmit(){
  this.mobileService.updateMobile(this.id,this.mobile).subscribe(data=>{
this.goToMobileList();
  },
  error =>console.log(error));
}
goToMobileList(){
  this.router.navigate(['/mobiles']);
    }
}
