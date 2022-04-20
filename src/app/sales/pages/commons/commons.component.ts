import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent {
  upper_text: string = 'bryan';
  lower_text: string = 'FERNANDO';
  title_text: string = 'bryaN fErnaNdo';

  date: Date = new Date();
}
