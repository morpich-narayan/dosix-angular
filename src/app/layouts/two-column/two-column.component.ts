import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RightsidebarComponent } from "../rightsidebar/rightsidebar.component";
import { FooterComponent } from "../footer/footer.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { HorizontalTopbarComponent } from "../horizontal-topbar/horizontal-topbar.component";
import { TwoColumnSidebarComponent } from "../two-column-sidebar/two-column-sidebar.component";

@Component({
  selector: 'app-two-column',
  standalone: true,
  imports: [RouterModule, RightsidebarComponent, FooterComponent, TopbarComponent, HorizontalTopbarComponent, TwoColumnSidebarComponent],
  templateUrl: './two-column.component.html',
  styleUrl: './two-column.component.scss'
})
export class TwoColumnComponent {

}
