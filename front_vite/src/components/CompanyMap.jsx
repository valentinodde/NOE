import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet default icon with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function CompanyMap({ lat, lng, siret }) {
  if (!lat || !lng) return null;

  return (
    <div
      className="bg-surface-low rounded-2xl overflow-hidden"
      style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
    >
      <div className="bg-surface-highest px-5 py-3">
        <h3 className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
          Localisation
        </h3>
      </div>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: '300px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>SIRET {siret}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
