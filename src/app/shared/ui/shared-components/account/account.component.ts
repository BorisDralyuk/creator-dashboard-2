import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'moonshot-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.router.navigate(['/']);
  }

}
