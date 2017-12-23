import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";


export class ActivatedRouteMock {

    private subjectData = new Subject();
    private subjectQueryParams = new Subject();

    set data(data: {}) {
        this.subjectData.next(data);
    }

    get data() {
        return this.subjectData.asObservable();
    }

    set queryParams(queryParams: {}) {
        this.subjectQueryParams.next(queryParams);
    }

    get queryParams() {
        return this.subjectQueryParams.asObservable();
    }

}
