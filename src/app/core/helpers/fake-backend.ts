import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { attachementsData, bookmarkData, callsData, ChannelsData, chatContactData, chatData, messages } from '../data/chat';
import { orderList } from '../data/order';


@Injectable()
export class fakebackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // tslint:disable-next-line: max-line-length
        const users: any[] = JSON.parse(localStorage.getItem('users')!) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // get chatmessage list
            if (request.url.endsWith('/app/message') && request.method === 'GET') {
                if (messages) {
                    return of(new HttpResponse({ status: 200, body: messages }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get chatmessage list
            if (request.url.endsWith('/app/chatData') && request.method === 'GET') {
                if (chatData) {
                    return of(new HttpResponse({ status: 200, body: chatData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get chatmessage list
            if (request.url.endsWith('/app/channnellist') && request.method === 'GET') {
                if (ChannelsData) {
                    return of(new HttpResponse({ status: 200, body: ChannelsData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get contact list
            if (request.url.endsWith('/app/chatContactData') && request.method === 'GET') {
                if (chatContactData) {
                    return of(new HttpResponse({ status: 200, body: chatContactData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get contact list
            if (request.url.endsWith('/app/attachementsData') && request.method === 'GET') {
                if (attachementsData) {
                    return of(new HttpResponse({ status: 200, body: attachementsData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get contact list
            if (request.url.endsWith('/app/callsData') && request.method === 'GET') {
                if (callsData) {
                    return of(new HttpResponse({ status: 200, body: callsData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // get contact list
            if (request.url.endsWith('/app/bookmarkData') && request.method === 'GET') {
                if (bookmarkData) {
                    return of(new HttpResponse({ status: 200, body: bookmarkData }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }
            // get orderList
            if (request.url.endsWith('/app/orderList') && request.method === 'GET') {
                if (orderList) {
                    return of(new HttpResponse({ status: 200, body: orderList }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }
            // Add orderList list
            if (request.url.endsWith('/app/orderList') && request.method === 'POST') {
                const newUser = request.body;
                if (orderList) {
                    return of(new HttpResponse({ status: 200, body: newUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // Update orderList list
            if (request.url.endsWith('/app/orderList') && request.method === 'PUT') {
                const updatedUser = request.body;
                if (orderList) {
                    return of(new HttpResponse({ status: 200, body: updatedUser }));
                } else {
                    return throwError({ status: 401, error: { message: 'No Data Found' } });
                }
            }

            // DELETE orderList list
            if (request.url.endsWith('/app/orderList') && request.method === 'DELETE') {
                const updatedUser = request.body;
                if (orderList) {
                    return of(new HttpResponse({ status: 200, body: updatedUser })); // respond 200 OK
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            return next.handle(request);

        }))

            // tslint:disable-next-line: max-line-length
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}
