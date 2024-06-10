import FileImg from "@/components/FileImg";
import styles from "../../page.module.css";
import axios from "axios";
import AppMap from "@/components/AppMap";
import Link from "next/link";
import DeleteReport from "@/components/DeleteReport";
import { redirect } from "next/navigation";

export default async function FilesPage({ params }) {
    const { data } = await axios.get(`http://localhost:3333/reports/${params.id}`);
    if (!data) {
        redirect("/reports");
    }

    return (
        <div className={styles.divContainer}>
            <div className={styles.divTitle}>
                <img src="/assets/img/garbage.png" className={styles.imgTitle} />
                TrashReport
            </div>
            <div className={styles.divForm}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link href="/reports">
                        <img src="/assets/img/back-button.svg" className={styles.imgBack} />
                    </Link>
                    <DeleteReport id={data.id} />
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Local:</label>
                </div>
                <div className={styles.row}>
                    <div className={styles.divFormMap}>
                        <AppMap marker={{ lat: data.lat, lng: data.lng }} />
                    </div>
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Arquivo: {data.file_name}</label>
                </div>
                <div className={styles.row}>
                    <FileImg src={data.file_data} />
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Nome: {data.name}</label>
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Contato: {data.contact}</label>
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Detalhes: {data.details}</label>
                </div>
            </div>
        </div>
    );
}
