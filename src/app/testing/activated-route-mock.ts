import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

export class ActivatedRouteMock {

    private subjectData = new Subject();
    private dataValue: {};

    private subjectQueryParams = new Subject();
    private queryParamsValue: {};

    set data(data: {}) {
        this.dataValue = data;
        this.subjectData.next(this.dataValue);
    }

    get data() {
        return this.subjectData.asObservable();
    }

    set queryParams(queryParams: {}) {
        this.queryParamsValue = queryParams;
        this.subjectQueryParams.next(this.queryParamsValue);
    }

    get queryParams() {
        return this.subjectQueryParams.asObservable();
    }

    get snapshot() {
        return { queryParams: this.queryParamsValue };
    }

}
