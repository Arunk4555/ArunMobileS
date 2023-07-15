import { Component,OnInit } from '@angular/core';
import { Book } from '../book';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  books!: Book[];
constructor(private mobileService:MobileService){

}
  ngOnInit(): void {
    this.getcustomers();
  }
  private getcustomers(){
    this.mobileService.getBookList().subscribe(data =>{
             this.books=data;
    });
  }
}
