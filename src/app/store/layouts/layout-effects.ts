import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { changelayoutTheme, changeMode, changeposition, changepreLoader, changesidebarcolor, changesidebarImage, changesidebarView, changesize, changeTheme, changetopbar, changewidthLayout, resetLayout } from './layout-action';
import { LAYOUT_WIDTH_TYPES, LEFT_SIDEBAR_SIZE } from './layout';
import { initialState } from './layout-reducers';
import { EMPTY, of } from 'rxjs';

@Injectable()
export class LayoutEffects {
    private actions$ = inject(Actions);
    SIDEBAR_SIZE = LEFT_SIDEBAR_SIZE;
    LAYOUT_WIDTH = LAYOUT_WIDTH_TYPES;

    constructor(private store: Store) { }

    changeTheme$ = createEffect(() =>
        this.actions$.pipe(
            ofType(changeTheme),
            tap(action => {
                document.documentElement.setAttribute('data-bs-theme', action.theme);
            }),
            map(action => changetopbar({ topbar: action.theme }))
        )
    );

    changewidthLayout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(changewidthLayout),
            tap(action => {
                document.documentElement.setAttribute('data-bs-theme', action.width);
            }),
            map(action => changesize({ size: action.width === this.LAYOUT_WIDTH.FLUID ? this.SIDEBAR_SIZE.DEFAULT : this.SIDEBAR_SIZE.SMALL_HOVER }))
        )
    );

    disablePreloader$ = createEffect(() =>
        this.actions$.pipe(
            ofType(changepreLoader),
            switchMap(action => {
                if (action.preLoader !== 'disable') {
                    return of(action).pipe(
                        delay(1500),
                        map(() => changepreLoader({ preLoader: 'disable' }))
                    );
                } else {
                    return EMPTY;
                }
            })
        )
    );

    resetLayoutEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(resetLayout),
            tap(() => {
                document.documentElement.setAttribute('data-layout', initialState.LAYOUT);
                document.documentElement.setAttribute('data-bs-theme', initialState.LAYOUT_THEME);
                document.documentElement.setAttribute('data-sidebar-size', initialState.SIDEBAR_SIZE);
                document.documentElement.setAttribute('data-layout-style', initialState.SIDEBAR_VIEW);
                document.documentElement.setAttribute('data-sidebar', initialState.SIDEBAR_COLOR);
                document.documentElement.setAttribute('data-sidebar-image', initialState.SIDEBAR_IMAGE);
                document.documentElement.setAttribute('data-preloader', initialState.DATA_PRELOADER);
                document.documentElement.setAttribute('data-topbar', initialState.TOPBAR);
            }),
            map(() => {})
        ),
        { dispatch: false } // Prevent circular dispatch
    );
}
