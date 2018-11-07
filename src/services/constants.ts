import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  public isChinese:boolean = false;
  public isDev:boolean = true;
  public prodUrl:any = 'http://Gouspring.us-east-2.elasticbeanstalk.com/';
  public devUrl:any = 'http://localhost:8080/';
}