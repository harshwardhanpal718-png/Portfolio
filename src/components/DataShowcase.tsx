import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, AlertCircle, Sparkles } from 'lucide-react';

export const DataShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'categories' | 'rfm'>('revenue');

  // Realistic sample data for demonstration
  const revenueTrendData = [
    { month: 'Jan', actual: 145000, target: 140000, margin: 26.2 },
    { month: 'Feb', actual: 162000, target: 150000, margin: 27.1 },
    { month: 'Mar', actual: 185000, target: 170000, margin: 28.4 },
    { month: 'Apr', actual: 178000, target: 175000, margin: 27.8 },
    { month: 'May', actual: 210000, target: 190000, margin: 29.5 },
    { month: 'Jun', actual: 225000, target: 205000, margin: 30.2 },
    { month: 'Jul', actual: 218000, target: 210000, margin: 29.8 },
    { month: 'Aug', actual: 240000, target: 220000, margin: 31.0 },
    { month: 'Sep', actual: 255000, target: 235000, margin: 31.5 },
    { month: 'Oct', actual: 270000, target: 250000, margin: 32.1 },
    { month: 'Nov', actual: 310000, target: 280000, margin: 33.4 },
    { month: 'Dec', actual: 345000, target: 300000, margin: 34.2 },
  ];

  const categoryMarginData = [
    { category: 'Enterprise Tech', revenue: 1176000, profit: 333984, margin: '28.4%' },
    { category: 'Office Supplies', revenue: 759500, profit: 243040, margin: '32.0%' },
    { category: 'Commercial Furn.', revenue: 514500, profit: 108045, margin: '21.0%' },
    { category: 'Cloud Subscriptions', revenue: 642000, profit: 346680, margin: '54.0%' },
  ];

  const rfmCohortData = [
    { cluster: 'VIP Champions', share: 12, marginContribution: 41, avgOrder: 420 },
    { cluster: 'Loyal Regulars', share: 26, marginContribution: 28, avgOrder: 165 },
    { cluster: 'Recent Potentials', share: 24, marginContribution: 17, avgOrder: 110 },
    { cluster: 'At-Risk Churn', share: 38, marginContribution: 14, avgOrder: 78 },
  ];

  const kpis = [
    {
      title: 'Analyzed Volume',
      value: '170k+',
      trend: '+18.4% YoY',
      icon: Activity,
      color: '#06B6D4',
      caption: 'Rows cleaned & indexed',
    },
    {
      title: 'Revenue Modelled',
      value: '$2.45M',
      trend: '+14.2% Growth',
      icon: DollarSign,
      color: '#7C3AED',
      caption: 'Normalized across 4 regions',
    },
    {
      title: 'Operating Margin',
      value: '28.4%',
      trend: '+2.1% Optim.',
      icon: TrendingUp,
      color: '#F59E0B',
      caption: 'Filtered unviable SKUs',
    },
    {
      title: 'Target Accuracy',
      value: '94.8%',
      trend: 'Low Variance',
      icon: Users,
      color: '#06B6D4',
      caption: 'K-Means Silhouette = 0.68',
    },
  ];

  return (
    <section id="showcase" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#06B6D4] text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Interactive Analytics Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Data In <span className="gradient-text">Action.</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F59E0B] mt-3 rounded-full" />
          </div>

          {/* Demo Data Disclosure */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#94A3B8] font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span>Labelled Demo Dataset for Analytics Modeling</span>
          </div>
        </div>

        {/* 4 Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-transform duration-300 group-hover:scale-110"
                    style={{ color: kpi.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#06B6D4] px-2 py-0.5 rounded-md bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                    {kpi.trend}
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight block">
                    {kpi.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 mt-0.5 block">
                    {kpi.title}
                  </span>
                  <span className="text-[11px] text-[#94A3B8] block mt-1">
                    {kpi.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Chart Canvas Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden">
          
          {/* Chart Header & Tab Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {activeTab === 'revenue' && 'Monthly Revenue & Target Horizon (12-Mo Trend)'}
                {activeTab === 'categories' && 'Category Revenue vs Net Profit Margin Analysis'}
                {activeTab === 'rfm' && 'K-Means RFM Customer Cohort Distribution'}
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1 font-sans">
                {activeTab === 'revenue' && 'Actual gross receipts compared against budgeted horizon targets with margin progression.'}
                {activeTab === 'categories' && 'Evaluating volume vs profitability to identify margin compression bottlenecks.'}
                {activeTab === 'rfm' && 'Segmentation breakdown highlighting VIP revenue concentration vs churn risk cohorts.'}
              </p>
            </div>

            {/* Tab Switcher Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] self-start sm:self-auto shrink-0">
              <button
                onClick={() => setActiveTab('revenue')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'revenue'
                    ? 'bg-[#06B6D4] text-[#06070D] font-bold shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Revenue Trend
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'categories'
                    ? 'bg-[#7C3AED] text-white font-bold shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Category Margin
              </button>
              <button
                onClick={() => setActiveTab('rfm')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'rfm'
                    ? 'bg-[#F59E0B] text-[#06070D] font-bold shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                RFM Cohorts
              </button>
            </div>
          </div>

          {/* Recharts Container */}
          <div className="w-full h-72 sm:h-84">
            {activeTab === 'revenue' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stop-color="#06B6D4" stop-opacity={0.4} />
                      <stop offset="95%" stop-color="#06B6D4" stop-opacity={0} />
                    </linearGradient>
                    <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stop-color="#7C3AED" stop-opacity={0.3} />
                      <stop offset="95%" stop-color="#7C3AED" stop-opacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="month" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={11} 
                    tickLine={false}
                    tickFormatter={(val) => `$${val / 1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#101321', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Area 
                    type="monotone" 
                    dataKey="actual" 
                    name="Actual Revenue ($)" 
                    stroke="#06B6D4" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#actualGrad)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="target" 
                    name="Budget Target ($)" 
                    stroke="#7C3AED" 
                    strokeWidth={2} 
                    strokeDasharray="4 4" 
                    fillOpacity={1} 
                    fill="url(#targetGrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'categories' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryMarginData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="category" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={11} 
                    tickLine={false}
                    tickFormatter={(val) => `$${val / 1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#101321', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    formatter={(value: any) => [`$${Number(value).toLocaleString()}`, '']}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="revenue" name="Gross Revenue ($)" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="profit" name="Net Profit ($)" fill="#7C3AED" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'rfm' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rfmCohortData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis type="number" stroke="#94A3B8" fontSize={11} tickLine={false} unit="%" />
                  <YAxis dataKey="cluster" type="category" stroke="#94A3B8" fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#101321', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    formatter={(value: any, name: any) => [`${value}%`, name]}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="share" name="% of Total Customers" fill="#94A3B8" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="marginContribution" name="% Margin Contribution" fill="#F59E0B" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Bottom Analytical Insight Bar */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#94A3B8] font-mono">
            <div className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
              <span>Key Analytical Finding:</span>
              <span className="text-[#06B6D4] font-bold">
                {activeTab === 'revenue' && 'Q4 Seasonal acceleration drove a +14.2% YoY beat over target.'}
                {activeTab === 'categories' && 'Cloud Subscriptions deliver highest margin efficiency (54%) with low variance.'}
                {activeTab === 'rfm' && 'Tier 1 VIP Champions (12% of users) generate 41% of cumulative gross margin.'}
              </span>
            </div>
            <span className="text-[11px] text-[#94A3B8]">
              Powered by Recharts &amp; Dynamic State
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
