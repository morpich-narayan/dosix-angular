import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { GridJsModel } from '../gridjs.model';
import { GridJsService } from '../gridjs.service';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';
import { NgbdGridJsSortableHeader, SortEvent } from '../gridjs-sortable.directive';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-loading-sorting',
  standalone: true,
  imports: [PaginationModule,FormsModule,CommonModule,NgbdGridJsSortableHeader ],
  templateUrl: './table-loading.component.html',
  styleUrl: './table-loading.component.scss',
  providers: [GridJsService, DecimalPipe]
})
export class TableLoadingComponent {
  gridjsList$!: Observable<GridJsModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdGridJsSortableHeader) headers!: QueryList<NgbdGridJsSortableHeader>;
  
  constructor(public service: GridJsService, private formBuilder: UntypedFormBuilder) {
    this.gridjsList$ = service.countries$;
    this.total$ = service.total$;
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
