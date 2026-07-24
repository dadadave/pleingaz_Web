import { NEWS } from '../data.js';
import { Icon } from './Icons.jsx';

export default function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-grid">
          <div>
            <div className="news-top reveal"><span className="eyebrow">Actualités PleinGaz</span></div>
            <div className="news-cards">
              {NEWS.map((n) => (
                <article className="news-card reveal" key={n.title}>
                  <div className="thumb">
                    <div className={`ph ${n.ph}`} />
                    <div className="ph-icon"><Icon name={n.icon} strokeWidth={1.4} /></div>
                  </div>
                  <div className="body">
                    <div className="news-meta">
                      <span className="date">◷ {n.date}</span>
                      <span className="tag">● News</span>
                    </div>
                    <h3>{n.title}</h3>
                    <p>{n.excerpt}</p>
                    <a href="#" className="read-more">
                      Lire la suite <span className="box"><Icon name="arrow" strokeWidth={2.4} /></span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="videos reveal">
            <span className="eyebrow">Vidéos</span>
            <article className="video-card">
              <div className="video-thumb">
                <div className="ph ph-green" />
                <div className="video-play"><span className="pbtn"><Icon name="play" /></span></div>
              </div>
              <div className="video-info">
                <span className="date">◷ 03 01 2026</span>
                <h3>PleinGaz sensibilise aux incidents liés au gaz</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
