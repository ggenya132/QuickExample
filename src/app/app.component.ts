import { Component } from '@angular/core';
import {XkcdServiceService} from '../XKCDService/xkcd-service.service';
import {XKCDComic} from './XKCDModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(public xkcdService: XkcdServiceService) {
   this.xkcdComic = new XKCDComic(0, 0, '', 1111, '', '', '', '', '', '', '');
   this.getComic();
  }
  title = '';
  showComic = false;
  xkcdComic: XKCDComic;
  getComic() {
   this.xkcdService.getComic().subscribe( (res: XKCDComic) => {
     console.log(res);

     this.xkcdComic = new XKCDComic(res['month'], res['num'], res['link'], res['year'], res['news'], res['safe_title'], res['transcript'],
     res['alt'], res['img'], res['title'], res['day']);

   });

  }


  showComicStrip() {
    this.showComic = !this.showComic;
  }
  }

