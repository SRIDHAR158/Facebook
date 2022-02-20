import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  email: string | any;
  password: string | any;
  name: string | any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.name = this.route.snapshot.paramMap.get('name');
  }

  login() {

    if (this.email == "admin@gmail.com" && this.password == "admin@123") {
      this.router.navigate(['/welcome']);
    }

    else {
      this.router.navigate(['/login']);
    }

    if (this.email == "sridhar@ymail.com" && this.password == "sridhar@%1234") {
      this.router.navigate(['/welcome']);
    }

    if (this.email == "beshanth@gmail.com" && this.password == "beshanth@#$007") {
      this.router.navigate(['/welcome']);
    }

  }

}
