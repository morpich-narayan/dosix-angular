import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule,BreadcrumbsComponent,NgbDropdownModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  breadCrumbItems = [{ label: 'Doctors' }, { label: 'Appointments', active: true }];
  patients = [
    {
      avatar: 'assets/images/users/32/avatar-2.jpg',
      name: 'Sadie Hampton',
      dateTime: '12 Oct, 2023',
      time: '05:10 PM',
      email: 'sadiehampton@dosix.com',
      number: '070 1264 7231',
      diseases: 'Stomach Aches',
      status: 'New',
      statusClass: 'bg-secondary-subtle text-secondary',
    },
    {
      avatar: 'assets/images/users/32/avatar-3.jpg',
      name: 'Angie Henry',
      dateTime: '06 Dec, 2023',
      time: '03:55 PM',
      email: 'angie@dosix.com',
      number: '070 3850 4230',
      diseases: 'Conjunctivitis ("pink eye")',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
    },
    {
      avatar: 'assets/images/users/32/avatar-4.jpg',
      name: 'Robert Trusty',
      dateTime: '09 Dec, 2023',
      time: '09:16 AM',
      email: 'robert@dosix.com',
      number: '078 1769 1654',
      diseases: 'Infectious mononucleosis',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
    },
    {
      avatar: null,
      avatarText: 'UA',
      name: 'Utler Anthony',
      dateTime: '09 Dec, 2023',
      time: '09:16 AM',
      email: 'utleranthony@dosix.com',
      number: '079 2202 7653',
      diseases: 'Infectious mononucleosis',
      status: 'Rejected',
      statusClass: 'bg-danger-subtle text-danger',
    },
    {
      avatar: 'assets/images/users/32/avatar-5.jpg',
      name: 'Sheila Gonzalez',
      dateTime: '16 Dec, 2023',
      time: '11:23 AM',
      email: 'gonzalez@dosix.com',
      number: '077 4687 8655',
      diseases: 'Cryptosporidiosis',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
    },
    {
      avatar: 'assets/images/users/32/avatar-2.jpg',
      name: 'Sadie Hampton',
      dateTime: '12 Oct, 2023',
      time: '05:10 PM',
      email: 'sadiehampton@dosix.com',
      number: '070 1264 7231',
      diseases: 'Stomach Aches',
      status: 'New',
      statusClass: 'bg-secondary-subtle text-secondary',
    },
    {
      avatar: 'assets/images/users/32/avatar-3.jpg',
      name: 'Angie Henry',
      dateTime: '06 Dec, 2023',
      time: '03:55 PM',
      email: 'angie@dosix.com',
      number: '070 3850 4230',
      diseases: 'Conjunctivitis ("pink eye")',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
    },
    {
      avatar: 'assets/images/users/32/avatar-4.jpg',
      name: 'Robert Trusty',
      dateTime: '09 Dec, 2023',
      time: '09:16 AM',
      email: 'robert@dosix.com',
      number: '078 1769 1654',
      diseases: 'Infectious mononucleosis',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
    },
  ];
}
