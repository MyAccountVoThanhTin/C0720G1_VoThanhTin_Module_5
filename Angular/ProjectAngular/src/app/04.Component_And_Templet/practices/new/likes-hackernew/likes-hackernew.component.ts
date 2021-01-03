import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-hackernew',
  templateUrl: './likes-hackernew.component.html',
  styleUrls: ['./likes-hackernew.component.scss']
})
export class LikesHackernewComponent implements OnInit {
  likes:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeThis() {
    this.likes +=1;
  }
}
