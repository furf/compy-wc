import {LitElement, customElement, html} from 'lit-element';

const TAG_NAME = 'rmp-mute-button';

@customElement(TAG_NAME)
export default class MuteButton extends LitElement {
  render() {
    return html`
      <button @click=${this.onClick}>
        <slot>
          <span>Mute</span>
        </slot>
      </button>
    `;
  }

  private onClick() {
    const event = new CustomEvent('click-mute', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: MuteButton;
  }
}
