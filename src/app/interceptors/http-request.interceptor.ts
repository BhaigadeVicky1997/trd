import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { AppConstants } from "../utils/app.constants";
import { catchError, finalize, map } from "rxjs/operators";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(AppConstants.USER_TOKEN);
    if (token) {
      request = request.clone({
        setHeaders: {
          token: token,
        },
      });
    } else {
      // this._spinner.show();
    }
    if (!request.headers.has("Content-Type")) {
      request = request.clone({
        setHeaders: {
          "content-type": "application/json",
          "Accept": "application/json"
        },
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          //if (event.body && event.body?.status == false) {
          //  //this._commonUtils.presentToast(event.body.message, 3000);
          //}
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);

        return throwError(error);
      }),
      finalize(() => {
        //this._spinner.hide();
      })
    );
  }
}
