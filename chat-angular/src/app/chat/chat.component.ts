import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('chat') 
  private chat: ElementRef;	     
  text: String
  angForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ){}

  ngOnInit() {
    this.angForm = this.fb.group({
      msg: ['', Validators.required ]
   });
  }
  
  onMessage(text, scrollEle) {
            
      this.angForm.get('msg').setValue(''); 
      this.onWrite("Eu: ", text);
      this.onScroll(scrollEle);
      
      this.messageService.sendMessage(text).then((response) => {
        this.text = response;           
        this.onWrite("Robô: ", this.text);        
        this.onScroll(scrollEle);
      });
      
  }

  onWrite(who, msg){
    
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText(who+ msg);

    this.renderer.addClass(div, 'alert');

    if(who == "Eu: "){
      this.renderer.addClass(div, 'alert-success');
    }else{
      this.renderer.addClass(div, 'alert-secondary');
    }

    this.renderer.setStyle(div,'role', 'alert');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.chat.nativeElement, div);
  }

  onScroll(scrollEle) {
    scrollEle.scrollIntoView();    
  }
 
 
}
