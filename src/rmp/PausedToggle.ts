import {LitElement, html, customElement, property} from 'lit-element';
import './PauseButton';
import './PlayButton';

const TAG_NAME = 'rmp-paused-toggle';

@customElement(TAG_NAME)
export default class PausedToggle extends LitElement {
  @property({type: Boolean})
  paused = true;

  render() {
    return html`
      ${this.paused
        ? html`<slot name="play-button"
            ><rmp-play-button></rmp-play-button
          ></slot>`
        : html`<slot name="pause-button"
            ><rmp-pause-button></rmp-pause-button
          ></slot>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: PausedToggle;
  }
}
