import BasePlayButton from '../rmp/PlayButton';
declare const TAG_NAME = "smp-play-button";
export default class PlayButton extends BasePlayButton {
    static styles: import("lit-element").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: PlayButton;
    }
}
export {};
//# sourceMappingURL=PlayButton.d.ts.map