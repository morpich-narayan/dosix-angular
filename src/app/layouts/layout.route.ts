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
import { ChatComponent } from '../pages/chat/chat.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { EmailComponent } from '../pages/email/email.component';
import { SweetalertComponent } from '../pages/advanceui/sweetalert/sweetalert.component';
import { HighlightComponent } from '../pages/advanceui/highlight/highlight.component';
import { RatingComponent } from '../pages/advanceui/rating/rating.component';
import { ScrollbarComponent } from '../pages/advanceui/scrollbar/scrollbar.component';
import { AdvanceUiSwiperComponent } from '../pages/advanceui/advance-ui-swiper/advance-ui-swiper.component';
import { ScrollspyComponent } from '../pages/advanceui/scrollspy/scrollspy.component';
import { UiAccordionsComponent } from '../pages/bootstrap/ui-accordions/ui-accordions.component';
import { UiCarouselComponent } from '../pages/bootstrap/ui-carousel/ui-carousel.component';
import { UiDropdownsComponent } from '../pages/bootstrap/ui-dropdowns/ui-dropdowns.component';
import { UiTabsComponent } from '../pages/bootstrap/ui-tabs/ui-tabs.component';
import { UiAlertsComponent } from '../pages/bootstrap/ui-alerts/ui-alerts.component';
import { MapsGoogleComponent } from '../pages/maps/maps-google/maps-google.component';
import { MapsLeafletComponent } from '../pages/maps/maps-leaflet/maps-leaflet.component';
import { IconsRemixComponent } from '../pages/icons/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from '../pages/icons/icons-boxicons/icons-boxicons.component';
import { IconsMaterialdesignComponent } from '../pages/icons/icons-materialdesign/icons-materialdesign.component';
import { IconsBootstrapComponent } from '../pages/icons/icons-bootstrap/icons-bootstrap.component';
import { IconsLineawesomeComponent } from '../pages/icons/icons-lineawesome/icons-lineawesome.component';
import { ApexLineComponent } from '../pages/charts/apex-line/apex-line.component';
import { ApexAreaComponent } from '../pages/charts/apex-area/apex-area.component';
import { ApexColumnComponent } from '../pages/charts/charts-apex-column/charts-apex-column.component';
import { ChartsApexBarComponent } from '../pages/charts/charts-apex-bar/charts-apex-bar.component';
import { ChartsApexMixedComponent } from '../pages/charts/charts-apex-mixed/charts-apex-mixed.component';
import { ChartsApexTimelineComponent } from '../pages/charts/charts-apex-timeline/charts-apex-timeline.component';
import { ChartsApexCandlestickComponent } from '../pages/charts/charts-apex-candlestick/charts-apex-candlestick.component';
import { ChartsApexBoxplotComponent } from '../pages/charts/charts-apex-boxplot/charts-apex-boxplot.component';
import { ChartsApexBubbleComponent } from '../pages/charts/charts-apex-bubble/charts-apex-bubble.component';
import { ChartsApexScatterComponent } from '../pages/charts/charts-apex-scatter/charts-apex-scatter.component';
import { ChartsApexHeatmapComponent } from '../pages/charts/charts-apex-heatmap/charts-apex-heatmap.component';
import { ChartsApexTreemapComponent } from '../pages/charts/charts-apex-treemap/charts-apex-treemap.component';
import { ChartsApexPieComponent } from '../pages/charts/charts-apex-pie/charts-apex-pie.component';
import { ChartsApexRadialbarComponent } from '../pages/charts/charts-apex-radialbar/charts-apex-radialbar.component';
import { ChartsApexRadarComponent } from '../pages/charts/charts-apex-radar/charts-apex-radar.component';
import { ChartsApexPolarComponent } from '../pages/charts/charts-apex-polar/charts-apex-polar.component';
import { TablesBasicComponent } from '../pages/tables/tables-basic/tables-basic.component';
import { GridjsComponent } from '../pages/tables/tables-gridjs/gridjs.component';
import { UiBadgesComponent } from '../pages/bootstrap/ui-badges/ui-badges.component';
import { UiButtonsComponent } from '../pages/bootstrap/ui-buttons/ui-buttons.component';
import { UiEmbedVideoComponent } from '../pages/bootstrap/ui-embed-video/ui-embed-video.component';
import { UiColorsComponent } from '../pages/bootstrap/ui-colors/ui-colors.component';
import { UiCardsComponent } from '../pages/bootstrap/ui-cards/ui-cards.component';
import { UiGridComponent } from '../pages/bootstrap/ui-grid/ui-grid.component';
import { UiImagesComponent } from '../pages/bootstrap/ui-images/ui-images.component';
import { UiModalsComponent } from '../pages/bootstrap/ui-modals/ui-modals.component';
import { UiOffcanvasComponent } from '../pages/bootstrap/ui-offcanvas/ui-offcanvas.component';
import { UiPlaceholdersComponent } from '../pages/bootstrap/ui-placeholders/ui-placeholders.component';
import { UiProgressComponent } from '../pages/bootstrap/ui-progress/ui-progress.component';
import { UiNotificationsComponent } from '../pages/bootstrap/ui-notifications/ui-notifications.component';
import { UiMediaComponent } from '../pages/bootstrap/ui-media/ui-media.component';
import { UiTypographyComponent } from '../pages/bootstrap/ui-typography/ui-typography.component';
import { UiListsComponent } from '../pages/bootstrap/ui-lists/ui-lists.component';
import { UiGeneralComponent } from '../pages/bootstrap/ui-general/ui-general.component';
import { UiUtilitiesComponent } from '../pages/bootstrap/ui-utilities/ui-utilities.component';
import { WidgetsComponent } from '../pages/widgets/widgets.component';
import { EcommerceDashoboardComponent } from '../pages/ecommerce/ecommerce-dashoboard/ecommerce-dashoboard.component';
import { EcommerceProductsComponent } from '../pages/ecommerce/ecommerce-products/ecommerce-products.component';
import { EcommerceProductDetailsComponent } from '../pages/ecommerce/ecommerce-product-details/ecommerce-product-details.component';
import { EcommerceAddProductComponent } from '../pages/ecommerce/ecommerce-add-product/ecommerce-add-product.component';
import { EcommerceCartComponent } from '../pages/ecommerce/ecommerce-cart/ecommerce-cart.component';
import { EcommerceCheckoutComponent } from '../pages/ecommerce/ecommerce-checkout/ecommerce-checkout.component';
import { EcommerceCustomersComponent } from '../pages/ecommerce/ecommerce-customers/ecommerce-customers.component';
import { EcommerceOrdersComponent } from '../pages/ecommerce/ecommerce-orders/ecommerce-orders.component';
import { AddProductComponent } from '../pages/ecommerce/add-product/add-product.component';
import { CartComponent } from '../pages/ecommerce/cart/cart.component';
import { CheckoutComponent } from '../pages/ecommerce/checkout/checkout.component';
import { OrdersComponent } from '../pages/ecommerce/orders/orders.component';
import { ListComponent } from '../pages/invoice/list/list.component';

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
      { path: 'apps-invoices-list', component: ListComponent, data: { title: 'Invoice List' } },
      { path: 'apps-invoices-overview', component: InvoiceOverviewComponent, data: { title: 'Invoice Overview' } },
      { path: 'apps-invoices-create', component: InvoiceCreateComponent, data: { title: 'Create Invoice' } },
    ]
  },
  // Ecommerce
  {
    path: 'ecommerce',
    loadComponent: () => import('./../pages/ecommerce/ecommerce-layout.component').then(c => c.EcommerceLayoutsComponent),
    children: [
      { path: '', redirectTo: 'dashboard-ecommerce', pathMatch: 'full' },
      { path: 'dashboard-ecommerce', component: EcommerceDashoboardComponent , data: { title: 'Overview' } },
      { path: 'apps-ecommerce-products', component: EcommerceProductsComponent, data: { title: 'Products'} },
      { path: 'apps-ecommerce-product-details', component: EcommerceProductDetailsComponent, data: { title: 'Product Overview' } },
      { path: 'apps-ecommerce-add-product', component: AddProductComponent, data: { title: 'Add Product' } },
      { path: 'apps-ecommerce-cart', component: CartComponent , data: { title: 'Shopping Cart' } },
      { path: 'apps-ecommerce-checkout', component: CheckoutComponent , data: { title: 'Checkout' } },
      { path: 'apps-ecommerce-orders', component: OrdersComponent , data: { title: 'Orders' } },
    ]
  },
  // Chat
  { path: 'apps-chat', component: ChatComponent },
  // Calendar
  { path: 'apps-calendar', component: CalendarComponent },
  // Email
  { path: 'apps-email', component: EmailComponent },

  // Advance UI
  { path: 'sweetalert', component: SweetalertComponent },
  { path: 'scrollspy', component: ScrollspyComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'ratings', component: RatingComponent },
  { path: 'scrollbar', component: ScrollbarComponent },
  { path: 'swiper', component: AdvanceUiSwiperComponent },

  // Bootstrap ui

  { path: 'ui-alerts', component: UiAlertsComponent},
  { path: 'ui-badges', component: UiBadgesComponent},
  { path: 'ui-buttons', component: UiButtonsComponent},
  { path: 'ui-colors', component: UiColorsComponent},
  { path: 'ui-cards', component: UiCardsComponent},
  { path: 'ui-carousel', component: UiCarouselComponent},
  { path: 'ui-dropdowns', component: UiDropdownsComponent},
  { path: 'ui-grid', component: UiGridComponent},
  { path: 'ui-images', component: UiImagesComponent},
  { path: 'ui-tabs', component: UiTabsComponent},
  { path: 'ui-accordions', component: UiAccordionsComponent},
  { path: 'ui-modals', component: UiModalsComponent},
  { path: 'ui-offcanvas', component: UiOffcanvasComponent},
  { path: 'ui-placeholders', component: UiPlaceholdersComponent},
  { path: 'ui-progress', component: UiProgressComponent},
  { path: 'ui-notifications', component: UiNotificationsComponent},
  { path: 'ui-media', component: UiMediaComponent},
  { path: 'ui-embed-video', component: UiEmbedVideoComponent},
  { path: 'ui-typography', component: UiTypographyComponent},
  { path: 'ui-lists', component: UiListsComponent},
  { path: 'ui-general', component: UiGeneralComponent},
  { path: 'ui-utilities', component: UiUtilitiesComponent},
  
  // Map-page
  { path: 'maps-google', component: MapsGoogleComponent},
  { path: 'maps-leaflet', component: MapsLeafletComponent },

  // Icons
  { path: 'icons-remix', component: IconsRemixComponent },
  { path: 'icons-boxicons', component: IconsBoxiconsComponent },
  { path: 'icons-materialdesign', component: IconsMaterialdesignComponent },
  { path: 'icons-bootstrap', component: IconsBootstrapComponent },

  // Charts
  { path: 'charts-apex-line', component: ApexLineComponent },
  { path: 'charts-apex-area', component: ApexAreaComponent },
  { path: 'charts-apex-column', component: ApexColumnComponent },
  { path: 'charts-apex-bar', component: ChartsApexBarComponent },
  { path: 'charts-apex-mixed', component: ChartsApexMixedComponent },
  { path: 'charts-apex-timeline', component: ChartsApexTimelineComponent },
  { path: 'charts-apex-candlestick', component: ChartsApexCandlestickComponent },
  { path: 'charts-apex-boxplot', component: ChartsApexBoxplotComponent },
  { path: 'charts-apex-bubble', component: ChartsApexBubbleComponent },
  { path: 'charts-apex-scatter', component: ChartsApexScatterComponent },
  { path: 'charts-apex-heatmap', component: ChartsApexHeatmapComponent },
  { path: 'charts-apex-treemap', component: ChartsApexTreemapComponent },
  { path: 'charts-apex-pie', component: ChartsApexPieComponent },
  { path: 'charts-apex-radialbar', component: ChartsApexRadialbarComponent },
  { path: 'charts-apex-radar', component: ChartsApexRadarComponent },
  { path: 'charts-apex-polar', component: ChartsApexPolarComponent },

  // Tables
  { path: 'tables-basic', component: TablesBasicComponent }, 
  { path: 'tables-gridjs', component: GridjsComponent },
  
  // Widget
  { path: 'widgets', component: WidgetsComponent },


]
