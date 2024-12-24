import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/Hospital/dashboard/dashboard.component';
import { AppointmentsComponent } from '../pages/Hospital/appointments/appointments.component';
import { DoctorStaffListComponent } from '../pages/Hospital/doctor-staff-list/doctor-staff-list.component';
import { DoctorListComponent } from '../pages/Hospital/doctor-list/doctor-list.component';
import { DoctorPatientsComponent } from '../pages/Hospital/doctor-patients/doctor-patients.component';
import { DoctorDepartmentComponent } from '../pages/Hospital/doctor-department/doctor-department.component';
import { InvoiceCreateComponent } from '../pages/invoice/invoice-create/invoice-create.component';
import { InvoiceListComponent } from '../pages/invoice/invoice-list/invoice-list.component';
import { InvoiceOverviewComponent } from '../pages/invoice/invoice-overview/invoice-overview.component';

export const PAGE_ROUTES: Routes = [
  // Hospital
  { path: '', redirectTo: 'hospital', pathMatch: 'full' },
  {
    path: 'hospital',
    loadComponent: () => import('./../pages/Hospital/hospital-layout.component').then(c => c.HospitalLayoutsComponent),
    children: [
      { path: '', redirectTo: 'hospital-dashboard', pathMatch: 'full' },
      { path: 'hospital-dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'doctor-appointments', component: AppointmentsComponent, data: { title: 'Appointments' } },
      { path: 'doctor-staff-list', component: DoctorStaffListComponent, data: { title: 'Staff List' } },
      { path: 'doctor-list', component: DoctorListComponent, data: { title: 'Doctors List' } },
      { path: 'doctor-patients', component: DoctorPatientsComponent, data: { title: 'Patients' } },
      { path: 'doctor-department', component: DoctorDepartmentComponent, data: { title: 'Department' } }
    ]
  },
  // Invoice
  {
    path: 'invoice',
    loadComponent: () => import('./../pages/invoice/invoice-layout.component').then(c => c.InvoiceLayoutsComponent),
    children: [
      { path: '', redirectTo: 'apps-invoices-list', pathMatch: 'full' },
      { path: 'apps-invoices-list', component: InvoiceListComponent, data: { title: 'Invoice List' } },
      { path: 'apps-invoices-overview', component: InvoiceOverviewComponent, data: { title: 'Invoice Overview' } },
      { path: 'apps-invoices-create', component: InvoiceCreateComponent, data: { title: 'Create Invoice' } },
    ]
  }
]
