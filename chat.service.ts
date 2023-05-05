import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  //question: any;
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "Hi": "Hello",
    "Who are you": "My name is Test Sat Bot",
    "What is your role": "Just guide for the user",
    "What is angular":"Angular is an open-source JavaScript framework written in TypeScript  Google maintains it and its primary purpose is to develop single-page applications As a framework  Angular has clear advantages while also providing a standard structure for developers to work with It enables users to create large applications in a maintainable manner. ",
    "defaultmsg": "I can't understand your text. Can you please repeat"
   
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question : string): any{
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}