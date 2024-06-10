"use client";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function AppMap({ marker }) {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map defaultCenter={marker} defaultZoom={15} gestureHandling={"greedy"} disableDefaultUI={true}>
                {marker && <Marker position={marker} />}
            </Map>
        </APIProvider>
    );
}
