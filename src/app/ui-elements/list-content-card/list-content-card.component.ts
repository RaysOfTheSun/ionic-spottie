import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-content-card',
  templateUrl: './list-content-card.component.html',
  styleUrls: ['./list-content-card.component.scss']
})
export class ListContentCardComponent implements OnInit {
  @Input()
  titleImageSrc: string;

  @Input()
  header: string;

  @Input()
  subHeader: string;

  @Input()
  pinned: boolean;

  @Input()
  downloaded: boolean;

  constructor() {}

  ngOnInit() {}
}
