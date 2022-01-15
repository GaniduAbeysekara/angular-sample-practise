import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derectives-practice',
  templateUrl: './derectives-practice.component.html',
  styleUrls: ['./derectives-practice.component.scss']
})
export class DerectivesPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOdd :boolean =false;
  numbers = [1,2,3,4,5,6,7,8,9];
  oddNumbers = [1,3,5,7,9]
  evenNumbers = [2,4,6,8]
}
