"use client";

import { useRouter } from "next/navigation";

export default function ReportItem({ report }) {
    const router = useRouter();
    return (
        <tr style={{ cursor: "pointer" }} onClick={() => router.push(`/reports/${report.id}`)}>
            <td>{report.id}</td>
            <td>{report.name}</td>
            <td>{report.contact}</td>
            <td>{report.details}</td>
            <td>{report.created_at}</td>
        </tr>
    );
}
