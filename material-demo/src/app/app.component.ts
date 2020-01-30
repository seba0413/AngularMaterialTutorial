import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'material-demo';

links = [
          { 
            nombre: "Autocomplete",
            path:"/autocomplete"
          },
          { 
            nombre: "Badges",
            path:"/badge"
          },
          { 
            nombre: "Buttons",
            path:"/button"
          },
          { 
            nombre: "Cards",
            path:"/card"
          },
          { 
            nombre: "Expansion Panel",
            path:"/expansionpanel"
          },
          { 
            nombre: "Grid List",
            path:"/gridlist"
          },
          { 
            nombre: "Icons",
            path:"/icon"
          },
          { 
            nombre: "Inputs",
            path:"/input"
          },
          { 
            nombre: "List",
            path:"/list"
          },
          { 
            nombre: "Menu",
            path:"/menu"
          },
          { 
            nombre: "Navbar",
            path:"/navbar"
          },
          { 
            nombre: "Select",
            path:"/select"
          },
          { 
            nombre: "Sidebar",
            path:"/sidebar"
          },
          { 
            nombre: "Spinner",
            path:"/spinner"
          },
          { 
            nombre: "Stepper",
            path:"/stepper"
          },
          { 
            nombre: "Tabs",
            path:"/tab"
          },
          { 
            nombre: "Toogle",
            path:"/toggle"
          },
          { 
            nombre: "Typography",
            path:"/typography"
          },         

        ]


ngOnInit(){

}  
}
