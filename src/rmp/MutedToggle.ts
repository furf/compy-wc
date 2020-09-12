import {LitElement, html, customElement, property} from 'lit-element';
import './MuteButton';
import './UnmuteButton';

const TAG_NAME = 'rmp-muted-toggle';

@customElement(TAG_NAME)
export default class MutedToggle extends LitElement {
  @property({type: Boolean})
  muted = true;

  render() {
    return html`
      ${this.muted
        ? html`<slot name="unmute-button"
            ><rmp-unmute-button></rmp-unmute-button
          ></slot>`
        : html`<slot name="mute-button"
            ><rmp-mute-button></rmp-mute-button
          ></slot>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: MutedToggle;
  }
}
