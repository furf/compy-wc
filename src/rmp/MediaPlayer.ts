import {
  LitElement,
  html,
  customElement,
  property,
  css,
  queryAssignedNodes,
  query,
} from 'lit-element';

const TAG_NAME = 'rmp-media-player';

@customElement(TAG_NAME)
export default class MediaPlayer extends LitElement {
  @property({type: String})
  src = '';

  @property({type: String})
  height = '';

  @property({type: String})
  width = '';

  @query('video')
  video: HTMLVideoElement | undefined;

  @queryAssignedNodes()
  children: any;

  static styles = css`
    :host video {
      display: block;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keypress', (event) => {
      if (
        event.target instanceof Element &&
        /^(?:input|textarea|select|button)$/i.test(event.target.tagName)
      ) {
        return;
      }

      switch (event.code) {
        case 'KeyK':
          if (!this.video) return;
          if (this.video.paused) {
            this.play();
          } else {
            this.pause();
          }
          break;
        case 'KeyM':
          if (!this.video) return;
          this.video.muted = !this.video.muted;
        default:
          console.log(event.code);
      }
    });
  }
  render() {
    return html`
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

  private onUserClickMute() {
    this.mute();
  }

  private onUserClickPause() {
    this.pause();
  }

  private onUserClickPlay() {
    this.play();
  }

  private onUserClickUnmute() {
    this.unmute();
  }

  private onVideoDurationChange() {
    this.passContext();
  }

  // @passContext('onVideoPause')
  private onVideoPause() {
    this.passContext();
  }

  // @passContext('onVideoPlay')
  private onVideoPlay() {
    this.passContext();
  }

  // @passContext('onVideoTimeUpdate')
  private onVideoTimeUpdate() {
    this.passContext();
  }

  private onVideoVolumeChange() {
    // if (this.video.volume === 0 && !this.video.muted) {
    //   this.video.muted = true;
    // } else if (this.video.volume > 0 && this.video.muted) {
    //   this.video.muted = false;
    // }
  }

  private mute() {
    if (!this.video) return;
    this.video.muted = true;
  }

  private pause() {
    if (!this.video) return;
    this.video.pause();
  }

  private play() {
    if (!this.video) return;
    this.video.play();
  }

  private unmute() {
    if (!this.video) return;
    this.video.muted = false;
  }

  private passContext() {
    if (!this.video) return;

    const {currentTime, duration, muted, paused} = this.video;
    const context = {
      currentTime,
      duration,
      muted,
      paused,
    };

    this.children
      .filter((node: Node) => node instanceof Element)
      .forEach((element: Element) => Object.assign(element, context));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: MediaPlayer;
  }
}
