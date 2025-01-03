import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootReducerState } from './store';
import { Store } from '@ngrx/store';
import { changelayoutTheme, changeMode, changeTheme } from './store/layouts/layout-action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dosix';
  layOutData: any

  constructor(private store: Store<RootReducerState>) {
    this.store.select('layout').subscribe((data) => {
      this.layOutData = data;
    })

    console.log(this.layOutData);
  }

  ngOnInit(): void {
    this.changeMode(this.layOutData.LAYOUT_MODE);
    this.changeLayout(this.layOutData.LAYOUT)
  }


  ngOnDestroy(): void { }

  // Mode Change
  changeMode(theme: string) {
    this.store.dispatch(changeTheme({ theme }));
  }

  changeLayout(layout: string) {
    this.store.dispatch(changelayoutTheme({ layout }));
  }
}
