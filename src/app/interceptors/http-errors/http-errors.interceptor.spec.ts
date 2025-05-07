import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorsInterceptor } from './http-errors.interceptor';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('httpErrorsInterceptor', () => {
  let httpClient: HttpClient; // usado para mockar a requisição
  let httpMock: HttpTestingController; // usado para verificar as requisições
  let snackBar: MatSnackBar; // usado para verificar o snackbar

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpErrorsInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpClient = TestBed.inject(HttpClient); // injetando o httpClient
    httpMock = TestBed.inject(HttpTestingController); // injetando o httpMock
    snackBar = TestBed.inject(MatSnackBar); // injetando o snackBar
  });

  it('should open notification on http error', () => {
    jest.spyOn(snackBar, 'open');

    httpClient.get('/error').subscribe();

    const req = httpMock.expectOne('/error');
    req.error(new ProgressEvent('error'));

    expect(snackBar.open).toHaveBeenCalled();
    expect(req.request.headers.has('X-Custom-Header')).toBeFalsy();
  });
});
