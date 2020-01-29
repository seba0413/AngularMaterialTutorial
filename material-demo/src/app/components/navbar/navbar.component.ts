import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  esAdmin = false; 

  linksAdmin = ["link1", "link2", "link3"];
  linksComun = ["link4", "link5", "link6"];
  linksACargar = [];

  ngOnInit() {
    if(this.esAdmin){
      this.linksACargar = this.linksAdmin;
    }
    else{
      this.linksACargar = this.linksComun;
    }
  }

}
