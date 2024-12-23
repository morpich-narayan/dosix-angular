import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";
import { RightsidebarComponent } from "./rightsidebar/rightsidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, FooterComponent, RightsidebarComponent,RouterModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

}
