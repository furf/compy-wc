var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import './MuteButton';
import './UnmuteButton';
const TAG_NAME = 'rmp-muted-toggle';
let MutedToggle = class MutedToggle extends LitElement {
    constructor() {
        super(...arguments);
        this.muted = true;
    }
    render() {
        return html `
      ${this.muted
            ? html `<slot name="unmute-button"
            ><rmp-unmute-button></rmp-unmute-button
          ></slot>`
            : html `<slot name="mute-button"
            ><rmp-mute-button></rmp-mute-button
          ></slot>`}
    `;
    }
};
__decorate([
    property({ type: Boolean })
], MutedToggle.prototype, "muted", void 0);
MutedToggle = __decorate([
    customElement(TAG_NAME)
], MutedToggle);
export default MutedToggle;
//# sourceMappingURL=MutedToggle.js.map