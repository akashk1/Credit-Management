import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreditMgmtService {
 allUsersDetail:any=[];
 userDetail;
 sendData;
  constructor(private http:HttpClient) { }
  // getAllUsers(){
  //   const headers = new HttpHeaders({'Content-type': 'application/json'});
  //   this.http.get('http://localhost:3000/user/getAll', {headers: headers}).subscribe(res=>{
  //     this.allUsersDetail = res;
  //     console.log(this.allUsersDetail);
  //   });
  // }
  getAllUsers(){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get('http://localhost:3000/user/getAll', {headers: headers}).pipe(tap(res=>res));
  }
  sendCredit(to:any,from:any,credit:number){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const data = {to:to,from:from,credit:credit};
   return this.http.post('http://localhost:3000/user/sendCredit',data,{headers: headers}).pipe(tap(res=>res));
  }
}
