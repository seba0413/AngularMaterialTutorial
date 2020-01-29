import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  showSpinner = false; 

  loadData(){
    this.showSpinner = true; 
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  ngOnInit() {
  }

}
