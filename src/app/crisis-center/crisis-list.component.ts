import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  // selector: 'crisiss-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
  providers: [ CrisisService ]
})
export class CrisisListComponent implements OnInit {

  crises: Observable<Crisis[]>;
  private selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.crises = this.route.params
    .switchMap((params: Params) => {
      this.selectedId = +params['id'];
      return this.service.getCrises();
    });
  }

  isSelected(crisis: Crisis) { return crisis.id === this.selectedId; }

  onSelect(crisis: Crisis) {
  this.selectedId = crisis.id;

  // Navigate with relative link
  this.router.navigate([crisis.id], { relativeTo: this.route });
}


}
