import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { RootReducerState } from '../../store';
import { Store } from '@ngrx/store';
import { initialState, LayoutState } from '../../store/layouts/layout-reducers';
import { LAYOUT_MODE_TYPES, LAYOUT_WIDTH_TYPES, LAYOUT_POSITION_TYPES, LAYOUT_TOPBAR_COLOR_TYPES, PERLOADER_TYPES, LAYOUT_TYPES, LEFT_SIDEBAR_SIZE, LAYOUT_THEME_TYPES, DATA_SIDEBAR_IMAGE, DATA_SIDEBAR_COLOR, LEFT_SIDEBAR_VIEW } from '../../store/layouts/layout';
import { changelayoutTheme, changepreLoader, changesidebarcolor, changesidebarImage, changesidebarView, changesize, changeTheme, changetopbar, changewidthLayout, resetLayout } from '../../store/layouts/layout-action';
import { CommonModule } from '@angular/common';
import { debounceTime, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-rightsidebar',
  standalone: true,
  imports: [SimplebarAngularModule, CommonModule],
  templateUrl: './rightsidebar.component.html',
  styleUrl: './rightsidebar.component.scss'
})
export class RightsidebarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private takeUntil$ = new Subject<void>();

  LAYOUT = LAYOUT_TYPES;
  LAYOUT_THEME = LAYOUT_THEME_TYPES;
  LAYOUT_MODE = LAYOUT_MODE_TYPES;
  LAYOUT_WIDTH = LAYOUT_WIDTH_TYPES;
  LAYOUT_POSITION = LAYOUT_POSITION_TYPES;
  TOPBAR = LAYOUT_TOPBAR_COLOR_TYPES;
  SIDEBAR_SIZE = LEFT_SIDEBAR_SIZE;
  SIDEBAR_VIEW = LEFT_SIDEBAR_VIEW;
  SIDEBAR_COLOR = DATA_SIDEBAR_COLOR;
  SIDEBAR_IMAGE = DATA_SIDEBAR_IMAGE;
  DATA_PRELOADER= PERLOADER_TYPES

  colorGradiantCallapse = false;

  layoutData!: LayoutState



  constructor(private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.store.select('layout').pipe(takeUntil(this.takeUntil$) ).subscribe((data) => {
      this.layoutData = data;
    })
  }

  ngOnDestroy(): void {
    // Emit a value to unsubscribe from the stream when the component is destroyed
    this.takeUntil$.next();
    this.takeUntil$.complete();
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end', panelClass: 'offcanvas' });
  }

  changeLayout(layout: string) {
    this.store.dispatch(changelayoutTheme({ layout }));
  }

  changeTheme(theme: string) {
    this.store.dispatch(changeTheme({ theme }));
  }

  changeWidth(width: string) {
    this.store.dispatch(changewidthLayout({ width }));
  }

  changeTopbar(topbar: string) {
    this.store.dispatch(changetopbar({ topbar }))
  }

  changesize(size: string) {
    this.store.dispatch(changesize({ size }))
  }

  changeSidebarView(sidebarView: string) {
    this.store.dispatch(changesidebarView({ sidebarView }))
  }

  changeSidebarColors(sidebar: string) {
    this.store.dispatch(changesidebarcolor({ sidebar }))

    if (this.layoutData.SIDEBAR_COLOR === this.SIDEBAR_COLOR.GRADIANT) {
      this.colorGradiantCallapse = !this.colorGradiantCallapse;
    } else {
      this.colorGradiantCallapse = false;
    }
  }
  changeSidebarGreadiantColors(sidebar: string) {
    this.store.dispatch(changesidebarcolor({ sidebar }))
  }

  changeSidebarImage(sidebarImage: string) {
    this.store.dispatch(changesidebarImage({ sidebarImage }))
  }

  changePreloder(preLoader: string) {
    this.store.dispatch(changepreLoader({ preLoader }))
  }

  reset(){
    this.store.dispatch(resetLayout())
  }
}
