export interface MonthlyDataPoint {
  month: string;
  revenue: number;
  target: number;
  profit: number;
  orders: number;
}

export interface CategoryDataPoint {
  category: string;
  revenue: number;
  profitMargin: number;
  orders: number;
  color: string;
}

export interface RegionalDataPoint {
  region: string;
  revenue: number;
  share: number;
  growth: number;
  color: string;
}

export interface RawRecord {
  id: string;
  date: string;
  category: string;
  region: string;
  product: string;
  revenue: number;
  profit: number;
  status: 'Delivered' | 'In Transit' | 'Returned';
}

export const sampleDashboardDataset = {
  timeFilters: [
    { id: '30d', label: 'Last 30 Days' },
    { id: '90d', label: 'Last 90 Days' },
    { id: '180d', label: 'Last 6 Months' },
    { id: '1y', label: 'Full Year (2024)' }
  ],

  categories: ['All', 'Technology', 'Furniture', 'Office Supplies'] as const,

  regions: ['All', 'North', 'South', 'East', 'West'] as const,

  // Aggregated data structured by category and timeframe
  dataByTimeframe: {
    '1y': {
      All: {
        kpis: {
          totalRevenue: '$2,485,200',
          revenueChange: '+14.8%',
          grossProfit: '$718,400',
          profitMargin: '28.9%',
          totalOrders: '14,240',
          ordersChange: '+9.4%',
          aov: '$174.50',
          aovChange: '+4.9%',
          returnRate: '2.1%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jan', revenue: 165000, target: 150000, profit: 46200, orders: 980 },
          { month: 'Feb', revenue: 172000, target: 160000, profit: 49880, orders: 1020 },
          { month: 'Mar', revenue: 195000, target: 180000, profit: 58500, orders: 1140 },
          { month: 'Apr', revenue: 188000, target: 185000, profit: 52640, orders: 1090 },
          { month: 'May', revenue: 210000, target: 200000, profit: 60900, orders: 1220 },
          { month: 'Jun', revenue: 224000, target: 210000, profit: 67200, orders: 1290 },
          { month: 'Jul', revenue: 205000, target: 210000, profit: 59450, orders: 1180 },
          { month: 'Aug', revenue: 218000, target: 215000, profit: 63220, orders: 1250 },
          { month: 'Sep', revenue: 235000, target: 225000, profit: 70500, orders: 1340 },
          { month: 'Oct', revenue: 242000, target: 230000, profit: 72600, orders: 1390 },
          { month: 'Nov', revenue: 268000, target: 250000, profit: 80400, orders: 1530 },
          { month: 'Dec', revenue: 282000, target: 260000, profit: 84600, orders: 1610 }
        ],
        categoryBreakdown: [
          { category: 'Technology', revenue: 1120000, profitMargin: 34.2, orders: 4820, color: '#3B82F6' },
          { category: 'Furniture', revenue: 760000, profitMargin: 21.5, orders: 3640, color: '#8B5CF6' },
          { category: 'Office Supplies', revenue: 605200, profitMargin: 29.8, orders: 5780, color: '#06B6D4' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 944376, share: 38, growth: 16.4, color: '#3B82F6' },
          { region: 'Europe', revenue: 720708, share: 29, growth: 12.1, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 521892, share: 21, growth: 22.8, color: '#06B6D4' },
          { region: 'Latin America', revenue: 298224, share: 12, growth: 8.5, color: '#F59E0B' }
        ]
      },
      Technology: {
        kpis: {
          totalRevenue: '$1,120,000',
          revenueChange: '+19.2%',
          grossProfit: '$383,040',
          profitMargin: '34.2%',
          totalOrders: '4,820',
          ordersChange: '+14.1%',
          aov: '$232.36',
          aovChange: '+4.5%',
          returnRate: '1.4%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jan', revenue: 74000, target: 68000, profit: 25300, orders: 320 },
          { month: 'Feb', revenue: 78000, target: 72000, profit: 26670, orders: 335 },
          { month: 'Mar', revenue: 89000, target: 82000, profit: 30430, orders: 380 },
          { month: 'Apr', revenue: 85000, target: 83000, profit: 29070, orders: 365 },
          { month: 'May', revenue: 95000, target: 90000, profit: 32490, orders: 410 },
          { month: 'Jun', revenue: 102000, target: 95000, profit: 34880, orders: 440 },
          { month: 'Jul', revenue: 92000, target: 95000, profit: 31460, orders: 395 },
          { month: 'Aug', revenue: 99000, target: 97000, profit: 33850, orders: 425 },
          { month: 'Sep', revenue: 106000, target: 102000, profit: 36250, orders: 455 },
          { month: 'Oct', revenue: 110000, target: 105000, profit: 37620, orders: 475 },
          { month: 'Nov', revenue: 121000, target: 114000, profit: 41380, orders: 520 },
          { month: 'Dec', revenue: 128000, target: 118000, profit: 43770, orders: 550 }
        ],
        categoryBreakdown: [
          { category: 'Enterprise Hardware', revenue: 540000, profitMargin: 36.5, orders: 1850, color: '#3B82F6' },
          { category: 'Consumer Peripherals', revenue: 380000, profitMargin: 32.1, orders: 2150, color: '#60A5FA' },
          { category: 'Cloud Infrastructure', revenue: 200000, profitMargin: 38.0, orders: 820, color: '#93C5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 470400, share: 42, growth: 21.0, color: '#3B82F6' },
          { region: 'Europe', revenue: 313600, share: 28, growth: 15.4, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 235200, share: 21, growth: 26.5, color: '#06B6D4' },
          { region: 'Latin America', revenue: 100800, share: 9, growth: 10.2, color: '#F59E0B' }
        ]
      },
      Furniture: {
        kpis: {
          totalRevenue: '$760,000',
          revenueChange: '+6.5%',
          grossProfit: '$163,400',
          profitMargin: '21.5%',
          totalOrders: '3,640',
          ordersChange: '+2.1%',
          aov: '$208.79',
          aovChange: '+4.3%',
          returnRate: '3.8%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jan', revenue: 52000, target: 50000, profit: 11180, orders: 250 },
          { month: 'Feb', revenue: 54000, target: 52000, profit: 11610, orders: 260 },
          { month: 'Mar', revenue: 60000, target: 58000, profit: 12900, orders: 288 },
          { month: 'Apr', revenue: 58000, target: 59000, profit: 12470, orders: 278 },
          { month: 'May', revenue: 64000, target: 63000, profit: 13760, orders: 306 },
          { month: 'Jun', revenue: 68000, target: 66000, profit: 14620, orders: 325 },
          { month: 'Jul', revenue: 62000, target: 65000, profit: 13330, orders: 298 },
          { month: 'Aug', revenue: 66000, target: 67000, profit: 14190, orders: 316 },
          { month: 'Sep', revenue: 71000, target: 70000, profit: 15260, orders: 340 },
          { month: 'Oct', revenue: 73000, target: 71000, profit: 15690, orders: 350 },
          { month: 'Nov', revenue: 81000, target: 77000, profit: 17410, orders: 388 },
          { month: 'Dec', revenue: 86000, target: 80000, profit: 18490, orders: 412 }
        ],
        categoryBreakdown: [
          { category: 'Executive Desks', revenue: 320000, profitMargin: 24.0, orders: 1280, color: '#8B5CF6' },
          { category: 'Ergonomic Seating', revenue: 270000, profitMargin: 22.5, orders: 1450, color: '#A78BFA' },
          { category: 'Storage Systems', revenue: 170000, profitMargin: 15.2, orders: 910, color: '#C4B5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 266000, share: 35, growth: 7.2, color: '#3B82F6' },
          { region: 'Europe', revenue: 235600, share: 31, growth: 8.4, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 159600, share: 21, growth: 12.0, color: '#06B6D4' },
          { region: 'Latin America', revenue: 98800, share: 13, growth: -1.2, color: '#F59E0B' }
        ]
      },
      'Office Supplies': {
        kpis: {
          totalRevenue: '$605,200',
          revenueChange: '+18.1%',
          grossProfit: '$180,349',
          profitMargin: '29.8%',
          totalOrders: '5,780',
          ordersChange: '+14.9%',
          aov: '$104.70',
          aovChange: '+2.8%',
          returnRate: '1.2%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jan', revenue: 39000, target: 36000, profit: 11622, orders: 372 },
          { month: 'Feb', revenue: 41000, target: 38000, profit: 12218, orders: 391 },
          { month: 'Mar', revenue: 47000, target: 43000, profit: 14006, orders: 449 },
          { month: 'Apr', revenue: 45000, target: 44000, profit: 13410, orders: 430 },
          { month: 'May', revenue: 51000, target: 47000, profit: 15198, orders: 487 },
          { month: 'Jun', revenue: 54000, target: 50000, profit: 16092, orders: 516 },
          { month: 'Jul', revenue: 49000, target: 50000, profit: 14602, orders: 468 },
          { month: 'Aug', revenue: 53000, target: 51000, profit: 15794, orders: 506 },
          { month: 'Sep', revenue: 58000, target: 54000, profit: 17284, orders: 554 },
          { month: 'Oct', revenue: 59000, target: 56000, profit: 17582, orders: 563 },
          { month: 'Nov', revenue: 66000, target: 62000, profit: 19668, orders: 630 },
          { month: 'Dec', revenue: 70000, target: 65000, profit: 20860, orders: 668 }
        ],
        categoryBreakdown: [
          { category: 'Paper & Printing', revenue: 260000, profitMargin: 31.4, orders: 2510, color: '#06B6D4' },
          { category: 'Organization & Binders', revenue: 210000, profitMargin: 28.5, orders: 1980, color: '#22D3EE' },
          { category: 'Shipping Consumables', revenue: 135200, profitMargin: 29.0, orders: 1290, color: '#67E8F9' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 217872, share: 36, growth: 18.2, color: '#3B82F6' },
          { region: 'Europe', revenue: 175508, share: 29, growth: 14.5, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 133144, share: 22, growth: 25.1, color: '#06B6D4' },
          { region: 'Latin America', revenue: 78676, share: 13, growth: 9.8, color: '#F59E0B' }
        ]
      }
    },
    '90d': {
      All: {
        kpis: {
          totalRevenue: '$792,000',
          revenueChange: '+16.2%',
          grossProfit: '$237,600',
          profitMargin: '30.0%',
          totalOrders: '4,530',
          ordersChange: '+11.8%',
          aov: '$174.83',
          aovChange: '+3.9%',
          returnRate: '1.9%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Oct', revenue: 242000, target: 230000, profit: 72600, orders: 1390 },
          { month: 'Nov', revenue: 268000, target: 250000, profit: 80400, orders: 1530 },
          { month: 'Dec', revenue: 282000, target: 260000, profit: 84600, orders: 1610 }
        ],
        categoryBreakdown: [
          { category: 'Technology', revenue: 359000, profitMargin: 35.1, orders: 1545, color: '#3B82F6' },
          { category: 'Furniture', revenue: 240000, profitMargin: 22.8, orders: 1150, color: '#8B5CF6' },
          { category: 'Office Supplies', revenue: 195000, profitMargin: 30.5, orders: 1860, color: '#06B6D4' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 308880, share: 39, growth: 18.1, color: '#3B82F6' },
          { region: 'Europe', revenue: 229680, share: 29, growth: 13.9, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 166320, share: 21, growth: 24.2, color: '#06B6D4' },
          { region: 'Latin America', revenue: 95040, share: 12, growth: 9.1, color: '#F59E0B' }
        ]
      },
      Technology: {
        kpis: {
          totalRevenue: '$359,000',
          revenueChange: '+20.5%',
          grossProfit: '$126,009',
          profitMargin: '35.1%',
          totalOrders: '1,545',
          ordersChange: '+15.2%',
          aov: '$232.36',
          aovChange: '+4.6%',
          returnRate: '1.3%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Oct', revenue: 110000, target: 105000, profit: 37620, orders: 475 },
          { month: 'Nov', revenue: 121000, target: 114000, profit: 41380, orders: 520 },
          { month: 'Dec', revenue: 128000, target: 118000, profit: 43770, orders: 550 }
        ],
        categoryBreakdown: [
          { category: 'Enterprise Hardware', revenue: 172000, profitMargin: 37.2, orders: 590, color: '#3B82F6' },
          { category: 'Consumer Peripherals', revenue: 121000, profitMargin: 33.0, orders: 690, color: '#60A5FA' },
          { category: 'Cloud Infrastructure', revenue: 66000, profitMargin: 39.1, orders: 265, color: '#93C5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 154370, share: 43, growth: 22.4, color: '#3B82F6' },
          { region: 'Europe', revenue: 100520, share: 28, growth: 17.1, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 75390, share: 21, growth: 27.9, color: '#06B6D4' },
          { region: 'Latin America', revenue: 28720, share: 8, growth: 11.0, color: '#F59E0B' }
        ]
      },
      Furniture: {
        kpis: {
          totalRevenue: '$240,000',
          revenueChange: '+8.1%',
          grossProfit: '$54,720',
          profitMargin: '22.8%',
          totalOrders: '1,150',
          ordersChange: '+4.0%',
          aov: '$208.70',
          aovChange: '+3.9%',
          returnRate: '3.2%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Oct', revenue: 73000, target: 71000, profit: 15690, orders: 350 },
          { month: 'Nov', revenue: 81000, target: 77000, profit: 17410, orders: 388 },
          { month: 'Dec', revenue: 86000, target: 80000, profit: 18490, orders: 412 }
        ],
        categoryBreakdown: [
          { category: 'Executive Desks', revenue: 101000, profitMargin: 25.0, orders: 405, color: '#8B5CF6' },
          { category: 'Ergonomic Seating', revenue: 85000, profitMargin: 23.5, orders: 455, color: '#A78BFA' },
          { category: 'Storage Systems', revenue: 54000, profitMargin: 16.5, orders: 290, color: '#C4B5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 86400, share: 36, growth: 9.1, color: '#3B82F6' },
          { region: 'Europe', revenue: 74400, share: 31, growth: 9.8, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 50400, share: 21, growth: 13.5, color: '#06B6D4' },
          { region: 'Latin America', revenue: 28800, share: 12, growth: 2.1, color: '#F59E0B' }
        ]
      },
      'Office Supplies': {
        kpis: {
          totalRevenue: '$195,000',
          revenueChange: '+19.4%',
          grossProfit: '$59,475',
          profitMargin: '30.5%',
          totalOrders: '1,860',
          ordersChange: '+16.2%',
          aov: '$104.84',
          aovChange: '+2.7%',
          returnRate: '1.1%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Oct', revenue: 59000, target: 56000, profit: 17582, orders: 563 },
          { month: 'Nov', revenue: 66000, target: 62000, profit: 19668, orders: 630 },
          { month: 'Dec', revenue: 70000, target: 65000, profit: 20860, orders: 668 }
        ],
        categoryBreakdown: [
          { category: 'Paper & Printing', revenue: 84000, profitMargin: 32.0, orders: 810, color: '#06B6D4' },
          { category: 'Organization & Binders', revenue: 67000, profitMargin: 29.5, orders: 640, color: '#22D3EE' },
          { category: 'Shipping Consumables', revenue: 44000, profitMargin: 29.8, orders: 410, color: '#67E8F9' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 72150, share: 37, growth: 19.5, color: '#3B82F6' },
          { region: 'Europe', revenue: 56550, share: 29, growth: 15.8, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 42900, share: 22, growth: 26.4, color: '#06B6D4' },
          { region: 'Latin America', revenue: 23400, share: 12, growth: 10.2, color: '#F59E0B' }
        ]
      }
    },
    '30d': {
      All: {
        kpis: {
          totalRevenue: '$282,000',
          revenueChange: '+17.4%',
          grossProfit: '$84,600',
          profitMargin: '30.0%',
          totalOrders: '1,610',
          ordersChange: '+12.5%',
          aov: '$175.16',
          aovChange: '+4.4%',
          returnRate: '1.8%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'W1', revenue: 64000, target: 60000, profit: 19200, orders: 365 },
          { month: 'W2', revenue: 68000, target: 64000, profit: 20400, orders: 390 },
          { month: 'W3', revenue: 72000, target: 67000, profit: 21600, orders: 410 },
          { month: 'W4', revenue: 78000, target: 69000, profit: 23400, orders: 445 }
        ],
        categoryBreakdown: [
          { category: 'Technology', revenue: 128000, profitMargin: 35.8, orders: 550, color: '#3B82F6' },
          { category: 'Furniture', revenue: 86000, profitMargin: 23.2, orders: 412, color: '#8B5CF6' },
          { category: 'Office Supplies', revenue: 70000, profitMargin: 30.8, orders: 668, color: '#06B6D4' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 112800, share: 40, growth: 19.2, color: '#3B82F6' },
          { region: 'Europe', revenue: 78960, share: 28, growth: 14.8, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 59220, share: 21, growth: 25.1, color: '#06B6D4' },
          { region: 'Latin America', revenue: 31020, share: 11, growth: 9.8, color: '#F59E0B' }
        ]
      },
      Technology: {
        kpis: {
          totalRevenue: '$128,000',
          revenueChange: '+21.8%',
          grossProfit: '$45,824',
          profitMargin: '35.8%',
          totalOrders: '550',
          ordersChange: '+16.5%',
          aov: '$232.72',
          aovChange: '+4.5%',
          returnRate: '1.2%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'W1', revenue: 29000, target: 27000, profit: 10380, orders: 125 },
          { month: 'W2', revenue: 31000, target: 29000, profit: 11090, orders: 133 },
          { month: 'W3', revenue: 33000, target: 30000, profit: 11810, orders: 142 },
          { month: 'W4', revenue: 35000, target: 32000, profit: 12530, orders: 150 }
        ],
        categoryBreakdown: [
          { category: 'Enterprise Hardware', revenue: 62000, profitMargin: 37.8, orders: 210, color: '#3B82F6' },
          { category: 'Consumer Peripherals', revenue: 43000, profitMargin: 33.5, orders: 245, color: '#60A5FA' },
          { category: 'Cloud Infrastructure', revenue: 23000, profitMargin: 39.5, orders: 95, color: '#93C5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 56320, share: 44, growth: 23.5, color: '#3B82F6' },
          { region: 'Europe', revenue: 34560, share: 27, growth: 18.0, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 26880, share: 21, growth: 28.5, color: '#06B6D4' },
          { region: 'Latin America', revenue: 10240, share: 8, growth: 12.0, color: '#F59E0B' }
        ]
      },
      Furniture: {
        kpis: {
          totalRevenue: '$86,000',
          revenueChange: '+9.2%',
          grossProfit: '$19,952',
          profitMargin: '23.2%',
          totalOrders: '412',
          ordersChange: '+4.8%',
          aov: '$208.74',
          aovChange: '+4.2%',
          returnRate: '2.9%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'W1', revenue: 20000, target: 19000, profit: 4640, orders: 96 },
          { month: 'W2', revenue: 21000, target: 20000, profit: 4870, orders: 101 },
          { month: 'W3', revenue: 22000, target: 20500, profit: 5100, orders: 105 },
          { month: 'W4', revenue: 23000, target: 21000, profit: 5330, orders: 110 }
        ],
        categoryBreakdown: [
          { category: 'Executive Desks', revenue: 36000, profitMargin: 25.5, orders: 145, color: '#8B5CF6' },
          { category: 'Ergonomic Seating', revenue: 31000, profitMargin: 24.0, orders: 165, color: '#A78BFA' },
          { category: 'Storage Systems', revenue: 19000, profitMargin: 17.0, orders: 102, color: '#C4B5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 31820, share: 37, growth: 10.4, color: '#3B82F6' },
          { region: 'Europe', revenue: 25800, share: 30, growth: 10.1, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 18060, share: 21, growth: 14.2, color: '#06B6D4' },
          { region: 'Latin America', revenue: 10320, share: 12, growth: 3.0, color: '#F59E0B' }
        ]
      },
      'Office Supplies': {
        kpis: {
          totalRevenue: '$70,000',
          revenueChange: '+20.1%',
          grossProfit: '$21,560',
          profitMargin: '30.8%',
          totalOrders: '668',
          ordersChange: '+17.0%',
          aov: '$104.79',
          aovChange: '+2.6%',
          returnRate: '1.0%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'W1', revenue: 15000, target: 14000, profit: 4620, orders: 144 },
          { month: 'W2', revenue: 16000, target: 15000, profit: 4920, orders: 153 },
          { month: 'W3', revenue: 17000, target: 16000, profit: 5230, orders: 162 },
          { month: 'W4', revenue: 22000, target: 20000, profit: 6770, orders: 209 }
        ],
        categoryBreakdown: [
          { category: 'Paper & Printing', revenue: 30000, profitMargin: 32.5, orders: 290, color: '#06B6D4' },
          { category: 'Organization & Binders', revenue: 24000, profitMargin: 30.0, orders: 230, color: '#22D3EE' },
          { category: 'Shipping Consumables', revenue: 16000, profitMargin: 30.0, orders: 148, color: '#67E8F9' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 26600, share: 38, growth: 20.2, color: '#3B82F6' },
          { region: 'Europe', revenue: 20300, share: 29, growth: 16.5, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 14700, share: 21, growth: 27.2, color: '#06B6D4' },
          { region: 'Latin America', revenue: 8400, share: 12, growth: 11.0, color: '#F59E0B' }
        ]
      }
    },
    '180d': {
      All: {
        kpis: {
          totalRevenue: '$1,450,000',
          revenueChange: '+15.4%',
          grossProfit: '$420,500',
          profitMargin: '29.0%',
          totalOrders: '8,300',
          ordersChange: '+10.2%',
          aov: '$174.69',
          aovChange: '+4.7%',
          returnRate: '2.0%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jul', revenue: 205000, target: 210000, profit: 59450, orders: 1180 },
          { month: 'Aug', revenue: 218000, target: 215000, profit: 63220, orders: 1250 },
          { month: 'Sep', revenue: 235000, target: 225000, profit: 70500, orders: 1340 },
          { month: 'Oct', revenue: 242000, target: 230000, profit: 72600, orders: 1390 },
          { month: 'Nov', revenue: 268000, target: 250000, profit: 80400, orders: 1530 },
          { month: 'Dec', revenue: 282000, target: 260000, profit: 84600, orders: 1610 }
        ],
        categoryBreakdown: [
          { category: 'Technology', revenue: 654000, profitMargin: 34.6, orders: 2815, color: '#3B82F6' },
          { category: 'Furniture', revenue: 444000, profitMargin: 21.9, orders: 2125, color: '#8B5CF6' },
          { category: 'Office Supplies', revenue: 352000, profitMargin: 30.1, orders: 3360, color: '#06B6D4' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 551000, share: 38, growth: 17.0, color: '#3B82F6' },
          { region: 'Europe', revenue: 420500, share: 29, growth: 12.8, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 304500, share: 21, growth: 23.5, color: '#06B6D4' },
          { region: 'Latin America', revenue: 174000, share: 12, growth: 8.8, color: '#F59E0B' }
        ]
      },
      Technology: {
        kpis: {
          totalRevenue: '$654,000',
          revenueChange: '+19.8%',
          grossProfit: '$226,284',
          profitMargin: '34.6%',
          totalOrders: '2,815',
          ordersChange: '+14.6%',
          aov: '$232.32',
          aovChange: '+4.5%',
          returnRate: '1.4%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jul', revenue: 92000, target: 95000, profit: 31460, orders: 395 },
          { month: 'Aug', revenue: 99000, target: 97000, profit: 33850, orders: 425 },
          { month: 'Sep', revenue: 106000, target: 102000, profit: 36250, orders: 455 },
          { month: 'Oct', revenue: 110000, target: 105000, profit: 37620, orders: 475 },
          { month: 'Nov', revenue: 121000, target: 114000, profit: 41380, orders: 520 },
          { month: 'Dec', revenue: 128000, target: 118000, profit: 43770, orders: 550 }
        ],
        categoryBreakdown: [
          { category: 'Enterprise Hardware', revenue: 315000, profitMargin: 36.8, orders: 1080, color: '#3B82F6' },
          { category: 'Consumer Peripherals', revenue: 221000, profitMargin: 32.5, orders: 1255, color: '#60A5FA' },
          { category: 'Cloud Infrastructure', revenue: 118000, profitMargin: 38.5, orders: 480, color: '#93C5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 281220, share: 43, growth: 21.8, color: '#3B82F6' },
          { region: 'Europe', revenue: 183120, share: 28, growth: 16.2, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 137340, share: 21, growth: 27.0, color: '#06B6D4' },
          { region: 'Latin America', revenue: 52320, share: 8, growth: 10.8, color: '#F59E0B' }
        ]
      },
      Furniture: {
        kpis: {
          totalRevenue: '$444,000',
          revenueChange: '+7.2%',
          grossProfit: '$97,236',
          profitMargin: '21.9%',
          totalOrders: '2,125',
          ordersChange: '+2.9%',
          aov: '$208.94',
          aovChange: '+4.1%',
          returnRate: '3.5%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jul', revenue: 62000, target: 65000, profit: 13330, orders: 298 },
          { month: 'Aug', revenue: 66000, target: 67000, profit: 14190, orders: 316 },
          { month: 'Sep', revenue: 71000, target: 70000, profit: 15260, orders: 340 },
          { month: 'Oct', revenue: 73000, target: 71000, profit: 15690, orders: 350 },
          { month: 'Nov', revenue: 81000, target: 77000, profit: 17410, orders: 388 },
          { month: 'Dec', revenue: 86000, target: 80000, profit: 18490, orders: 412 }
        ],
        categoryBreakdown: [
          { category: 'Executive Desks', revenue: 188000, profitMargin: 24.5, orders: 750, color: '#8B5CF6' },
          { category: 'Ergonomic Seating', revenue: 156000, profitMargin: 22.8, orders: 845, color: '#A78BFA' },
          { category: 'Storage Systems', revenue: 100000, profitMargin: 15.8, orders: 530, color: '#C4B5FD' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 155400, share: 35, growth: 8.0, color: '#3B82F6' },
          { region: 'Europe', revenue: 137640, share: 31, growth: 9.0, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 93240, share: 21, growth: 12.8, color: '#06B6D4' },
          { region: 'Latin America', revenue: 57720, share: 13, growth: 0.5, color: '#F59E0B' }
        ]
      },
      'Office Supplies': {
        kpis: {
          totalRevenue: '$352,000',
          revenueChange: '+18.8%',
          grossProfit: '$105,952',
          profitMargin: '30.1%',
          totalOrders: '3,360',
          ordersChange: '+15.5%',
          aov: '$104.76',
          aovChange: '+2.8%',
          returnRate: '1.1%',
          isPositive: true
        },
        monthlyTrend: [
          { month: 'Jul', revenue: 49000, target: 50000, profit: 14602, orders: 468 },
          { month: 'Aug', revenue: 53000, target: 51000, profit: 15794, orders: 506 },
          { month: 'Sep', revenue: 58000, target: 54000, profit: 17284, orders: 554 },
          { month: 'Oct', revenue: 59000, target: 56000, profit: 17582, orders: 563 },
          { month: 'Nov', revenue: 66000, target: 62000, profit: 19668, orders: 630 },
          { month: 'Dec', revenue: 70000, target: 65000, profit: 20860, orders: 668 }
        ],
        categoryBreakdown: [
          { category: 'Paper & Printing', revenue: 152000, profitMargin: 31.8, orders: 1460, color: '#06B6D4' },
          { category: 'Organization & Binders', revenue: 122000, profitMargin: 28.9, orders: 1150, color: '#22D3EE' },
          { category: 'Shipping Consumables', revenue: 78000, profitMargin: 29.2, orders: 750, color: '#67E8F9' }
        ],
        regionalPerformance: [
          { region: 'North America', revenue: 126720, share: 36, growth: 18.9, color: '#3B82F6' },
          { region: 'Europe', revenue: 102080, share: 29, growth: 15.1, color: '#8B5CF6' },
          { region: 'Asia Pacific', revenue: 77440, share: 22, growth: 25.8, color: '#06B6D4' },
          { region: 'Latin America', revenue: 45760, share: 13, growth: 10.0, color: '#F59E0B' }
        ]
      }
    }
  },

  // Sample raw data rows for interactive table inspection
  sampleRecords: [
    { id: 'ORD-9481', date: '2024-12-18', category: 'Technology', region: 'North America', product: 'Dell UltraSharp 27" 4K Monitor', revenue: 620, profit: 218, status: 'Delivered' },
    { id: 'ORD-9482', date: '2024-12-17', category: 'Furniture', region: 'Europe', product: 'Steelcase Gesture Ergonomic Chair', revenue: 1140, profit: 285, status: 'Delivered' },
    { id: 'ORD-9483', date: '2024-12-17', category: 'Office Supplies', region: 'Asia Pacific', product: 'Heavy-Duty Storage Archive Boxes (10pk)', revenue: 145, profit: 46, status: 'Delivered' },
    { id: 'ORD-9484', date: '2024-12-16', category: 'Technology', region: 'North America', product: 'Logitech MX Master 3S Wireless Mouse', revenue: 99, profit: 34, status: 'In Transit' },
    { id: 'ORD-9485', date: '2024-12-15', category: 'Furniture', region: 'Latin America', product: 'Standing Electric Height Adjustable Desk', revenue: 580, profit: 98, status: 'Returned' },
    { id: 'ORD-9486', date: '2024-12-14', category: 'Technology', region: 'Europe', product: 'Anker USB-C Power Delivery Docking Station', revenue: 240, profit: 88, status: 'Delivered' },
    { id: 'ORD-9487', date: '2024-12-14', category: 'Office Supplies', region: 'North America', product: 'Recycled Bond Letter Paper (5 Reams)', revenue: 78, profit: 25, status: 'Delivered' }
  ]
};
