import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  innerWidth: any;
  fontSizeBreakPoint;

  constructor() {
    this.fontSizeBreakPoint = 500;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
