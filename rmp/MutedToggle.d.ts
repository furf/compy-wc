import { LitElement } from 'lit-element';
import './MuteButton';
import './UnmuteButton';
declare const TAG_NAME = "rmp-muted-toggle";
export default class MutedToggle extends LitElement {
    muted: boolean;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MutedToggle;
    }
}
export {};
//# sourceMappingURL=MutedToggle.d.ts.map