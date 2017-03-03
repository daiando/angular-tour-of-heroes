import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { slideInDownAnimation } from '../animations';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  // selector: 'crisiss-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  // styleUrls: ['./crisis-detail.component.css'],
  //animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getCrisis(+params['id']))
    .subscribe((crisis: Crisis) => this.crisis = crisis);
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
