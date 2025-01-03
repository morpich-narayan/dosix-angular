import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, Inject, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadComponateComponent } from './load-componate/load-componate.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TemplateRegistryService } from '../../../core/service/template-registry.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../../core/service/title.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { RootReducerState } from '../../store';
import { Store } from '@ngrx/store';
import { LayoutState } from '../../store/layouts/layout-reducers';
import { LAYOUT_MODE_TYPES, LAYOUT_TYPES, LEFT_SIDEBAR_SIZE } from '../../store/layouts/layout';
import { changesize, changeTheme } from '../../store/layouts/layout-action';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../../core/service/language.service';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [LoadComponateComponent, CommonModule, NgbDropdownModule, SimplebarAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent {
  currentTemplate!: TemplateRef<any> | null;
  currentTitle!: string;
  bodyClass = false;
  layoutData!: LayoutState;
  LAYOUT_MODE = LAYOUT_MODE_TYPES;
  LAYOUT = LAYOUT_TYPES;
  SIDEBAR_SIZE = LEFT_SIDEBAR_SIZE;
  element: any;


  subtotal: any = 0;
  totalsum: any;
  taxRate: any = 0.125;
  shippingRate: any = '65.00';
  discountRate: any = 0.15;
  discount: any;
  tax: any;

  cartData = [
    {
      id: '1',
      img: 'assets/images/products/48/img-1.png',
      title: 'Branded T-Shirts',
      category: 'Fashion',
      size: 'XL',
      color: 'Blue',
      price: 161.25,
      qty: 3
    },
    {
      id: '2',
      img: 'assets/images/products/48/img-3.png',
      title: 'Fossil gen 5E smart watch',
      category: 'Watchs',
      color: 'White',
      price: 69.60,
      qty: 2
    },
    {
      id: '3',
      img: 'assets/images/products/48/img-6.png',
      title: 'Olive Printed Men Round Neck',
      category: 'Fashion',
      size: 'M',
      color: 'Brown',
      price: 250.00,
      qty: 6
    },
    {
      id: '4',
      img: 'assets/images/products/48/img-9.png',
      title: 'Flip-Flops and House Slippers',
      category: 'Footwear',
      size: '8',
      color: 'Green',
      price: 150.00,
      qty: 1
    },
    {
      id: '5',
      img: 'assets/images/products/48/img-2.png',
      title: 'Like style travel black handbag',
      category: 'Luggage',
      color: 'Green',
      price: 89.99,
      qty: 1
    }
  ]

  cookieValue: any
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'sp' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'gr' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
    { text: 'Arabic', flag: 'assets/images/flags/ae.svg', lang: 'ar' },
  ];

  countryName: any
  flagvalue: any;
  valueset: any;


  constructor(private templateRegistry: TemplateRegistryService, private titleService: TitleService, private router: Router, private cdr: ChangeDetectorRef, private renderer: Renderer2, private store: Store<RootReducerState>, @Inject(DOCUMENT) private document: any, 
    public languageService: LanguageService,
    public _cookiesService: CookieService,) {
    this.titleService.getItem().subscribe(title => {
      if (title) {
        this.currentTitle = ''
        this.currentTitle = title;
        this.cdr.detectChanges(); // Trigger change detection
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.loadTemplate();
        }, 500);
      });
  }

  ngAfterViewInit() {
    this.loadTemplate();
  }

  ngOnInit() {
    this.element = document.documentElement;
    this.store.select('layout').subscribe((data) => {
      this.layoutData = data;
    })


    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
      this.countryName = 'English'
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  loadTemplate(key: string = 'template'): void {
    const template = this.templateRegistry.getTemplate(key);
    if (template) {
      this.currentTemplate = template;
    } else {
      this.currentTemplate = null
    }
    this.cdr.detectChanges();
  }

  fullscreen() {
    if (!this.element) {
      return
    }

    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element?.mozFullScreenElement &&
      !this.element?.webkitFullscreenElement) {
      if (this.element?.requestFullscreen) {
        this.element?.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  changeTheme(theme: string) {
    this.store.dispatch(changeTheme({ theme }));
  }

  toggleBodyClass() {

    if (this.layoutData.LAYOUT === this.LAYOUT.TWOCOLUMN) {
      this.bodyClass = !this.bodyClass;

      if (this.bodyClass) {
        this.renderer.addClass(document.body, 'twocolumn-panel');
      } else {
        this.renderer.removeClass(document.body, 'twocolumn-panel'); // Remove the class when the component is destroyed
      }
    } else {
      this.store.dispatch(changesize({ size: this.SIDEBAR_SIZE.DEFAULT }))
    }
  }

}
