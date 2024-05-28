import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 25],
});

const Map = () => {
  const [bikePumps, setBikePumps] = useState([]);

  useEffect(() => {
    // Fetch bike pump data (mock data for now)
    const fetchBikePumps = async () => {
      const data = [
        { id: 1, name: 'Pump 1', position: [59.3293, 18.0686] },
        { id: 2, name: 'Pump 2', position: [59.33258, 18.0649] },
        { id: 3, name: 'Pump 3', position: [59.334591, 18.06324] },
      ];
      setBikePumps(data);
    };

    fetchBikePumps();
  }, []);

  return (
    <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {bikePumps.map(pump => (
        <Marker key={pump.id} position={pump.position} icon={bikePumpIcon}>
          <Popup>{pump.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;