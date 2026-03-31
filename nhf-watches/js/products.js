// ============================================================
// CONFIGURACION — Edita este archivo para actualizar el catalogo
// ============================================================

// Reemplaza XXXXXXXXXXX con tu numero de WhatsApp (con codigo de pais, sin + ni espacios)
// Ejemplo: 5491112345678 para Argentina, 34612345678 para España
var WHATSAPP_NUMBER = 'XXXXXXXXXXX';

var products = [
  {
    id: 1,
    name: 'Seiko 5 SNK809',
    category: 'Clásico',
    price: '$75 USD',
    image: 'https://cdn11.bigcommerce.com/s-uzonwrhn18/images/stencil/original/products/16566/71480/apippovem__79692.1619742626.jpg',
    description: 'El reloj automático de entrada perfecta. Diseño militar con esfera negra y correa NATO. Cuentas día/fecha a las 3 en punto y corona a las 4, característica única de Seiko. Ideal para el uso diario más exigente.',
    specs: [
      { label: 'Movimiento',  value: 'Automático 7S26' },
      { label: 'Caja',        value: '37mm · Acero' },
      { label: 'Cristal',     value: 'Hardlex' },
      { label: 'Agua',        value: '30m' },
    ],
    badge: null,
  },
  {
    id: 2,
    name: 'Tudor Black Bay 58',
    category: 'Sport',
    price: '$3.525 USD',
    image: 'https://cdn.watchbase.com/watch/lg/tudor/heritage/79030n-0001-53.png',
    description: 'Inspirado en el primer reloj de buceo Tudor de 1958. El BB58 revive la proporción compacta de los relojes de los años 50 con tecnología moderna: calibre MT5402 COSC de manufactura propia y 70 horas de reserva de marcha.',
    specs: [
      { label: 'Movimiento',  value: 'Auto. MT5402 COSC' },
      { label: 'Caja',        value: '39mm · Acero 316L' },
      { label: 'Cristal',     value: 'Zafiro domo' },
      { label: 'Agua',        value: '200m' },
    ],
    badge: null,
  },
  {
    id: 3,
    name: 'TAG Heuer Carrera',
    category: 'Clásico',
    price: '$4.200 USD',
    image: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw26c14591/TAG_Heuer_Carrera/WAR215A.BD0783/WAR215A.BD0783_Soldier.png',
    description: 'Icono del automovilismo desde 1963. Cronógrafo Calibre 5 en caja de 39mm con bisel y eslabones centrales en oro amarillo 18k. Esfera champán con contadores plateados y cristal zafiro con caseback transparente.',
    specs: [
      { label: 'Movimiento',  value: 'Auto. Calibre 5' },
      { label: 'Caja',        value: '39mm · Acero + Oro' },
      { label: 'Cristal',     value: 'Zafiro' },
      { label: 'Agua',        value: '100m' },
    ],
    badge: null,
  },
  {
    id: 4,
    name: 'Rolex Explorer II',
    category: 'Sport',
    price: '$9.100 USD',
    image: 'https://s.turbifycdn.com/aah/movadobaby/rolex-explorer-ii-42mm-black-dial-men-s-watch-m226570-0002-146.jpg',
    description: 'Diseñado para exploradores de cuevas y expediciones polares. El Calibre 3285 ofrece 70h de reserva de marcha y precisión de +/-2 seg/día. El icónico puntero GMT naranja distingue día de noche en el bisel de 24h fijo.',
    specs: [
      { label: 'Movimiento',  value: 'Auto. Cal. 3285' },
      { label: 'Caja',        value: '42mm · Oystersteel' },
      { label: 'Cristal',     value: 'Zafiro + Cyclops' },
      { label: 'Agua',        value: '100m' },
    ],
    badge: 'Destacado',
  },
  {
    id: 5,
    name: 'Omega Speedmaster',
    category: 'Luxury',
    price: '$6.700 USD',
    image: 'https://cdn.watchbase.com/watch/lg/omega/speedmaster/310-30-42-50-01-001-a2.jpg',
    description: 'El único reloj usado en la Luna. El Calibre 3861 manual cuenta con certificación METAS Master Chronometer y resistencia magnética de 15.000 gauss. Caja asimétrica de 42mm con cristal hesalite y esfera negra mate doble escalón.',
    specs: [
      { label: 'Movimiento',  value: 'Manual Cal. 3861' },
      { label: 'Caja',        value: '42mm · Acero asim.' },
      { label: 'Cristal',     value: 'Hesalite' },
      { label: 'Agua',        value: '50m' },
    ],
    badge: 'Icónico',
  },
  {
    id: 6,
    name: 'Rolex Daytona',
    category: 'Luxury',
    price: '$14.550 USD',
    image: 'https://s.turbifycdn.com/aah/movadobaby/rolex-cosmograph-daytona-116500-121.jpg',
    description: 'El cronógrafo de carreras definitivo. El Calibre 4130 con escape Chronergy y muelle Parachrom ofrece 72h de reserva. Bisel Cerachrom cerámico, esfera negra lacada con subdiales y pushers atornillados. Producido 2016–2023.',
    specs: [
      { label: 'Movimiento',  value: 'Auto. Cal. 4130' },
      { label: 'Caja',        value: '40mm · Oystersteel' },
      { label: 'Bisel',       value: 'Cerachrom cerámico' },
      { label: 'Agua',        value: '100m' },
    ],
    badge: 'Ed. Limitada',
  },
];
