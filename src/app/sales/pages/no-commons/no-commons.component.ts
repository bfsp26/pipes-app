import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {

  // i18nselectpipe
  stateOptions: any[];
  gender: string = 'male';
  inviteMap: any = { 'male': 'Invite him.', 'female': 'Invite her.' };

  // i18npluralpipe
  value2: number = 0;
  messages: any[] = ['Message 1'];
  messageMapping:
    { [k: string]: string } = { '=0': 'No messages.', '=1': 'One message.', 'other': '# messages.' };

  // slicepipe
  collection: string[] = ['a', 'b', 'c', 'd'];

  // keyvaluepipe
  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  map = new Map([[2, 'foo'], [1, 'bar']]);

  // jsonpipe
  object1: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };

  // asynpipe
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(private primengConfig: PrimeNGConfig) {
    this.stateOptions = [
      { label: 'male', value: 'male' },
      { label: 'female', value: 'female' },
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
