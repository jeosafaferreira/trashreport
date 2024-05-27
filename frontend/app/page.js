"use client";
import styles from "./page.module.css";
import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [details, setDetails] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [sent, setSent] = useState(false);

    const enviar = () => {
        let data = {
            name: name,
            contact: contact,
            details: details,
            fileUrl: fileUrl,
        };
        axios.post("http://localhost:3000/reports", data);
        setSent(true);
    };

    return (
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
                            <div className={styles.divFormMap}>MAPA AQUI</div>
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
    );
}
