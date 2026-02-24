import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { FileText, Shield, AlertCircle, CheckCircle, BarChart3, PieChart } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
    const kpis = [
        { label: 'Progreso General', value: '45%', icon: CheckCircle, borderColor: 'border-blue-500', iconColor: 'text-blue-600', bgColor: 'bg-blue-50', sub: 'Calculado' },
        { label: 'Documentos', value: '12/25', icon: FileText, borderColor: 'border-emerald-500', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50', sub: '48% completado' },
        { label: 'Controles', value: '42/93', icon: Shield, borderColor: 'border-purple-500', iconColor: 'text-purple-600', bgColor: 'bg-purple-50', sub: 'Annex A compliance' },
        { label: 'NCs Abiertas', value: '3', icon: AlertCircle, borderColor: 'border-red-500', iconColor: 'text-red-600', bgColor: 'bg-red-50', sub: 'Sin cerrar' },
    ];

    const barData = {
        labels: ['C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
        datasets: [
            {
                label: 'Progreso %',
                data: [80, 60, 45, 30, 70, 20, 10],
                backgroundColor: 'rgba(37, 99, 235, 0.8)',
                borderRadius: 6,
            },
        ],
    };

    const doughnutData = {
        labels: ['Implementado', 'En Proceso', 'No Iniciado'],
        datasets: [
            {
                data: [42, 21, 30],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="title-page">Panel de Control ISMS</h1>
                <p className="subtitle-page">Vista general del estado de cumplimiento normativo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, i) => (
                    <div key={i} className={`card-kpi ${kpi.borderColor}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{kpi.label}</p>
                                <p className="text-3xl font-black mt-1 text-slate-800">{kpi.value}</p>
                                <p className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-tighter">{kpi.sub}</p>
                            </div>
                            <div className={`p-2.5 rounded-xl ${kpi.bgColor} ${kpi.iconColor}`}>
                                <kpi.icon className="w-6 h-6" />
                            </div>
                        </div>
                        {kpi.label === 'Progreso General' && (
                            <div className="mt-5 bg-slate-100 rounded-full h-2 overflow-hidden">
                                <div className="bg-blue-600 h-full rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card-isms">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        Progreso por Categoría (Cláusulas)
                    </h3>
                    <div className="h-[300px]">
                        <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                    </div>
                </div>
                <div className="card-isms">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
                        <PieChart className="w-5 h-5 text-emerald-600" />
                        Estado de los Controles Annex A
                    </h3>
                    <div className="h-[300px] flex items-center justify-center">
                        <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
