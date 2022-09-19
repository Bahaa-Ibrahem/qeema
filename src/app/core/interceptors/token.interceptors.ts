import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading/loading.service';
import { HttpService } from '../services/http/http.service';
import { environment } from 'src/environments/environment';
import { AlertService } from '../services/alert/alert.service';

@Injectable({
  providedIn: 'root',
})

export class TokenInterceptor implements HttpInterceptor {

  private token: string | null = null;

  constructor(private loadingService: LoadingService, private http: HttpService, private router: Router, private alertService: AlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = localStorage.getItem('token');

    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.token ? this.token : ''}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'      }
    });

    if (request.url.includes('api')) {
      this.loadingService.setLoading(true, request.url);
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        }),
        finalize(() => this.loadingService.setLoading(false, request.url))
      );
    } else {
      return next.handle(request);
    }
  }
}
