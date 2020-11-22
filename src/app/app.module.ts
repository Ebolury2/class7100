import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogContentComponent} from './dialog-content/dialog-content.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    InventoryComponent,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatDialog,
    MatDialogRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
