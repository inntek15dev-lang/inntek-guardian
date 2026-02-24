import React from 'react';
import { LayoutDashboard, FileText, ShieldCheck, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Documentos', path: '/docs', icon: FileText },
        { name: 'Controles', path: '/controls', icon: ShieldCheck },
        { name: 'Auditorías', path: '/audits', icon: ClipboardCheck },
        { name: 'No Conformidades', path: '/nc', icon: AlertTriangle },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-r from-primary-700 to-primary-900 text-white shadow-lg py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-black flex items-center gap-3 tracking-tight">
                            <ShieldCheck className="w-9 h-9 text-emerald-400" />
                            Inntek Guardian
                        </h1>
                        <p className="text-primary-100 text-xs font-bold opacity-70 uppercase tracking-widest ml-12">ISO 27001 Compliance Suite</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm bg-primary-800 px-3 py-1 rounded-full border border-primary-600">Admin Mode</span>
                    </div>
                </div>
            </header>

            <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="container mx-auto px-6">
                    <div className="flex space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all border-b-2 ${location.pathname === item.path
                                    ? 'text-primary-600 border-primary-600 bg-primary-50/50'
                                    : 'text-slate-500 border-transparent hover:text-primary-500 hover:bg-slate-50'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="flex-1 container mx-auto px-6 py-8">
                {children}
            </main>

            <footer className="bg-white border-t border-slate-200 py-6">
                <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
                    &copy; 2026 Inntek Guardian - ISO 27001 ISMS Platform. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
