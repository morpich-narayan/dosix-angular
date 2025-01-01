import { Component } from '@angular/core';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-doctor-patients',
  standalone: true,
  imports: [FlatpickrModule],
  templateUrl: './doctor-patients.component.html',
  styleUrl: './doctor-patients.component.scss',
  providers:[FlatpickrDefaults,BreadcrumbsComponent]
})
export class DoctorPatientsComponent {

}
