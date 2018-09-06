import { Component, OnInit, ViewChild } from '@angular/core';
import { IndicationModel } from './model/indication.model';
import { PortfolioService } from './services/portfolio-service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  indications: IndicationModel[] = [];

  constructor(private portfolioService: PortfolioService) {

  }

  ngOnInit() {
    this.generateIndications();


  }

  generateIndications = () => {
    this.indications = this.portfolioService.generateIndications();
  }

}
