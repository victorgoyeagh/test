import { Observable } from 'rxjs';

export class TreeHelper {

    constructor() {}

    static recursive(value): Observable<any> {
        if (value > 0) {
            console.log(value);
            return this.recursive(value - 1);
        } else {
            return value;
        }
    }

}