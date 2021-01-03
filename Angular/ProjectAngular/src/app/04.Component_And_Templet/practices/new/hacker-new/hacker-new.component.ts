import {Component, OnInit} from '@angular/core';
import {HackerNews} from '../model/HackerNews';

@Component({
  selector: 'app-hacker-new',
  templateUrl: './hacker-new.component.html',
  styleUrls: ['./hacker-new.component.scss']
})
export class HackerNewComponent implements OnInit {
  article: HackerNews[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      URlNews: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      URlNews: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      URlNews: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      URlNews: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      URlNews: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  title = '';
  urlNews = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  showArticle(article: HackerNews) {
    this.title = article.title;
    this.urlNews = article.URlNews;
  }
}
