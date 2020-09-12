import {LitElement, html, customElement, property} from 'lit-element';
import convertSecondsToHMS from './util/convertSecondsToHMS';

const TAG_NAME = 'rmp-current-time';

@customElement(TAG_NAME)
export default class CurrentTime extends LitElement {
  @property({
    type: Number,
    hasChanged(newValue: number, oldValue?: number) {
      if (typeof newValue !== 'number') return false;
      if (typeof oldValue !== 'number') return true;
      return Math.round(newValue) !== Math.round(oldValue);
    },
  })
  currentTime = 0;

  formatTime: Function = convertSecondsToHMS;

  render() {
    return html`<span>${this.formatTime(this.currentTime)}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: CurrentTime;
  }
}
