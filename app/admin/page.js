'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const API = process.env.NEXT_PUBLIC_API_URL;

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#06b6d4', '#0ea5e9'];

function StatCard({ label, value, icon, color, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-all group"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider">{label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{typeof value === 'number' ? value.toLocaleString() : value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${color} flex items-center justify-center text-white shadow-lg opacity-80 group-hover:opacity-100 transition`}>
                    {icon}
                </div>
            </div>
        </motion.div>
    );
}

function ChartCard({ title, children, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            className={`bg-white/5 border border-white/10 rounded-xl p-5 ${className}`}
        >
            <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
            {children}
        </motion.div>
    );
}

function TableSkeleton() {
    return (
        <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-4">
                    <div className="h-4 bg-white/10 rounded animate-pulse flex-1" />
                    <div className="h-4 bg-white/10 rounded animate-pulse w-24" />
                    <div className="h-4 bg-white/10 rounded animate-pulse w-20" />
                </div>
            ))}
        </div>
    );
}

function DashboardSkeleton() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <div className="h-3 w-20 bg-white/10 rounded animate-pulse mb-3" />
                        <div className="h-7 w-16 bg-white/10 rounded animate-pulse" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 h-72">
                        <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-4" />
                        <div className="h-48 bg-white/5 rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    );
}

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 shadow-xl">
            <p className="text-white/60 text-xs mb-1">{label}</p>
            {payload.map((p, i) => (
                <p key={i} className="text-white text-sm font-semibold">
                    {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
                </p>
            ))}
        </div>
    );
};

export default function AdminDashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const token = localStorage.getItem('admin_token');
                const res = await fetch(`${API}/admin/dashboard`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const json = await res.json();
                if (json.success) setData(json.data);
            } catch (err) {
                console.error('Dashboard fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchDashboard();
    }, []);

    if (loading) return <DashboardSkeleton />;
    if (!data) return <p className="text-white/50 text-center py-10">Failed to load dashboard data.</p>;

    const { counts, citiesByCategory, citiesByState, contactsOverTime, careersOverTime, recentContacts, recentCareers, postsByCategory, metroCitiesByCategory } = data;

    const statCards = [
        { label: 'Total States', value: counts.states, color: 'from-blue-500 to-blue-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /></svg> },
        { label: 'Total Cities', value: counts.citys, color: 'from-indigo-500 to-indigo-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /></svg> },
        { label: 'Categories', value: counts.categories, color: 'from-purple-500 to-purple-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /></svg> },
        { label: 'Total Posts', value: counts.posts, color: 'from-violet-500 to-violet-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
        { label: 'Contacts', value: counts.contacts, color: 'from-emerald-500 to-emerald-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> },
        { label: 'Career Apps', value: counts.careers, color: 'from-amber-500 to-amber-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg> },
        { label: 'Metro Cities', value: counts.metrocitys, color: 'from-rose-500 to-rose-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="14" rx="2" /><path d="M4 17l-2 4h20l-2-4" /></svg> },
        { label: 'Admin Users', value: counts.users, color: 'from-cyan-500 to-cyan-600', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg> },
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-white/40 text-sm mt-1">Overview of your website data and analytics</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card, i) => (
                    <StatCard key={card.label} {...card} delay={i * 0.05} />
                ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Contacts Over Time */}
                <ChartCard title="Contacts Over Time" delay={0.1}>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={contactsOverTime}>
                                <defs>
                                    <linearGradient id="contactGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="count" name="Contacts" stroke="#3b82f6" fill="url(#contactGrad)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* Career Applications Over Time */}
                <ChartCard title="Career Applications Over Time" delay={0.15}>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={careersOverTime}>
                                <defs>
                                    <linearGradient id="careerGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="count" name="Applications" stroke="#8b5cf6" fill="url(#careerGrad)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Cities by Category */}
                <ChartCard title="Cities by Category" delay={0.2}>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={citiesByCategory} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis type="number" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <YAxis dataKey="category_name" type="category" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 10 }} width={100} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="count" name="Cities" radius={[0, 4, 4, 0]}>
                                    {citiesByCategory.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* Top States by Cities */}
                <ChartCard title="Top 15 States by Cities" delay={0.25}>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={citiesByState}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="state_name" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 9 }} angle={-35} textAnchor="end" height={60} />
                                <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="count" name="Cities" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>

            {/* Charts Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Posts by Category Pie */}
                <ChartCard title="Posts by Category" delay={0.3}>
                    <div className="h-56">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={postsByCategory}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={3}
                                    dataKey="count"
                                    nameKey="category_name"
                                >
                                    {postsByCategory.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {postsByCategory.map((item, i) => (
                            <span key={i} className="flex items-center gap-1.5 text-[10px] text-white/50">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                                {item.category_name}
                            </span>
                        ))}
                    </div>
                </ChartCard>

                {/* Metro Cities by Category */}
                <ChartCard title="Metro Cities by Category" delay={0.35} className="lg:col-span-2">
                    <div className="h-56">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={metroCitiesByCategory}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="category_name" stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 10 }} />
                                <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fontSize: 11 }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="count" name="Metro Cities" radius={[4, 4, 0, 0]}>
                                    {metroCitiesByCategory.map((_, i) => (
                                        <Cell key={i} fill={COLORS[(i + 4) % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>

            {/* Recent Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Recent Contacts */}
                <ChartCard title="Recent Contacts" delay={0.4}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-white/30 text-xs uppercase border-b border-white/5">
                                    <th className="text-left py-2 font-medium">Name</th>
                                    <th className="text-left py-2 font-medium">Email</th>
                                    <th className="text-left py-2 font-medium">Phone</th>
                                    <th className="text-left py-2 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentContacts.map(c => (
                                    <tr key={c.id} className="text-white/70 hover:text-white hover:bg-white/5 transition">
                                        <td className="py-2.5 pr-3 max-w-[120px] truncate">{c.name}</td>
                                        <td className="py-2.5 pr-3 max-w-[140px] truncate">{c.email}</td>
                                        <td className="py-2.5 pr-3">{c.number}</td>
                                        <td className="py-2.5 text-white/40 text-xs">{c.created_at ? new Date(c.created_at).toLocaleDateString() : '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ChartCard>

                {/* Recent Career Applications */}
                <ChartCard title="Recent Career Applications" delay={0.45}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-white/30 text-xs uppercase border-b border-white/5">
                                    <th className="text-left py-2 font-medium">Name</th>
                                    <th className="text-left py-2 font-medium">Position</th>
                                    <th className="text-left py-2 font-medium">City</th>
                                    <th className="text-left py-2 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentCareers.map(c => (
                                    <tr key={c.id} className="text-white/70 hover:text-white hover:bg-white/5 transition">
                                        <td className="py-2.5 pr-3 max-w-[120px] truncate">{c.name}</td>
                                        <td className="py-2.5 pr-3 max-w-[140px] truncate">{c.apply_for}</td>
                                        <td className="py-2.5 pr-3">{c.city}</td>
                                        <td className="py-2.5 text-white/40 text-xs">{c.created_at ? new Date(c.created_at).toLocaleDateString() : '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
}
