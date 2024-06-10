"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteReport({ id }) {
    const router = useRouter();

    const deleteReport = () => {
        axios.delete(`http://localhost:3333/reports/${id}`).then(() => (window.location.href = "/reports"));
    };
    return (
        <button style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={deleteReport}>
            Resolvido
            <img src="/assets/img/check.svg" style={{ marginLeft: "10px", width: "20px", height: "20px" }} />
        </button>
    );
}
