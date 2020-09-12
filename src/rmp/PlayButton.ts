import {LitElement, customElement, html} from 'lit-element';

const TAG_NAME = 'rmp-play-button';

@customElement(TAG_NAME)
export default class PlayButton extends LitElement {
  render() {
    return html`
      <button @click=${this.onClick}>
        <slot>
          <span>Play</span>
        </slot>
      </button>
    `;
  }

  private onClick() {
    const event = new CustomEvent('click-play', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: PlayButton;
  }
}
