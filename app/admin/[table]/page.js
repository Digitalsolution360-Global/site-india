'use client';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnUnderline, BtnStrikeThrough, BtnBulletList, BtnNumberedList, BtnLink, BtnClearFormatting, HtmlButton } from 'react-simple-wysiwyg';

const API = process.env.NEXT_PUBLIC_API_URL;

const TABLE_META = {
    states: { displayName: 'States', pk: 'state_id' },
    citys: { displayName: 'Cities', pk: 'city_id' },
    categories: { displayName: 'Categories', pk: 'category_id' },
    posts: { displayName: 'Posts', pk: 'post_id' },
    contacts: { displayName: 'Contacts', pk: 'id' },
    careers: { displayName: 'Careers', pk: 'id' },
    footercontacts: { displayName: 'Footer Contacts', pk: 'id' },
    landingcontacts: { displayName: 'Landing Contacts', pk: 'id' },
    schedule_meetings: { displayName: 'Meetings', pk: 'id' },
    comments: { displayName: 'Comments', pk: 'id' },
    metrocitys: { displayName: 'Metro Cities', pk: 'metrocity_id' },
    faqs: { displayName: 'FAQs', pk: 'id' },
    service_cards: { displayName: 'Service Cards', pk: 'id' },
    settings: { displayName: 'Settings', pk: 'id' },
    users: { displayName: 'Users', pk: 'id' },
};

const BULK_UPLOAD_TABLES = new Set(['states', 'citys', 'metrocitys']);

function Spinner({ size = 16 }) {
    return (
        <svg className="animate-spin" width={size} height={size} viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
}

function TableSkeleton({ cols = 6, rows = 10 }) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10">
            {/* Header skeleton */}
            <div className="bg-white/5 px-4 py-3 flex gap-4">
                {[...Array(cols)].map((_, i) => (
                    <div key={i} className="h-3 bg-white/10 rounded animate-pulse flex-1" />
                ))}
            </div>
            {/* Row skeletons */}
            {[...Array(rows)].map((_, r) => (
                <div key={r} className="px-4 py-3.5 flex gap-4 border-t border-white/5">
                    {[...Array(cols)].map((_, c) => (
                        <div key={c} className="h-3.5 bg-white/5 rounded animate-pulse flex-1" style={{ animationDelay: `${(r * cols + c) * 50}ms` }} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function Modal({ open, onClose, title, children }) {
    if (!open) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={e => e.stopPropagation()}
                    className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                        <h2 className="text-white font-semibold text-lg">{title}</h2>
                        <button onClick={onClose} className="text-white/40 hover:text-white transition cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    {/* Body */}
                    <div className="overflow-y-auto max-h-[calc(85vh-130px)] px-6 py-5">
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function DeleteConfirmModal({ open, onClose, onConfirm, loading }) {
    if (!open) return null;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={e => e.stopPropagation()}
                    className="bg-slate-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center"
                >
                    <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Delete Record</h3>
                    <p className="text-white/50 text-sm mb-6">Are you sure? This action cannot be undone.</p>
                    <div className="flex gap-3">
                        <button onClick={onClose} className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 transition text-sm cursor-pointer">Cancel</button>
                        <button
                            onClick={onConfirm}
                            disabled={loading}
                            className="flex-1 py-2.5 bg-red-600 rounded-xl text-white hover:bg-red-500 transition text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {loading ? <><Spinner size={14} /> Deleting...</> : 'Delete'}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function CrudTablePage() {
    const params = useParams();
    const table = params.table;
    const meta = TABLE_META[table];

    const [rows, setRows] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, totalPages: 0 });
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('DESC');

    // Modal states
    const [editModal, setEditModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [editLoading, setEditLoading] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [viewLoading, setViewLoading] = useState(false);
    const [createModal, setCreateModal] = useState(false);
    const [createData, setCreateData] = useState({});
    const [createLoading, setCreateLoading] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [imageUploading, setImageUploading] = useState(false);
    const [bulkModal, setBulkModal] = useState(false);
    const [bulkFile, setBulkFile] = useState(null);
    const [bulkMode, setBulkMode] = useState('upsert');
    const [bulkDryRun, setBulkDryRun] = useState(true);
    const [bulkLoading, setBulkLoading] = useState(false);
    const [bulkResult, setBulkResult] = useState(null);

    // Table columns info from first fetch
    const [tableCols, setTableCols] = useState([]);
    const [editableCols, setEditableCols] = useState([]);

    const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : '';
    const canBulkUpload = BULK_UPLOAD_TABLES.has(table);

    const fetchData = useCallback(async (page = 1, searchVal = '') => {
        setLoading(true);
        try {
            const qs = new URLSearchParams({
                page: String(page),
                limit: '20',
                search: searchVal,
                ...(sortBy ? { sortBy, sortOrder } : {}),
            });
            const res = await fetch(`${API}/admin/${table}?${qs}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const json = await res.json();
            if (json.success) {
                setRows(json.data);
                setPagination(json.pagination);
                // Derive columns from data keys
                if (json.data.length > 0) {
                    setTableCols(Object.keys(json.data[0]));
                }
            }
        } catch (err) {
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    }, [table, token, sortBy, sortOrder]);

    // Fetch editable cols info from table config
    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await fetch(`${API}/admin/tables`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const json = await res.json();
                if (json.success) {
                    const cfg = json.data.find(t => t.key === table);
                    if (cfg) setEditableCols(cfg.editable || []);
                }
            } catch { }
        };
        fetchConfig();
    }, [table, token]);

    useEffect(() => {
        fetchData(1, search);
    }, [table, sortBy, sortOrder]);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => fetchData(1, search), 400);
        return () => clearTimeout(timer);
    }, [search]);

    // View record
    const handleView = async (id) => {
        setViewModal(true);
        setViewLoading(true);
        setViewData(null);
        try {
            const res = await fetch(`${API}/admin/${table}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const json = await res.json();
            if (json.success) setViewData(json.data);
        } catch { } finally { setViewLoading(false); }
    };

    // Open edit
    const handleEdit = async (id) => {
        setEditModal(true);
        setEditLoading(true);
        setEditData(null);
        try {
            const res = await fetch(`${API}/admin/${table}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const json = await res.json();
            if (json.success) setEditData(json.data);
        } catch { } finally { setEditLoading(false); }
    };

    // Submit edit
    const handleEditSubmit = async () => {
        if (!editData) return;
        setEditLoading(true);
        try {
            const pk = meta.pk;
            const body = {};
            editableCols.forEach(col => {
                if (editData[col] !== undefined) body[col] = editData[col];
            });
            const res = await fetch(`${API}/admin/${table}/${editData[pk]}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(body),
            });
            const json = await res.json();
            if (json.success) {
                setEditModal(false);
                fetchData(pagination.page, search);
            }
        } catch { } finally { setEditLoading(false); }
    };

    // Open create
    const handleOpenCreate = () => {
        const init = {};
        editableCols.forEach(col => init[col] = '');
        setCreateData(init);
        setCreateModal(true);
    };

    // Submit create
    const handleCreateSubmit = async () => {
        setCreateLoading(true);
        try {
            const res = await fetch(`${API}/admin/${table}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(createData),
            });
            const json = await res.json();
            if (json.success) {
                setCreateModal(false);
                fetchData(1, search);
            }
        } catch { } finally { setCreateLoading(false); }
    };

    // Delete
    const handleDelete = async () => {
        if (!deleteId) return;
        setDeleteLoading(true);
        try {
            const res = await fetch(`${API}/admin/${table}/${deleteId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });
            const json = await res.json();
            if (json.success) {
                setDeleteModal(false);
                setDeleteId(null);
                fetchData(pagination.page, search);
            }
        } catch { } finally { setDeleteLoading(false); }
    };

    const handleSort = (col) => {
        if (sortBy === col) setSortOrder(p => p === 'ASC' ? 'DESC' : 'ASC');
        else { setSortBy(col); setSortOrder('DESC'); }
    };

    const handleDownloadBulkTemplate = async () => {
        try {
            const res = await fetch(`${API}/admin/bulk-upload/template/${table}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) {
                const json = await res.json().catch(() => ({}));
                alert(json.message || 'Failed to download template');
                return;
            }

            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${table}-bulk-template.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error('Template download failed:', err);
            alert('Failed to download template');
        }
    };

    const handleBulkUpload = async () => {
        if (!bulkFile) {
            alert('Please select a file first.');
            return;
        }

        setBulkLoading(true);
        setBulkResult(null);
        try {
            const fd = new FormData();
            fd.append('file', bulkFile);
            fd.append('mode', bulkMode);
            fd.append('dryRun', bulkDryRun ? 'true' : 'false');

            const res = await fetch(`${API}/admin/bulk-upload/${table}`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: fd,
            });

            const json = await res.json();
            if (!json.success) {
                alert(json.message || 'Bulk upload failed');
                return;
            }

            setBulkResult(json.data);
            if (!bulkDryRun) {
                fetchData(1, search);
            }
        } catch (err) {
            console.error('Bulk upload failed:', err);
            alert('Bulk upload failed');
        } finally {
            setBulkLoading(false);
        }
    };

    if (!meta) {
        return (
            <div className="text-center py-20">
                <p className="text-white/50 text-lg">Table &quot;{table}&quot; not found.</p>
            </div>
        );
    }

    const formatCell = (val) => {
        if (val === null || val === undefined) return <span className="text-white/20">—</span>;
        if (typeof val === 'string' && val.match(/^\d{4}-\d{2}-\d{2}/)) {
            return new Date(val).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        }
        if (typeof val === 'string' && val.length > 60) return val.substring(0, 60) + '...';
        return String(val);
    };

    const isRichText = (col) => {
        return col === 'descritpion' || col.includes('description') || col.includes('content') || col === 'message' || col === 'comment_body';
    };

    const isLongText = (col) => {
        return col.includes('meta_');
    };

    const isImageField = (col) => col === 'image';
    const isResumeField = (col) => col === 'resume';

    const isPdfUrl = (value) => {
        if (!value || typeof value !== 'string') return false;
        try {
            const url = new URL(value);
            return url.pathname.toLowerCase().endsWith('.pdf');
        } catch {
            return value.toLowerCase().includes('.pdf');
        }
    };

    const handleImageUpload = async (file, col, dataObj, setDataFn) => {
        if (!file) return;
        setImageUploading(true);
        try {
            const fd = new FormData();
            fd.append('image', file);
            const res = await fetch(`${API}/upload/blog-image`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}` },
                body: fd,
            });
            const json = await res.json();
            if (json.success) {
                setDataFn({ ...dataObj, [col]: json.url });
            } else {
                alert('Upload failed: ' + (json.message || 'Unknown error'));
            }
        } catch (err) {
            console.error('Image upload error:', err);
            alert('Image upload failed');
        } finally {
            setImageUploading(false);
        }
    };

    const ImageUploadField = ({ col, value, dataObj, setDataFn }) => (
        <div className="space-y-2">
            {value && (
                <div className="relative group w-full h-32 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                    <img src={value} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <button
                            type="button"
                            onClick={() => setDataFn({ ...dataObj, [col]: '' })}
                            className="text-white text-xs bg-red-600 px-2 py-1 rounded cursor-pointer"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            )}
            <label className="flex items-center gap-2 px-3 py-2.5 bg-white/5 border border-white/10 border-dashed rounded-xl cursor-pointer hover:bg-white/10 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 shrink-0">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span className="text-white/40 text-sm">{imageUploading ? 'Uploading...' : 'Upload image'}</span>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={imageUploading}
                    onChange={(e) => handleImageUpload(e.target.files[0], col, dataObj, setDataFn)}
                />
            </label>
            <input
                type="text"
                value={value || ''}
                onChange={e => setDataFn({ ...dataObj, [col]: e.target.value })}
                placeholder="Or paste image URL"
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
        </div>
    );

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">{meta.displayName}</h1>
                    <p className="text-white/40 text-sm mt-0.5">{pagination.total.toLocaleString()} total records</p>
                </div>
                <div className="flex items-center gap-2">
                    {canBulkUpload && (
                        <button
                            onClick={() => {
                                setBulkModal(true);
                                setBulkResult(null);
                                setBulkFile(null);
                                setBulkMode('upsert');
                                setBulkDryRun(true);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition cursor-pointer"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Bulk Upload
                        </button>
                    )}
                    <button
                        onClick={handleOpenCreate}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-blue-500 hover:to-indigo-500 transition shadow-lg shadow-blue-500/25 cursor-pointer"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        Add New
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    type="text"
                    placeholder="Search records..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition"
                />
            </div>

            {/* Data Table */}
            {loading ? (
                <TableSkeleton cols={tableCols.length || 6} />
            ) : (
                <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-white/5">
                                {tableCols.map(col => (
                                    <th
                                        key={col}
                                        onClick={() => handleSort(col)}
                                        className="text-left px-4 py-3 text-white/50 font-medium text-xs uppercase tracking-wider cursor-pointer hover:text-white/80 transition select-none whitespace-nowrap"
                                    >
                                        <span className="flex items-center gap-1.5">
                                            {col.replace(/_/g, ' ')}
                                            {sortBy === col && (
                                                <svg className={`w-3 h-3 transition-transform ${sortOrder === 'ASC' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7 10l5 5 5-5z" />
                                                </svg>
                                            )}
                                        </span>
                                    </th>
                                ))}
                                <th className="px-4 py-3 text-right text-white/50 font-medium text-xs uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {rows.length === 0 ? (
                                <tr>
                                    <td colSpan={tableCols.length + 1} className="text-center py-12 text-white/30">
                                        No records found.
                                    </td>
                                </tr>
                            ) : (
                                rows.map((row, idx) => (
                                    <motion.tr
                                        key={row[meta.pk] || idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: idx * 0.02 }}
                                        className="hover:bg-white/3 transition"
                                    >
                                        {tableCols.map(col => (
                                            <td key={col} className="px-4 py-3 text-white/70 whitespace-nowrap max-w-[200px] truncate">
                                                {col === 'status' ? (
                                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${String(row[col]) === '1' || String(row[col]) === 'active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                                                        {String(row[col]) === '1' || String(row[col]) === 'active' ? 'Active' : 'Inactive'}
                                                    </span>
                                                ) : (
                                                    formatCell(row[col])
                                                )}
                                            </td>
                                        ))}
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-1.5">
                                                <button
                                                    onClick={() => handleView(row[meta.pk])}
                                                    title="View"
                                                    className="p-1.5 rounded-lg text-white/30 hover:text-blue-400 hover:bg-blue-500/10 transition cursor-pointer"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(row[meta.pk])}
                                                    title="Edit"
                                                    className="p-1.5 rounded-lg text-white/30 hover:text-amber-400 hover:bg-amber-500/10 transition cursor-pointer"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => { setDeleteId(row[meta.pk]); setDeleteModal(true); }}
                                                    title="Delete"
                                                    className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer"
                                                >
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between">
                    <p className="text-white/30 text-sm">
                        Page {pagination.page} of {pagination.totalPages}
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => fetchData(pagination.page - 1, search)}
                            disabled={pagination.page <= 1}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                        >
                            Previous
                        </button>
                        {/* Page number buttons */}
                        {(() => {
                            const pages = [];
                            const current = pagination.page;
                            const total = pagination.totalPages;
                            let start = Math.max(1, current - 2);
                            let end = Math.min(total, current + 2);
                            if (start > 1) pages.push(1);
                            if (start > 2) pages.push('...');
                            for (let i = start; i <= end; i++) pages.push(i);
                            if (end < total - 1) pages.push('...');
                            if (end < total) pages.push(total);
                            return pages.map((p, i) =>
                                p === '...' ? (
                                    <span key={`dots-${i}`} className="text-white/20 px-1">...</span>
                                ) : (
                                    <button
                                        key={p}
                                        onClick={() => fetchData(p, search)}
                                        className={`w-8 h-8 rounded-lg text-sm transition cursor-pointer ${p === current ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'}`}
                                    >
                                        {p}
                                    </button>
                                )
                            );
                        })()}
                        <button
                            onClick={() => fetchData(pagination.page + 1, search)}
                            disabled={pagination.page >= pagination.totalPages}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* View Modal */}
            <Modal open={viewModal} onClose={() => setViewModal(false)} title={`View ${meta.displayName}`}>
                {viewLoading ? (
                    <div className="flex items-center justify-center py-10"><Spinner size={24} /><span className="ml-3 text-white/40">Loading...</span></div>
                ) : viewData ? (
                    <div className="space-y-3">
                        {Object.entries(viewData).map(([key, val]) => (
                            <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-white/5 last:border-none">
                                <span className="text-white/40 text-xs uppercase tracking-wider font-medium w-40 shrink-0">{key.replace(/_/g, ' ')}</span>
                                <div className="text-white/80 text-sm break-all flex-1">
                                    {val === null ? (
                                        <span className="text-white/20">null</span>
                                    ) : isResumeField(key) && isPdfUrl(String(val)) ? (
                                        <div className="space-y-2">
                                            <div className="w-full h-[420px] border border-white/10 rounded-xl overflow-hidden bg-white">
                                                <iframe
                                                    src={String(val)}
                                                    title="Resume PDF"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                            <a
                                                href={String(val)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex text-blue-400 hover:text-blue-300 transition"
                                            >
                                                Open PDF in new tab
                                            </a>
                                        </div>
                                    ) : (
                                        String(val)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white/40 text-center py-6">Record not found.</p>
                )}
            </Modal>

            {/* Edit Modal */}
            <Modal open={editModal} onClose={() => setEditModal(false)} title={`Edit ${meta.displayName}`}>
                {editLoading && !editData ? (
                    <div className="flex items-center justify-center py-10"><Spinner size={24} /><span className="ml-3 text-white/40">Loading...</span></div>
                ) : editData ? (
                    <div className="space-y-4">
                        {editableCols.map(col => (
                            <div key={col}>
                                <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">{col.replace(/_/g, ' ')}</label>
                                {isImageField(col) ? (
                                    <ImageUploadField col={col} value={editData[col]} dataObj={editData} setDataFn={setEditData} />
                                ) : isRichText(col) && !isLongText(col) ? (
                                    <div className="bg-white text-black rounded-lg overflow-hidden border border-white/10">
                                        <EditorProvider>
                                            <Editor
                                                value={editData[col] || ''}
                                                onChange={e => setEditData({ ...editData, [col]: e.target.value })}
                                                containerProps={{ style: { height: '300px' } }}
                                            >
                                                <Toolbar>
                                                    <BtnBold />
                                                    <BtnItalic />
                                                    <BtnUnderline />
                                                    <BtnStrikeThrough />
                                                    <BtnBulletList />
                                                    <BtnNumberedList />
                                                    <BtnLink />
                                                    <BtnClearFormatting />
                                                    <HtmlButton />
                                                </Toolbar>
                                            </Editor>
                                        </EditorProvider>
                                    </div>
                                ) : isLongText(col) ? (
                                    <textarea
                                        value={editData[col] || ''}
                                        onChange={e => setEditData({ ...editData, [col]: e.target.value })}
                                        rows={4}
                                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-y"
                                    />
                                ) : col === 'status' || col === 'navbar_status' ? (
                                    <select
                                        value={editData[col] || '0'}
                                        onChange={e => setEditData({ ...editData, [col]: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                    >
                                        <option value="0" className="bg-slate-900">Inactive</option>
                                        <option value="1" className="bg-slate-900">Active</option>
                                    </select>
                                ) : col === 'role_as' ? (
                                    <select
                                        value={editData[col] || '0'}
                                        onChange={e => setEditData({ ...editData, [col]: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                    >
                                        <option value="0" className="bg-slate-900">User</option>
                                        <option value="1" className="bg-slate-900">Admin</option>
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        value={editData[col] || ''}
                                        onChange={e => setEditData({ ...editData, [col]: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex gap-3 pt-3">
                            <button onClick={() => setEditModal(false)} className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 transition text-sm cursor-pointer">Cancel</button>
                            <button
                                onClick={handleEditSubmit}
                                disabled={editLoading || imageUploading}
                                className="flex-1 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl text-white hover:from-blue-500 hover:to-indigo-500 transition text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {editLoading ? <><Spinner size={14} /> Saving...</> : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                ) : null}
            </Modal>

            {/* Create Modal */}
            <Modal open={createModal} onClose={() => setCreateModal(false)} title={`Create ${meta.displayName}`}>
                <div className="space-y-4">
                    {editableCols.map(col => (
                        <div key={col}>
                            <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">{col.replace(/_/g, ' ')}</label>
                            {isImageField(col) ? (
                                <ImageUploadField col={col} value={createData[col]} dataObj={createData} setDataFn={setCreateData} />
                            ) : isRichText(col) && !isLongText(col) ? (
                                <div className="bg-white text-black rounded-lg overflow-hidden border border-white/10">
                                    <EditorProvider>
                                        <Editor
                                            value={createData[col] || ''}
                                            onChange={e => setCreateData({ ...createData, [col]: e.target.value })}
                                            containerProps={{ style: { height: '300px' } }}
                                        >
                                            <Toolbar>
                                                <BtnBold />
                                                <BtnItalic />
                                                <BtnUnderline />
                                                <BtnStrikeThrough />
                                                <BtnBulletList />
                                                <BtnNumberedList />
                                                <BtnLink />
                                                <BtnClearFormatting />
                                                <HtmlButton />
                                            </Toolbar>
                                        </Editor>
                                    </EditorProvider>
                                </div>
                            ) : isLongText(col) ? (
                                <textarea
                                    value={createData[col] || ''}
                                    onChange={e => setCreateData({ ...createData, [col]: e.target.value })}
                                    rows={4}
                                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-y"
                                />
                            ) : col === 'status' || col === 'navbar_status' ? (
                                <select
                                    value={createData[col] || '0'}
                                    onChange={e => setCreateData({ ...createData, [col]: e.target.value })}
                                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                >
                                    <option value="0" className="bg-slate-900">Inactive</option>
                                    <option value="1" className="bg-slate-900">Active</option>
                                </select>
                            ) : col === 'role_as' ? (
                                <select
                                    value={createData[col] || '0'}
                                    onChange={e => setCreateData({ ...createData, [col]: e.target.value })}
                                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                >
                                    <option value="0" className="bg-slate-900">User</option>
                                    <option value="1" className="bg-slate-900">Admin</option>
                                </select>
                            ) : (
                                <input
                                    type="text"
                                    value={createData[col] || ''}
                                    onChange={e => setCreateData({ ...createData, [col]: e.target.value })}
                                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex gap-3 pt-3">
                        <button onClick={() => setCreateModal(false)} className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 transition text-sm cursor-pointer">Cancel</button>
                        <button
                            onClick={handleCreateSubmit}
                            disabled={createLoading || imageUploading}
                            className="flex-1 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl text-white hover:from-blue-500 hover:to-indigo-500 transition text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {createLoading ? <><Spinner size={14} /> Creating...</> : 'Create Record'}
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Delete Confirm */}
            <DeleteConfirmModal
                open={deleteModal}
                onClose={() => { setDeleteModal(false); setDeleteId(null); }}
                onConfirm={handleDelete}
                loading={deleteLoading}
            />

            {/* Bulk Upload Modal */}
            <Modal open={bulkModal} onClose={() => setBulkModal(false)} title={`Bulk Upload ${meta.displayName}`}>
                <div className="space-y-4">
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
                        <p className="text-blue-200 text-sm leading-relaxed">
                            Recommended flow: download template, fill rows in Excel/Google Sheets, export as CSV/XLSX, run validation first, then run final upload.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={handleDownloadBulkTemplate}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm hover:bg-white/10 transition cursor-pointer"
                        >
                            Download Template
                        </button>
                    </div>

                    <div>
                        <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">File</label>
                        <input
                            type="file"
                            accept=".csv,.xlsx,.xls"
                            onChange={(e) => setBulkFile(e.target.files?.[0] || null)}
                            className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm"
                        />
                        <p className="text-white/30 text-xs mt-1">Accepted formats: CSV, XLSX, XLS (max 8MB, max 2000 rows)</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Mode</label>
                            <select
                                value={bulkMode}
                                onChange={(e) => setBulkMode(e.target.value)}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm"
                            >
                                <option value="upsert" className="bg-slate-900">Upsert (insert new + update existing)</option>
                                <option value="insert" className="bg-slate-900">Insert only (fail duplicates)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-white/50 text-xs font-medium uppercase tracking-wider mb-1.5">Run Type</label>
                            <select
                                value={bulkDryRun ? 'dry' : 'final'}
                                onChange={(e) => setBulkDryRun(e.target.value === 'dry')}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm"
                            >
                                <option value="dry" className="bg-slate-900">Dry Run (validation only)</option>
                                <option value="final" className="bg-slate-900">Final Upload (apply changes)</option>
                            </select>
                        </div>
                    </div>

                    {bulkResult && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                            <p className="text-white text-sm font-medium">Result Summary</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                <div className="bg-white/5 rounded-lg p-2"><span className="text-white/40">Total</span><div className="text-white font-semibold">{bulkResult.summary.totalRows}</div></div>
                                <div className="bg-emerald-500/10 rounded-lg p-2"><span className="text-emerald-300/80">Inserted</span><div className="text-emerald-300 font-semibold">{bulkResult.summary.inserted}</div></div>
                                <div className="bg-blue-500/10 rounded-lg p-2"><span className="text-blue-300/80">Updated</span><div className="text-blue-300 font-semibold">{bulkResult.summary.updated}</div></div>
                                <div className="bg-red-500/10 rounded-lg p-2"><span className="text-red-300/80">Failed</span><div className="text-red-300 font-semibold">{bulkResult.summary.failed}</div></div>
                            </div>
                            {bulkResult.failures?.length > 0 && (
                                <div className="mt-2">
                                    <p className="text-white/60 text-xs mb-1">First {bulkResult.failures.length} error(s):</p>
                                    <div className="max-h-40 overflow-auto space-y-1 pr-1">
                                        {bulkResult.failures.map((f, idx) => (
                                            <div key={`${f.rowNumber}-${idx}`} className="text-xs text-red-300 bg-red-500/10 rounded px-2 py-1">
                                                Row {f.rowNumber}: {f.message}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={() => setBulkModal(false)}
                            className="flex-1 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 transition text-sm cursor-pointer"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleBulkUpload}
                            disabled={bulkLoading || !bulkFile}
                            className="flex-1 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl text-white hover:from-blue-500 hover:to-indigo-500 transition text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {bulkLoading ? <><Spinner size={14} /> Processing...</> : (bulkDryRun ? 'Validate File' : 'Run Bulk Upload')}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
