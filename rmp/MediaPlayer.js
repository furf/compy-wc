var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css, queryAssignedNodes, query, } from 'lit-element';
const TAG_NAME = 'rmp-media-player';
let MediaPlayer = class MediaPlayer extends LitElement {
    constructor() {
        super(...arguments);
        this.src = '';
        this.height = '';
        this.width = '';
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('keypress', (event) => {
            if (event.target instanceof Element &&
                /^(?:input|textarea|select|button)$/i.test(event.target.tagName)) {
                return;
            }
            switch (event.code) {
                case 'KeyK':
                    if (!this.video)
                        return;
                    if (this.video.paused) {
                        this.play();
                    }
                    else {
                        this.pause();
                    }
                    break;
                case 'KeyM':
                    if (!this.video)
                        return;
                    this.video.muted = !this.video.muted;
                default:
                    console.log(event.code);
            }
        });
    }
    render() {
        return html `
      <div
        @click-mute=${this.onUserClickMute}
        @click-play=${this.onUserClickPlay}
        @click-pause=${this.onUserClickPause}
        @click-unmute=${this.onUserClickUnmute}
      >
        <video
          controls
          height=${this.height}
          src=${this.src}
          width=${this.width}
          @durationchange=${this.onVideoDurationChange}
          @pause=${this.onVideoPause}
          @play=${this.onVideoPlay}
          @timeupdate=${this.onVideoTimeUpdate}
          @volumechange=${this.onVideoVolumeChange}
        ></video>
        <slot></slot>
      </div>
    `;
    }
    onUserClickMute() {
        this.mute();
    }
    onUserClickPause() {
        this.pause();
    }
    onUserClickPlay() {
        this.play();
    }
    onUserClickUnmute() {
        this.unmute();
    }
    onVideoDurationChange() {
        this.passContext();
    }
    // @passContext('onVideoPause')
    onVideoPause() {
        this.passContext();
    }
    // @passContext('onVideoPlay')
    onVideoPlay() {
        this.passContext();
    }
    // @passContext('onVideoTimeUpdate')
    onVideoTimeUpdate() {
        this.passContext();
    }
    onVideoVolumeChange() {
        // if (this.video.volume === 0 && !this.video.muted) {
        //   this.video.muted = true;
        // } else if (this.video.volume > 0 && this.video.muted) {
        //   this.video.muted = false;
        // }
    }
    mute() {
        if (!this.video)
            return;
        this.video.muted = true;
    }
    pause() {
        if (!this.video)
            return;
        this.video.pause();
    }
    play() {
        if (!this.video)
            return;
        this.video.play();
    }
    unmute() {
        if (!this.video)
            return;
        this.video.muted = false;
    }
    passContext() {
        if (!this.video)
            return;
        const { currentTime, duration, muted, paused } = this.video;
        const context = {
            currentTime,
            duration,
            muted,
            paused,
        };
        this.children
            .filter((node) => node instanceof Element)
            .forEach((element) => Object.assign(element, context));
    }
};
MediaPlayer.styles = css `
    :host video {
      display: block;
    }
  `;
__decorate([
    property({ type: String })
], MediaPlayer.prototype, "src", void 0);
__decorate([
    property({ type: String })
], MediaPlayer.prototype, "height", void 0);
__decorate([
    property({ type: String })
], MediaPlayer.prototype, "width", void 0);
__decorate([
    query('video')
], MediaPlayer.prototype, "video", void 0);
__decorate([
    queryAssignedNodes()
], MediaPlayer.prototype, "children", void 0);
MediaPlayer = __decorate([
    customElement(TAG_NAME)
], MediaPlayer);
export default MediaPlayer;
//# sourceMappingURL=MediaPlayer.js.map