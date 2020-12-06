import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pass = '';
  name = '';
  hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setValue(event: any, field: string): void {
    if (field === 'name') {
      this.name = event.value;
    } else if (field === 'pass') {
      this.pass =  event.value;
    }
  }
  appLogin(): void {
    if (this.name && this.pass) {
      console.log(this.name);
      this.router.navigateByUrl('/sales');
    }

  }
}
