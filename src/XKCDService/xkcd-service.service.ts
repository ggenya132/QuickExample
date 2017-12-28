import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {XKCDComic} from '../app/XKCDModel';

@Injectable()
export class XkcdServiceService {

  constructor(public httpClient: HttpClient) { }

  getComic () {
   return this.httpClient.get<XKCDComic>('http://xkcd.com/info.0.json');

}

  getComicByValue(value) {
    const url = 'http://xkcd.com/' + value + '/info.0.json';
    return this.httpClient.get<XKCDComic>(url);

  }

}
