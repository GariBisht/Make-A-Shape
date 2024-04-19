import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  shape = '';
  color = '';
  shapeClass = '';

  firstNum = 0 ;
  secondNum = 0 ;
  output = 0 ;
  previousPageVal = 0 ;

  constructor(private shapesService: ShapesService )  { }

  ngOnInit(): void {
  }


  // calculate() {
  //   let sharedService = new SharedService();
  //   this.output = sharedService.calculate(this.firstNum + this.secondNum);
  //   this.previousPageVal = sharedService.firstPageValue;
  // }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }

}
