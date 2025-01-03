import { Component } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { RootReducerState } from '../../store';
import { Store } from '@ngrx/store';
import { LAYOUT_TYPES } from '../../store/layouts/layout';
import { LayoutState } from '../../store/layouts/layout-reducers';
import { RightsidebarComponent } from "../rightsidebar/rightsidebar.component";

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, RouterModule, FooterComponent, RightsidebarComponent],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  layoutData!: LayoutState
  LAYOUT = LAYOUT_TYPES

  constructor(private store: Store<RootReducerState>) { }


  ngOnInit(): void {
  }

  onSettingsButtonClicked() {
    document.querySelector('.custom-offcanvas')?.classList.toggle('show')
    document.getElementById('backdrop')?.classList.toggle('show')
  }
}
