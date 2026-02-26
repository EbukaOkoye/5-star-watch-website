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
  // Cartier Collections
  {
    id: 'cartier-45k',
    name: 'Cartier Classic Collection',
    price: 45000,
    description: 'Timeless elegance meets modern design in this classic Cartier collection.',
    category: 'Classic',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-45k/cartier45k-v1.jpeg',
    gallery: [
      '/cartier-45k/cartier45k-v1.jpeg',
      '/cartier-45k/cartier45k-v2.jpeg',
      '/cartier-45k/cartier45k-v3.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Classic Design', 'Date Display', 'Water Resistant 30m']
  },

  {
    id: 'cartier-automatic-125k',
    name: 'Cartier Automatic Collection',
    price: 125000,
    description: 'Premium Cartier automatic movement timepiece with advanced complications.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-automatic-125k/cartierautomatic125k-v1.jpeg',
    gallery: [
      '/cartier-automatic-125k/cartierautomatic125k-v1.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v2.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v3.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v4.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v5.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v6.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v7.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v8.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v9.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v10.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v11.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v12.jpeg',
      '/cartier-automatic-125k/cartierautomatic125k-v13.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Premium Movement', 'Date Display', 'Luxury Finish']
  },

  {
    id: 'cartier-automatic-type2-125k',
    name: 'Cartier Automatic Type 2 Collection',
    price: 125000,
    description: 'Advanced Cartier automatic with enhanced complications for the discerning collector.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-automatic-type2-125k/cartierautomatictype2125k-v1.jpeg',
    gallery: [
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v1.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v2.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v3.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v4.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v5.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v6.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v7.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v8.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v9.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v10.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v11.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v12.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v13.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v14.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v15.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v16.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v17.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v18.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v19.jpeg',
      '/cartier-automatic-type2-125k/cartierautomatictype2125k-v20.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Advanced Movement', 'Multiple Complications', 'Premium Finish']
  },

  {
    id: 'cartier-premium-135k',
    name: 'Cartier Premium Collection',
    price: 135000,
    description: 'Exclusive Cartier timepiece with premium materials for the true connoisseur.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/cartier-premium-135k/cartierpremium135k-v1.jpeg',
    gallery: [
      '/cartier-premium-135k/cartierpremium135k-v1.jpeg',
      '/cartier-premium-135k/cartierpremium135k-v2.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Limited Edition', 'Premium Materials', 'Exclusive Design']
  },

  {
    id: 'cartier-tank-120k',
    name: 'Cartier Tank Collection',
    price: 120000,
    description: 'Iconic Tank design with premium materials. Timeless elegance redefined.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Date'],
    image: '/cartier-tank-120k/cartiertank120k-v1.jpeg',
    gallery: [
      '/cartier-tank-120k/cartiertank120k-v1.jpeg',
      '/cartier-tank-120k/cartiertank120k-v2.jpeg',
      '/cartier-tank-120k/cartiertank120k-v3.jpeg',
      '/cartier-tank-120k/cartiertank120k-v4.jpeg',
      '/cartier-tank-120k/cartiertank120k-v5.jpeg',
      '/cartier-tank-120k/cartiertank120k-v6.jpeg',
      '/cartier-tank-120k/cartiertank120k-v7.jpeg',
      '/cartier-tank-120k/cartiertank120k-v8.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Design', 'Premium Materials', 'Limited Production']
  },

  // Casio Collection
  {
    id: 'casio-chain-27k',
    name: 'Casio Chain Collection',
    price: 27000,
    description: 'Modern Casio chain watch with digital functionality and contemporary style.',
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

  // G-Shock Collections
  {
    id: 'gshock-75k',
    name: 'G-Shock Collection',
    price: 75000,
    description: 'Rugged G-Shock built for extreme conditions. Ultimate durability meets modern style.',
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

  {
    id: 'gshock-quality-30k',
    name: 'G-Shock Sport Collection',
    price: 30000,
    description: 'Affordable G-Shock with essential features. Perfect for everyday adventures.',
    category: 'Sport',
    material: 'Resin',
    complications: ['Digital'],
    image: '/gshock-quality-30k/gshockquality30k-v1.jpeg',
    gallery: [
      '/gshock-quality-30k/gshockquality30k-v1.jpeg',
      '/gshock-quality-30k/gshockquality30k-v2.jpeg',
      '/gshock-quality-30k/gshockquality30k-v3.jpeg',
      '/gshock-quality-30k/gshockquality30k-v4.jpeg',
      '/gshock-quality-30k/gshockquality30k-v5.jpeg',
      '/gshock-quality-30k/gshockquality30k-v6.jpeg',
      '/gshock-quality-30k/gshockquality30k-v7.jpeg',
      '/gshock-quality-30k/gshockquality30k-v8.jpeg'
    ],
    specs: ['48mm Case Size', 'Digital Movement', 'Shock Resistant'],
    features: ['Essential Functions', 'Sport Design', 'Great Value']
  },

  {
    id: 'gshock-quality-40k',
    name: 'G-Shock Quality Collection',
    price: 40000,
    description: 'Premium G-Shock with enhanced features. Built for performance and style.',
    category: 'Sport',
    material: 'Resin',
    complications: ['Digital'],
    image: '/gshock-quality-40k/gshockquality40k-v1.jpeg',
    gallery: [
      '/gshock-quality-40k/gshockquality40k-v1.jpeg',
      '/gshock-quality-40k/gshockquality40k-v2.jpeg',
      '/gshock-quality-40k/gshockquality40k-v3.jpeg',
      '/gshock-quality-40k/gshockquality40k-v4.jpeg',
      '/gshock-quality-40k/gshockquality40k-v5.jpeg',
      '/gshock-quality-40k/gshockquality40k-v6.jpeg',
      '/gshock-quality-40k/gshockquality40k-v7.jpeg',
      '/gshock-quality-40k/gshockquality40k-v8.jpeg',
      '/gshock-quality-40k/gshockquality40k-v9.jpeg',
      '/gshock-quality-40k/gshockquality40k-v10.jpeg',
      '/gshock-quality-40k/gshockquality40k-v11.jpeg',
      '/gshock-quality-40k/gshockquality40k-v12.jpeg',
      '/gshock-quality-40k/gshockquality40k-v13.jpeg',
      '/gshock-quality-40k/gshockquality40k-v14.jpeg',
      '/gshock-quality-40k/gshockquality40k-v15.jpeg'
    ],
    specs: ['50mm Case Size', 'Digital Movement', 'Shock Resistant'],
    features: ['Enhanced Display', 'Multiple Functions', 'Premium Build']
  },

  // Hublot Collections
  {
    id: 'hublot',
    name: 'Hublot Original Collection',
    price: 55000,
    description: 'Classic Hublot designs with premium materials and distinctive style.',
    category: 'Signature',
    material: 'Mixed',
    complications: ['Automatic'],
    image: '/hublot/hublot-v1.jpeg',
    gallery: [
      '/hublot/hublot-v1.jpeg',
      '/hublot/hublot-v2.jpeg',
      '/hublot/hublot-v3.jpeg',
      '/hublot/hublot-v4.jpeg',
      '/hublot/hublot-v5.jpeg',
      '/hublot/hublot-v6.jpeg',
      '/hublot/hublot-v7.jpeg',
      '/hublot/hublot-v8.jpeg',
      '/hublot/hublot-v9.jpeg',
      '/hublot/hublot-v10.jpeg'
    ],
    specs: ['44mm Case Size', 'Swiss Automatic Movement'],
    features: ['10 Color Variants', 'Premium Materials', 'Classic Design']
  },

  {
    id: 'hublot-35k',
    name: 'Hublot Classic Collection',
    price: 45000,
    description: 'The Hublot Classic Fusion combines contemporary design with Swiss precision.',
    category: 'Modern',
    material: 'Mixed',
    complications: ['Automatic', 'Chronograph'],
    image: '/hublot-35k/hublot35k-v1.jpeg',
    gallery: [
      '/hublot-35k/hublot35k-v1.jpeg',
      '/hublot-35k/hublot35k-v2.jpeg',
      '/hublot-35k/hublot35k-v3.jpeg',
      '/hublot-35k/hublot35k-v4.jpeg',
      '/hublot-35k/hublot35k-v5.jpeg',
      '/hublot-35k/hublot35k-v6.jpeg',
      '/hublot-35k/hublot35k-v7.jpeg',
      '/hublot-35k/hublot35k-v8.jpeg',
      '/hublot-35k/hublot35k-v9.jpeg'
    ],
    specs: ['45mm Case Size', 'Swiss Automatic Movement'],
    features: ['Multiple Variants', 'Swiss Movement', 'Water Resistant 50m']
  },

  {
    id: 'hublot-premium-300k',
    name: 'Hublot Premium Collection',
    price: 300000,
    description: 'Ultra-premium Hublot with exclusive complications. The ultimate statement of luxury.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Chronograph'],
    image: '/hublot-premium-300k/hublotpremium300k-v1.jpeg',
    gallery: [
      '/hublot-premium-300k/hublotpremium300k-v1.jpeg',
      '/hublot-premium-300k/hublotpremium300k-v2.jpeg',
      '/hublot-premium-300k/hublotpremium300k-v3.jpeg',
      '/hublot-premium-300k/hublotpremium300k-v4.jpeg',
      '/hublot-premium-300k/hublotpremium300k-v5.jpeg'
    ],
    specs: ['45mm Case Size', 'Swiss Chronograph Movement', '18K King Gold'],
    features: ['Limited Production', 'Premium Materials', 'Chronograph Function']
  },

  // Jaeger-LeCoultre Collection
  {
    id: 'jaeger-lecoultre',
    name: 'Jaeger-LeCoultre Master Collection',
    price: 47000,
    description: 'The epitome of Swiss watchmaking excellence. Multiple dial colors and complications available.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Date', 'Moonphase', 'Chronograph'],
    image: '/jaeger-lecoultre/jaegerlecoultre-v1.jpeg',
    gallery: [
      '/jaeger-lecoultre/jaegerlecoultre-v1.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v2.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v3.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v4.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v5.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v6.jpeg',
      '/jaeger-lecoultre/jaegerlecoultre-v7.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement'],
    features: ['Moonphase Complication', 'Chronograph Function', 'Date Display']
  },

  // Luxury Gold Chain Collection
  {
    id: 'luxury-gold-chain',
    name: 'Luxury Gold Chain Collection',
    price: 40000,
    description: 'Elegant gold chain watches with vibrant dial colors. Perfect blend of luxury and contemporary style.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Date'],
    image: '/luxury-gold-chain/luxurygoldchain-v1.jpeg',
    gallery: [
      '/luxury-gold-chain/luxurygoldchain-v1.jpeg',
      '/luxury-gold-chain/luxurygoldchain-v2.jpeg',
      '/luxury-gold-chain/luxurygoldchain-v3.jpeg'
    ],
    specs: ['42mm Case Size', 'Quartz Movement', 'Gold Plated'],
    features: ['Gold Chain Bracelet', 'Multiple Dial Colors', 'Date Display']
  },

  // Matturi Watch Collection
  {
    id: 'matturi-watch-35k',
    name: 'Matturi Watch Collection',
    price: 35000,
    description: 'Elegant Matturi timepiece with refined design. Perfect for formal occasions.',
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
    id: 'omega-quality-45k',
    name: 'Omega Quality Collection',
    price: 45000,
    description: 'Premium Omega timepiece with Swiss precision. Classic design meets modern technology.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/omega-quality-45k/omegaquality45k-v1.jpeg',
    gallery: [
      '/omega-quality-45k/omegaquality45k-v1.jpeg',
      '/omega-quality-45k/omegaquality45k-v2.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement'],
    features: ['Swiss Movement', 'Premium Materials', 'Timeless Design']
  },

  // Patek Philippe Collections
  {
    id: 'patek-philippe-47k',
    name: 'Patek Philippe Classic Collection',
    price: 47000,
    description: 'The pinnacle of Swiss watchmaking excellence. Patek Philippe offers unparalleled prestige and craftsmanship.',
    category: 'Elite',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/patek-philippe-47k/patekphilippe47k-v1.jpeg',
    gallery: [
      '/patek-philippe-47k/patekphilippe47k-v1.jpeg',
      '/patek-philippe-47k/patekphilippe47k-v2.jpeg',
      '/patek-philippe-47k/patekphilippe47k-v3.jpeg',
      '/patek-philippe-47k/patekphilippe47k-v4.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Brand', 'Investment Piece', 'Date Display']
  },

  {
    id: 'patek-philippe-auto-140k',
    name: 'Patek Philippe Auto Collection',
    price: 140000,
    description: 'Premium Patek Philippe automatic collection with advanced complications.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/patek-philippe-auto-140k/patekphilippeauto140k-v1.jpeg',
    gallery: [
      '/patek-philippe-auto-140k/patekphilippeauto140k-v1.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v2.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v3.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v4.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v5.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v6.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v7.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v8.jpeg',
      '/patek-philippe-auto-140k/patekphilippeauto140k-v9.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Premium Movement', 'Advanced Complications', 'Limited Edition']
  },

  {
    id: 'patek-philippe-automatic-135k',
    name: 'Patek Philippe Automatic Collection',
    price: 135000,
    description: 'Advanced Patek Philippe automatic with premium complications.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v1.jpeg',
    gallery: [
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v1.jpeg',
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v2.jpeg',
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v3.jpeg',
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v4.jpeg',
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v5.jpeg',
      '/patek-philippe-automatic-135k/patekphilippeautomatic135k-v6.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Advanced Movement', 'Premium Materials', 'Exclusive Design']
  },

  {
    id: 'patek-philippe-automatic-140k',
    name: 'Patek Philippe Automatic Collection',
    price: 140000,
    description: 'Advanced Patek Philippe automatic with premium complications and exclusive design.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/patek-philippe-automatic-140k/patekphilippeautomatic140k-v1.jpeg',
    gallery: [
      '/patek-philippe-automatic-140k/patekphilippeautomatic140k-v1.jpeg',
      '/patek-philippe-automatic-140k/patekphilippeautomatic140k-v2.jpeg',
      '/patek-philippe-automatic-140k/patekphilippeautomatic140k-v3.jpeg',
      '/patek-philippe-automatic-140k/patekphilippeautomatic140k-v4.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Advanced Movement', 'Premium Materials', 'Exclusive Design']
  },

  {
    id: 'patek-philippe-automatic-75k',
    name: 'Patek Philippe Automatic Sport Collection',
    price: 75000,
    description: 'Sport Patek Philippe automatic with enhanced features.',
    category: 'Sport',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/patek-philippe-automatic-75k/patekphilippeautomatic75k-v1.jpeg',
    gallery: [
      '/patek-philippe-automatic-75k/patekphilippeautomatic75k-v1.jpeg',
      '/patek-philippe-automatic-75k/patekphilippeautomatic75k-v2.jpeg'
    ],
    specs: ['40mm Case Size', 'Swiss Automatic Movement'],
    features: ['Sport Design', 'Automatic Movement', 'Premium Finish']
  },

  // Poedagar Collections
  {
    id: 'poedagar-automatic-75k',
    name: 'Poedagar Automatic Collection',
    price: 75000,
    description: 'Premium Poedagar with automatic movement. Enhanced features and design.',
    category: 'Elite',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/poedagar-automatic-75k/poedagarautomatic75k-v1.jpeg',
    gallery: [
      '/poedagar-automatic-75k/poedagarautomatic75k-v1.jpeg',
      '/poedagar-automatic-75k/poedagarautomatic75k-v2.jpeg'
    ],
    specs: ['42mm Case Size', 'Japanese Automatic Movement'],
    features: ['Premium Movement', 'Enhanced Design', 'Great Value']
  },

  {
    id: 'poedagar-35k',
    name: 'Poedagar Classic Collection',
    price: 35000,
    description: 'Affordable luxury with multiple design variants. Perfect for everyday wear with style and functionality.',
    category: 'Modern',
    material: 'Mixed',
    complications: ['Date'],
    image: '/poedagar-35k/poedagar35k-v1.jpeg',
    gallery: [
      '/poedagar-35k/poedagar35k-v1.jpeg',
      '/poedagar-35k/poedagar35k-v2.jpeg',
      '/poedagar-35k/poedagar35k-v3.jpeg',
      '/poedagar-35k/poedagar35k-v4.jpeg',
      '/poedagar-35k/poedagar35k-v5.jpeg',
      '/poedagar-35k/poedagar35k-v6.jpeg',
      '/poedagar-35k/poedagar35k-v7.jpeg',
      '/poedagar-35k/poedagar35k-v8.jpeg',
      '/poedagar-35k/poedagar35k-v9.jpeg'
    ],
    specs: ['42-44mm Case Size', 'Japanese Automatic Movement'],
    features: ['9 Design Variants', 'Date Display', 'Water Resistant 30m']
  },

  {
    id: 'poedagar-v1',
    name: 'Poedagar Classic Collection',
    price: 35000,
    description: 'Affordable luxury with multiple design variants. Perfect for everyday wear with style and functionality.',
    category: 'Modern',
    material: 'Mixed',
    complications: ['Date'],
    image: '/poedagar-v1/poedagarv1-v1.jpeg',
    gallery: [
      '/poedagar-v1/poedagarv1-v1.jpeg',
      '/poedagar-v1/poedagarv1-v2.jpeg',
      '/poedagar-v1/poedagarv1-v3.jpeg',
      '/poedagar-v1/poedagarv1-v4.jpeg',
      '/poedagar-v1/poedagarv1-v5.jpeg',
      '/poedagar-v1/poedagarv1-v6.jpeg',
      '/poedagar-v1/poedagarv1-v7.jpeg',
      '/poedagar-v1/poedagarv1-v8.jpeg',
      '/poedagar-v1/poedagarv1-v9.jpeg',
      '/poedagar-v1/poedagarv1-v10.jpeg',
      '/poedagar-v1/poedagarv1-v11.jpeg',
      '/poedagar-v1/poedagarv1-v12.jpeg',
      '/poedagar-v1/poedagarv1-v13.jpeg',
      '/poedagar-v1/poedagarv1-v14.jpeg',
      '/poedagar-v1/poedagarv1-v15.jpeg'
    ],
    specs: ['42-44mm Case Size', 'Japanese Automatic Movement'],
    features: ['15 Design Variants', 'Date Display', 'Water Resistant 30m']
  },

  {
    id: 'poedagar-v2',
    name: 'Poedagar Chain Collection',
    price: 39000,
    description: 'Modern chain bracelet watches with vibrant dial colors. Perfect blend of sporty and sophisticated.',
    category: 'Signature',
    material: 'Steel',
    complications: ['Date'],
    image: '/poedagar-v2/poedagarv2-v1.jpeg',
    gallery: [
      '/poedagar-v2/poedagarv2-v1.jpeg',
      '/poedagar-v2/poedagarv2-v2.jpeg',
      '/poedagar-v2/poedagarv2-v3.jpeg',
      '/poedagar-v2/poedagarv2-v4.jpeg',
      '/poedagar-v2/poedagarv2-v5.jpeg',
      '/poedagar-v2/poedagarv2-v6.jpeg'
    ],
    specs: ['45-48mm Case Size', 'Japanese Automatic Movement'],
    features: ['Chain Bracelet', '6 Color Variants', 'Date Display']
  },

  {
    id: 'poedagar-v3',
    name: 'Poedagar Sport Collection',
    price: 42000,
    description: 'Dynamic sport watches with chronograph functionality. Built for active lifestyles and adventure seekers.',
    category: 'Sport',
    material: 'Mixed',
    complications: ['Chronograph'],
    image: '/poedagar-v3/poedagarv3-v1.jpeg',
    gallery: [
      '/poedagar-v3/poedagarv3-v1.jpeg',
      '/poedagar-v3/poedagarv3-v2.jpeg',
      '/poedagar-v3/poedagarv3-v3.jpeg'
    ],
    specs: ['48mm Case Size', 'Chronograph Movement'],
    features: ['Chronograph Function', '3 Style Variants', 'Water Resistant 50m']
  },

  // Rolex Collections
  {
    id: 'rolex-datejust-200k',
    name: 'Rolex Datejust Collection',
    price: 200000,
    description: 'The ultimate investment timepiece. Rolex Datejust combines iconic design with premium materials.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/rolex-datejust-200k/rolexdatejust200k-v1.jpeg',
    gallery: [
      '/rolex-datejust-200k/rolexdatejust200k-v1.jpeg',
      '/rolex-datejust-200k/rolexdatejust200k-v2.jpeg',
      '/rolex-datejust-200k/rolexdatejust200k-v3.jpeg'
    ],
    specs: ['36mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Iconic Design', 'Investment Value', 'Datejust Function']
  },

  {
    id: 'rolex-daydate-125k',
    name: 'Rolex Day-Date Collection',
    price: 125000,
    description: 'Premium Rolex Day-Date with presidential bracelet. The ultimate status symbol.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/rolex-daydate-125k/rolexdaydate125k-v1.jpeg',
    gallery: [
      '/rolex-daydate-125k/rolexdaydate125k-v1.jpeg',
      '/rolex-daydate-125k/rolexdaydate125k-v2.jpeg'
    ],
    specs: ['36mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Day-Date Function', 'Presidential Bracelet', 'Iconic Status']
  },

  {
    id: 'rolex-skydweller-135k',
    name: 'Rolex Sky-Dweller Collection',
    price: 135000,
    description: 'Advanced Rolex Sky-Dweller with dual time and annual calendar complications.',
    category: 'Limited',
    material: 'Gold',
    complications: ['Automatic'],
    image: '/rolex-skydweller-135k/rolexskydweller135k-v1.jpeg',
    gallery: [
      '/rolex-skydweller-135k/rolexskydweller135k-v1.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement', '18K Gold'],
    features: ['Dual Time', 'Annual Calendar', 'Rotatable Bezel']
  },

  // SABR Watch Collection
  {
    id: 'sabr-watch-28k',
    name: 'SABR Watch Collection',
    price: 28000,
    description: 'Modern SABR watches with contemporary design and reliable movement.',
    category: 'Modern',
    material: 'Steel',
    complications: ['Date'],
    image: '/sabr-watch-28k/sabrwatch28k-v1.jpeg',
    gallery: [
      '/sabr-watch-28k/sabrwatch28k-v1.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v2.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v3.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v4.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v5.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v6.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v7.jpeg',
      '/sabr-watch-28k/sabrwatch28k-v8.jpeg'
    ],
    specs: ['42mm Case Size', 'Japanese Automatic Movement'],
    features: ['Modern Design', 'Date Display', 'Water Resistant 50m']
  },

  // Tissot Collections
  {
    id: 'tissot-45k',
    name: 'Tissot Classic Collection',
    price: 45000,
    description: 'Classic Tissot design with Swiss precision and modern features.',
    category: 'Classic',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/tissot-45k/tissot45k-v1.jpeg',
    gallery: [
      '/tissot-45k/tissot45k-v1.jpeg',
      '/tissot-45k/tissot45k-v2.jpeg',
      '/tissot-45k/tissot45k-v3.jpeg',
      '/tissot-45k/tissot45k-v4.jpeg',
      '/tissot-45k/tissot45k-v5.jpeg',
      '/tissot-45k/tissot45k-v6.jpeg',
      '/tissot-45k/tissot45k-v7.jpeg',
      '/tissot-45k/tissot45k-v8.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement'],
    features: ['Classic Design', 'Swiss Movement', 'Date Display']
  },

  {
    id: 'tissot-premium-125k',
    name: 'Tissot Premium Collection',
    price: 125000,
    description: 'Premium Tissot automatic movement with Swiss precision. Excellence in every detail.',
    category: 'Elite',
    material: 'Steel',
    complications: ['Automatic'],
    image: '/tissot-premium-125k/tissotpremium125k-v1.jpeg',
    gallery: [
      '/tissot-premium-125k/tissotpremium125k-v1.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v2.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v3.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v4.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v5.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v6.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v7.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v8.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v9.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v10.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v11.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v12.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v13.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v14.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v15.jpeg',
      '/tissot-premium-125k/tissotpremium125k-v16.jpeg'
    ],
    specs: ['42mm Case Size', 'Swiss Automatic Movement'],
    features: ['Swiss Movement', 'Premium Materials', 'Limited Edition']
  },

  // Valenzo Quality Collection
  {
    id: 'valenzo-quality-30k',
    name: 'Valenzo Quality Collection',
    price: 30000,
    description: 'Modern Valenzo watches with premium features and contemporary styling.',
    category: 'Modern',
    material: 'Steel',
    complications: ['Date'],
    image: '/valenzo-quality-30k/valenzoquality30k-v1.jpeg',
    gallery: [
      '/valenzo-quality-30k/valenzoquality30k-v1.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v2.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v3.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v4.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v5.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v6.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v7.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v8.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v9.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v10.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v11.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v12.jpeg',
      '/valenzo-quality-30k/valenzoquality30k-v13.jpeg'
    ],
    specs: ['42mm Case Size', 'Japanese Automatic Movement'],
    features: ['Modern Design', 'Date Display', 'Water Resistant 50m']
  }
];
