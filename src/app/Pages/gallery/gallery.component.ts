import { Component, OnInit } from '@angular/core';
import { SweetAlert } from './../../Pages/SweetAlert/SweetAlert'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('Update?','Sure?','<iframe src="http://www.africau.edu/images/default/sample.pdf" width="100%" height="500px">');
  }
}
