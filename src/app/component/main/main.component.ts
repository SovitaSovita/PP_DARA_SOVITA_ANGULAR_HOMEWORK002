import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() isLogin: boolean = false

  @Output() onLoginHandler = new EventEmitter<void>();

  onLogOutHandler() {
    this.onLoginHandler.emit();
  }

  subject_list: Array<any> = [
    {
      subjectName: 'TypeScript',
      description: `TypeScript is a strongly typed, object oriented, compiled
    language.
    TypeScript is a syntactic superset of JavaScript which adds static typing. It was designed by Anders Hejlsberg (designer of C#) at Microsoft.`, thumbnail: 'typescript.png',
    }, {
      subjectName: 'Kotlin',
      description: `Kotlin is a modern, trending programming language. Kotlin is easy to learn,
    especially if you already know Java (it is 100% compatible with Java).`,
      thumbnail: 'kotlin.png',
    },
    {
      subjectName: 'Java',
      description: `Java is a high-level, class-based, object-oriented
    programming language that is designed to
    have as few implementation dependencies as possible.`,
      thumbnail: 'java.png',
    },
    {
      subjectName: 'JavaScript',
      description: `JavaScript often abbreviated JS, is a programming language
    that is one of the core technologies
    of the World Wide Web, alongside HTML and CSS.`,
      thumbnail: 'javascript.png',
    },
    {
      subjectName: 'Angular',
      description: `Angular is an open framework and
      platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
      thumbnail: 'angular.png',
    },
  ]

  sendToChildRight:any
  getFromChildLeft(subjectName:string){
    this.sendToChildRight = this.subject_list.filter((res) => res.subjectName === subjectName)
  }
}
