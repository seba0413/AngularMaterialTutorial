import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'sidebar', component: SidebarComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'list', component: ListComponent},
  {path:'gridlist', component: GridListComponent},
  {path:'expansionpanel', component: ExpansionPanelComponent},
  {path:'card', component: CardComponent},
  {path:'tab', component: TabComponent},
  {path:'stepper', component: StepperComponent},
  {path:'input', component: InputComponent},
  {path:'select', component: SelectComponent},
  {path:'typography', component: TypographyComponent},
  {path:'button', component: ButtonsComponent},
  {path:'toggle', component: ToggleComponent},
  {path:'icon', component: IconsComponent},
  {path:'badge', component: BadgesComponent},
  {path:'spinner', component: SpinnerComponent},
  {path:'autocomplete', component: AutocompleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
