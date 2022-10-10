import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {
  files: any[] =[];
  @HostListener('dragover' ['$event']) onDragOver(event){
    console.log('over')
    event.preventDefault();
    event.stopPropogation();
  }

  @HostListener('dragleave' ['$event']) onDragLeave(event){
    console.log('leave')

    event.preventDefault();
    event.stopPropogation();
  }

  @HostListener('drop' ['$event']) onDrop(event){
    console.log('drop')

    event.preventDefault();
    event.stopPropogation();
  }

  constructor() { }

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

}
