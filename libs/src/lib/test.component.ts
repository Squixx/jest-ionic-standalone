import { Component } from '@angular/core';
import { Platform } from '@ionic/angular/standalone'; // This doesnt work
// import { Platform } from '@ionic/angular'; // This works

@Component({
  selector: 'ionic-jest-demo-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(
    private platform: Platform
  ) {}
  isMobile = this.platform.is('mobile');
}
