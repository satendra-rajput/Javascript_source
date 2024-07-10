import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrl: './banner-card.component.scss'
})
export class BannerCardComponent {

  constructor(public dialog: MatDialog) {}

  openContact() {
    // const dialogRef = this.dialog.open(ContactUsComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}

