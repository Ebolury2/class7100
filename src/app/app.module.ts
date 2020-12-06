import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    InventoryComponent,
    DialogContentComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    OverlayModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    MatDialog,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
  ]
})
export class AppModule { }
