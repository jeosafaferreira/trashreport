"use client";
import styles from "./page.module.css";
import axios from "axios";
import { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Home() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [details, setDetails] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [sent, setSent] = useState(false);
    const [marker, setMarker] = useState();

    const enviar = () => {
        let data = {
            name: name,
            contact: contact,
            details: details,
            fileUrl: fileUrl,
            lat: marker.lat,
            lng: marker.lng,
        };
        axios.post("http://localhost:3333/reports", data);
        setSent(true);
    };

    const addMarker = (e) => {
        setMarker(e.detail.latLng);
    };

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <div className={styles.divContainer}>
                <div className={styles.divTitle}>
                    <img src="/assets/img/garbage.png" className={styles.imgTitle} />
                    TrashReport
                </div>
                <div className={styles.divForm}>
                    {sent && (
                        <>
                            Registro efetuado com sucesso! <br />
                            Em breve um de nossos colaboradores estará vistoriando o local informado.
                        </>
                    )}

                    {!sent && (
                        <>
                            <div className={styles.row}>
                                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Qual o seu nome? (Opcional)" />
                            </div>

                            <div className={styles.row}>
                                <input type="text" onChange={(e) => setContact(e.target.value)} placeholder="Qual o seu contato? (Opcional)" />
                            </div>

                            <div className={styles.row}>
                                <textarea rows="4" onChange={(e) => setDetails(e.target.value)} placeholder="Detalhes do local e informações adicionais ..."></textarea>
                            </div>

                            <div className={styles.row}>
                                <label className={styles.label}>Foto:</label>
                            </div>
                            <div className={styles.row}>
                                <input type="file" />
                            </div>

                            <div className={styles.row}>
                                <label className={styles.label}>Local:</label>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.divFormMap}>
                                    <Map
                                        defaultCenter={{ lat: -3.7681584498476304, lng: -38.47808428089998 }}
                                        defaultZoom={15}
                                        gestureHandling={"greedy"}
                                        disableDefaultUI={true}
                                        onClick={addMarker}
                                    >
                                        {marker && <Marker position={marker} />}
                                    </Map>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.divFormButtonSend}>
                                    <button className={styles.btnFormButtonSend} onClick={enviar}>
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </APIProvider>
    );
}
