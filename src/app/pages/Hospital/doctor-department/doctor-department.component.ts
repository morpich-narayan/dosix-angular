import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-department',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './doctor-department.component.html',
  styleUrl: './doctor-department.component.scss'
})
export class DoctorDepartmentComponent {

}
