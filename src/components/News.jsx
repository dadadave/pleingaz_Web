import { useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function News() {
  const { t } = useLang();
  const v = t.news.video;
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  // The clip is only fetched on demand (preload="none"), so the homepage never
  // pays for it until a visitor asks to watch.
  const start = () => {
    const el = video.current;
    if (!el) return;
    setPlaying(true);
    el.play();
  };

  // Back to the poster still once the clip finishes.
  const reset = () => {
    setPlaying(false);
    const el = video.current;
    if (el) el.load();
  };

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="videos-grid">
          <div className="videos-intro reveal">
            <span className="eyebrow">{t.news.videosEyebrow}</span>
            <h2 className="section-title">{t.news.videosTitle}</h2>
            <p className="videos-lead">{t.news.videosLead}</p>
            <p className="videos-meta">
              <span className="date"><Icon name="clock" strokeWidth={2} />{v.date}</span>
              <span className="videos-meta-title">{v.title}</span>
            </p>
          </div>

          <div className={`video-card reveal${playing ? ' is-playing' : ''}`}>
            <div className="video-thumb">
              <video
                ref={video}
                className="video-media"
                src={v.src}
                poster={v.poster}
                preload="none"
                playsInline
                controls={playing}
                controlsList="nodownload"
                onEnded={reset}
              />
              {!playing && (
                <button
                  type="button"
                  className="video-play"
                  aria-label={`${v.play} : ${v.title}`}
                  onClick={start}
                >
                  <span className="video-veil" aria-hidden="true" />
                  <span className="pbtn"><Icon name="play" /></span>
                  <span className="video-length" aria-hidden="true">{v.length}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
