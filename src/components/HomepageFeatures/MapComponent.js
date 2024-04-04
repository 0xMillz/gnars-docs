// MapComponent.js
import React from 'react';
import useDynamicLeaflet from './useDynamicLeaflet'; // Adjust the path according to your project structure

const MapComponent = () => {
    const { MapContainer, TileLayer, Marker, Popup, icon } = useDynamicLeaflet();

    const position = [0, 0]; // Center of the map
    const locations = [
        { position: [-22.903044816157887, -43.17337963607664], label: 'Praca XV', imageUrl: "https://i.ibb.co/NsDT8zr/ezgif-com-video-to-gif.gif" },
        { position: [33.81427083205093, -118.21369178292444], label: 'Silverado', imageUrl: "" },
        { position: [41.965330396404994, -87.6638363963253], label: 'Chicago', imageUrl: "" },
        { position: [-30.017866183250845, -51.17985537072372], label: 'Iapi', imageUrl: "" },
        { position: [9.0820, 8.6753], label: 'Africa', imageUrl: "" },
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
