import { LitElement } from 'lit-element';
declare const TAG_NAME = "rmp-duration";
export default class Duration extends LitElement {
    duration: number;
    formatTime: Function;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: Duration;
    }
}
export {};
//# sourceMappingURL=Duration.d.ts.map