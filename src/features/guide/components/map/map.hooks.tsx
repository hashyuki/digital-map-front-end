import { useState, useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { MapContext } from "./map";

/* -------------------------------------------------------------------------------------------------
 * Map
 * -----------------------------------------------------------------------------------------------*/
const useMap = (containerRef: React.RefObject<HTMLDivElement>) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (containerRef.current && !map) {
      const newMap = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/standard",
        center: [139.6917, 35.6895],
        zoom: 12,
      });
      setMap(newMap);
    }
  }, [containerRef, map]);

  return map;
};

/* -------------------------------------------------------------------------------------------------
 * UserMarker
 * -----------------------------------------------------------------------------------------------*/
const useUserMarker = (isVisible: boolean) => {
  const map = useContext(MapContext);
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (map) {
      if (isVisible) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = new mapboxgl.LngLat(longitude, latitude);

            if (markerRef.current) {
              markerRef.current.remove();
            }

            const markerElement = document.createElement("div");
            markerElement.style.width = "16px";
            markerElement.style.height = "16px";
            markerElement.style.backgroundColor = "blue";
            markerElement.style.border = "2px solid white";
            markerElement.style.borderRadius = "50%";
            markerRef.current = new mapboxgl.Marker({
              element: markerElement,
            })
              .setLngLat(userLocation)
              .addTo(map);
            map.flyTo({
              center: [userLocation.lng, userLocation.lat] as [number, number],
            });
          },
          (error) => {
            console.error("ユーザーの位置情報を取得できませんでした。", error);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 30000,
          },
        );
      } else {
        if (markerRef.current) {
          markerRef.current.remove();
        }

        // Reset marker to default location
        const defaultLocation = new mapboxgl.LngLat(139.6917, 35.6895); // Default location (Tokyo)
        map.flyTo({
          center: [defaultLocation.lng, defaultLocation.lat] as [
            number,
            number,
          ],
        });
      }
    }
  }, [map, isVisible]);
};

export { useMap, useUserMarker };
