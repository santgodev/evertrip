export interface TieredPrice {
  "1-4": number;
  "5-10": number;
  "11-17": number;
}

export interface DestinationEntry {
  slug: string;
  label: string;
}

/**
 * Tarifas con origen en Palomino (La Guajira). Precios por vehículo,
 * segmentados por número de pasajeros.
 */
export const palominoPricing: Record<string, TieredPrice> = {
  "santa-marta": { "1-4": 260000, "5-10": 430000, "11-17": 630000 },
  taganga: { "1-4": 260000, "5-10": 430000, "11-17": 630000 },
  aeropuerto: { "1-4": 260000, "5-10": 430000, "11-17": 630000 },
  "playa-cristal": { "1-4": 770000, "5-10": 920000, "11-17": 1090000 },
  barranquilla: { "1-4": 720000, "5-10": 950000, "11-17": 1270000 },
  minca: { "1-4": 350000, "5-10": 490000, "11-17": 800000 },
  "sector-buritaca": { "1-4": 130000, "5-10": 250000, "11-17": 370000 },
  "sector-costeno": { "1-4": 150000, "5-10": 230000, "11-17": 350000 },
  calabazo: { "1-4": 180000, "5-10": 250000, "11-17": 350000 },
  "don-diego": { "1-4": 80000, "5-10": 150000, "11-17": 230000 },
  cartagena: { "1-4": 1100000, "5-10": 1440000, "11-17": 1960000 },
  riohacha: { "1-4": 250000, "5-10": 380000, "11-17": 520000 },
  mayapo: { "1-4": 350000, "5-10": 520000, "11-17": 670000 },
  tayrona: { "1-4": 160000, "5-10": 230000, "11-17": 340000 },
  "parqueadero-tayrona": { "1-4": 190000, "5-10": 300000, "11-17": 380000 },
  dibulla: { "1-4": 170000, "5-10": 250000, "11-17": 400000 },
  "cabo-de-la-vela": { "1-4": 860000, "5-10": 1270000, "11-17": 1670000 },
  valledupar: { "1-4": 750000, "5-10": 1270000, "11-17": 1380000 },
  flamingo: { "1-4": 250000, "5-10": 370000, "11-17": 518000 },
  tunqueca: { "1-4": 250000, "5-10": 320000, "11-17": 380000 },
  mompox: { "1-4": 1260000, "5-10": 1670000, "11-17": 1955000 },
  tolu: { "1-4": 1500000, "5-10": 1840000, "11-17": 2420000 },
  baru: { "1-4": 1270000, "5-10": 1730000, "11-17": 2300000 },
  "rincon-del-mar": { "1-4": 1500000, "5-10": 1840000, "11-17": 2420000 },
  cienaga: { "1-4": 400000, "5-10": 518000, "11-17": 690000 },
  "blue-mango-bohemia": { "1-4": 170000, "5-10": 250000, "11-17": 390000 },
  maicao: { "1-4": 580000, "5-10": 890000, "11-17": 1320000 },
  guachaca: { "1-4": 130000, "5-10": 270000, "11-17": 380000 },
};

/**
 * Tarifas con origen en Santa Marta. Un único valor: tarifa base para
 * vehículo de 1 a 4 pasajeros. Grupos más grandes se cotizan por WhatsApp.
 */
export const santaMartaPricing: Record<string, number> = {
  "bello-horizonte": 30423,
  "pozos-colorados": 30423,
  rodadero: 33000,
  "perimetro-urbano": 45726,
  decameron: 33000,
  "puerto-drummond": 40000,
  "cisne-ciudad-equidad": 47000,
  taganga: 60000,
  bonda: 60000,
  minca: 120000,
  peaje: 80000,
  "parque-tayrona": 190000,
  buritaca: 230000,
  palomino: 280000,
  cienaga: 80000,
  "zona-bananera": 200000,
  barranquilla: 450000,
  cartagena: 850000,
  riohacha: 550000,
  maicao: 800000,
  valledupar: 850000,
  mompox: 1050000,
};

export const destinationLabels: Record<string, string> = {
  "santa-marta": "Santa Marta",
  taganga: "Taganga",
  aeropuerto: "Aeropuerto",
  "playa-cristal": "Playa Cristal",
  barranquilla: "Barranquilla",
  minca: "Minca",
  "sector-buritaca": "Sector Buritaca",
  "sector-costeno": "Sector Costeño",
  calabazo: "Calabazo",
  "don-diego": "Don Diego",
  cartagena: "Cartagena",
  riohacha: "Riohacha",
  mayapo: "Mayapo",
  tayrona: "Parque Tayrona",
  "parqueadero-tayrona": "Parqueadero Tayrona",
  dibulla: "Dibulla",
  "cabo-de-la-vela": "Cabo de la Vela",
  valledupar: "Valledupar",
  flamingo: "Flamingo",
  tunqueca: "Tunqueca",
  mompox: "Mompox",
  tolu: "Tolú",
  baru: "Barú",
  "rincon-del-mar": "Rincón del Mar",
  cienaga: "Ciénaga",
  "blue-mango-bohemia": "Blue Mango - Bohemia",
  maicao: "Maicao",
  guachaca: "Guachaca",
  "bello-horizonte": "Bello Horizonte",
  "pozos-colorados": "Pozos Colorados",
  rodadero: "El Rodadero",
  "perimetro-urbano": "Perímetro urbano Santa Marta",
  decameron: "Decameron",
  "puerto-drummond": "Puerto Drummond",
  "cisne-ciudad-equidad": "Sector Cisne y Ciudad Equidad",
  bonda: "Bonda",
  peaje: "Peaje",
  "parque-tayrona": "Parque Tayrona (hasta la entrada)",
  buritaca: "Buritaca",
  palomino: "Palomino",
  "zona-bananera": "Zona Bananera",
};

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
