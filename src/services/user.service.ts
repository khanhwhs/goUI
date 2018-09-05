import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/User';


@Injectable()
export class UserService {
    url = "http://localhost:8080";
    constructor(private http:Http) { }
    getUsersWithObservable(): Observable<User[]> {
        return this.http.get(this.url)
		   .map(this.extractData)
		   .catch(this.handleErrorObservable);
    }
    addUserWithObservable(user:User): Observable<User> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var addUrl = this.url + "/addUser";
        return this.http.post(addUrl, user, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
    getUsersWithPromise(): Promise<User[]> {
        return this.http.get(this.url).toPromise()
		    .then(this.extractData)
	            .catch(this.handleErrorPromise);
    }
    addUserWithPromise(user:User): Promise<User> {
        console.log(user);
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var addUrl = this.url + "/addUser";
        return this.http.post(addUrl , user, options).toPromise()
	           .then(this.extractData)
                   .catch(this.handleErrorPromise);
    }		
    private extractData(res: Response) {
	let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	
} 