import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Modal, Button } from 'react-bootstrap';

function MapModal(props) {
  const [position, setPosition] = useState(null);
  const [addressCoords, setAddressCoords] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const getPosition = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${props.address}&format=json`);
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPosition();
  }, [props.address]);

  useEffect(() => {
    if (addressCoords) {
      setPosition(addressCoords);
    }
  }, [addressCoords]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      });
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, [props.show]);

  return (
    <Modal show={props.show} onHide={props.onHide} backdrop={false} className="modal__map">
      <Modal.Header closeButton>
        <Modal.Title>Vị trí Sân bóng</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflow: 'hidden' }}>
        <MapContainer center={position} zoom={18} ref={mapRef} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {position && <Marker position={position} />}
        </MapContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MapModal;
