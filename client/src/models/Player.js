export default class Player {

    constructor(n = '', s = 0) {
        this._name = n;
        this._score = s;
        this._sign = '';
    }
    
    //getters & setters
    get name() {
        return this._name;
    }
    get score() {
        return this._score;
    }
    get sign() {
        return this._sign;
    }

    set sign(s) {
        this._sign = s;
    }

    
}