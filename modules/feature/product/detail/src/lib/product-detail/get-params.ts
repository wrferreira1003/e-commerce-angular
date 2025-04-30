import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

export function getParams(): Observable<string> {
  const actived = inject(ActivatedRoute);
  return actived.params.pipe(map((params) => params['id']));
}
