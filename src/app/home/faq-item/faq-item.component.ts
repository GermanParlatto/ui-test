import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FaqsItem } from '../share/faqs-item';

@Component({
  selector: 'faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FAQItemComponent implements OnInit {

  @Output() onSelectionChange: EventEmitter<string>;
  @Input() faqItem: FaqsItem;
  @Input() selectedId: string;

  public toggleState: boolean;

  constructor() { 
    this.onSelectionChange = new EventEmitter();
  }

  ngOnInit() {
    this.selectedId = "";
    this.toggleState=false;
  }

  onClick(){
    this.selectedId = this.faqItem.id;
    this.onSelectionChange.emit(this.selectedId);
    this.toggleState = !this.toggleState;
  }

  isOpen = () => {
    if (this.faqItem.id === this.selectedId){
      return this.toggleState;
    }
    else{
      this.toggleState = false;
      return false;
    }
  }
  
}
