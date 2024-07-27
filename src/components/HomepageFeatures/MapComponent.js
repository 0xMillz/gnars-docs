// MapComponent.js
import React from 'react';
import useDynamicLeaflet from './useDynamicLeaflet';

const MapComponent = () => {
    const { MapContainer, TileLayer, Marker, Popup, icon } = useDynamicLeaflet();

    const position = [0, 0]; // Center of the map
    const locations = [
        { position: [-22.903044816157887, -43.17337963607664], label: 'Praca XV', imageUrl: "/rocknogles.gif" },
        { position: [33.81427083205093, -118.21369178292444], label: 'Silverado', imageUrl: "" },
        { position: [41.965330396404994, -87.6638363963253], label: 'Chicago', imageUrl: "" },
        { position: [-30.017866183250845, -51.17985537072372], label: 'Iapi', imageUrl: "" },
        { position: [9.0820, 8.6753], label: 'Africa', imageUrl: "" },
        { position: [-23.4990518351234, -46.624191393782525], label: 'Sopa de Letras', imageUrl: "/sopadeletras.png" },
        { position: [-20.24901180535837, -42.029355475124554], label: 'Manhuaçu', imageUrl: "/manhuacurail.png" },
        { position: [42.737274371776024, 140.9109422458354], label: 'Rusutsu Resort', imageUrl: "/rutsujpg.jpg" },
        { position: [33.71824554962641, -117.84727040288683], label: 'OC Ramp', imageUrl: "" },
        { position: [40.7128, -74.0060], label: 'New York City', imageUrl: "" },
        { position: [34.0522, -118.2437], label: 'Los Angeles', imageUrl: "" },
        { position: [35.6895, 139.6917], label: 'Tokyo', imageUrl: "" },
        { position: [33.8688, 151.2093], label: 'Sydney', imageUrl: "" },
        { position: [41.3851, 2.1734], label: 'Barcelona', imageUrl: "" },
        { position: [52.5200, 13.4050], label: 'Berlin', imageUrl: "" },
        { position: [35.6762, 139.6503], label: 'Seoul', imageUrl: "" },
        { position: [39.7392, -104.9903], label: 'Denver', imageUrl: "" },
        { position: [55.7558, 37.6173], label: 'Moscow', imageUrl: "" },
        { position: [51.5074, -0.1278], label: 'London', imageUrl: "" },
        { position: [19.4326, -99.1332], label: 'Mexico City', imageUrl: "" },
        { position: [13.7563, 100.5018], label: 'Bangkok', imageUrl: "" },
        { position: [22.3964, 114.1095], label: 'Hong Kong', imageUrl: "" },
        { position: [41.0082, 28.9784], label: 'Istanbul', imageUrl: "" }
    ];

    return MapContainer ? (
        <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {locations.map(({ position, label, imageUrl }, index) => (
                <Marker key={index} position={position} icon={icon}>
                    <Popup>
                        <div>
                            {imageUrl && <img src={imageUrl} alt={label} style={{ width: '100%' }} />}
                            <p>{label}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    ) : (
        <div>Loading map...</div>
    );
};

export default MapComponent;
