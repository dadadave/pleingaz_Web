import { useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function News() {
  const { t } = useLang();
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
        <div className="videos reveal">
          <span className="eyebrow">{t.news.videosEyebrow}</span>
          <article className={`video-card${playing ? ' is-playing' : ''}`}>
            <div className="video-thumb">
              <video
                ref={video}
                className="video-media"
                src={t.news.video.src}
                poster={t.news.video.poster}
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
                  aria-label={`${t.news.video.play} : ${t.news.video.title}`}
                  onClick={start}
                >
                  <span className="video-veil" aria-hidden="true" />
                  <span className="pbtn"><Icon name="play" /></span>
                </button>
              )}
            </div>
            <div className="video-info">
              <span className="date">◷ {t.news.video.date}</span>
              <h3>{t.news.video.title}</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
