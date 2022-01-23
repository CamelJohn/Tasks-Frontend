import { Subject } from 'rxjs';

export default class SidenavService {
    private static isOpen = false;
    static state = new Subject<boolean>();

    static get sidenavState() {
        return this.isOpen;
    }

    static toggle() {
        this.state.next(this.isOpen = !this.isOpen);
    }

    static close() {
        this.state.next(this.isOpen = false);
    }
}
