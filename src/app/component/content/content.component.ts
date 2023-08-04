import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterViewInit {
  @Input() subject_list:any
  @Input() getFromParent: Array<any> = []
  isDefault:boolean = false

  angular = {
    subjectName: 'Angular',
    description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    thumbnail: 'angular.png',
  }

  ngAfterViewInit(): void {
    console.log(this.getFromParent)
  }
}
