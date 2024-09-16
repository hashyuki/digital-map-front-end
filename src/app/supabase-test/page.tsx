"use client";

import { useEffect, useState } from "react";

// POI データの型定義
type POI = {
  name: string;
  latitude: number;
  longitude: number;
  img_path_array: string[];
  description: string;
};

const PoiPage = () => {
  const [poiList, setPoiList] = useState<POI[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/poi");
        const data = await res.json();

        if (res.ok) {
          console.log("Data fetched:", data);
          setPoiList(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>POI List</h1>
      <ul>
        {poiList.length === 0 ? (
          <li>No data available</li>
        ) : (
          poiList.map((poi) => (
            <li key={poi.name}>
              <h2>{poi.name}</h2>
              <p>Latitude: {poi.latitude}</p>
              <p>Longitude: {poi.longitude}</p>
              <p>Description: {poi.description}</p>
              <div>
                {poi.img_path_array.length === 0 ? (
                  <p>No images available</p>
                ) : (
                  poi.img_path_array.map((imgPath, index) => (
                    <img
                      key={index}
                      src={`http://127.0.0.1:54321/storage/v1/object/public/${imgPath}`}
                      alt={`${poi.name} image ${index + 1}`}
                      style={{
                        width: "50%",
                        height: "50%",
                        marginRight: "10px",
                      }}
                    />
                  ))
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PoiPage;
