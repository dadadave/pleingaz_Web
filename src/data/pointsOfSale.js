// PleinGaz points of sale / distributor network.
//
// PLACEHOLDER DATA — representative Cameroon cities used until the real
// point-of-sale list (Excel) is provided. To update: replace the entries below
// with one object per point of sale. Required fields: `name`, `lat`, `lng`.
// Optional: `city`, `region`, `address`, `phone`.
//
//   { name: 'PleinGaz Akwa', city: 'Douala', region: 'Littoral',
//     address: 'Blvd de la Liberté', phone: '+237 …', lat: 4.0479, lng: 9.7003 }
//
// Coordinates are decimal degrees (WGS84). lng is negative west of Greenwich —
// all of Cameroon is positive.

export const pointsOfSale = [
  { name: 'PleinGaz Yaoundé', city: 'Yaoundé', region: 'Centre', lat: 3.848, lng: 11.5021 },
  { name: 'PleinGaz Douala', city: 'Douala', region: 'Littoral', lat: 4.0511, lng: 9.7679 },
  { name: 'PleinGaz Bafoussam', city: 'Bafoussam', region: 'Ouest', lat: 5.4778, lng: 10.4176 },
  { name: 'PleinGaz Bamenda', city: 'Bamenda', region: 'Nord-Ouest', lat: 5.9597, lng: 10.1459 },
  { name: 'PleinGaz Garoua', city: 'Garoua', region: 'Nord', lat: 9.3017, lng: 13.3921 },
  { name: 'PleinGaz Maroua', city: 'Maroua', region: 'Extrême-Nord', lat: 10.591, lng: 14.3159 },
  { name: 'PleinGaz Ngaoundéré', city: 'Ngaoundéré', region: 'Adamaoua', lat: 7.3167, lng: 13.5833 },
  { name: 'PleinGaz Bertoua', city: 'Bertoua', region: 'Est', lat: 4.5772, lng: 13.6846 },
  { name: 'PleinGaz Ebolowa', city: 'Ebolowa', region: 'Sud', lat: 2.9, lng: 11.15 },
  { name: 'PleinGaz Buéa', city: 'Buéa', region: 'Sud-Ouest', lat: 4.1537, lng: 9.292 },
  { name: 'PleinGaz Kribi', city: 'Kribi', region: 'Sud', lat: 2.937, lng: 9.91 },
  { name: 'PleinGaz Limbé', city: 'Limbé', region: 'Sud-Ouest', lat: 4.0186, lng: 9.2147 },
  { name: 'PleinGaz Édéa', city: 'Édéa', region: 'Littoral', lat: 3.8, lng: 10.1333 },
  { name: 'PleinGaz Kumba', city: 'Kumba', region: 'Sud-Ouest', lat: 4.6363, lng: 9.4469 },
  { name: 'PleinGaz Dschang', city: 'Dschang', region: 'Ouest', lat: 5.45, lng: 10.0667 },
];

// Rough geographic centre of Cameroon, used as the map's initial view.
export const CAMEROON_CENTER = { lat: 5.7, lng: 12.5 };
export const CAMEROON_ZOOM = 6;
