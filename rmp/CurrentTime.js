var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import convertSecondsToHMS from './util/convertSecondsToHMS';
const TAG_NAME = 'rmp-current-time';
let CurrentTime = class CurrentTime extends LitElement {
    constructor() {
        super(...arguments);
        this.currentTime = 0;
        this.formatTime = convertSecondsToHMS;
    }
    render() {
        return html `<span>${this.formatTime(this.currentTime)}</span>`;
    }
};
__decorate([
    property({
        type: Number,
        hasChanged(newValue, oldValue) {
            if (typeof newValue !== 'number')
                return false;
            if (typeof oldValue !== 'number')
                return true;
            return Math.round(newValue) !== Math.round(oldValue);
        },
    })
], CurrentTime.prototype, "currentTime", void 0);
CurrentTime = __decorate([
    customElement(TAG_NAME)
], CurrentTime);
export default CurrentTime;
//# sourceMappingURL=CurrentTime.js.map