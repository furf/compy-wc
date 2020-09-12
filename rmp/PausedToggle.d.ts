import { LitElement } from 'lit-element';
import './PauseButton';
import './PlayButton';
declare const TAG_NAME = "rmp-paused-toggle";
export default class PausedToggle extends LitElement {
    paused: boolean;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: PausedToggle;
    }
}
export {};
//# sourceMappingURL=PausedToggle.d.ts.map