import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../core/componate/breadcrumbs/breadcrumbs.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [BreadcrumbsComponent,NgbDropdownModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent {
  doctors = [
    {
      id: '#TB01',
      name: 'Dr. Steven Frens',
      avatar: 'assets/images/doctor/user-1.jpg',
      department: 'Dental',
      specialization: 'Dentist',
      qualification: 'MBBS, MS',
      email: 'steven@dosix.com',
      phone: '070 1264 7231',
      joiningDate: '16 Jun, 2023',
      salary: '$4,542'
    },
    {
      id: '#TB02',
      name: 'Dr. Edith Amirian',
      avatar: 'assets/images/doctor/user-2.jpg',
      department: 'Gastroenterologists',
      specialization: 'Liver',
      qualification: 'MBBS, MS',
      email: 'amirian@dosix.com',
      phone: '09977 20 49 31',
      joiningDate: '25 Aug, 2022',
      salary: '$6,500'
    },
    {
      id: '#TB03',
      name: 'Dr. Ciara Dowds',
      avatar: 'assets/images/doctor/user-3.jpg',
      department: 'Neurologist',
      specialization: 'Stroke',
      qualification: 'MBBS, MS',
      email: 'ciaradowds@dosix.com',
      phone: '046 548 1774',
      joiningDate: '08 Feb, 2023',
      salary: '$4,800'
    },
    {
      id: '#TB04',
      name: 'Dr. Kinsley Rease',
      avatar: null, // For placeholder initials
      initials: 'KR',
      department: 'General Surgeon',
      specialization: 'Breast surgery',
      qualification: 'MBBS, MS',
      email: 'drkinsley@dosix.com',
      phone: '050 827 3903',
      joiningDate: '11 Nov, 2020',
      salary: '$15,000'
    },
    {
      id: '#TB05',
      name: 'Dr. Zion Ypina',
      avatar: 'assets/images/doctor/user-4.jpg',
      department: 'Neurosurgeon',
      specialization: 'Brain Tumors',
      qualification: 'MBBS, MS',
      email: 'zionypina@dosix.com',
      phone: '042 835 6327',
      joiningDate: '22 Oct, 2021',
      salary: '$7,120'
    }
  ];
}
