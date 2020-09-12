import {LitElement, html, customElement} from 'lit-element';

const TAG_NAME = 'rmp-pause-button';

@customElement(TAG_NAME)
export default class PauseButton extends LitElement {
  render() {
    return html`
      <button @click=${this.onClick}>
        <slot>
          <span>Pause</span>
        </slot>
      </button>
    `;
  }

  private onClick() {
    const event = new CustomEvent('click-pause', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: PauseButton;
  }
}
