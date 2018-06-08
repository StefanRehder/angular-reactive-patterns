import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

    hoverSection: HTMLElement;

    ngOnInit() {
        this.hoverSection = document.getElementById('hover');

        this.hoverSection.addEventListener('mousemove', this.onMouseMove);
        this.hoverSection.addEventListener('click', this.onClick);
    }

    unsubscribe() {
        console.log('Called unsubscribe()');
        this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
        this.hoverSection.removeEventListener('click', this.onClick);
    }

    onMouseMove(ev: MouseEvent) {
        console.log('mousemove', ev);
    }

    onClick(ev: MouseEvent) {
        console.log('click', ev);
    }
}
