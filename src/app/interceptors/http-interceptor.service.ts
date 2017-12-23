import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse
} from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(
        private router: Router
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((error) => {
            if (error instanceof HttpErrorResponse) {
                this.router.navigate(["/error"]);

                return Observable.of([]);
            }

            return Observable.throw(error);
        });
    }
}
