import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentComponent} from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  images: any[] = [];
  currentItem: any = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.images = [
      {
        src :  './assets/images/bestDark.jpeg',
        availability: 10,
        name: 'Best Dark'
      },
      {
        src : './assets/images/chocolateChip.jpeg',
        availability: 10,
        name: 'Chocolate Chip'
      },
      {
        src : './assets/images/chocolateDevil.jpeg',
        availability: 10,
        name: 'Chocolate Devil'
      },
      {
        src : './assets/images/chocolatePie.jpeg',
        availability: 10,
        name: 'Chocolate Pie'
      },
      {
        src : './assets/images/codiva.jpeg',
        availability: 10,
        name: 'Codiva'
      },
      {
        src : './assets/images/cookies.jpeg',
        availability: 10,
        name: 'Cookies'
      },
      {
        src : './assets/images/covered.jpeg',
        availability: 10,
        name: 'Covered'
      },
      {
        src : './assets/images/darknessRising.jpeg',
        availability: 10,
        name: 'Darkness Rising'
      },
      {
        src : './assets/images/havenSquare.jpeg',
        availability: 10,
        name: 'Haven Square'
      },
      {
        src : './assets/images/makeHappy.jpeg',
        availability: 10,
        name: 'Make Happy'
      },
      {
        src : './assets/images/mixWhiteAndDark.jpeg',
        availability: 10,
        name: 'Mix White And Dark'
      },
      {
        src : './assets/images/rightForCooking.jpeg',
        availability: 10,
        name: 'Right For Cooking'
      },
      {
        src : './assets/images/squareBar.jpeg',
        availability: 10,
        name: 'Square Bar'
      },
      {
        src : './assets/images/whiteBar.jpeg',
        availability: 10,
        name: 'White Bar'
      },
    ];
  }

  purchase(item: { name: any; }): void {
    this.images.find((i) => {
      if (i.name === item.name) {
        i.availability --;
        this.openDialog(i);
      }
    });
  }

  openDialog(i: any): void {
    this.dialog.open(DialogContentComponent, {
      width: '250px',
      data: {name: i, animal: 'this.animal'}
    });
  }

}


