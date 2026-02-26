'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const API = process.env.NEXT_PUBLIC_API_URL;

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const SIDEBAR_GROUPS = [
    {
        label: 'Main',
        items: [
            { key: 'dashboard', href: '/admin', label: 'Dashboard', icon: 'grid' },
        ]
    },
    {
        label: 'Content',
        items: [
            { key: 'categories', href: '/admin/categories', label: 'Categories', icon: 'tag' },
            { key: 'posts', href: '/admin/posts', label: 'Posts', icon: 'file' },
            { key: 'comments', href: '/admin/comments', label: 'Comments', icon: 'chat' },
            { key: 'faqs', href: '/admin/faqs', label: 'FAQs', icon: 'faq' },
            { key: 'service_cards', href: '/admin/service_cards', label: 'Service Cards', icon: 'cards' },
        ]
    },
    {
        label: 'Geography',
        items: [
            { key: 'states', href: '/admin/states', label: 'States', icon: 'map' },
            { key: 'citys', href: '/admin/citys', label: 'Cities', icon: 'building' },
            { key: 'metrocitys', href: '/admin/metrocitys', label: 'Metro Cities', icon: 'metro' },
        ]
    },
    {
        label: 'Leads',
        items: [
            { key: 'contacts', href: '/admin/contacts', label: 'Contacts', icon: 'mail' },
            { key: 'footercontacts', href: '/admin/footercontacts', label: 'Footer Contacts', icon: 'inbox' },
            { key: 'landingcontacts', href: '/admin/landingcontacts', label: 'Landing Contacts', icon: 'page' },
            { key: 'schedule_meetings', href: '/admin/schedule_meetings', label: 'Meetings', icon: 'calendar' },
            { key: 'careers', href: '/admin/careers', label: 'Careers', icon: 'briefcase' },
        ]
    },
    {
        label: 'System',
        items: [
            { key: 'settings', href: '/admin/settings', label: 'Settings', icon: 'gear' },
            { key: 'users', href: '/admin/users', label: 'Users', icon: 'users' },
        ]
    },
];

function SidebarIcon({ icon, size = 18 }) {
    const s = size;
    const icons = {
        grid: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
        tag: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
        file: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        chat: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
        map: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
        building: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><line x1="8" y1="6" x2="8" y2="6.01" /><line x1="16" y1="6" x2="16" y2="6.01" /><line x1="12" y1="6" x2="12" y2="6.01" /><line x1="8" y1="10" x2="8" y2="10.01" /><line x1="16" y1="10" x2="16" y2="10.01" /><line x1="12" y1="10" x2="12" y2="10.01" /><line x1="8" y1="14" x2="8" y2="14.01" /><line x1="16" y1="14" x2="16" y2="14.01" /><line x1="12" y1="14" x2="12" y2="14.01" /></svg>,
        metro: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="14" rx="2" /><path d="M4 17l-2 4h20l-2-4" /><line x1="8" y1="21" x2="8" y2="21.01" /><line x1="16" y1="21" x2="16" y2="21.01" /><line x1="12" y1="7" x2="12" y2="13" /><line x1="8" y1="10" x2="16" y2="10" /></svg>,
        globe: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
        map2: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        city: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><line x1="9" y1="9" x2="9" y2="9.01" /><line x1="9" y1="13" x2="9" y2="13.01" /><line x1="9" y1="17" x2="9" y2="17.01" /></svg>,
        mail: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
        inbox: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" /></svg>,
        page: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><polyline points="14 2 14 8 20 8" /></svg>,
        calendar: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
        briefcase: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>,
        gear: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>,
        users: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
        logout: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
        menu: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
        x: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
        chevronDown: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>,
        faq: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
        cards: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="7" rx="2" /><rect x="2" y="14" width="20" height="7" rx="2" /></svg>,
    };
    return icons[icon] || icons.file;
}

function Sidebar({ open, onClose }) {
    const pathname = usePathname();
    const router = useRouter();
    const [collapsed, setCollapsed] = useState({});

    const toggleGroup = (label) => setCollapsed(p => ({ ...p, [label]: !p[label] }));

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        router.push('/admin/login');
    };

    const isActive = (href) => {
        if (href === '/admin') return pathname === '/admin';
        return pathname.startsWith(href);
    };

    const sidebarContent = (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-5 py-5 border-b border-white/5">
                <Link href="/admin" className="flex items-center gap-3">
                    {/* <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                        </svg>
                    </div> */}
                    <div>
                        <p className="text-white font-bold text-sm leading-tight">Digital Solution 360</p>
                        <p className="text-white/40 text-[10px]">Admin Panel</p>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-4 scrollbar-thin">
                {SIDEBAR_GROUPS.map(group => (
                    <div key={group.label}>
                        <button
                            onClick={() => toggleGroup(group.label)}
                            className="flex items-center justify-between w-full px-2 mb-1 cursor-pointer"
                        >
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">{group.label}</span>
                            <span className={`text-white/20 transition-transform duration-200 ${collapsed[group.label] ? '-rotate-90' : ''}`}>
                                <SidebarIcon icon="chevronDown" size={12} />
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {!collapsed[group.label] && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    {group.items.map(item => (
                                        <Link
                                            key={item.key}
                                            href={item.href}
                                            onClick={onClose}
                                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 mb-0.5 group
                                                ${isActive(item.href)
                                                    ? 'bg-blue-600/20 text-blue-400'
                                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className={isActive(item.href) ? 'text-blue-400' : 'text-white/40 group-hover:text-white/70'}>
                                                <SidebarIcon icon={item.icon} size={16} />
                                            </span>
                                            {item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </nav>

            {/* Logout */}
            <div className="px-3 py-4 border-t border-white/5">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/10 w-full transition-all cursor-pointer"
                >
                    <SidebarIcon icon="logout" size={16} />
                    Sign Out
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden lg:flex w-64 bg-slate-900/95 border-r border-white/5 flex-col fixed inset-y-0 left-0 z-40">
                {sidebarContent}
            </aside>

            {/* Mobile overlay */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                            className="fixed inset-y-0 left-0 w-64 bg-slate-900 z-50 lg:hidden"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/40 hover:text-white cursor-pointer"
                            >
                                <SidebarIcon icon="x" size={20} />
                            </button>
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function Topbar({ onMenuClick, user }) {
    return (
        <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center justify-between px-4 lg:px-6 py-3">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden text-white/60 hover:text-white cursor-pointer"
                >
                    <SidebarIcon icon="menu" size={22} />
                </button>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="text-right hidden sm:block">
                        <p className="text-white text-sm font-medium">{user?.name || 'Admin'}</p>
                        <p className="text-white/40 text-xs">{user?.email}</p>
                    </div>
                    <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {(user?.name || 'A').charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Skip auth check for login page
    const isLoginPage = pathname === '/admin/login';

    useEffect(() => {
        if (isLoginPage) {
            setLoading(false);
            return;
        }

        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        const verifyAuth = async () => {
            try {
                const res = await fetch(`${API}/auth/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();
                if (data.success) {
                    setUser(data.user);
                    setLoading(false);
                } else {
                    localStorage.removeItem('admin_token');
                    localStorage.removeItem('admin_user');
                    router.push('/admin/login');
                }
            } catch {
                router.push('/admin/login');
            }
        };
        verifyAuth();
    }, [isLoginPage, router]);

    // Login page — no layout
    if (isLoginPage) return children;

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-3 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    <p className="text-white/40 text-sm">Loading admin panel...</p>
                </div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{ user, token: typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null }}>
            <div className="min-h-screen bg-slate-950">
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <div className="lg:ml-64">
                    {/* <Topbar onMenuClick={() => setSidebarOpen(true)} user={user} /> */}
                    <main className="p-4 lg:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </AuthContext.Provider>
    );
}
