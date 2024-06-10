import ReportItem from "@/components/ReportItem";
import styles from "../page.module.css";
import axios from "axios";

export default async function FilesPage() {
    const { data } = await axios.get("http://localhost:3333/reports");
    for (const d of data) {
        const date = new Date(d.created_at);
        let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
        let gmtMinus3 = new Date(utcTime - 6 * 60 * 60000);
        d.created_at = gmtMinus3.toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    }
    return (
        <div className={styles.divContainer}>
            <div className={styles.divTitle}>
                <img src="/assets/img/garbage.png" className={styles.imgTitle} />
                TrashReport
            </div>
            <div className={styles.divForm}>
                <div className={styles.row}>
                    <label className={styles.label}>Chamados:</label>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Contato</th>
                            <th>Detalhes</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <ReportItem report={d} key={d.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
