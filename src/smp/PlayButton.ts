import {css, html, customElement} from 'lit-element';
import BasePlayButton from '../rmp/PlayButton';

const TAG_NAME = 'smp-play-button';

@customElement(TAG_NAME)
export default class PlayButton extends BasePlayButton {
  static styles = css`
    :host button {
      color: blue;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: PlayButton;
  }
}
