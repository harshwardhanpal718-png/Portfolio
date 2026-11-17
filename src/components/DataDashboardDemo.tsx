import React, { useState } from 'react';
import { sampleDashboardDataset } from '../data/dashboardData';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Cell 
} from 'recharts';
import { 
  BarChart2, 
  Calendar, 
  Filter, 
  DollarSign, 
  ShoppingCart, 
  Percent, 
  TrendingUp, 
  Info, 
  Table as TableIcon,
  ChevronDown
} from 'lucide-react';

export const DataDashboardDemo: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'30d' | '90d' | '180d' | '1y'>('1y');
  const [category, setCategory] = useState<'All' | 'Technology' | 'Furniture' | 'Office Supplies'>('All');
  const [showRawTable, setShowRawTable] = useState(false);

  // Retrieve current active dataset slice
  const activeSlice = sampleDashboardDataset.dataByTimeframe[timeframe][category];
  const { kpis, monthlyTrend, categoryBreakdown, regionalPerformance } = activeSlice;

  // Custom Dark Tooltip formatter
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-card border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md text-xs">
          <p className="font-heading font-bold text-white mb-1.5 border-b border-white/10 pb-1">{label}</p>
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4 py-0.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color || item.fill }} />
                {item.name}:
              </span>
              <span className="font-mono font-bold text-white">
                {typeof item.value === 'number' && item.value >= 1000
                  ? `$${item.value.toLocaleString()}`
                  : item.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard-demo" className="py-20 lg:py-28 relative bg-[#080B12] border-t border-white/5">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Interactive Analytics Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Live Data <span className="text-gradient">Dashboard Demo</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Interact with dynamic filters to explore how business metrics, time-series velocity, and category breakdowns react in real-time.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Clear Illustrative Sample Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-200 flex items-start sm:items-center gap-3">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <span className="font-semibold text-white">Illustrative Demonstration Notice:</span>{' '}
            <span className="text-blue-200/90">
              The metrics below are computed from a curated sample e-commerce dataset to demonstrate dashboard design, responsive charts, and live interactive state filtering.
            </span>
          </div>
        </div>

        {/* Dashboard Frame Container */}
        <div className="glass-card rounded-2xl border border-white/10 shadow-2xl p-5 sm:p-7 relative overflow-hidden bg-dark-secondary/60">
          
          {/* Controls Bar: Timeframe & Category Slicers */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-1">
                <Filter className="w-3.5 h-3.5 text-blue-400" />
                Category:
              </span>
              {sampleDashboardDataset.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    category === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : 'bg-dark-bg/80 border border-white/5 text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Timeframe Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mr-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                Timeframe:
              </span>
              {sampleDashboardDataset.timeFilters.map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => setTimeframe(tf.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    timeframe === tf.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-bold'
                      : 'bg-dark-bg/80 border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>

          {/* KPI Summary Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* KPI 1: Total Revenue */}
            <div className="p-4 rounded-xl bg-dark-bg/70 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono">Gross Revenue</span>
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <DollarSign className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                {kpis.totalRevenue}
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-mono">
                <TrendingUp className="w-3 h-3" />
                <span>{kpis.revenueChange} vs previous period</span>
              </div>
            </div>

            {/* KPI 2: Gross Profit & Margin */}
            <div className="p-4 rounded-xl bg-dark-bg/70 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono">Gross Profit (Margin)</span>
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Percent className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                {kpis.grossProfit}{' '}
                <span className="text-sm font-normal text-purple-300">({kpis.profitMargin})</span>
              </div>
              <div className="mt-1 text-[11px] text-slate-400 font-mono">
                Healthy margin distribution
              </div>
            </div>

            {/* KPI 3: Total Orders */}
            <div className="p-4 rounded-xl bg-dark-bg/70 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono">Total Orders</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShoppingCart className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                {kpis.totalOrders}
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-emerald-400 font-mono">
                <TrendingUp className="w-3 h-3" />
                <span>{kpis.ordersChange} volume velocity</span>
              </div>
            </div>

            {/* KPI 4: Average Order Value */}
            <div className="p-4 rounded-xl bg-dark-bg/70 border border-white/5">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono">Avg Order Value (AOV)</span>
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <DollarSign className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                {kpis.aov}
              </div>
              <div className="mt-1 text-[11px] text-slate-400 font-mono">
                Return rate: <span className="text-slate-300">{kpis.returnRate}</span>
              </div>
            </div>

          </div>

          {/* Charts Row 1: Main Area Chart (Revenue Trend & Target) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            <div className="lg:col-span-8 p-5 rounded-xl bg-dark-bg/70 border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-sm font-bold font-heading text-white">
                    Revenue Trajectory vs Planned Target
                  </h3>
                  <p className="text-xs text-slate-muted">
                    Time-series tracking of actual earnings compared to budget allocation
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Actual Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    Target
                  </span>
                </div>
              </div>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="targetGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} />
                    <YAxis 
                      stroke="#64748B" 
                      fontSize={11} 
                      tickLine={false} 
                      tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      name="Actual Revenue" 
                      stroke="#3B82F6" 
                      strokeWidth={2.5} 
                      fillOpacity={1} 
                      fill="url(#revenueGlow)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="target" 
                      name="Budget Target" 
                      stroke="#8B5CF6" 
                      strokeWidth={2} 
                      strokeDasharray="4 4" 
                      fillOpacity={1} 
                      fill="url(#targetGlow)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Performance Bar Chart */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-dark-bg/70 border border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold font-heading text-white mb-1">
                  Category Performance
                </h3>
                <p className="text-xs text-slate-muted mb-4">
                  Contribution and margin breakdown
                </p>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryBreakdown} layout="vertical" margin={{ top: 5, right: 15, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                      <XAxis 
                        type="number" 
                        stroke="#64748B" 
                        fontSize={10} 
                        tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} 
                      />
                      <YAxis 
                        type="category" 
                        dataKey="category" 
                        stroke="#94A3B8" 
                        fontSize={10} 
                        tickLine={false} 
                        width={90} 
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="revenue" name="Revenue" radius={[0, 4, 4, 0]}>
                        {categoryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1.5">
                {categoryBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.category}
                    </span>
                    <span className="font-mono text-slate-400">
                      Margin: <span className="text-white font-semibold">{item.profitMargin}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Charts Row 2: Regional Performance & Order Volume */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Regional Share Bar Chart */}
            <div className="p-5 rounded-xl bg-dark-bg/70 border border-white/5">
              <h3 className="text-sm font-bold font-heading text-white mb-1">
                Regional Distribution &amp; Share
              </h3>
              <p className="text-xs text-slate-muted mb-4">
                Territory revenue volume and YoY regional expansion rate
              </p>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalPerformance} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="region" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis 
                      stroke="#64748B" 
                      fontSize={10} 
                      tickLine={false} 
                      tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="revenue" name="Revenue" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                      {regionalPerformance.map((entry, index) => (
                        <Cell key={`cell-reg-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/5 text-[11px] font-mono">
                {regionalPerformance.map((r, i) => (
                  <div key={i} className="text-center p-1.5 rounded bg-dark-card">
                    <span className="text-slate-400 block text-[10px]">{r.region}</span>
                    <span className="text-emerald-400 font-bold">+{r.growth}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Profit & Orders Velocity */}
            <div className="p-5 rounded-xl bg-dark-bg/70 border border-white/5">
              <h3 className="text-sm font-bold font-heading text-white mb-1">
                Monthly Net Profit Velocity
              </h3>
              <p className="text-xs text-slate-muted mb-4">
                Operating bottom-line earnings mapped over active time horizon
              </p>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="profitGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={10} tickLine={false} />
                    <YAxis 
                      stroke="#64748B" 
                      fontSize={10} 
                      tickLine={false} 
                      tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="profit" 
                      name="Net Profit" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#profitGlow)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                <span>Avg Monthly Margin: 28.9%</span>
                <span className="text-emerald-400">Zero Deficit Months</span>
              </div>
            </div>

          </div>

          {/* Toggle Raw Tabular Records View */}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => setShowRawTable(!showRawTable)}
              className="flex items-center justify-between w-full p-3 rounded-xl bg-dark-bg/60 hover:bg-dark-bg border border-white/5 text-xs font-mono text-slate-300 transition-colors"
            >
              <span className="flex items-center gap-2">
                <TableIcon className="w-4 h-4 text-blue-400" />
                <span>{showRawTable ? 'Hide' : 'Inspect'} Sample Raw Data Records ({sampleDashboardDataset.sampleRecords.length} Rows)</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showRawTable ? 'rotate-180' : ''}`} />
            </button>

            {showRawTable && (
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/5 bg-dark-bg animate-fadeIn">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#111827] text-slate-400 border-b border-white/10">
                    <tr>
                      <th className="py-2.5 px-4 font-semibold">Order ID</th>
                      <th className="py-2.5 px-4 font-semibold">Date</th>
                      <th className="py-2.5 px-4 font-semibold">Category</th>
                      <th className="py-2.5 px-4 font-semibold">Region</th>
                      <th className="py-2.5 px-4 font-semibold">Product</th>
                      <th className="py-2.5 px-4 font-semibold text-right">Revenue</th>
                      <th className="py-2.5 px-4 font-semibold text-right">Profit</th>
                      <th className="py-2.5 px-4 font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {sampleDashboardDataset.sampleRecords.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02]">
                        <td className="py-2.5 px-4 text-blue-400">{row.id}</td>
                        <td className="py-2.5 px-4 text-slate-400">{row.date}</td>
                        <td className="py-2.5 px-4">{row.category}</td>
                        <td className="py-2.5 px-4">{row.region}</td>
                        <td className="py-2.5 px-4 text-white font-sans">{row.product}</td>
                        <td className="py-2.5 px-4 text-right">${row.revenue}</td>
                        <td className="py-2.5 px-4 text-right text-emerald-400">${row.profit}</td>
                        <td className="py-2.5 px-4 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                            row.status === 'Delivered'
                              ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/20'
                              : row.status === 'In Transit'
                              ? 'bg-blue-950/40 text-blue-300 border border-blue-500/20'
                              : 'bg-rose-950/40 text-rose-300 border border-rose-500/20'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
