import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link, useLocation } from 'react-router-dom';
import { pointsOfSale, CAMEROON_CENTER, CAMEROON_ZOOM } from '../data/pointsOfSale.js';
import { useLang } from '../i18n.jsx';
import { useReveal } from '../useReveal.js';

// Brand-red teardrop pin drawn as an inline SVG so no marker image assets are
// bundled and the colour matches PleinGaz.
const pinIcon = L.divIcon({
  className: 'pos-pin',
  html:
    '<svg viewBox="0 0 24 36" width="30" height="45" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 24 12 24s12-15.6 12-24C24 5.4 18.6 0 12 0Z" ' +
    'fill="#EE1C25" stroke="#fff" stroke-width="1.5"/>' +
    '<circle cx="12" cy="12" r="4.5" fill="#fff"/></svg>',
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -42],
});

// Frame the map to the actual markers once, on mount.
function FitToMarkers({ points }) {
  const map = useMap();
  useEffect(() => {
    if (!points.length) return;
    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, points]);
  return null;
}

// "Points de vente" page: a full-width interactive Leaflet / OpenStreetMap of
// PleinGaz's distributor network, one marker per point of sale.
export default function Network() {
  const { t } = useLang();
  const n = t.network;
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <main className="network-page">
      <div className="container network-head reveal">
        <div>
          <span className="eyebrow">{n.crumbParent}</span>
          <h1>{n.title}</h1>
        </div>
        <nav className="crumb" aria-label="breadcrumb">
          <Link to="/">{t.about.home}</Link>
          <span>›</span>
          <span className="on">{n.title}</span>
        </nav>
      </div>

      <div className="container network-lead reveal">
        <p>{n.intro}</p>
      </div>

      <div className="network-map-full">
        <MapContainer
          center={[CAMEROON_CENTER.lat, CAMEROON_CENTER.lng]}
          zoom={CAMEROON_ZOOM}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitToMarkers points={pointsOfSale} />
          {pointsOfSale.map((p, i) => (
            <Marker key={i} position={[p.lat, p.lng]} icon={pinIcon}>
              <Popup>
                <span className="pos-pop">
                  <strong>{p.name}</strong>
                  {(p.type || p.city) && (
                    <span className="pos-pop-sub">
                      {[p.type, p.city].filter(Boolean).join(' · ')}
                    </span>
                  )}
                  {p.address && <span className="pos-pop-addr">{p.address}</span>}
                  {p.phone && (
                    <a className="pos-pop-tel" href={`tel:${p.phone.split('/')[0].replace(/\s/g, '')}`}>
                      {p.phone}
                    </a>
                  )}
                </span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="network-overlay">
          <span className="network-overlay-ico" aria-hidden="true">
            <svg viewBox="0 0 24 36" width="26" height="39" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 24 12 24s12-15.6 12-24C24 5.4 18.6 0 12 0Z" fill="#fff" />
              <circle cx="12" cy="12" r="4.5" fill="#EE1C25" />
            </svg>
          </span>
          <h2>{n.title}</h2>
          <p>{pointsOfSale.length} {n.overlayCount}</p>
        </div>
      </div>

      <div className="container network-lead reveal">
        <p className="network-note">{n.note}</p>
      </div>
    </main>
  );
}
