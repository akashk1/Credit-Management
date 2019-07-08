import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditMgmtService } from '../credit-mgmt.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {
    users:any =[]
  constructor(private router:Router,private creditMGMT:CreditMgmtService) { }

  ngOnInit() {
     this.creditMGMT.getAllUsers().subscribe(res=>{
       this.users = res;


     });
    }

 onSelect(id:any){
   this.router.navigateByUrl('/view-detail/'+this.users[id]._id+'/'+id);
 }
}
