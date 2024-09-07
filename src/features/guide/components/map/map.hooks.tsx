import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;

export function useMap(ref: React.RefObject<HTMLDivElement>) {
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (ref.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/standard", // 標準スタイルへ変更
        center: [139.6917, 35.6895], // 東京を中心に設定
        zoom: 12,
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [ref]);

  return mapRef;
}
