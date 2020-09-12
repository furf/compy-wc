import {LitElement, customElement, html} from 'lit-element';

const TAG_NAME = 'rmp-unmute-button';

@customElement(TAG_NAME)
export default class UnmuteButton extends LitElement {
  render() {
    return html`
      <button @click=${this.onClick}>
        <slot>
          <span>Unmute</span>
        </slot>
      </button>
    `;
  }

  private onClick() {
    const event = new CustomEvent('click-unmute', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: UnmuteButton;
  }
}
