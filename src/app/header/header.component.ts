import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input()
  sysLogo: string | TemplateRef<void>;

  @Input()
  sysHtml: TemplateRef<void>;

  constructor() { }

  ngOnInit() {
  }

}
