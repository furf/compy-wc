import { LitElement } from 'lit-element';
declare const TAG_NAME = "rmp-current-time";
export default class CurrentTime extends LitElement {
    currentTime: number;
    formatTime: Function;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: CurrentTime;
    }
}
export {};
//# sourceMappingURL=CurrentTime.d.ts.map