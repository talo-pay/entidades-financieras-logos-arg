interface Logo {
  img: string;
  displayName?: string;
  legalName?: string;
}

interface Logos {
  bancos: {
    [key: string]: Logo;
  };
  psp: {
    [key: string]: Logo;
  };
}

const logos: Logos = {
  bancos: {
    "00007": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00007_BANCO%20GALICIA.svg",
      legalName: "BANCO DE GALICIA Y BUENOS AIRES S.A.U.",
      displayName: "Banco Galicia",
    },
    "00011": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00011_BANCO%20DE%20LA%20NACION%20ARGENTINA.svg",
      legalName: "BANCO DE LA NACION ARGENTINA",
      displayName: "Banco Nacion",
    },
    "00014": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00014_BANCO%20DE%20LA%20PROVINCIA%20DE%20BUENOS%20AIRES.svg",
      legalName: "BANCO DE LA PROVINCIA DE BUENOS AIRES",
      displayName: "Banco Provincia",
    },
    "00015": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00015_INDUSTRIAL%20AND%20COMMERCIAL%20BANK%20OF%20CHINA.svg",
      legalName: "INDUSTRIAL AND COMMERCIAL BANK OF CHINA",
      displayName: "ICBC",
    },
    "00016": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00016_CITIBANK%20N.A.svg",
      legalName: "CITIBANK N.A.",
      displayName: "Citibank",
    },
    "00017": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00017_BANCO%20BBVA%20ARGENTINA%20S.A.svg",
      legalName: "BANCO BBVA ARGENTINA S.A.",
      displayName: "BBVA Argentina",
    },
    "00020": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00020_BANCO%20DE%20LA%20PROVINCIA%20DE%20CORDOBA%20S.A.svg",
      legalName: "BANCO DE LA PROVINCIA DE CORDOBA S.A.",
      displayName: "Banco de Córdoba",
    },
    "00027": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00027_BANCO%20SUPERVIELLE%20S.A.svg",
      legalName: "BANCO SUPERVIELLE S.A.",
      displayName: "Banco Supervielle",
    },
    "00029": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00029_BANCO%20DE%20LA%20CIUDAD%20DE%20BUENOS%20AIRES.svg",
      legalName: "BANCO DE LA CIUDAD DE BUENOS AIRES",
      displayName: "Banco Ciudad",
    },
    "00034": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00034_BANCO%20PATAGONIA%20S.A.svg",
      legalName: "BANCO PATAGONIA S.A.",
      displayName: "Banco Patagonia",
    },
    "00044": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00044_BANCO%20HIPOTECARIO%20S.A.svg",
      legalName: "BANCO HIPOTECARIO S.A.",
      displayName: "Banco Hipotecario",
    },
    "00045": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00045_BANCO%20DE%20SAN%20JUAN%20S.A.svg",
      legalName: "BANCO DE SAN JUAN S.A.",
      displayName: "Banco San Juan",
    },
    "00065": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00065_BANCO%20MUNICIPAL%20DE%20ROSARIO.svg",
      legalName: "BANCO MUNICIPAL DE ROSARIO",
      displayName: "Banco Municipal de Rosario",
    },
    "00072": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00072_BANCO%20SANTANDER%20ARGENTINA%20S.A.svg",
      legalName: "BANCO SANTANDER ARGENTINA S.A.",
      displayName: "Banco Santander",
    },
    "00083": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00083_BANCO%20DE%20CHUBUT%20S.A.svg",
      legalName: "BANCO DEL CHUBUT S.A.",
      displayName: "Banco del Chubut",
    },
    "00086": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00086_BANCO%20DE%20SANTA%20CRUZ%20S.A.svg",
      legalName: "BANCO DE SANTA CRUZ S.A.",
      displayName: "Banco Santa Cruz",
    },
    "00093": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00093_BANCO%20DE%20LA%20PAMPA%20SOCIEDAD%20DE%20ECONOMÍA%20M.svg",
      legalName: "BANCO DE LA PAMPA SOCIEDAD DE ECONOMÍA M",
      displayName: "Banco de La Pampa",
    },
    "00094": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00094_BANCO%20DE%20CORRIENTES%20S.A.svg",
      legalName: "BANCO DE CORRIENTES S.A.",
      displayName: "Banco de Corrientes",
    },
    "00097": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00097_BANCO%20PROVINCIA%20DEL%20NEUQUÉN%20SOCIEDAD%20ANÓNIMA.svg",
      legalName: "BANCO PROVINCIA DEL NEUQUÉN SOCIEDAD ANÓNIMA",
      displayName: "Banco Neuquén",
    },
    "00131": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00131_BANK%20OF%20CHINA%20LIMITED%20SUCURSAL%20BUENOS%20AIRES.svg",
      legalName: "BANK OF CHINA LIMITED SUCURSAL BUENOS AIRES",
      displayName: "Bank of China",
    },
    "00143": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00143_BRUBANK%20S.A.U.svg",
      legalName: "BRUBANK S.A.U.",
      displayName: "Brubank",
    },
    "00147": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00147_BIBANK%20S.A.svg",
      legalName: "BIBANK S.A.",
      displayName: "Bibank",
    },
    "00150": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00150_HSBC%20BANK%20ARGENTINA%20S.A.svg",
      legalName: "HSBC BANK ARGENTINA S.A.",
      displayName: "HSBC Argentina",
    },
    "00158": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00158_OPEN%20BANK%20ARGENTINA%20S.A.svg",
      legalName: "OPEN BANK ARGENTINA S.A.",
      displayName: "Open Bank",
    },
    "00165": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00165_JPMORGAN%20CHASE%20BANK%2C%20NATIONAL%20ASSOCIATION.svg",
      legalName: "JPMORGAN CHASE BANK, NATIONAL ASSOCIATION",
      displayName: "JPMorgan Chase",
    },
    "00191": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00191_BANCO%20CREDICOOP%20COOPERATIVO%20LIMITADO.svg",
      legalName: "BANCO CREDICOOP COOPERATIVO LIMITADO",
      displayName: "Banco Credicoop",
    },
    "00198": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00198_BANCO%20DE%20VALORES%20S.A.svg",
      legalName: "BANCO DE VALORES S.A.",
      displayName: "Banco de Valores",
    },
    "00247": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00247_BANCO%20ROELA%20S.A.svg",
      legalName: "BANCO ROELA S.A.",
      displayName: "Banco Roela",
    },
    "00254": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00254_BANCO%20MARIVA%20S.A.svg",
      legalName: "BANCO MARIVA S.A.",
      displayName: "Banco Mariva",
    },
    "00259": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00259_BANCO%20BMA%20S.A.U.svg",
      legalName: "BANCO BMA S.A.U.",
      displayName: "Banco BMA",
    },
    "00266": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00266_BNP%20PARIBAS.svg",
      legalName: "BNP PARIBAS",
      displayName: "BNP Paribas",
    },
    "00268": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00268_BANCO%20PROVINCIA%20DE%20TIERRA%20DEL%20FUEGO.svg",
      legalName: "BANCO PROVINCIA DE TIERRA DEL FUEGO",
      displayName: "Banco Tierra del Fuego",
    },
    "00269": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/5e7b8b3eb436506a9fe74f08168aeae1aade297b/logos/SVG/00269_BANCO%20DE%20LA%20REPUBLICA%20ORIENTAL%20DEL%20URUGU.svg",
      legalName: "BANCO DE LA REPUBLICA ORIENTAL DEL URUGU",
      displayName: "Banco República Oriental",
    },
    "00277": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00277_BANCO%20SAENZ%20S.A.svg",
      legalName: "BANCO SAENZ S.A.",
      displayName: "Banco Saenz",
    },
    "00281": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00281_BANCO%20MERIDIAN%20S.A.svg",
      legalName: "BANCO MERIDIAN S.A.",
      displayName: "Banco Meridian",
    },
    "00285": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00285_BANCO%20MACRO%20S.A.svg",
      legalName: "BANCO MACRO S.A.",
      displayName: "Banco Macro",
    },
    "00299": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00299_BANCO%20COMAFI%20SOCIEDAD%20ANONIMA.svg",
      legalName: "BANCO COMAFI SOCIEDAD ANONIMA",
      displayName: "Banco Comafi",
    },
    "00300": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/5e7b8b3eb436506a9fe74f08168aeae1aade297b/logos/SVG/00300_BANCO%20DE%20INVERSION%20Y%20COMERCIO%20EXTERIOR%20S.svg",
      legalName: "BANCO DE INVERSION Y COMERCIO EXTERIOR S.A.",
      displayName: "Banco de Inversión y Comercio Exterior",
    },
    "00301": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00301_BANCO%20PIANO%20S.A.svg",
      legalName: "BANCO PIANO S.A.",
      displayName: "Banco Piano",
    },
    "00305": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00305_BANCO%20JULIO%20SOCIEDAD%20ANONIMA.svg",
      legalName: "BANCO JULIO SOCIEDAD ANONIMA",
      displayName: "Banco Julio",
    },
    "00310": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00310_BANCO%20DEL%20SOL%20S.A.svg",
      legalName: "BANCO DEL SOL S.A.",
      displayName: "Banco del Sol",
    },
    "00311": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/5e7b8b3eb436506a9fe74f08168aeae1aade297b/logos/SVG/00311_NUEVO%20BANCO%20DEL%20CHACO%20S.%20A.svg",
      legalName: "NUEVO BANCO DEL CHACO S.A.",
      displayName: "Nuevo Banco del Chaco",
    },
    "00312": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00312_BANCO%20VOII%20S.A.svg",
      legalName: "BANCO VOII S.A.",
      displayName: "Banco VoII",
    },
    "00315": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00315_BANCO%20DE%20FORMOSA%20S.A.svg",
      legalName: "BANCO DE FORMOSA S.A.",
      displayName: "Banco de Formosa",
    },
    "00319": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/5e7b8b3eb436506a9fe74f08168aeae1aade297b/logos/SVG/00319_BANCO%20CMF%20S.A.svg",
      legalName: "BANCO CMF S.A.",
      displayName: "Banco CMF",
    },
    "00321": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00321_BANCO%20DE%20SANTIAGO%20DEL%20ESTERO%20S.A.svg",
      legalName: "BANCO DE SANTIAGO DEL ESTERO S.A.",
      displayName: "Banco Santiago del Estero",
    },
    "00322": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00322_BANCO%20INDUSTRIAL%20S.A.svg",
      legalName: "BANCO INDUSTRIAL S.A.",
      displayName: "Banco Industrial",
    },
    "00330": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00330_NUEVO%20BANCO%20DE%20SANTA%20FE%20SOCIEDAD%20ANONIMA.svg",
      legalName: "NUEVO BANCO DE SANTA FE SOCIEDAD ANONIMA",
      displayName: "Nuevo Banco de Santa Fe",
    },
    "00331": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00331_BANCO%20CETELEM%20ARGENTINA%20S.A.svg",
      legalName: "BANCO CETELEM ARGENTINA S.A.",
      displayName: "Banco Cetelem",
    },
    "00332": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00332_BANCO%20DE%20SERVICIOS%20FINANCIEROS%20S.A.svg",
      legalName: "BANCO DE SERVICIOS FINANCIEROS S.A.",
      displayName: "Banco de Servicios Financieros",
    },
    "00338": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00338_BANCO%20DE%20SERVICIOS%20Y%20TRANSACCIONES%20S.A.svg",
      legalName: "BANCO DE SERVICIOS Y TRANSACCIONES S.A.",
      displayName: "Banco de Servicios y Transacciones",
    },
    "00339": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00339_RCI%20BANQUE%20S.A.svg",
      legalName: "RCI BANQUE S.A.",
      displayName: "RCI Banque",
    },
    "00340": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/00340_BACS%20BANCO%20DE%20CREDITO%20Y%20SECURITIZACION%20S.svg",
      legalName: "BACS BANCO DE CREDITO Y SECURITIZACION S.",
      displayName: "BACS Banco de Crédito",
    },
    "00341": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00341_BANCO%20MASVENTAS%20S.A.svg",
      legalName: "BANCO MASVENTAS S.A.",
      displayName: "Banco Masventas",
    },
    "00384": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00384_WILOBANK%20S.A.U.svg",
      legalName: "WILOBANK S.A.U.",
      displayName: "Wilobank",
    },
    "00386": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00386_NUEVO%20BANCO%20DE%20ENTRE%20RÍOS%20S.A.svg",
      legalName: "NUEVO BANCO DE ENTRE RÍOS S.A.",
      displayName: "Nuevo Banco de Entre Ríos",
    },
    "00389": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00389_BANCO%20COLUMBIA%20S.A.svg",
      legalName: "BANCO COLUMBIA S.A.",
      displayName: "Banco Columbia",
    },
    "00426": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00426_BANCO%20BICA%20S.A.svg",
      legalName: "BANCO BICA S.A.",
      displayName: "Banco Bica",
    },
    "00431": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00431_BANCO%20COINAG%20S.A.svg",
      legalName: "BANCO COINAG S.A.",
      displayName: "Banco Coinag",
    },
    "00432": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00432_BANCO%20DE%20COMERCIO%20S.A.svg",
      legalName: "BANCO DE COMERCIO S.A.",
      displayName: "Banco de Comercio",
    },
    "00435": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00435_BANCO%20SUCREDITO%20REGIONAL%20S.A.U.svg",
      legalName: "BANCO SUCREDITO REGIONAL S.A.U.",
      displayName: "Banco Sucredito Regional",
    },
    "00448": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/00448_BANCO%20DINO%20S.A.svg",
      legalName: "BANCO DINO S.A.",
      displayName: "Banco Dino",
    },
    "44077": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44077_COMPAÑIA%20FINANCIERA%20ARGENTINA%20S.A.svg",
      legalName: "COMPAÑIA FINANCIERA ARGENTINA S.A.",
      displayName: "Compañía Financiera Argentina",
    },
    "44088": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44088_VOLKSWAGEN%20FINANCIAL%20SERVICES%20COMPAÑIA%20F.svg",
      legalName: "VOLKSWAGEN FINANCIAL SERVICES COMPAÑIA FINANCIERA S.A.",
      displayName: "Volkswagen Financial Services",
    },
    "44090": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44090_IUDU%20COMPAÑÍA%20FINANCIERA%20S.A.svg",
      legalName: "IUDU COMPAÑÍA FINANCIERA S.A.",
      displayName: "Iudu",
    },
    "44092": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44092_FCA%20COMPAÑIA%20FINANCIERA%20S.A.svg",
      legalName: "FCA COMPAÑIA FINANCIERA S.A.",
      displayName: "FCA",
    },
    "44093": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/44093_GPAT%20COMPAÑIA%20FINANCIERA%20S.A.U.svg",
      legalName: "GPAT COMPAÑIA FINANCIERA S.A.U.",
      displayName: "GPAT",
    },
    "44094": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44093_GPAT%20COMPAÑIA%20FINANCIERA%20S.A.U.%20copy.svg",
      legalName: "MERCEDES-BENZ COMPAÑÍA FINANCIERA ARGENTINA S.A.",
      displayName: "Mercedes-Benz",
    },
    "44095": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44095_ROMBO%20COMPAÑÍA%20FINANCIERA%20S.A.svg",
      legalName: "ROMBO COMPAÑÍA FINANCIERA S.A.",
      displayName: "Rombo",
    },
    "44096": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/44096_JOHN%20DEERE%20CREDIT%20COMPAÑÍA%20FINANCIERA%20S.svg",
      legalName: "JOHN DEERE CREDIT COMPAÑÍA FINANCIERA S.A.",
      displayName: "John Deere Credit",
    },
    "44098": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44098_PSA%20FINANCE%20ARGENTINA%20COMPAÑÍA%20FINANCIER.svg",
      legalName: "PSA FINANCE ARGENTINA COMPAÑÍA FINANCIERA",
      displayName: "PSA Finance Argentina",
    },
    "44099": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/44099_TOYOTA%20COMPAÑÍA%20FINANCIERA%20DE%20ARGENTINA.svg",
      legalName: "TOYOTA COMPAÑÍA FINANCIERA DE ARGENTINA",
      displayName: "Toyota",
    },
    "45030": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/54f0b8848fdc38195a80c15b6610dd8050d4bd16/logos/SVG/45030_NARANJA%20DIGITAL%20COMPAÑÍA%20FINANCIERA%20S.A.svg",
      legalName: "NARANJA DIGITAL COMPAÑÍA FINANCIERA S.A.",
      displayName: "Naranja Digital",
    },
    "45056": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/45056_MONTEMAR%20COMPAÑIA%20FINANCIERA%20S.A.svg",
      legalName: "MONTEMAR COMPAÑIA FINANCIERA S.A.",
      displayName: "Montemar",
    },
    "45072": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/45072_REBA%20COMPAÑIA%20FINANCIERA%20S.A.svg",
      legalName: "REBA COMPAÑIA FINANCIERA S.A.",
      displayName: "Reba",
    },
    "65203": {
      img: "https://raw.githubusercontent.com/talo-pay/entidades-financieras-logos-arg/be6b0782b1ae2835069f23ae02ec000587efd51f/logos/SVG/65203_CRÉDITO%20REGIONAL%20COMPAÑÍA%20FINANCIERA%20S.A.svg",
      legalName: "CRÉDITO REGIONAL COMPAÑÍA FINANCIERA S.A.",
      displayName: "Crédito Regional",
    },
  },

  psp: {
    "01": { img: "https://talo.com.ar", displayName: "Banco Talo" },
  },
};

export default logos;
