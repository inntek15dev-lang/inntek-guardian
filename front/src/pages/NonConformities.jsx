import React, { useState } from 'react';
import { AlertTriangle, Plus, Search, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const NonConformities = () => {
    const [ncs] = useState([
        { id: 'NC-2026-001', type: 'Mayor', description: 'Falta de evidencia en revisión por la dirección', control: '9.3', status: 'En Tratamiento', deadline: '2026-03-15' },
        { id: 'NC-2026-002', type: 'Menor', description: 'Registro de capacitación incompleto', control: '7.2', status: 'Abierta', deadline: '2026-04-01' },
        { id: 'NC-2026-003', type: 'Mejora', description: 'Optimizar proceso de backup', control: '8.13', status: 'Cerrada', deadline: '2026-02-28' },
    ]);

    const stats = [
        { label: 'Criticas', count: 1, color: 'border-red-500', icon: AlertTriangle, iconColor: 'text-red-500' },
        { label: 'En Curso', count: 1, color: 'border-amber-500', icon: Clock, iconColor: 'text-amber-500' },
        { label: 'Cerradas', count: 1, color: 'border-emerald-500', icon: CheckCircle, iconColor: 'text-emerald-500' },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="title-page italic flex items-center gap-2">
                        <AlertTriangle className="text-red-500 w-8 h-8" />
                        No Conformidades
                    </h1>
                    <p className="subtitle-page">Tratamiento de hallazgos y acciones de mejora</p>
                </div>
                <button className="btn-danger">
                    <Plus className="w-5 h-5" /> Registrar NC
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className={`card-kpi ${stat.color}`}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                <p className="text-4xl font-black mt-1 text-slate-800">{stat.count}</p>
                            </div>
                            <stat.icon className={`w-10 h-10 ${stat.iconColor} opacity-20`} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="table-container">
                <div className="p-4 bg-slate-50 border-b border-slate-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Filtrar por ID, Control o Hallazgo..." className="input-isms pl-10 bg-white" />
                    </div>
                </div>
                <div className="divide-y divide-slate-100">
                    {ncs.map((nc) => (
                        <div key={nc.id} className="p-6 hover:bg-slate-50/50 transition-colors flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-black bg-slate-800 text-white px-2 py-0.5 rounded tracking-tighter">{nc.id}</span>
                                    <span className={`badge ${nc.type === 'Mayor' ? 'badge-danger' : nc.type === 'Menor' ? 'badge-warning' : 'badge-info'}`}>
                                        {nc.type}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Control {nc.control}</span>
                                </div>
                                <h4 className="font-bold text-slate-800 text-xl mb-1">{nc.description}</h4>
                                <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                        <Clock className="w-3.5 h-3.5 text-slate-300" />
                                        Vence: {nc.deadline}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-3 min-w-[150px]">
                                <span className={`badge ${nc.status === 'Cerrada' ? 'badge-success' : 'badge-warning'} !px-4 !py-1.5 !rounded-full`}>
                                    {nc.status}
                                </span>
                                <button className="text-blue-600 hover:text-blue-800 font-black text-xs uppercase tracking-widest flex items-center gap-1 group">
                                    Gestionar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NonConformities;
