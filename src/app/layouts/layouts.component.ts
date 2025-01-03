import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { RightsidebarComponent } from "./rightsidebar/rightsidebar.component";
import { RouterModule } from '@angular/router';
import { RootReducerState } from '../store';
import { Store } from '@ngrx/store';
import { LayoutState } from '../store/layouts/layout-reducers';
import { LAYOUT_TYPES } from '../store/layouts/layout';
import { HorizontalTopbarComponent } from "./horizontal-topbar/horizontal-topbar.component";
import { TwoColumnSidebarComponent } from "./two-column-sidebar/two-column-sidebar.component";
import { VerticalComponent } from "./vertical/vertical.component";
import { HorizontalComponent } from "./horizontal/horizontal.component";
import { TwoColumnComponent } from "./two-column/two-column.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, FooterComponent, RightsidebarComponent, RouterModule, HorizontalTopbarComponent, TwoColumnSidebarComponent, VerticalComponent, HorizontalComponent, TwoColumnComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  
  layoutData!: LayoutState
  LAYOUT= LAYOUT_TYPES

  constructor(private store: Store<RootReducerState>) { }
  
  
  ngOnInit(): void {
    this.store.select('layout').subscribe((data) => {
      this.layoutData = data;
      console.log(this.layoutData);
    })
  }
}
