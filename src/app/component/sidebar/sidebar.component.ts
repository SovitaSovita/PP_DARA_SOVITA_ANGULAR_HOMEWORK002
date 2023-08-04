import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  @Input() subject_list:any
  setSubject:any

  @Output() sendToParent = new EventEmitter<any>()
  
  onClickTab(subjectName:string){
    this.sendToParent.emit(subjectName)
  }

  // subjects!:object

  // ngAfterViewInit(): void {
  //   this.subject = this.subjects
  // }

  

}
