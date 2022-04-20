import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {
  net_sales: number = 25225542.4475;
  percentaje: number = 0.48;
  decimal_pipe: string = '{{ value_expression | number }}';
  currency_pipe: string = '{{ value_expression | currency }}';
  percent_pipe: string = '{{ value_expression | percent }}';
}
