import { images } from '../lib/images'

export interface Product {
  id: string
  name: string
  category: 'Electronics' | 'Textiles' | 'Machinery'
  image: string
  description: string
  origin: string
  moq: string
  leadTime: string
  specs: string[]
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Consumer Electronics & Accessories',
    category: 'Electronics',
    image: images.electronics,
    description: 'Smartphone accessories, charging cables, adapters, and consumer electronic components sourced from certified manufacturers.',
    origin: 'Shenzhen, China',
    moq: '500 units',
    leadTime: '15–25 days',
    specs: ['CE / FCC certified', 'RoHS compliant', 'OEM packaging available'],
  },
  {
    id: 'p2',
    name: 'PCB Assemblies & Components',
    category: 'Electronics',
    image: images.electronics2,
    description: 'Printed circuit board assemblies for IoT devices, automotive, and industrial applications with full traceability.',
    origin: 'Dongguan, China',
    moq: '1,000 units',
    leadTime: '20–30 days',
    specs: ['IPC-A-610 Class 3', 'ISO 9001 factory', 'Full test reports included'],
  },
  {
    id: 'p3',
    name: 'Industrial Control Systems',
    category: 'Electronics',
    image: images.electronics3,
    description: 'Programmable logic controllers, sensors, and automation control modules for industrial integration.',
    origin: 'Taipei, Taiwan',
    moq: '200 units',
    leadTime: '25–35 days',
    specs: ['UL listed', 'CE marked', '2-year warranty'],
  },
  {
    id: 'p4',
    name: 'Apparel & Garment Manufacturing',
    category: 'Textiles',
    image: images.textiles,
    description: 'Ready-made garments including casual wear, activewear, and workwear from OEKO-TEX certified factories.',
    origin: 'Tirupur, India',
    moq: '1,000 pieces',
    leadTime: '30–45 days',
    specs: ['OEKO-TEX Standard 100', 'BSCI audited', 'Custom labeling'],
  },
  {
    id: 'p5',
    name: 'Home Textile Products',
    category: 'Textiles',
    image: images.textiles2,
    description: 'Bedding, towels, curtains, and upholstery fabrics woven from premium cotton and blended yarns.',
    origin: 'Karachi, Pakistan',
    moq: '500 pieces',
    leadTime: '35–50 days',
    specs: ['OEKO-TEX certified', 'GOTS organic available', 'Custom designs'],
  },
  {
    id: 'p6',
    name: 'Technical & Performance Fabrics',
    category: 'Textiles',
    image: images.textiles3,
    description: 'Moisture-wicking, flame-retardant, and antimicrobial fabrics for sportswear and industrial applications.',
    origin: 'Osaka, Japan',
    moq: '2,000 meters',
    leadTime: '30–40 days',
    specs: ['ISO 9001', 'Flame retardant certified', 'Custom finishes available'],
  },
  {
    id: 'p7',
    name: 'Industrial Machinery & Equipment',
    category: 'Machinery',
    image: images.machinery,
    description: 'Packaging machinery, conveyor systems, and material handling equipment for warehouse and factory operations.',
    origin: 'Istanbul, Türkiye',
    moq: '5 units',
    leadTime: '45–60 days',
    specs: ['CE marked', 'Installation support', 'Spare parts package'],
  },
  {
    id: 'p8',
    name: 'Construction & Heavy Equipment',
    category: 'Machinery',
    image: images.machinery2,
    description: 'Excavators, loaders, and compact construction equipment built for demanding job sites.',
    origin: 'Busan, South Korea',
    moq: '2 units',
    leadTime: '50–70 days',
    specs: ['EPA compliant', 'Full documentation', 'Operator training included'],
  },
  {
    id: 'p9',
    name: 'Food Processing Machinery',
    category: 'Machinery',
    image: images.machinery3,
    description: 'Stainless steel processing lines, packaging equipment, and bottling systems for food and beverage producers.',
    origin: 'Milan, Italy',
    moq: '3 units',
    leadTime: '40–55 days',
    specs: ['FDA compliant materials', '3-A sanitary standards', 'CE marked'],
  },
]

export const productCategories = [
  {
    name: 'Electronics',
    image: images.electronics,
    description: 'Consumer electronics, PCB assemblies, and industrial control systems from certified manufacturers in Asia.',
    count: '3 product lines',
    certifications: ['CE', 'FCC', 'RoHS', 'UL'],
  },
  {
    name: 'Textiles',
    image: images.textiles,
    description: 'Apparel, home textiles, and performance fabrics from OEKO-TEX and GOTS certified factories.',
    count: '3 product lines',
    certifications: ['OEKO-TEX', 'GOTS', 'BSCI'],
  },
  {
    name: 'Machinery',
    image: images.machinery,
    description: 'Industrial machinery, construction equipment, and food processing lines with full compliance documentation.',
    count: '3 product lines',
    certifications: ['CE', 'EPA', 'FDA', '3-A'],
  },
]
