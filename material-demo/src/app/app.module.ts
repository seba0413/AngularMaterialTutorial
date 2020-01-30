import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    NavbarComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    TypographyComponent,
    ButtonsComponent,
    ToggleComponent,
    IconsComponent,
    BadgesComponent,
    SpinnerComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
