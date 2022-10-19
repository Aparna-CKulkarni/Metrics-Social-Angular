import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {
  files: any[] =[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFileDropped($event){
    for(const item of $event){
      this.files.push(item);
    }
  }

  deleteFile(index){
      this.files.pop();
  }

  navigatePage(path){
    this.router.navigate([path]);
  }

}
