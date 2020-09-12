import {LitElement, html, customElement, property} from 'lit-element';
import convertSecondsToHMS from './util/convertSecondsToHMS';

const TAG_NAME = 'rmp-duration';

@customElement(TAG_NAME)
export default class Duration extends LitElement {
  @property({
    type: Number,
    hasChanged(newValue: number, oldValue?: number) {
      if (typeof newValue !== 'number') return false;
      if (typeof oldValue !== 'number') return true;
      return Math.round(newValue) !== Math.round(oldValue);
    },
  })
  duration = 0;

  formatTime: Function = convertSecondsToHMS;

  render() {
    return html`<span>${this.formatTime(this.duration)}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: Duration;
  }
}
