var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import './PauseButton';
import './PlayButton';
const TAG_NAME = 'rmp-paused-toggle';
let PausedToggle = class PausedToggle extends LitElement {
    constructor() {
        super(...arguments);
        this.paused = true;
    }
    render() {
        return html `
      ${this.paused
            ? html `<slot name="play-button"
            ><rmp-play-button></rmp-play-button
          ></slot>`
            : html `<slot name="pause-button"
            ><rmp-pause-button></rmp-pause-button
          ></slot>`}
    `;
    }
};
__decorate([
    property({ type: Boolean })
], PausedToggle.prototype, "paused", void 0);
PausedToggle = __decorate([
    customElement(TAG_NAME)
], PausedToggle);
export default PausedToggle;
//# sourceMappingURL=PausedToggle.js.map