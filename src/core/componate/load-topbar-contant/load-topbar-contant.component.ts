import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TopbarItem } from '../../interface/Topbar.model';

@Component({
  selector: 'app-load-topbar-contant',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './load-topbar-contant.component.html',
  styleUrl: './load-topbar-contant.component.scss'
})
export class LoadTopbarContantComponent {
  @Input() topbarItem: TopbarItem[] = [];
  @Output() titleChanged = new EventEmitter<string>();

  prefixedPath!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.pathFromRoot[2].url.subscribe(segments => {
      const path = segments.map(segment => segment.path).join('/');
      this.prefixedPath = path;

      console.log(this.prefixedPath);
    }
    );
  }

  ngOnInit() {
    const getCurranrUrl = this.router.url.split('/');
    const lastUrlPath = getCurranrUrl[getCurranrUrl.length - 1];

    const currantTitle = this.topbarItem.find(x => x.path === lastUrlPath);
    if (currantTitle) {
      this.updateTitle(currantTitle.data.title);
    }
  }

  updateTitle(title: string) {
    this.titleChanged.emit(title);
  }
}

