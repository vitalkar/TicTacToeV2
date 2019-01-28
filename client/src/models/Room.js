export default class Room {

    constructor(n = '', p = []) {
        this._name = n;
        this._players = p;
    }
    //getters & setters
    get name() {
        return this._name;
    }

    set name(n) {
        this._name = n;
    }

    get players() {
        return this._players;
    }

    set players(p) {
        this._players = p;
    }
}