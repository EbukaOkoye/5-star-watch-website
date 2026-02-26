import { Product } from './types';

export const COLORS = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  textPrimary: '#1A1A1A',
  textSecondary: '#6E6E6E',
  gold: '#D4AF37',
  goldHover: '#B8963F',
  lightBorder: '#F0F0F0',
  alternateBg: '#F9F9F9',
};

export const PRODUCTS: Product[] = [
  // Hublot Collection
  {
    id: 'hublot-classic',
    name: 'Hublot Classic Collection',
    price: 45000,
    description: 'The Hublot Classic Fusion combines contemporary design with Swiss precision.',
    category: 'Modern',
    material: 'Mixed',
    complications: ['Automatic', 'Chronograph'],
    image: '/hublot-35k/hublot-v1.jpeg',
    gallery: [
      '/hublot-35k/hublot-v1.jpeg',
      '/hublot-35k/hublot-v2.jpeg',
      '/hublot-35k/hublot-v3.jpeg',
      '/hublot-35k/hublot-v4.jpeg',
      '/hublot-35k/hublot-v5.jpeg',
      '/hublot-35k/hublot-v6.jpeg',
      '/hublot-35k/hublot-v7.jpeg',
      '/hublot-35k/hublot-v8.jpeg',
      '/hublot-35k/hublot-v9.jpeg'
    ],
    specs: ['45mm Case Size', 'Swiss Automatic Movement'],
    features: ['Multiple Variants', 'Swiss Movement', 'Water Resistant 50m']
  },

  // Hublot Original Collection
  {
    id: 'hublot-original',
    name: 'Hublot Original Collection',
    price: 55000,
    description: 'Classic Hublot designs with premium materials and distinctive style.',
    category: 'Signature',
    material: 'Mixed',
    complications: ['Automatic'],
    image: '/hublot/hublot-black.jpeg',
    gallery: [
      '/hublot/hublot-black.jpeg',
      '/hublot/hublot-blue.jpeg',
      '/hublot/hublot-cream.jpeg',
      '/hublot/hublot-gold-black.jpeg',
      '/hublot/hublot-gold.jpeg',
      '/hublot/hublot-gray.jpeg',
      '/hublot/hublot-green.jpeg',
      '/hublot/hublot-grey.jpeg',
      '/hublot/hublot-grey2.jpeg',
      '/hublot/hublot-wood.jpeg'
    ],
    specs: ['44mm Case Size', 'Swiss Automatic Movement'],
    features: ['10 Color Variants', 'Premium Materials', 'Classic Design']
  },

  // Hublot Premium Collection
  {
    id: 'hublot-premium',
    name: 'Hublot Premium Collection',
    price: 300000,
    description: 'Ultra-premium Hublot with exclusive complications.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Chronograph'],
    image: '/hublot-premium-300k/highqualityhublot300k-v1.jpeg',
    gallery: [
      '/hublot-premium-300k/highqualityhublot300k-v1.jpeg',
      '/hublot-premium-300k/highqualityhublot300k-v2.jpeg',
      '/hublot-premium-300k/highqualityhublot300k-v3.jpeg',
      '/hublot-premium-300k/highqualityhublot300k-v4.jpeg',
      '/hublot-premium-300k/highqualityhublot300k-v5.jpeg'
    ],
    specs: ['45mm Case Size', 'Swiss Chronograph Movement', '18K King Gold'],
    features: ['Limited Production', 'Premium Materials', 'Chronograph Function']
  },

  // Jaeger-LeCoultre Collection
  {
    id: 'jaeger-master',
    name: 'Jaeger-LeCoultre Master Collection',
    price: 47000,
    description: 'The epitome of Swiss watchmaking excellence.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Date', 'Moonphase', 'Chronograph'],
    image: '/jaeger-lecoultre/jaeger-black.jpeg',
    gallery: [
      '/jaeger-lecoultre/jaeger-black.jpeg',
      '/jaeger-lecoultre/jaeger-black2.jpeg',
      '/jaeger-lecoultre/jaeger-blue.jpeg',
      '/jaeger-lecoultre/jaeger-brown.jpeg',
      '/jaeger-lecoultre/jaeger-green.jpeg',
      '/jaeger-lecoultre/jaeger-orange.jpeg',
      '/jaeger-lecoultre/jaeger-red.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement'],
    features: ['Moonphase Complication', 'Chronograph Function', 'Date Display']
  },

  // Luxury Gold Chain Collection
  {
    id: 'luxury-gold-chain',
    name: 'Luxury Gold Chain Collection',
    price: 40000,
    description: 'Elegant gold chain watches with vibrant dial colors.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Date'],
    image: '/luxury-gold-chain/luxury-gold-chain-watch-green.jpeg',
    gallery: [
      '/luxury-gold-chain/luxury-gold-chain-watch-green.jpeg',
      '/luxury-gold-chain/luxury-gold-chain-watch-purple.jpeg',
      '/luxury-gold-chain/luxury-gold-chain-watch-red.jpeg'
    ],
    specs: ['42mm Case Size', 'Quartz Movement', 'Gold Plated'],
    features: ['Gold Chain Bracelet', 'Multiple Dial Colors', 'Date Display']
  },

  // Poedagar V1 Collection
  {
    id: 'poedagar-classic',
    name: 'Poedagar Classic Collection',
    price: 35000,
    description: 'Affordable luxury with multiple design variants.',
    category: 'Modern',
    material: 'Mixed',
    complications: ['Date'],
    image: '/poedagar-v1/poedagarv1-black.jpeg',
    gallery: [
      '/poedagar-v1/poedagarv1-black.jpeg',
      '/poedagar-v1/poedagarv1-black2.jpeg',
      '/poedagar-v1/poedagarv1-black3.jpeg',
      '/poedagar-v1/poedagarv1-black4.jpeg',
      '/poedagar-v1/poedagarv1-brown.jpeg',
      '/poedagar-v1/poedagarv1-coal.jpeg',
      '/poedagar-v1/poedagarv1-darkblue.jpeg',
      '/poedagar-v1/poedagarv1-darkblue2.jpeg',
      '/poedagar-v1/poedagarv1-darkbrown.jpeg',
      '/poedagar-v1/poedagarv1-green.jpeg',
      '/poedagar-v1/poedagarv1-lightbrown.jpeg',
      '/poedagar-v1/poedagarv1-teal.jpeg',
      '/poedagar-v1/poedagarv1-woodbrown.jpeg',
      '/poedagar-v1/poedagarv1-woodbrown2.jpeg',
      '/poedagar-v1/poedagarv1-woodbrown3.jpeg'
    ],
    specs: ['42-44mm Case Size', 'Japanese Automatic Movement'],
    features: ['15 Design Variants', 'Date Display', 'Water Resistant 30m']
  },

  // Poedagar V2 Chain Collection
  {
    id: 'poedagar-chain',
    name: 'Poedagar Chain Collection',
    price: 39000,
    description: 'Modern chain bracelet watches with vibrant dial colors.',
    category: 'Signature',
    material: 'Steel',
    complications: ['Date'],
    image: '/poedagar-v2/poedagarv2-chain-green2.jpeg',
    gallery: [
      '/poedagar-v2/poedagarv2-chain-green.jpeg',
      '/poedagar-v2/poedagarv2-chain-green2.jpeg',
      '/poedagar-v2/poedagarv2-chain-purple.jpeg',
      '/poedagar-v2/poedagarv2-chain-purple2.jpeg',
      '/poedagar-v2/poedagarv2-chain-purple3.jpeg',
      '/poedagar-v2/poedagarv2-chain-red2.jpeg'
    ],
    specs: ['45-48mm Case Size', 'Japanese Automatic Movement'],
    features: ['Chain Bracelet', '6 Color Variants', 'Date Display']
  },

  // Poedagar V3 Sport Collection
  {
    id: 'poedagar-sport',
    name: 'Poedagar Sport Collection',
    price: 42000,
    description: 'Dynamic sport watches with chronograph functionality.',
    category: 'Sport',
    material: 'Mixed',
    complications: ['Chronograph'],
    image: '/poedagar-v3/poedagarv3-blue.jpeg',
    gallery: [
      '/poedagar-v3/poedagarv3-black.jpeg',
      '/poedagar-v3/poedagarv3-blue.jpeg',
      '/poedagar-v3/poedagarv3-gold.jpeg'
    ],
    specs: ['48mm Case Size', 'Chronograph Movement'],
    features: ['Chronograph Function', '3 Style Variants', 'Water Resistant 50m']
  },

  // Poedagar Automatic Collection
  {
    id: 'poedagar-automatic',
    name: 'Poedagar Automatic Collection',
    price: 75000,
    description: 'Premium Poedagar with automatic movement.',
    category: 'Elite',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/poedagar-automatic-75k/PEODAGAR Automatic movement 75k.jpeg',
    gallery: [
      '/poedagar-automatic-75k/PEODAGAR Automatic movement 75k.jpeg',
      '/poedagar-automatic-75k/PEODAGAR Automatic movement2 75k.jpeg'
    ],
    specs: ['42mm Case Size', 'Japanese Automatic Movement'],
    features: ['Premium Movement', 'Enhanced Design', 'Great Value']
  },

  // Cartier Classic Collection
  {
    id: 'cartier-classic',
    name: 'Cartier Classic Collection',
    price: 45000,
    description: 'Timeless elegance meets modern design.',
    category: 'Classic',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-45k/cartier-v1.jpeg',
    gallery: [
      '/cartier-45k/cartier-v1.jpeg',
      '/cartier-45k/cartier-v2.jpeg',
      '/cartier-45k/cartier-v3.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Classic Design', 'Date Display', 'Water Resistant 30m']
  },

  // Cartier Automatic Collection
  {
    id: 'cartier-automatic',
    name: 'Cartier Automatic Collection',
    price: 125000,
    description: 'Premium Cartier automatic movement timepiece.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-automatic-125k/cartier-automatic-v1.jpeg',
    gallery: [
      '/cartier-automatic-125k/cartier-automatic-v1.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v2.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v3.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v4.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v5.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v6.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v7.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v8.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v9.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v10.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v11.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v12.jpeg',
      '/cartier-automatic-125k/cartier-automatic-v13.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Premium Movement', 'Date Display', 'Luxury Finish']
  },

  // Cartier Tank Collection
  {
    id: 'cartier-tank',
    name: 'Cartier Tank Collection',
    price: 120000,
    description: 'Iconic Tank design with premium materials.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Date'],
    image: '/cartier-tank-120k/highqualitycartiertank120k-v1.jpeg',
    gallery: [
      '/cartier-tank-120k/highqualitycartiertank120k-v1.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v2.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v3.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v4.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v5.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v6.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v7.jpeg',
      '/cartier-tank-120k/highqualitycartiertank120k-v8.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Design', 'Premium Materials', 'Limited Production']
  },

  // Cartier Premium Collection
  {
    id: 'cartier-premium',
    name: 'Cartier Premium Collection',
    price: 135000,
    description: 'Exclusive Cartier timepiece with premium materials.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-premium-135k/highqualitycartier135k-v1.jpeg',
    gallery: [
      '/cartier-premium-135k/highqualitycartier135k-v1.jpeg',
      '/cartier-premium-135k/highqualitycartier135k-v2.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Limited Edition', 'Premium Materials', 'Exclusive Design']
  },

  // Cartier Automatic Type 2 Collection
  {
    id: 'cartier-automatic-type2',
    name: 'Cartier Automatic Type 2 Collection',
    price: 125000,
    description: 'Advanced Cartier automatic with enhanced complications.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-automatic-type2-125k/cartier-automatic-type2-v1.jpeg',
    gallery: [
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v1.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v2.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v3.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v4.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v5.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v6.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v7.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v8.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v9.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v10.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v11.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v12.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v13.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v14.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v15.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v16.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v17.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v18.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v19.jpeg',
      '/cartier-automatic-type2-125k/cartier-automatic-type2-v20.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Advanced Movement', 'Multiple Complications', 'Premium Finish']
  },

  // Casio Chain Collection
  {
    id: 'casio-chain',
    name: 'Casio Chain Collection',
    price: 27000,
    description: 'Modern Casio chain watch with digital functionality.',
    category: 'Modern',
    material: 'Steel',
    complications: ['Digital'],
    image: '/casio-chain-27k/casiochain27k-v1.jpeg',
    gallery: [
      '/casio-chain-27k/casiochain27k-v1.jpeg',
      '/casio-chain-27k/casiochain27k-v2.jpeg',
      '/casio-chain-27k/casiochain27k-v3.jpeg',
      '/casio-chain-27k/casiochain27k-v4.jpeg',
      '/casio-chain-27k/casiochain27k-v5.jpeg',
      '/casio-chain-27k/casiochain27k-v6.jpeg'
    ],
    specs: ['45mm Case Size', 'Digital Movement', 'Stainless Steel'],
    features: ['Digital Display', 'Chain Bracelet', 'Modern Design']
  },

  // G-Shock Collection
  {
    id: 'gshock',
    name: 'G-Shock Collection',
    price: 75000,
    description: 'Rugged G-Shock built for extreme conditions.',
    category: 'Sport',
    material: 'Resin',
    complications: ['Digital'],
    image: '/gshock-75k/gshock75k-v1.jpeg',
    gallery: [
      '/gshock-75k/gshock75k-v1.jpeg',
      '/gshock-75k/gshock75k-v2.jpeg',
      '/gshock-75k/gshock75k-v3.jpeg',
      '/gshock-75k/gshock75k-v4.jpeg',
      '/gshock-75k/gshock75k-v5.jpeg',
      '/gshock-75k/gshock75k-v6.jpeg',
      '/gshock-75k/gshock75k-v7.jpeg',
      '/gshock-75k/gshock75k-v8.jpeg',
      '/gshock-75k/gshock75k-v9.jpeg',
      '/gshock-75k/gshock75k-v10.jpeg',
      '/gshock-75k/gshock75k-v11.jpeg',
      '/gshock-75k/gshock75k-v12.jpeg',
      '/gshock-75k/gshock75k-v13.jpeg',
      '/gshock-75k/gshock75k-v14.jpeg',
      '/gshock-75k/gshock75k-v15.jpeg',
      '/gshock-75k/gshock75k-v16.jpeg',
      '/gshock-75k/gshock75k-v17.jpeg',
      '/gshock-75k/gshock75k-v18.jpeg',
      '/gshock-75k/gshock75k-v19.jpeg'
    ],
    specs: ['55mm Case Size', 'Digital Movement', 'Shock Resistant'],
    features: ['Shock Resistant', 'Water Resistant', 'Digital Functions']
  },

  // G-Shock Quality Collection
  {
    id: 'gshock-quality',
    name: 'G-Shock Quality Collection',
    price: 40000,
    description: 'Premium G-Shock with enhanced features.',
    category: 'Sport',
    material: 'Resin',
    complications: ['Digital'],
    image: '/gshock-quality-40k/highqualitygshock40k-v1.jpeg',
    gallery: [
      '/gshock-quality-40k/highqualitygshock40k-v1.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v2.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v3.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v4.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v5.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v6.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v7.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v8.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v9.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v10.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v11.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v12.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v13.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v14.jpeg',
      '/gshock-quality-40k/highqualitygshock40k-v15.jpeg'
    ],
    specs: ['50mm Case Size', 'Digital Movement', 'Shock Resistant'],
    features: ['Enhanced Display', 'Multiple Functions', 'Premium Build']
  },

  // G-Shock Sport Collection
  {
    id: 'gshock-sport',
    name: 'G-Shock Sport Collection',
    price: 30000,
    description: 'Affordable G-Shock with essential features.',
    category: 'Sport',
    material: 'Resin',
    complications: ['Digital'],
    image: '/gshock-quality-30k/highqualitygshock30k-v1.jpeg',
    gallery: [
      '/gshock-quality-30k/highqualitygshock30k-v1.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v2.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v3.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v4.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v5.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v6.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v7.jpeg',
      '/gshock-quality-30k/highqualitygshock30k-v8.jpeg'
    ],
    specs: ['48mm Case Size', 'Digital Movement', 'Shock Resistant'],
    features: ['Essential Functions', 'Sport Design', 'Great Value']
  },

  // Matturi Watch Collection
  {
    id: 'matturi',
    name: 'Matturi Watch Collection',
    price: 35000,
    description: 'Elegant Matturi timepiece with refined design.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/matturi-watch-35k/matturiwatch35k-v1.jpeg',
    gallery: [
      '/matturi-watch-35k/matturiwatch35k-v1.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v2.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v3.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v4.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v5.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v6.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v7.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v8.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v9.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v10.jpeg',
      '/matturi-watch-35k/matturiwatch35k-v11.jpeg'
    ],
    specs: ['42mm Case Size', 'Japanese Automatic Movement'],
    features: ['Elegant Design', 'Date Display', 'Water Resistant 50m']
  },

  // Omega Quality Collection
  {
    id: 'omega-quality',
    name: 'Omega Quality Collection',
    price: 45000,
    description: 'Premium Omega timepiece with Swiss precision.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/omega-quality-45k/omega-v1.jpeg',
    gallery: [
      '/omega-quality-45k/omega-v1.jpeg',
      '/omega-quality-45k/omega-v2.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement'],
    features: ['Swiss Movement', 'Premium Materials', 'Timeless Design']
  },

  // Patek Philippe Classic Collection
  {
    id: 'patek-philippe-classic',
    name: 'Patek Philippe Classic Collection',
    price: 47000,
    description: 'The pinnacle of Swiss watchmaking excellence.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/patek-philippe-47k/patek-philippe-v1.jpeg',
    gallery: [
      '/patek-philippe-47k/patek-philippe-v1.jpeg',
      '/patek-philippe-47k/patek-philippe-v2.jpeg',
      '/patek-philippe-47k/patek-philippe-v3.jpeg',
      '/patek-philippe-47k/patek-philippe-v4.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Brand', 'Investment Piece', 'Date Display']
  },

  // Rolex Datejust Collection
  {
    id: 'rolex-datejust',
    name: 'Rolex Datejust Collection',
    price: 200000,
    description: 'The ultimate investment timepiece.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/rolex-datejust-200k/rolex-datejust-v1.jpeg',
    gallery: [
      '/rolex-datejust-200k/rolex-datejust-v1.jpeg',
      '/rolex-datejust-200k/rolex-datejust-v2.jpeg',
      '/rolex-datejust-200k/rolex-datejust-v3.jpeg'
    ],
    specs: ['36mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Design', 'Investment Value', 'Datejust Function']
  },

  // Tissot Premium Collection
  {
    id: 'tissot-premium',
    name: 'Tissot Premium Collection',
    price: 125000,
    description: 'Premium Tissot automatic movement with Swiss precision.',
    category: 'Elite',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v1.jpeg',
    gallery: [
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v1.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v2.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v3.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v4.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v5.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v6.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v7.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v8.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v9.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v10.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v11.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v12.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v13.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v14.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v15.jpeg',
      '/tissot-premium-125k/highqualitytissotautomaticmovement125k-v16.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement'],
    features: ['Swiss Movement', 'Premium Materials', 'Limited Edition']
  }
];
