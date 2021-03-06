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
        availability: 5,
        name: 'Best Dark'
      },
      {
        src : './assets/images/chocolateChip.jpeg',
        availability: 5,
        name: 'Chocolate Chip'
      },
      {
        src : './assets/images/chocolateDevil.jpeg',
        availability: 5,
        name: 'Chocolate Devil'
      },
      {
        src : './assets/images/chocolatePie.jpeg',
        availability: 5,
        name: 'Chocolate Pie'
      },
      {
        src : './assets/images/codiva.jpeg',
        availability: 5,
        name: 'Codiva'
      },
      {
        src : './assets/images/cookies.jpeg',
        availability: 5,
        name: 'Cookies'
      },
      {
        src : './assets/images/covered.jpeg',
        availability: 5,
        name: 'Covered'
      },
      {
        src : './assets/images/darknessRising.jpeg',
        availability: 5,
        name: 'Darkness Rising'
      },
      {
        src : './assets/images/havenSquare.jpeg',
        availability: 5,
        name: 'Haven Square'
      },
      {
        src : './assets/images/makeHappy.jpeg',
        availability: 5,
        name: 'Make Happy'
      },
      {
        src : './assets/images/mixWhiteAndDark.jpeg',
        availability: 5,
        name: 'Mix White And Dark'
      },
      {
        src : './assets/images/rightForCooking.jpeg',
        availability: 5,
        name: 'Right For Cooking'
      },
      {
        src : './assets/images/squareBar.jpeg',
        availability: 5,
        name: 'Square Bar'
      },
      {
        src : './assets/images/whiteBar.jpeg',
        availability: 5,
        name: 'White Bar'
      },
    ];
  }

  purchase(item: { name: any; }): void {
    this.images.forEach((i) => {
      if (i.name === item.name) {
        if (i.availability > 0) {
          i.availability --;
          this.openDialog(i, 'success');
        } else if (i.availability === 0) {
          this.openDialog(i, 'failed');
        }
      }
    });
  }

  openDialog(i: any, statusItem: string): void {
    this.dialog.open(DialogContentComponent, {
      width: '750px',
      data: {data: i, status: statusItem},
    });
  }

}


