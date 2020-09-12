import { LitElement } from 'lit-element';
declare const TAG_NAME = "rmp-media-player";
export default class MediaPlayer extends LitElement {
    src: string;
    height: string;
    width: string;
    video: HTMLVideoElement | undefined;
    children: any;
    static styles: import("lit-element").CSSResult;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    private onUserClickMute;
    private onUserClickPause;
    private onUserClickPlay;
    private onUserClickUnmute;
    private onVideoDurationChange;
    private onVideoPause;
    private onVideoPlay;
    private onVideoTimeUpdate;
    private onVideoVolumeChange;
    private mute;
    private pause;
    private play;
    private unmute;
    private passContext;
}
declare global {
    interface HTMLElementTagNameMap {
        [TAG_NAME]: MediaPlayer;
    }
}
export {};
//# sourceMappingURL=MediaPlayer.d.ts.map