import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import infoPackage from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shop';
  version: any;
  ngOnInit(): void {
    this.version = infoPackage.version;
  }
}
