CATÁLOGO AMPLIADO DE 36 REPUESTOS PARA MOTOS EN VENEZUELA
const products = [
    // --- TRANSMISIÓN Y CROCHE ---
    {
        id: 1,
        sku: "OEM-428H-GN125",
        name: "Kit de Arrastre Reforzado Cadena 428H + Piñón y Catalina",
        category: "Transmisión",
        brand: "Suzuki",
        models: ["GN 125", "EN 125", "SBR 150", "MD Águila 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 142,
        oldPrice: 34.00,
        price: 28.50,
        specs: "Paso 428H reforzado, relación 14T/43T en acero templado al carbono de alta resistencia.",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        sku: "TRN-CROCHE-5D",
        name: "Kit Discos de Croche (5 Discos) + Separadores Metálicos",
        category: "Transmisión",
        brand: "Toro",
        models: ["Toro Rex 150", "Toro León 200", "Horse 1", "SBR 150"],
        quality: "Original",
        rating: 4.8,
        reviews: 74,
        oldPrice: 19.00,
        price: 15.50,
        specs: "Material de fricción de corcho y kevlar de alta resistencia al deslizamiento.",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        sku: "TRN-FZ16-KIT",
        name: "Kit de Arrastre Dorado O-Ring Yamaha FZ 16 / Fazer",
        category: "Transmisión",
        brand: "Yamaha",
        models: ["FZ 16", "Fazer 150", "XTZ 125"],
        quality: "Original",
        rating: 4.9,
        reviews: 82,
        oldPrice: 48.00,
        price: 41.00,
        specs: "Cadena sellada con retenes O-Ring para máxima durabilidad y menor estiramiento.",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        sku: "TRN-CAD-428OR",
        name: "Cadena de Transmisión Dorada 428H x 136 Eslabones Reforzada",
        category: "Transmisión",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "Horse 1", "Owen 150", "MD Cóndor 150"],
        quality: "Racing",
        rating: 4.8,
        reviews: 119,
        oldPrice: 22.00,
        price: 17.50,
        specs: "Bujes sólidos de alta resistencia al desgaste, incluye candado de unión reforzado.",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        sku: "TRN-CRONA-COM",
        name: "Porta Catalina + Gomas de Impacto (Damper) Trasero",
        category: "Transmisión",
        brand: "Empire",
        models: ["Horse 1", "Horse 2", "Owen 150", "SBR 150"],
        quality: "Genérico",
        rating: 4.7,
        reviews: 61,
        oldPrice: 24.00,
        price: 19.00,
        specs: "Aluminio reforzado con 4 gomas amortiguadoras de caucho natural de alta densidad.",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        sku: "TRN-GUAYA-CR",
        name: "Guaya de Croche Reforzada con Funda Interior de Teflón",
        category: "Transmisión",
        brand: "Bajaj",
        models: ["Pulsar NS 200", "Pulsar AS 200", "TX 200", "GN 125"],
        quality: "Original",
        rating: 4.9,
        reviews: 87,
        oldPrice: 12.00,
        price: 9.00,
        specs: "Cable de acero trenzado inoxidable suave al tacto, evita roturas prematuras.",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80"
    },

    // --- MOTOR Y CILINDROS ---
    {
        id: 7,
        sku: "ENG-CG150-KIT",
        name: "Kit Cilindro, Pistón, Anillos y Empacaduras 150cc Varillero",
        category: "Motor",
        brand: "Empire",
        models: ["Horse 1", "Horse 2", "Owen 150", "Express 150", "SBR 150"],
        quality: "Genérico",
        rating: 4.8,
        reviews: 165,
        oldPrice: 52.00,
        price: 44.00,
        specs: "Diámetro estándar 62mm, pasador 15mm. Incluye camisa de hierro fundido y empacaduras.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        sku: "ENG-PZ27-HND",
        name: "Carburador PZ27 / PZ30 con Bomba de Pique",
        category: "Motor",
        brand: "Honda",
        models: ["CGL 125", "XR 150L", "Bros 150", "Horse 2"],
        quality: "Genérico",
        rating: 4.8,
        reviews: 112,
        oldPrice: 38.00,
        price: 32.00,
        specs: "Venturi calibrado de 27mm, mejora el encendido en frío y reduce el consumo de gasolina.",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        sku: "MTR-TX200-CIL",
        name: "Kit Cilindro 200cc Cadenilla + Pistón y Anillos",
        category: "Motor",
        brand: "Empire",
        models: ["TX 200", "Speed 200", "Toro León 200", "Bera BR 200"],
        quality: "Original",
        rating: 4.9,
        reviews: 91,
        oldPrice: 65.00,
        price: 55.00,
        specs: "Cilindro de 63.5mm para motores 200cc de cadenilla, incluye pasador y seguros.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        sku: "MTR-CULATA-150",
        name: "Cámara / Culata Completa con Válvulas y Resortes 150cc",
        category: "Motor",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "Horse 1", "MD Águila 150"],
        quality: "Original",
        rating: 4.8,
        reviews: 53,
        oldPrice: 78.00,
        price: 66.00,
        specs: "Lista para instalar con válvulas asentadas, sellos de válvula y balancines superiores.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        sku: "MTR-BALANC-CG",
        name: "Juego Balancines Inferiores + Varillas Impulsoras 150cc",
        category: "Motor",
        brand: "Toro",
        models: ["Toro Rex 150", "Horse 1", "SBR 150", "Owen 150"],
        quality: "Original",
        rating: 4.7,
        reviews: 68,
        oldPrice: 21.00,
        price: 16.50,
        specs: "Acero forjado cementado anti-desgaste para eliminar ruidos de taqués en el motor.",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        sku: "MTR-EMPAC-FULL",
        name: "Juego Completo de Empacaduras y Estoperas de Motor",
        category: "Motor",
        brand: "Suzuki",
        models: ["GN 125", "EN 125", "AX 100", "DR 200"],
        quality: "Original",
        rating: 4.9,
        reviews: 95,
        oldPrice: 14.00,
        price: 11.00,
        specs: "Empacaduras libre de asbesto con inserto metálico en cámara y juego de estoperas.",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80"
    },

    // --- SISTEMA DE FRENOS ---
    {
        id: 13,
        sku: "BRK-YBR-CER02",
        name: "Pastillas de Freno Delanteras Cerámicas Sinterizadas",
        category: "Frenos",
        brand: "Yamaha",
        models: ["YBR 125", "FZ 16", "Socialista 150", "Bera DT 200"],
        quality: "Racing",
        rating: 4.8,
        reviews: 94,
        oldPrice: 15.00,
        price: 12.00,
        specs: "Compuesto cerámico de alta disipación térmica, frenado progresivo sin chillidos.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        sku: "BRK-NS200-DSC",
        name: "Disco de Freno Delantero Ventilado Acero Inoxidable",
        category: "Frenos",
        brand: "Bajaj",
        models: ["Pulsar NS 200", "Pulsar AS 200", "Dominar 250"],
        quality: "Original",
        rating: 4.9,
        reviews: 54,
        oldPrice: 44.00,
        price: 38.00,
        specs: "Diseño perforado autoventilado de 300mm para frenadas exigentes en ciudad o carretera.",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        sku: "BRK-BAND-TRAS",
        name: "Juego Bandas de Freno Traseras con Resortes",
        category: "Frenos",
        brand: "MD",
        models: ["MD Águila 150", "MD Haojin", "Horse 1", "GN 125"],
        quality: "Genérico",
        rating: 4.6,
        reviews: 67,
        oldPrice: 11.00,
        price: 8.50,
        specs: "Zapata de aluminio fundido con pasta ranurada para evacuación de polvo y agua.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        sku: "BRK-BOMB-DEL",
        name: "Bomba de Freno Delantera Completa con Manilla y Visor",
        category: "Frenos",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "Horse 1", "TX 200", "GN 125"],
        quality: "Original",
        rating: 4.8,
        reviews: 108,
        oldPrice: 24.00,
        price: 19.50,
        specs: "Pistón de 12.7mm para manubrio 7/8 (22mm), incluye sensor de luz de freno.",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 17,
        sku: "BRK-CALIP-GN",
        name: "Mordaza / Caliper de Freno Delantero Doble Pistón con Pastillas",
        category: "Frenos",
        brand: "Suzuki",
        models: ["GN 125", "EN 125", "SBR 150", "Owen 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 49,
        oldPrice: 36.00,
        price: 29.00,
        specs: "Cuerpo de aleación de aluminio con pistones sellados de alta presión y purgador.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        sku: "BRK-DSC-XR150",
        name: "Disco de Freno Delantero Lobulado 240mm Honda / TX",
        category: "Frenos",
        brand: "Honda",
        models: ["XR 150L", "Bros 150", "TX 200", "Bera DT 200"],
        quality: "Racing",
        rating: 4.8,
        reviews: 44,
        oldPrice: 32.00,
        price: 26.50,
        specs: "Perfil tipo Wave para limpieza rápida de barro y disipación térmica superior.",
        image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
    },

    // --- ELÉCTRICO E ILUMINACIÓN ---
    {
        id: 19,
        sku: "ELC-CDI-BERA",
        name: "Módulo CDI Racing Digital 6 Pines Sin Corte de RPM",
        category: "Eléctrico",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "León 200", "BR 200"],
        quality: "Racing",
        rating: 4.7,
        reviews: 88,
        oldPrice: 18.00,
        price: 14.00,
        specs: "Curva de encendido optimizada para mejorar salida y respuesta en bajas y altas revoluciones.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        sku: "ELC-GEL-12V7A",
        name: "Batería de Gel Sellada 12V 7Ah Libre de Mantenimiento",
        category: "Eléctrico",
        brand: "Universal",
        models: ["GN 125", "Horse 1", "SBR 150", "TX 200", "Toro León"],
        quality: "Original",
        rating: 4.8,
        reviews: 190,
        oldPrice: 30.00,
        price: 25.00,
        specs: "Tecnología AGM/Gel anti-derrame con visor de carga digital y alto poder de arranque.",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 21,
        sku: "ELC-FARO-LED",
        name: "Faro Delantero LED Ojo de Ángel Alta Potencia 12V",
        category: "Eléctrico",
        brand: "MD",
        models: ["MD Águila 150", "MD Cóndor 150", "SBR 150", "GN 125"],
        quality: "Racing",
        rating: 4.9,
        reviews: 132,
        oldPrice: 28.00,
        price: 22.00,
        specs: "Luz blanca 6000K de largo alcance con aro diurno LED y bajo consumo de batería.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 22,
        sku: "MTR-BUJ-IRID",
        name: "Bujía de Iridio D8EA / CR8E Encendido Rápido",
        category: "Eléctrico",
        brand: "Suzuki",
        models: ["GN 125", "EN 125", "Horse 1", "Toro Rex 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 156,
        oldPrice: 10.00,
        price: 7.50,
        specs: "Electrodo central de iridio fino para chispa estable y mayor ahorro de combustible.",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 23,
        sku: "ELC-BOB-8NUC",
        name: "Bobina de Encendido / Estator 8 Núcleos Trifásico",
        category: "Eléctrico",
        brand: "Empire",
        models: ["Horse 1", "Horse 2", "Owen 150", "SBR 150", "TX 200"],
        quality: "Original",
        rating: 4.8,
        reviews: 79,
        oldPrice: 25.00,
        price: 20.00,
        specs: "Embobinado en cobre 100% puro de alta carga para alimentar luces LED sin descargar batería.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 24,
        sku: "ELC-REG-VOLT",
        name: "Regulador Rectificador de Voltaje 12V Reforzado",
        category: "Eléctrico",
        brand: "Honda",
        models: ["CGL 125", "XR 150L", "Bros 150", "Horse 1", "Toro Rex 150"],
        quality: "Original",
        rating: 4.7,
        reviews: 64,
        oldPrice: 16.00,
        price: 12.50,
        specs: "Disipador de aluminio aleteado que estabiliza la carga a 14.2V y protege bombillos.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },

    // --- ACEITES Y FILTROS ---
    {
        id: 25,
        sku: "LUB-MOT-7100",
        name: "Aceite Sintético 4T 10W-40 / 20W-50 JASO MA2 (1 Litro)",
        category: "Lubricantes",
        brand: "Universal",
        models: ["SBR 150", "Horse 1", "GN 125", "Toro Rex", "MD Águila"],
        quality: "Original",
        rating: 5.0,
        reviews: 318,
        oldPrice: null,
        price: 16.50,
        specs: "Normativa API SN / JASO MA2. Protección contra altas temperaturas para motores refrigerados por aire.",
        image: "https://images.unsplash.com/photo-1635784063388-1ff609731d7d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 26,
        sku: "LUB-FILT-ACE",
        name: "Filtro de Aceite Interno + Oring Tapa (Pack x2)",
        category: "Lubricantes",
        brand: "Suzuki",
        models: ["GN 125", "EN 125", "DR 200"],
        quality: "Original",
        rating: 4.8,
        reviews: 103,
        oldPrice: 9.00,
        price: 6.50,
        specs: "Papel filtrante de alta densidad que retiene micropartículas metálicas del motor.",
        image: "https://images.unsplash.com/photo-1635784063388-1ff609731d7d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 27,
        sku: "LUB-MIN-20W50",
        name: "Aceite Mineral Alto Kilometraje 4T 20W-50 (1 Litro)",
        category: "Lubricantes",
        brand: "Universal",
        models: ["Horse 1", "SBR 150", "Express 150", "MD Águila 150", "Toro Rex 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 245,
        oldPrice: 10.50,
        price: 8.50,
        specs: "Formulado para motos de trabajo diario y mototaxis, reduce el desgaste de caja y croche.",
        image: "https://images.unsplash.com/photo-1635784063388-1ff609731d7d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 28,
        sku: "LUB-FILT-AIRE",
        name: "Elemento Filtro de Aire Espuma Doble Capa",
        category: "Lubricantes",
        brand: "Yamaha",
        models: ["YBR 125", "FZ 16", "XTZ 125", "GN 125"],
        quality: "Original",
        rating: 4.7,
        reviews: 58,
        oldPrice: 11.00,
        price: 8.00,
        specs: "Espuma lavable de doble porosidad que retiene polvo fino sin restringir el flujo de aire.",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 29,
        sku: "LUB-CAD-SPRAY",
        name: "Lubricante de Cadena en Spray Anti-Salpicaduras 400ml",
        category: "Lubricantes",
        brand: "Universal",
        models: ["Pulsar NS 200", "FZ 16", "TX 200", "SBR 150", "GN 125"],
        quality: "Racing",
        rating: 4.9,
        reviews: 114,
        oldPrice: 14.00,
        price: 11.50,
        specs: "Compatible con cadenas estándar, O-Ring y X-Ring; repele agua y polvo.",
        image: "https://images.unsplash.com/photo-1635784063388-1ff609731d7d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 30,
        sku: "LUB-FILT-NS200",
        name: "Filtro de Aceite Bajaj Pulsar NS 200 / Dominar 250",
        category: "Lubricantes",
        brand: "Bajaj",
        models: ["Pulsar NS 200", "Pulsar AS 200", "Dominar 250"],
        quality: "Original",
        rating: 4.9,
        reviews: 72,
        oldPrice: 8.00,
        price: 6.00,
        specs: "Válvula anti-retorno integrada de silicona para lubricación instantánea al encender.",
        image: "https://images.unsplash.com/photo-1635784063388-1ff609731d7d?auto=format&fit=crop&w=600&q=80"
    },

    // --- CAUCHOS Y SUSPENSIÓN ---
    {
        id: 31,
        sku: "TIR-9090-18",
        name: "Caucho Trasero Reforzado 90/90-18 / 3.00-18 Doble Propósito",
        category: "Cauchos",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "Horse 1", "MD Cóndor 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 205,
        oldPrice: 54.00,
        price: 45.00,
        specs: "6 lonas (6PR) de alta durabilidad para trabajo diario y asfalto irregular.",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 32,
        sku: "SUS-AMORT-PAR",
        name: "Par de Amortiguadores Traseros Reforzados Doble Resorte",
        category: "Cauchos",
        brand: "Empire",
        models: ["Horse 1", "Horse 2", "Owen 150", "GN 125", "SBR 150"],
        quality: "Original",
        rating: 4.7,
        reviews: 98,
        oldPrice: 48.00,
        price: 39.00,
        specs: "Ajustables en 5 niveles de dureza, ideales para carga y pasajero.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 33,
        sku: "TIR-11090-17",
        name: "Caucho Trasero Pistero 110/90-17 / 130/70-17 Tubeless",
        category: "Cauchos",
        brand: "Toro",
        models: ["Toro León 200", "TX 200", "Speed 200", "FZ 16"],
        quality: "Original",
        rating: 4.8,
        reviews: 59,
        oldPrice: 68.00,
        price: 58.00,
        specs: "Diseño deportivo de gran estabilidad en curvas y excelente drenaje en lluvia.",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 34,
        sku: "TIR-275-18DEL",
        name: "Caucho Delantero 2.75-18 (80/100-18) Pistero Alta Adherencia",
        category: "Cauchos",
        brand: "MD",
        models: ["MD Águila 150", "SBR 150", "Horse 1", "GN 125", "YBR 125"],
        quality: "Original",
        rating: 4.8,
        reviews: 121,
        oldPrice: 42.00,
        price: 35.00,
        specs: "Banda de rodamiento direccional que brinda precisión en el manubrio y frenado firme.",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 35,
        sku: "SUS-BARR-DEL",
        name: "Par de Barras Telescópicas Delanteras Completas con Aceite",
        category: "Cauchos",
        brand: "Bera",
        models: ["SBR 150", "Socialista 150", "Horse 1", "Owen 150"],
        quality: "Original",
        rating: 4.9,
        reviews: 47,
        oldPrice: 88.00,
        price: 75.00,
        specs: "Tubos cromados de 31mm listos para montar, incluyen retenes y guardapolvos.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 36,
        sku: "TIR-TRIP-18",
        name: "Tripa Reforzada Caucho Natural 3.00-18 / 90/90-18 Válvula Recta",
        category: "Cauchos",
        brand: "Universal",
        models: ["SBR 150", "Horse 1", "GN 125", "MD Águila 150", "Toro Rex 150"],
        quality: "Original",
        rating: 4.8,
        reviews: 164,
        oldPrice: 10.00,
        price: 7.50,
        specs: "Espesor de pared de 2.2mm resistente a pinchazos y cambios bruscos de temperatura.",
        image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80"
    }
];

// MODELOS POR MARCA PARA EL SELECTOR "MI MOTO" (Incluye marcas de Venezuela)
const modelsByBrand = {
    Bera: ["SBR 150", "Socialista 150", "León 200", "BR 200", "Bera DT 200"],
    Empire: ["Horse 1", "Horse 2", "Owen 150", "TX 200", "Speed 200", "Express 150"],
    Suzuki: ["GN 125", "EN 125", "AX 100", "DR 200"],
    Yamaha: ["YBR 125", "FZ 16", "Fazer 150", "XTZ 125"],
    Honda: ["CGL 125", "XR 150L", "Bros 150"],
    Bajaj: ["Pulsar NS 200", "Pulsar AS 200", "Dominar 250"],
    Toro: ["Toro Rex 150", "Toro León 200"],
    MD: ["MD Águila 150", "MD Cóndor 150", "MD Haojin"]
};

// INFORMACIÓN PARA ENLACES DE TOPBAR Y FOOTER
const infoPages = {
    ayuda: {
        title: "Centro de Ayuda y Cómo Comprar",
        body: `<p style="margin-bottom:10px;">1. <strong>Elige tu moto</strong> en el selector superior o haz clic en la marca que buscas (Bera, Empire, Suzuki, Toro, MD, etc.).</p>
               <p style="margin-bottom:10px;">2. <strong>Agrega tus repuestos</strong> al carrito y ajusta las cantidades que necesites.</p>
               <p>3. Pulsa <strong>Completar Pedido por WhatsApp</strong> para confirmar stock inmediato y coordinar entrega o envío.</p>`
    },
    pagos: {
        title: "Métodos de Pago Aceptados",
        body: `<ul style="padding-left:18px; line-height:1.8;">
                <li>Pago Móvil y Transferencias Bancarias Nacionales</li>
                <li>Zelle y Binance Pay (USDT)</li>
                <li>Efectivo en divisas (en tienda o entrega personal)</li>
               </ul>`
    },
    envios: {
        title: "Envíos Nacionales",
        body: `<p style="margin-bottom:10px;">Realizamos despachos el mismo día para pedidos confirmados antes de las 2:00 PM a través de <strong>Zoom, MRW y Tealca</strong>.</p>
               <p><strong>Envío Gratis:</strong> Aplica automáticamente en pedidos iguales o superiores a <strong>$50.00</strong>.</p>`
    },
    garantia: {
        title: "Política de Garantías",
        body: `<p>Todos nuestros repuestos cuentan con garantía contra defectos de fábrica. Para cambios por compatibilidad, la pieza y su empaque deben conservarse intactos dentro de los primeros 7 días.</p>`
    }
};

// ESTADO GLOBAL CON PERSISTENCIA EN LOCALSTORAGE
let state = {
    category: "Todas",
    selectedBrands: [],
    selectedQualities: [],
    search: "",
    sort: "featured",
    myBike: JSON.parse(localStorage.getItem("motoparts_bike")) || null
};

let cart = JSON.parse(localStorage.getItem("motoparts_cart")) || [];

// ELEMENTOS DEL DOM
const productsGrid = document.getElementById("productsGrid");
const resultsNumber = document.getElementById("resultsNumber");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sortSelect = document.getElementById("sortSelect");

const finderBrand = document.getElementById("finderBrand");
const finderModel = document.getElementById("finderModel");
const applyBikeBtn = document.getElementById("applyBikeBtn");
const clearBikeBtn = document.getElementById("clearBikeBtn");
const selectedBikeLabel = document.getElementById("selectedBikeLabel");

// SINCRONIZAR PÍLDORAS DE MARCA Y SELECTOR
function syncBrandPills(activeBrand) {
    document.querySelectorAll(".brand-pill").forEach(pill => {
        pill.classList.toggle("active", pill.dataset.brand === activeBrand);
    });
}

function selectBikeBrand(brand, model = "") {
    if (!brand || brand === "Todas") {
        state.myBike = null;
        localStorage.removeItem("motoparts_bike");
        finderBrand.value = "";
        finderModel.innerHTML = `<option value="">2. Todos los modelos (Opcional)</option>`;
        finderModel.disabled = true;
        selectedBikeLabel.textContent = "Elegir moto";
        clearBikeBtn.classList.add("hidden");
        syncBrandPills("Todas");
    } else {
        state.myBike = { brand, model };
        localStorage.setItem("motoparts_bike", JSON.stringify(state.myBike));
        finderBrand.value = brand;
        populateModels(brand);
        if (model) finderModel.value = model;
        selectedBikeLabel.textContent = `${brand} ${model}`.trim();
        clearBikeBtn.classList.remove("hidden");
        syncBrandPills(brand);
    }
    renderCatalog();
}

// RESTAURAR MOTO GUARDADA AL CARGAR
function initSavedBike() {
    if (state.myBike) {
        selectBikeBrand(state.myBike.brand, state.myBike.model || "");
    }
}

function populateModels(brand) {
    finderModel.innerHTML = `<option value="">2. Todos los modelos (Opcional)</option>`;
    if (brand && modelsByBrand[brand]) {
        finderModel.disabled = false;
        modelsByBrand[brand].forEach(model => {
            finderModel.innerHTML += `<option value="${model}">${model}</option>`;
        });
    } else {
        finderModel.disabled = true;
    }
}

// EVENTOS DE SELECCIÓN DE MARCA DE MOTO
finderBrand.addEventListener("change", () => {
    const brand = finderBrand.value;
    populateModels(brand);
    if (brand) {
        selectBikeBrand(brand, "");
        showToast(`Mostrando repuestos para ${brand}`);
    } else {
        selectBikeBrand("Todas");
    }
});

finderModel.addEventListener("change", () => {
    if (finderBrand.value) {
        selectBikeBrand(finderBrand.value, finderModel.value);
    }
});

applyBikeBtn.addEventListener("click", () => {
    if (!finderBrand.value) {
        showToast("Selecciona primero la marca de tu moto");
        return;
    }
    selectBikeBrand(finderBrand.value, finderModel.value || "");
    showToast(`Mostrando repuestos para ${selectedBikeLabel.textContent}`);
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

clearBikeBtn.addEventListener("click", () => {
    selectBikeBrand("Todas");
    showToast("Mostrando repuestos de todas las marcas");
});

document.querySelectorAll(".brand-pill").forEach(pill => {
    pill.addEventListener("click", () => {
        const brand = pill.dataset.brand;
        selectBikeBrand(brand, "");
        if (brand !== "Todas") {
            showToast(`Mostrando repuestos para ${brand}`);
        }
    });
});

// RENDERIZAR CATÁLOGO
function renderCatalog() {
    let filtered = products.filter(p => {
        const matchCat = state.category === "Todas" || p.category === state.category;
        const matchBrandCheckbox = state.selectedBrands.length === 0 || state.selectedBrands.includes(p.brand);

        let matchMyBike = true;
        if (state.myBike) {
            const brandMatch = p.brand === state.myBike.brand || p.brand === "Universal" || p.models.some(m => m.toLowerCase().includes(state.myBike.brand.toLowerCase()));
            const modelMatch = !state.myBike.model || p.models.some(m => m.includes(state.myBike.model)) || p.brand === "Universal";
            matchMyBike = brandMatch && modelMatch;
        }

        const matchQuality = state.selectedQualities.length === 0 || state.selectedQualities.includes(p.quality);

        const q = state.search.toLowerCase();
        const matchSearch = !q ||
            p.name.toLowerCase().includes(q) ||
            p.sku.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.models.some(m => m.toLowerCase().includes(q));

        return matchCat && matchBrandCheckbox && matchMyBike && matchQuality && matchSearch;
    });

    if (state.sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (state.sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (state.sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

    resultsNumber.textContent = filtered.length;
    productsGrid.innerHTML = "";

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
        return;
    }
    emptyState.classList.add("hidden");

    filtered.forEach(p => {
        const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : null;
        const fitText = state.myBike
            ? `<i class="fa-solid fa-circle-check"></i> ${selectedBikeLabel.textContent}`
            : `<i class="fa-solid fa-check"></i> ${p.models.slice(0, 2).join(", ")}`;

        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-card__img-box" onclick="openQuickView(${p.id})">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                ${discount ? `<span class="badge-discount">-${discount}%</span>` : ""}
                <span class="badge-quality">${p.quality}</span>
            </div>
            <div class="product-card__body">
                <div class="product-card__meta">
                    <span>${p.brand}</span>
                    <span>SKU: ${p.sku}</span>
                </div>
                <h3 class="product-card__title" onclick="openQuickView(${p.id})">${p.name}</h3>
                <div class="product-card__rating">
                    ★★★★★ <span>(${p.reviews})</span>
                </div>
                <div class="product-card__fit">${fitText}</div>
                <div class="product-card__price-box">
                    ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ""}
                    <div class="price-row">
                        <span class="price-current">$${p.price.toFixed(2)}</span>
                        <button type="button" class="btn-add-cart" onclick="addToCart(${p.id})">
                            <i class="fa-solid fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// VISTA RÁPIDA (QUICK VIEW MODAL)
function openQuickView(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
        <div class="product-modal__grid">
            <div>
                <img src="${p.image}" alt="${p.name}" class="modal-img">
            </div>
            <div>
                <span style="font-size:0.8rem; color:var(--text-gray);">SKU: ${p.sku} | Marca: ${p.brand}</span>
                <h2 style="font-size:1.25rem; margin:6px 0 10px;">${p.name}</h2>
                <div style="color:#F59E0B; margin-bottom:10px;">★★★★★ <span style="color:var(--text-gray); font-size:0.85rem;">(${p.reviews} opiniones)</span></div>
                <div style="font-size:1.5rem; font-weight:800; color:var(--primary); margin-bottom:10px;">$${p.price.toFixed(2)}</div>
                <p style="font-size:0.9rem; color:#374151; margin-bottom:12px;">${p.specs}</p>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; padding:10px; border-radius:6px; font-size:0.84rem; color:#166534; margin-bottom:16px;">
                    <strong>Modelos compatibles:</strong> ${p.models.join(", ")}
                </div>
                <div style="display:flex; gap:10px;">
                    <input type="number" id="modalQtyInput" value="1" min="1" max="20" style="width:68px; padding:10px; border:1px solid var(--border); border-radius:6px; font-weight:bold; text-align:center;">
                    <button type="button" class="btn btn--primary" style="flex:1;" onclick="addMultipleToCart(${p.id})">
                        <i class="fa-solid fa-cart-shopping"></i> Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("productModalOverlay").classList.add("active");
}

function addMultipleToCart(id) {
    const qtyInput = document.getElementById("modalQtyInput");
    const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...product, qty });
    }
    updateCart();
    closeQuickView();
    showToast(`Agregado (${qty}x): ${product.name}`);
}

function openInfoModal(key) {
    const info = infoPages[key];
    if (!info) return;
    document.getElementById("modalContent").innerHTML = `
        <h2 style="font-size:1.3rem; margin-bottom:14px; color:var(--text-dark);">${info.title}</h2>
        <div style="font-size:0.95rem; color:#374151;">${info.body}</div>
    `;
    document.getElementById("productModalOverlay").classList.add("active");
}

function closeQuickView() {
    document.getElementById("productModalOverlay").classList.remove("active");
}

document.getElementById("closeModalBtn").addEventListener("click", closeQuickView);
document.getElementById("productModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "productModalOverlay") closeQuickView();
});

// CARRITO DE COMPRAS
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
    showToast(`Agregado: ${product.name}`);
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
    showToast("Producto eliminado del carrito");
}

function updateCart() {
    localStorage.setItem("motoparts_cart", JSON.stringify(cart));

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalMoney = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    document.getElementById("cartCount").textContent = totalQty;
    document.getElementById("sidebarCartCount").textContent = totalQty;
    document.getElementById("headerCartTotal").textContent = `$${totalMoney.toFixed(2)}`;
    document.getElementById("cartSubtotal").textContent = `$${totalMoney.toFixed(2)}`;

    const freeShippingGoal = 50;
    const shippingNote = document.getElementById("shippingNote");
    const shippingBar = document.getElementById("shippingBar");
    const percentage = Math.min(100, (totalMoney / freeShippingGoal) * 100);
    shippingBar.style.width = `${percentage}%`;

    if (totalMoney >= freeShippingGoal) {
        shippingNote.classList.add("achieved");
        shippingNote.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Felicidades! Tienes envío nacional GRATIS`;
    } else {
        shippingNote.classList.remove("achieved");
        const remaining = (freeShippingGoal - totalMoney).toFixed(2);
        shippingNote.innerHTML = `<i class="fa-solid fa-truck"></i> Agrega <strong>$${remaining}</strong> más para envío gratis`;
    }

    const container = document.getElementById("cartItems");
    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-gray); margin-top:40px;">Tu carrito está vacío.</p>`;
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item__details">
                <div class="cart-item__title">${item.name}</div>
                <div class="cart-item__price">$${(item.price * item.qty).toFixed(2)}</div>
                <div class="cart-qty">
                    <button type="button" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button type="button" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button type="button" class="cart-remove-btn" onclick="removeFromCart(${item.id})" title="Eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join("");
}

// ENVIAR PEDIDO POR WHATSAPP
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Tu carrito está vacío");
        return;
    }
    const phone = "584120000000";
    let msg = "Hola *MotoParts*, quiero hacer el siguiente pedido:\n\n";
    if (state.myBike) msg += `*Moto:* ${selectedBikeLabel.textContent}\n\n`;

    let total = 0;
    cart.forEach(item => {
        const sub = item.price * item.qty;
        total += sub;
        msg += `• ${item.qty}x ${item.name} (${item.sku}) - $${sub.toFixed(2)}\n`;
    });
    msg += `\n*Total estimado: $${total.toFixed(2)}*`;
    if (total >= 50) msg += `\n_(Aplica para envío nacional gratis)_`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
});

// SINCRONIZAR CATEGORÍAS
function setCategory(cat) {
    state.category = cat;
    document.getElementById("breadcrumbCategory").textContent = cat === "Todas" ? "Todos los repuestos" : cat;

    document.querySelectorAll(".nav-cat-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.category === cat);
    });

    const radio = document.querySelector(`input[name="sideCat"][value="${cat}"]`);
    if (radio) radio.checked = true;

    renderCatalog();
}

document.querySelectorAll(".nav-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => setCategory(btn.dataset.category));
});

document.querySelectorAll('input[name="sideCat"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        setCategory(e.target.value);
        closeFilters();
    });
});

document.querySelectorAll(".footer-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        setCategory(btn.dataset.cat);
        document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll(".top-link-btn, .footer-link-btn").forEach(btn => {
    btn.addEventListener("click", () => openInfoModal(btn.dataset.info));
});

document.querySelectorAll(".brand-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
        state.selectedBrands = Array.from(document.querySelectorAll(".brand-checkbox:checked")).map(i => i.value);
        renderCatalog();
    });
});

document.querySelectorAll(".quality-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
        state.selectedQualities = Array.from(document.querySelectorAll(".quality-checkbox:checked")).map(i => i.value);
        renderCatalog();
    });
});

// BÚSQUEDA EN TIEMPO REAL Y BOTÓN DE LUPA
searchInput.addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    renderCatalog();
});

searchBtn.addEventListener("click", () => {
    state.search = searchInput.value.trim();
    renderCatalog();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchInput.blur();
        searchBtn.click();
    }
});

sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCatalog();
});

function resetAll() {
    state = {
        category: "Todas",
        selectedBrands: [],
        selectedQualities: [],
        search: "",
        sort: "featured",
        myBike: null
    };
    searchInput.value = "";
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    setCategory("Todas");
    selectBikeBrand("Todas");
}

document.getElementById("resetAllFilters").addEventListener("click", () => {
    resetAll();
    closeFilters();
});
document.getElementById("emptyResetBtn").addEventListener("click", resetAll);
document.getElementById("logoReset").addEventListener("click", (e) => {
    e.preventDefault();
    resetAll();
});
document.getElementById("breadcrumbHome").addEventListener("click", (e) => {
    e.preventDefault();
    resetAll();
});

// ABRIR / CERRAR FILTROS EN MÓVIL
const filterSidebar = document.getElementById("filterSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
document.getElementById("openFiltersBtn").addEventListener("click", () => {
    filterSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
});
const closeFilters = () => {
    filterSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
};
document.getElementById("closeSidebarBtn").addEventListener("click", closeFilters);
sidebarOverlay.addEventListener("click", closeFilters);

// ABRIR / CERRAR CARRITO
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
document.getElementById("openCartBtn").addEventListener("click", () => {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
});
const closeCart = () => {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
};
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function showToast(text) {
    const toast = document.getElementById("toast");
    toast.textContent = text;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// INICIALIZAR APLICACIÓN
initSavedBike();
renderCatalog();
updateCart();