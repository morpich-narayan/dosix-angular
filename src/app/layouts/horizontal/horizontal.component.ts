import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { HorizontalTopbarComponent } from "../horizontal-topbar/horizontal-topbar.component";
import { RightsidebarComponent } from "../rightsidebar/rightsidebar.component";

@Component({
  selector: 'app-horizontal',
  standalone: true,
  imports: [RouterModule, FooterComponent, TopbarComponent, HorizontalTopbarComponent, RightsidebarComponent],
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.scss'
})
export class HorizontalComponent {

}
