var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement } from 'lit-element';
const TAG_NAME = 'rmp-pause-button';
let PauseButton = class PauseButton extends LitElement {
    render() {
        return html `
      <button @click=${this.onClick}>
        <slot>
          <span>Pause</span>
        </slot>
      </button>
    `;
    }
    onClick() {
        const event = new CustomEvent('click-pause', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
};
PauseButton = __decorate([
    customElement(TAG_NAME)
], PauseButton);
export default PauseButton;
//# sourceMappingURL=PauseButton.js.map