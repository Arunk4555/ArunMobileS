import { Component,OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Book=new Book();
  constructor(private mobileService:MobileService,
    private router: Router){}

  
  ngOnInit(): void {
    
  }

  saveCusomer(){
    this.mobileService.addCustomer(this.book).subscribe(data =>{
console.log(data);
this.goTocustomerList();
    },
    error => console.log(error));
  }


  goTocustomerList(){
    this.router.navigate(['/bookings']);

  }
  onSubmit(){
    
  
    console.log(this.book);
    this.saveCusomer();
    
  }
  Submit(){
    alert("we will update you by sending a message");
  }
  
   
}
