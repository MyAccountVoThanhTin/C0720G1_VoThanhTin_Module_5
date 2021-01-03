import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HackerNews} from '../model/HackerNews';

@Component({
  selector: 'app-add-new-hacker-new',
  templateUrl: './add-new-hacker-new.component.html',
  styleUrls: ['./add-new-hacker-new.component.scss']
})
export class AddNewHackerNewComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() titleChild = new EventEmitter<string>();
  @Output() urlNewsChild = new EventEmitter<string>();
  @Output() newArticle = new EventEmitter<HackerNews>();


  constructor() {
  }

  ngOnInit(): void {
  }

  // updateTitle(value: any) {
  //   this.title = value;
  //}
  //
  // updateURL(value: any) {
  //   this.urlNews = value;
  // }
  //
  //
  // addNeww() {
  //   this.titleChild.emit(this.title);
  //   this.urlNewsChild.emit(this.urlNews);
  // }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  addArticle(value: string, value2: string) {
    let article: HackerNews = {
      title: value,
      URlNews: value2
    };
    this.newArticle.emit(article);
  }
}
