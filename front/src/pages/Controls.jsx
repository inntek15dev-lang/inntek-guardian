import React, { useState } from 'react';
import { Shield, ChevronDown, CheckCircle2, Circle, Search, Layers, Activity } from 'lucide-react';

const Controls = () => {
    const [expandedTab, setExpandedTab] = useState('A.5');

    const categories = [
        { id: 'A.5', name: 'Organizacional', count: '37', color: 'border-blue-500', icon: Layers },
        { id: 'A.6', name: 'Personas', count: '8', color: 'border-emerald-500', icon: Activity },
        { id: 'A.7', name: 'Físico', count: '14', color: 'border-purple-500', icon: Shield },
        { id: 'A.8', name: 'Tecnológico', count: '34', color: 'border-orange-500', icon: Activity },
    ];

    const controls = [
        { id: 'A.5.1', name: 'Políticas de seguridad', status: 'Implementado', category: 'A.5', description: 'Se han definido y aprobado un conjunto de políticas para la seguridad de la información.' },
        { id: 'A.5.2', name: 'Roles y responsabilidades', status: 'En Implementación', category: 'A.5', description: 'Todos los roles y responsabilidades de seguridad de la información han sido definidos.' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div>
                <h1 className="title-page">Controles ISO 27001:2022</h1>
                <p className="subtitle-page">Gestión y monitoreo del cumplimiento del Anexo A</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setExpandedTab(cat.id)}
                        className={`card-kpi transition-all ${expandedTab === cat.id ? `${cat.color} ring-2 ring-slate-100 shadow-md` : 'border-transparent text-slate-400 grayscale opacity-70'
                            }`}
                    >
                        <div className="flex justify-between items-center mb-1">
                            <cat.icon className="w-5 h-5" />
                            <span className="text-xl font-black">{cat.count}</span>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest">{cat.id}</p>
                        <h3 className="font-bold text-slate-800">{cat.name}</h3>
                    </button>
                ))}
            </div>

            <div className="card-isms !p-0">
                <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Filtrar controles por ID o nombre..." className="input-isms pl-10" />
                    </div>
                </div>
                <div className="divide-y divide-slate-100">
                    {controls.filter(c => c.category === expandedTab).map((ctrl) => (
                        <div key={ctrl.id} className="group transition-colors">
                            <div className="p-6 flex justify-between items-center cursor-pointer hover:bg-slate-50/50">
                                <div className="flex items-center gap-6">
                                    <span className="font-mono text-lg font-black text-blue-600 w-16">{ctrl.id}</span>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{ctrl.name}</h4>
                                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">{ctrl.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className={`badge ${ctrl.status === 'Implementado' ? 'badge-success' : 'badge-warning'}`}>
                                        {ctrl.status}
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Controls;
