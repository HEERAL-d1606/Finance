// pages/api/financialData.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const financialData = [
    {
      companyName: 'ABC Ltd',
      totalShares: 1000000,
      promotersHoldings: '40%',
      revenue: '$500M',
      pat: '$50M',
      ebitda: '$100M',
      liabilities: '$200M',
      lastUpdated: '2024-11-29',
      id: '1',
    },
    {
        companyName: 'XYZZ Corp',
        totalShares: 2000000,
        promotersHoldings: '60%',
        revenue: '$700M',
        pat: '$70M',
        ebitda: '$150M',
        liabilities: '$300M',
        lastUpdated: '2024-11-18',
        id: '2'
      },
      {
        companyName: 'Techno Innovations',
        totalShares: 1500000,
        promotersHoldings: '45%',
        revenue: '$600M',
        pat: '$60M',
        ebitda: '$120M',
        liabilities: '$250M',
        lastUpdated: '2024-11-20',
        id: '3'
      },
      {
        companyName: 'Future Tech Solutions',
        totalShares: 2500000,
        promotersHoldings: '55%',
        revenue: '$800M',
        pat: '$80M',
        ebitda: '$160M',
        liabilities: '$350M',
        lastUpdated: '2024-11-22',
        id: '4'
      },
      {
        companyName: 'Green Ventures',
        totalShares: 1800000,
        promotersHoldings: '50%',
        revenue: '$650M',
        pat: '$65M',
        ebitda: '$130M',
        liabilities: '$280M',
        lastUpdated: '2024-11-23',
        id: '5'
      },
      {
        companyName: 'Health Corp',
        totalShares: 2200000,
        promotersHoldings: '70%',
        revenue: '$750M',
        pat: '$75M',
        ebitda: '$140M',
        liabilities: '$320M',
        lastUpdated: '2024-11-19',
        id: '6'
      },
      {
        companyName: 'SolarTech Energy',
        totalShares: 3000000,
        promotersHoldings: '65%',
        revenue: '$900M',
        pat: '$90M',
        ebitda: '$180M',
        liabilities: '$400M',
        lastUpdated: '2024-11-25',
        id: '7'
      },
      {
        companyName: 'Quantum Computing Inc',
        totalShares: 3500000,
        promotersHoldings: '60%',
        revenue: '$950M',
        pat: '$95M',
        ebitda: '$190M',
        liabilities: '$450M',
        lastUpdated: '2024-11-28',
        id: '8'
      },
      {
        companyName: 'AutoMovers Ltd',
        totalShares: 1200000,
        promotersHoldings: '40%',
        revenue: '$520M',
        pat: '$52M',
        ebitda: '$104M',
        liabilities: '$210M',
        lastUpdated: '2024-11-26',
        id: '9'
      },
      {
        companyName: 'Eco Products Ltd',
        totalShares: 1400000,
        promotersHoldings: '50%',
        revenue: '$540M',
        pat: '$54M',
        ebitda: '$108M',
        liabilities: '$220M',
        lastUpdated: '2024-11-27',
        id: '10'
      },
      {
        companyName: 'Digital Marketing Experts',
        totalShares: 1600000,
        promotersHoldings: '65%',
        revenue: '$600M',
        pat: '$60M',
        ebitda: '$120M',
        liabilities: '$230M',
        lastUpdated: '2024-11-29',
        id: '11'
      },
      {
        companyName: 'Innovative Designers',
        totalShares: 1900000,
        promotersHoldings: '55%',
        revenue: '$670M',
        pat: '$67M',
        ebitda: '$134M',
        liabilities: '$240M',
        lastUpdated: '2024-11-21',
        id: '12'
      }
    // Add other mock data here...
  ];

  res.status(200).json(financialData);
}
