import React, { useState } from 'react';
import { Calendar, User, ClipboardList, CheckCircle2, Clock, MapPin } from 'lucide-react';

const Audits = () => {
    const [audits] = useState([
        { id: 1, type: "Gap Analysis", date: "2026-02-15", status: "Completada", auditor: "Carlos Mendez", findings: 12 },
        { id: 2, type: "Auditoría Interna", date: "2026-05-01", status: "Programada", auditor: "TBD", findings: 0 },
        { id: 3, type: "Stage 1 Certification", date: "2026-06-15", status: "Pendiente", auditor: "SGS Auditor", findings: 0 },
    ]);

    const stages = [
        { title: 'Gap Analysis', status: 'completed', date: 'Feb 15' },
        { title: 'Implementación', status: 'active', date: 'Feb - Abr' },
        { title: 'Auditoría Interna', status: 'upcoming', date: 'May 01' },
        { title: 'Certification S1', status: 'upcoming', date: 'Jun 15' },
    ];

    return (
        <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="title-page">Auditorías y Cumplimiento</h1>
                    <p className="subtitle-page">Ciclo de vida del proceso de certificación ISO 27001</p>
                </div>
                <button className="btn-primary">
                    <Calendar className="w-5 h-5" /> Nueva Auditoría
                </button>
            </div>

            <div className="card-isms">
                <h3 className="text-lg font-bold text-slate-800 mb-8 border-b-2 border-slate-50 pb-4">Timeline de Certificación</h3>
                <div className="relative flex justify-between px-10">
                    <div className="absolute top-5 left-20 right-20 h-0.5 bg-slate-100 z-0"></div>
                    {stages.map((stage, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all ${stage.status === 'completed' ? 'bg-emerald-500 border-emerald-100 text-white shadow-lg shadow-emerald-100' :
                                stage.status === 'active' ? 'bg-white border-blue-500 text-blue-600 scale-110' :
                                    'bg-white border-slate-100 text-slate-200'
                                }`}>
                                {stage.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                            </div>
                            <h4 className={`mt-4 font-bold text-sm ${stage.status === 'active' ? 'text-blue-600' : 'text-slate-700'}`}>{stage.title}</h4>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{stage.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="table-container">
                <table className="table-isms">
                    <thead>
                        <tr>
                            <th>Auditoría</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Responsable</th>
                            <th>Hallazgos</th>
                            <th className="text-right">Reporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audits.map((audit) => (
                            <tr key={audit.id}>
                                <td>
                                    <div className="font-bold text-slate-800">{audit.type}</div>
                                    <div className="text-[10px] text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
                                        <MapPin className="w-3 h-3" /> Remoto / On-site
                                    </div>
                                </td>
                                <td className="text-xs font-bold text-slate-500">{audit.date}</td>
                                <td>
                                    {audit.status === 'Completada' ? <span className="badge badge-success">Completada</span> :
                                        audit.status === 'Programada' ? <span className="badge badge-info">Programada</span> :
                                            <span className="badge badge-warning">Pendiente</span>}
                                </td>
                                <td>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                        <User className="w-3.5 h-3.5 opacity-40" /> {audit.auditor}
                                    </div>
                                </td>
                                <td>
                                    <span className={`text-lg font-black ${audit.findings > 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                                        {audit.findings}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <button className="text-blue-600 font-bold text-xs hover:underline uppercase tracking-widest">
                                        Descargar PDF
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Audits;
