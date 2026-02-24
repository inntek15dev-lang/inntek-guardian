import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Plus, Filter, FileText, ExternalLink, Calendar, User, Clock } from 'lucide-react';

const Documents = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDocs();
    }, []);

    const fetchDocs = async () => {
        try {
            // For Demo purposes we use mock data if server fails
            setDocs([
                { id: 1, name: "Alcance del SGSI", category: "Cláusula 4", subcategory: "4.3", status: "Aprobado", responsible: "Juan Perez", deadline: "2026-03-01", mandatory: true },
                { id: 2, name: "Contexto de la Organización", category: "Cláusula 4", subcategory: "4.1", status: "En Revisión", responsible: "Ana Maria", deadline: "2026-03-15", mandatory: true },
                { id: 3, name: "Política de Seguridad", category: "Cláusula 5", subcategory: "5.2", status: "Implementado", responsible: "Carlos Ruiz", deadline: "2026-02-28", mandatory: true },
                { id: 4, name: "Evaluación de Riesgos", category: "Cláusula 6", subcategory: "6.1.2", status: "Pendiente", responsible: "Juan Perez", deadline: "2026-04-10", mandatory: true },
            ]);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Implementado': return <span className="badge badge-success">Implementado</span>;
            case 'Aprobado': return <span className="badge badge-info">Aprobado</span>;
            case 'En Revisión': return <span className="badge badge-warning">En Revisión</span>;
            case 'Pendiente': return <span className="badge badge-danger">Pendiente</span>;
            default: return <span className="badge border-slate-200 text-slate-500">{status}</span>;
        }
    };

    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="title-page italic">Documentación Obligatoria</h1>
                    <p className="subtitle-page">Gestión centralizada del set documental ISO 27001:2022</p>
                </div>
                <button className="btn-primary">
                    <Plus className="w-5 h-5" /> Nuevo Documento
                </button>
            </div>

            <div className="card-isms !p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative col-span-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Buscar por nombre o cláusula..." className="input-isms pl-10" />
                    </div>
                    <select className="input-isms">
                        <option>Todas las Cláusulas</option>
                        <option>Cláusula 4</option>
                        <option>Cláusula 5</option>
                        <option>Cláusula 6</option>
                    </select>
                    <button className="btn-secondary flex items-center justify-center gap-2">
                        <Filter className="w-4 h-4" /> Filtros
                    </button>
                </div>
            </div>

            <div className="table-container">
                <table className="table-isms">
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Cláusula</th>
                            <th>Estado</th>
                            <th>Responsable</th>
                            <th>Plazo</th>
                            <th className="text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docs.map((doc) => (
                            <tr key={doc.id}>
                                <td className="max-w-xs">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-slate-800">{doc.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-xs font-bold text-slate-400">{doc.category}</span>
                                    <p className="text-[10px] text-slate-300 font-mono">{doc.subcategory}</p>
                                </td>
                                <td>{getStatusBadge(doc.status)}</td>
                                <td className="text-xs font-semibold">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">
                                            {doc.responsible.charAt(0)}
                                        </div>
                                        {doc.responsible}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                        <Calendar className="w-3.5 h-3.5 opacity-50" />
                                        {doc.deadline}
                                    </div>
                                </td>
                                <td className="text-right">
                                    <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                                        <ExternalLink className="w-4 h-4" />
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

export default Documents;
