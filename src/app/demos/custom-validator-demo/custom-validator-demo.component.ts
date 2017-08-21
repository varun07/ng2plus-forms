import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatchValidator } from '../../directives/match-directive.directive';

@Component({
  selector: 'app-custom-validator-demo',
  templateUrl: './custom-validator-demo.component.html',
  styleUrls: ['./custom-validator-demo.component.css']
})
export class CustomValidatorDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myMatch = new FormControl('', [MatchValidator.matchValidatorFn]);

}
