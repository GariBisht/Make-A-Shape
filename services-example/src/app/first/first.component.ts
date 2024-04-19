import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  shape = '';
  color = '';
  shapeClass = '';

  firstNum = 0 ;
  secondNum = 0 ;
  output = 0 ;

  constructor(private shapesService: ShapesService ,private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  calculate() {
    // let sharedService = new SharedService();
    // this.output = this.sharedService.calculate(this.firstNum + this.secondNum);
    // this.sharedService.firstPageValue = this.output;
  }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }

}
