import { Icon } from './Icons.jsx';
import { useLang } from '../i18n.jsx';

export default function News() {
  const { t } = useLang();
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-grid">
          <div>
            <div className="news-top reveal"><span className="eyebrow">{t.news.eyebrow}</span></div>
            <div className="news-carousel">
             <div className="news-track">
              {[...t.news.items, ...t.news.items].map((n, i) => (
                <article
                  className="news-card"
                  key={i}
                  aria-hidden={i >= t.news.items.length ? 'true' : undefined}
                >
                  <div className="thumb">
                    <div className={`ph ${n.ph}`} />
                    <div className="ph-icon"><Icon name={n.icon} strokeWidth={1.4} /></div>
                  </div>
                  <div className="body">
                    <div className="news-meta">
                      <span className="date">◷ {n.date}</span>
                      <span className="tag">● {t.news.tag}</span>
                    </div>
                    <h3>{n.title}</h3>
                    <p>{n.excerpt}</p>
                    <a href="#" className="read-more">
                      {t.news.readMore} <span className="box"><Icon name="arrow" strokeWidth={2.4} /></span>
                    </a>
                  </div>
                </article>
              ))}
             </div>
            </div>
          </div>

          <div className="videos reveal">
            <span className="eyebrow">{t.news.videosEyebrow}</span>
            <article className="video-card">
              <div className="video-thumb">
                <div className="ph ph-green" />
                <div className="video-play"><span className="pbtn"><Icon name="play" /></span></div>
              </div>
              <div className="video-info">
                <span className="date">◷ {t.news.video.date}</span>
                <h3>{t.news.video.title}</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
