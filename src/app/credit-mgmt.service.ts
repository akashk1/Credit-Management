import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreditMgmtService {
 allUsersDetail:any=[];
 userDetail;
 private creditUrl = '/api/user';
 sendData;
  constructor(private http:HttpClient) { }
  getAllUsers(){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get(this.creditUrl+'/getAll', {headers: headers}).pipe(tap(res=>res));
  }
  sendCredit(to:any,from:any,credit:number){
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const data = {to:to,from:from,credit:credit};
   return this.http.post(this.creditUrl+'/sendCredit',data,{headers: headers}).pipe(tap(res=>res));
  }
}
