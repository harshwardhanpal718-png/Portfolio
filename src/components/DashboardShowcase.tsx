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
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, AlertCircle, Sparkles } from 'lucide-react';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'categories' | 'rfm'>('revenue');

  // Realistic sample demo data for analytical storytelling
  const revenueTrendData = [
    { month: 'Jan', actual: 145000, target: 140000 },
    { month: 'Feb', actual: 162000, target: 150000 },
    { month: 'Mar', actual: 185000, target: 170000 },
    { month: 'Apr', actual: 178000, target: 175000 },
    { month: 'May', actual: 210000, target: 190000 },
    { month: 'Jun', actual: 225000, target: 205000 },
    { month: 'Jul', actual: 218000, target: 210000 },
    { month: 'Aug', actual: 240000, target: 220000 },
    { month: 'Sep', actual: 255000, target: 235000 },
    { month: 'Oct', actual: 270000, target: 250000 },
    { month: 'Nov', actual: 310000, target: 280000 },
    { month: 'Dec', actual: 345000, target: 300000 },
  ];

  const categoryMarginData = [
    { category: 'Enterprise Tech', revenue: 1176000, profit: 333984 },
    { category: 'Office Supplies', revenue: 759500, profit: 243040 },
    { category: 'Commercial Furn.', revenue: 514500, profit: 108045 },
    { category: 'Cloud Licenses', revenue: 642000, profit: 346680 },
  ];

  const rfmCohortData = [
    { cluster: 'VIP Champions', share: 14, marginContribution: 46 },
    { cluster: 'Loyal Regulars', share: 28, marginContribution: 32 },
    { cluster: 'Recent Potentials', share: 23, marginContribution: 10 },
    { cluster: 'At-Risk Churn', share: 35, marginContribution: 12 },
  ];

  const kpis = [
    {
      title: 'Modelled Revenue',
      value: '$2.84M',
      trend: '+14.2% YoY',
      icon: DollarSign,
      bg: 'bg-[#F9EBDD]',
      color: 'text-[#8E6347]',
      caption: 'Normalized across 4 regions',
    },
    {
      title: 'Gross Margin %',
      value: '29.4%',
      trend: '+2.8% Delta',
      icon: TrendingUp,
      bg: 'bg-[#E8F1E8]',
      color: 'text-emerald-800',
      caption: 'Target variance achieved',
    },
    {
      title: 'Active Customers',
      value: '12,450',
      trend: '+8.1% Repeat',
      icon: Users,
      bg: 'bg-[#E5EEF8]',
      color: 'text-blue-800',
      caption: '90-day purchase cohort',
    },
    {
      title: 'Reporting Velocity',
      value: 'Instant',
      trend: '-85% Latency',
      icon: Activity,
      bg: 'bg-[#F4E9E7]',
      color: 'text-[#965A54]',
      caption: 'Automated SQL to BI Pipeline',
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Demo Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#EBE5DC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F1E8] border border-[#DCE9DF] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 font-sans">
                INTERACTIVE BI DEMO • SAMPLE DATA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight">
              Insights Through <span className="italic font-serif text-[#A98468]">Visualization</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#62616A] max-w-md font-sans leading-relaxed">
            Demonstrating data modeling, DAX aggregations, and intuitive executive dashboard layouts designed for commercial stakeholders.
          </p>
        </div>

        {/* 4 Pastel KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={idx}
                className={`${kpi.bg} p-6 rounded-3xl border border-[#EBE5DC] flex flex-col justify-between shadow-card hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#171923] font-sans">
                    {kpi.title}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center shadow-card">
                    <Icon className={`w-4 h-4 ${kpi.color}`} />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-serif text-3xl font-bold text-[#171923]">
                      {kpi.value}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 font-sans">
                      {kpi.trend}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#62616A] font-sans">
                    {kpi.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Interactive Container */}
        <div className="card-editorial p-6 sm:p-8 bg-white">
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EBE5DC] mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('revenue')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'revenue'
                    ? 'btn-dark'
                    : 'bg-[#FAF7F2] text-[#62616A] hover:text-[#171923] border border-[#EBE5DC]'
                }`}
              >
                Revenue Trend &amp; Target (Monthly)
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'categories'
                    ? 'btn-dark'
                    : 'bg-[#FAF7F2] text-[#62616A] hover:text-[#171923] border border-[#EBE5DC]'
                }`}
              >
                Category Margin Breakdown
              </button>
              <button
                onClick={() => setActiveTab('rfm')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'rfm'
                    ? 'btn-dark'
                    : 'bg-[#FAF7F2] text-[#62616A] hover:text-[#171923] border border-[#EBE5DC]'
                }`}
              >
                RFM Cohort Distribution
              </button>
            </div>

            <span className="text-[11px] font-mono text-[#62616A]">
              DEMO DATASET • FY2024-25
            </span>
          </div>

          {/* Chart Display Area */}
          <div className="h-80 sm:h-96 w-full pt-4">
            {activeTab === 'revenue' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="warmArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A98468" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#A98468" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EBE5DC" />
                  <XAxis dataKey="month" stroke="#62616A" fontSize={12} tickLine={false} />
                  <YAxis 
                    stroke="#62616A" 
                    fontSize={12} 
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FAF7F2', 
                      borderColor: '#EBE5DC', 
                      borderRadius: '12px',
                      color: '#171923',
                      fontSize: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }} 
                    formatter={(val: number) => [`$${val.toLocaleString()}`, '']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="actual" 
                    name="Actual Revenue" 
                    stroke="#171923" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#warmArea)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="target" 
                    name="Monthly Target" 
                    stroke="#A98468" 
                    strokeWidth={2} 
                    strokeDasharray="4 4" 
                    fill="transparent" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'categories' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryMarginData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EBE5DC" />
                  <XAxis dataKey="category" stroke="#62616A" fontSize={12} tickLine={false} />
                  <YAxis 
                    stroke="#62616A" 
                    fontSize={12} 
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FAF7F2', 
                      borderColor: '#EBE5DC', 
                      borderRadius: '12px',
                      color: '#171923',
                      fontSize: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }} 
                    formatter={(val: number) => [`$${val.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="revenue" name="Total Revenue" fill="#171923" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="profit" name="Gross Profit" fill="#A98468" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'rfm' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rfmCohortData} layout="vertical" margin={{ top: 10, right: 10, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EBE5DC" />
                  <XAxis type="number" stroke="#62616A" fontSize={12} unit="%" />
                  <YAxis dataKey="cluster" type="category" stroke="#62616A" fontSize={12} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FAF7F2', 
                      borderColor: '#EBE5DC', 
                      borderRadius: '12px',
                      color: '#171923',
                      fontSize: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }} 
                    formatter={(val: number) => [`${val}%`, '']}
                  />
                  <Bar dataKey="share" name="% of Total Customers" fill="#DCE9DF" radius={[0, 8, 8, 0]} />
                  <Bar dataKey="marginContribution" name="% Margin Contribution" fill="#A98468" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Footer Diagnostic Note */}
          <div className="mt-6 pt-4 border-t border-[#EBE5DC] flex flex-col sm:flex-row items-center justify-between text-xs text-[#62616A] gap-2 font-sans">
            <span className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#A98468]" />
              <span>Sample dashboard demonstrating interactive BI capabilities and metric visualization.</span>
            </span>
            <span className="font-semibold text-[#171923]">
              DAX Logic: Star-Schema Dimensional Modeling
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
