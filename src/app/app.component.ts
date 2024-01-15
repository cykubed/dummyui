import {Component} from '@angular/core';
import {StuffService} from './stuff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummyui';
  num: number = 10;

  constructor(private stuffService: StuffService) {
  }

  fetchThing() {
    this.stuffService.fetch().subscribe(x => {
      this.num = x;
    })
  }
}
