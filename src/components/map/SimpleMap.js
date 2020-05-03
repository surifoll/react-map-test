import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import MarkerComponent from "../common/MarkerComponent";
import FancyButton from "../common/FancyButton";
import { toast } from "react-toastify";

const defaultState = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

const SimpleMap = () => {
  const [localState, setLocalState] = useState(defaultState);

  const ClickHandler = () => {
    getLocation();
  };

  const onMapClickHandler = () => {
    setLocalState({
      center: {
        lat: 59.95,
        lng: 30.33,
      },
      zoom: 11,
    });
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(redrawMap);
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state == "granted") {
        if (navigator.geolocation) {
          toast.success("Success!!! Your location is marked on the map");
        } else {
          toast.error("Geolocation is not supported by this browser.");
        }
      } else {
        toast.error("Geolocation is not supported by this browser.");
      }
    });
  };

  const redrawMap = (position) => {
    setLocalState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      zoom: 11,
    });
  };

  return (
    <div className="map-sized">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_API_KEY,
        }}
        zoom={localState.zoom}
        center={localState.center}
        defaultCenter={localState.center}
        defaultZoom={localState.zoom}
        onClick={onMapClickHandler}
      >
        <FancyButton text="I'm here" ClickHandler={ClickHandler}></FancyButton>
        <MarkerComponent
          lat={localState.center.lat}
          lng={localState.center.lng}
        ></MarkerComponent>
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
