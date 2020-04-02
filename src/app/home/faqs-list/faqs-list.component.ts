import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../share/faqs.service';
import { FaqsItem } from '../share/faqs-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faqs-list',
  templateUrl: './faqs-list.component.html',
  styleUrls: ['./faqs-list.component.scss']
})
export class FAQsListComponent implements OnInit {

  public faqList: Observable<FaqsItem[]>;
  public currentSelection: string;

  constructor(private faqService: FaqsService) { }
  
  ngOnInit() {
   this.faqList = this.faqService.getFaqList();
  }

  onSelectionChange(id:string) {
    console.log(`Selected id -> ${id}`);
    this.currentSelection = id;
  }

}
