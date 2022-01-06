import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Mapa = ({ position, name }) => {
  return (
    <MapContainer
      center={position}
      zoom={6}
      style={{ height: '200px' }}
      className="w-full md:w-11/12 md:animate-inDownSlash p-4"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  )
}
