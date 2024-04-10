const data = [
  {
    municipio: "Consolación del Sur",
    provincia: "Pinar del Río",
    coordenadas: [22.50891011459699, -83.51378955867152],
  },
  {
    municipio: "Guane",
    provincia: "Pinar del Río",
    coordenadas: [22.19976083597891, -84.08845441121969],
  },
  {
    municipio: "La Palma",
    provincia: "Pinar del Río",
    coordenadas: [22.749687175761135, -83.55242016174827],
  },
  {
    municipio: "Los Palacios",
    provincia: "Pinar del Río",
    coordenadas: [22.58838820797055, -83.24219575667739],
  },
  {
    municipio: "Mantua",
    provincia: "Pinar del Río",
    coordenadas: [22.28758424257769, -84.28616542300826],
  },
  {
    municipio: "Minas de Matahambre",
    provincia: "Pinar del Río",
    coordenadas: [22.583811841163204, -83.9478689373621],
  },
  {
    municipio: "San Juan y Martínez",
    provincia: "Pinar del Río",
    coordenadas: [22.28334636851148, -83.84093443736771],
  },
  {
    municipio: "San Luis(PR)",
    provincia: "Pinar del Río",
    coordenadas: [22.281305530262287, -83.76110257224038],
  },
  {
    municipio: "Sandino",
    provincia: "Pinar del Río",
    coordenadas: [22.08213969672919, -84.20119291322575],
  },
  {
    municipio: "Viñales",
    provincia: "Pinar del Río",
    coordenadas: [22.61878373923526, -83.70674378637075],
  },
  {
    municipio: "Nueva Gerona",
    provincia: "Isla de la Juventud",
    coordenadas: [21.882172827084403, -82.81028751039484],
  },
  {
    municipio: "San Cristóbal",
    provincia: "Artemisa",
    coordenadas: [22.71307774635867, -83.04107360038844],
  },
  {
    municipio: "San Antonio de los Baños",
    provincia: "Artemisa",
    coordenadas: [22.893511803025405, -82.50462061501564],
  },
  {
    municipio: "Bahía Honda",
    provincia: "Artemisa",
    coordenadas: [22.908479942233107, -83.17196879716765],
  },
  {
    municipio: "Bauta",
    provincia: "Artemisa",
    coordenadas: [22.98403617813044, -82.548823411034],
  },
  {
    municipio: "Mariel",
    provincia: "Artemisa",
    coordenadas: [22.98759168278732, -82.75365830459965],
  },
  {
    municipio: "Guira de Melena",
    provincia: "Artemisa",
    coordenadas: [22.796317935518505, -82.51414783588639],
  },
  {
    municipio: "Caimito",
    provincia: "Artemisa",
    coordenadas: [22.950944055774958, -82.60225301549747],
  },
  {
    municipio: "Alquízar",
    provincia: "Artemisa",
    coordenadas: [22.80628976499975, -82.58474357989438],
  },
  {
    municipio: "Guanajay",
    provincia: "Artemisa",
    coordenadas: [22.92226859195981, -82.68565907193052],
  },
  {
    municipio: "Candelaria",
    provincia: "Artemisa",
    coordenadas: [22.74464042684213, -82.95534905466555],
  },
  {
    municipio: "Arroyo Naranjo",
    provincia: "La Habana",
    coordenadas: [23.018419291369064, -82.33298742936572],
  },
  {
    municipio: "Boyeros",
    provincia: "La Habana",
    coordenadas: [22.98802740641193, -82.40746345356334],
  },
  {
    municipio: "Centro Habana",
    provincia: "La Habana",
    coordenadas: [23.135400775815455, -82.36913274952944],
  },
  {
    municipio: "Cerro",
    provincia: "La Habana",
    coordenadas: [23.100874543881055, -82.38543064158566],
  },
  {
    municipio: "Cotorro",
    provincia: "La Habana",
    coordenadas: [23.015982270687797, -82.2675054718483],
  },
  {
    municipio: "10 de Octubre",
    provincia: "La Habana",
    coordenadas: [23.09705006568399, -82.36000462512807],
  },
  {
    municipio: "Lawton",
    provincia: "La Habana",
    coordenadas: [],
  },
  {
    municipio: "Guanabacoa",
    provincia: "La Habana",
    coordenadas: [23.112127854965756, -82.23961897953886],
  },
  {
    municipio: "Habana del Este",
    provincia: "La Habana",
    coordenadas: [23.111281454308283, -82.14314930167953],
  },
  {
    municipio: "La Habana Vieja",
    provincia: "La Habana",
    coordenadas: [23.136233992878118, -82.34908148856752],
  },
  {
    municipio: "La Lisa",
    provincia: "La Habana",
    coordenadas: [23.049254704349007, -82.46279262020704],
  },
  {
    municipio: "Marianao",
    provincia: "La Habana",
    coordenadas: [23.071422554831265, -82.41801941373095],
  },
  {
    municipio: "Playa",
    provincia: "La Habana",
    coordenadas: [23.088897933889292, -82.44783239990386],
  },
  {
    municipio: "Plaza de la Revolución",
    provincia: "La Habana",
    coordenadas: [23.121934249394492, -82.39274151501775],
  },
  {
    municipio: "Regla",
    provincia: "La Habana",
    coordenadas: [23.127482310897506, -82.32572238255048],
  },
  {
    municipio: "San Miguel del Padrón",
    provincia: "Mayabeque",
    coordenadas: [23.082665456793112, -82.30512658322525],
  },
  {
    municipio: "San José de las Lajas",
    provincia: "Mayabeque",
    coordenadas: [22.966293820917635, -82.14983957584224],
  },
  {
    municipio: "Guines",
    provincia: "Mayabeque",
    coordenadas: [22.84390668682454, -82.02338245939227],
  },
  {
    municipio: "Santa Cruz del Norte",
    provincia: "Mayabeque",
    coordenadas: [23.1551966344178, -81.92240961297767],
  },
  {
    municipio: "Madruga",
    provincia: "Mayabeque",
    coordenadas: [22.907110992806807, -81.87022444321575],
  },
  {
    municipio: "Quivicán",
    provincia: "Mayabeque",
    coordenadas: [22.82318087049257, -82.3535584991972],
  },
  {
    municipio: "Batabanó",
    provincia: "Mayabeque",
    coordenadas: [22.744746808558652, -82.27786408970991],
  },
  {
    municipio: "Jaruco",
    provincia: "Mayabeque",
    coordenadas: [23.04139038572689, -82.00968864815336],
  },
  {
    municipio: "Bejucal",
    provincia: "Mayabeque",
    coordenadas: [22.929445660991732, -82.39068949494344],
  },
  {
    municipio: "Nueva Paz",
    provincia: "Mayabeque",
    coordenadas: [22.763221849198644, -81.75451399672056],
  },
  {
    municipio: "San Nicolás de Bari",
    provincia: "Mayabeque",
    coordenadas: [22.788229316907948, -81.91670186553701],
  },
  {
    municipio: "Melena del Sur",
    provincia: "Mayabeque",
    coordenadas: [22.789433610140538, -82.1494639680166],
  },
  {
    municipio: "Cárdenas",
    provincia: "Matanzas",
    coordenadas: [23.038298587684416, -81.21051642196963],
  },
  {
    municipio: "Colón",
    provincia: "Matanzas",
    coordenadas: [22.724273902286026, -80.90352858734116],
  },
  {
    municipio: "Jovellanos",
    provincia: "Matanzas",
    coordenadas: [22.809039037438627, -81.19250541405141],
  },
  {
    municipio: "Jaguey Grande",
    provincia: "Matanzas",
    coordenadas: [22.527108963737838, -81.12713377514127],
  },
  {
    municipio: "Unión de Reyes",
    provincia: "Matanzas",
    coordenadas: [22.797150512963036, -81.53470089071666],
  },
  {
    municipio: "Pedro Betancourt",
    provincia: "Matanzas",
    coordenadas: [22.729546780504315, -81.29129265986484],
  },
  {
    municipio: "Perico",
    provincia: "Matanzas",
    coordenadas: [22.76883959326819, -81.0171850351962],
  },
  {
    municipio: "Calimete",
    provincia: "Matanzas",
    coordenadas: [22.537302394814457, -80.90425370916915],
  },
  {
    municipio: "Los Arabos",
    provincia: "Matanzas",
    coordenadas: [22.728828473790713, -80.71757201951833],
  },
  {
    municipio: "Limonar",
    provincia: "Matanzas",
    coordenadas: [22.9507124411695, -81.40739200362417],
  },
  {
    municipio: "Martí",
    provincia: "Matanzas",
    coordenadas: [22.947367301942336, -80.92250346748244],
  },
  {
    municipio: "Cienaga de Zapata",
    provincia: "Matanzas",
    coordenadas: [22.30892389871784, -81.40383989789795],
  },
  {
    municipio: "Cumanayagua",
    provincia: "Cienfuegos",
    coordenadas: [22.149000299286303, -80.20024895888308],
  },
  {
    municipio: "Rodas",
    provincia: "Cienfuegos",
    coordenadas: [22.341180421249064, -80.55726185273922],
  },
  {
    municipio: "Palmira",
    provincia: "Cienfuegos",
    coordenadas: [22.24654022912319, -80.39261222492422],
  },
  {
    municipio: "Cruces",
    provincia: "Cienfuegos",
    coordenadas: [22.3334493550845, -80.27022791836144],
  },
  {
    municipio: "Aguada de Pasajeros",
    provincia: "Cienfuegos",
    coordenadas: [22.38311540742128, -80.84666283469149],
  },
  {
    municipio: "Abreus",
    provincia: "Cienfuegos",
    coordenadas: [22.279768392393642, -80.57137127819229],
  },
  {
    municipio: "Lajas",
    provincia: "Cienfuegos",
    coordenadas: [22.416752216138207, -80.29319528914691],
  },
  {
    municipio: "Santa Clara",
    provincia: "Villa Clara",
    coordenadas: [22.424953435454793, -79.94082118577322],
  },
  {
    municipio: "Manicaragua",
    provincia: "Villa Clara",
    coordenadas: [22.147482176947452, -79.97686381617939],
  },
  {
    municipio: "Placetas",
    provincia: "Villa Clara",
    coordenadas: [22.319803245948155, -79.6541152754755],
  },
  {
    municipio: "Camajuaní",
    provincia: "Villa Clara",
    coordenadas: [22.464498021527344, -79.72186093838273],
  },
  {
    municipio: "Ranchuelo",
    provincia: "Villa Clara",
    coordenadas: [22.373922131268497, -80.14537200313362],
  },
  {
    municipio: "Sagua la Grande",
    provincia: "Villa Clara",
    coordenadas: [22.80485384695709, -80.06902189595736],
  },
  {
    municipio: "Santo Domingo",
    provincia: "Villa Clara",
    coordenadas: [22.58068774467589, -80.2456857044242],
  },
  {
    municipio: "Remedios",
    provincia: "Villa Clara",
    coordenadas: [22.497232551553125, -79.54522138095878],
  },
  {
    municipio: "Caibarién",
    provincia: "Villa Clara",
    coordenadas: [22.508312125670095, -79.47398198368508],
  },
  {
    municipio: "Encrucijada",
    provincia: "Villa Clara",
    coordenadas: [22.616247239003698, -79.86586344102292],
  },
  {
    municipio: "Cifuentes",
    provincia: "Villa Clara",
    coordenadas: [22.65005557614466, -80.04685886359302],
  },
  {
    municipio: "Corralillo",
    provincia: "Villa Clara",
    coordenadas: [22.985754867011774, -80.58535914472341],
  },
  {
    municipio: "Quemado de Guines",
    provincia: "Villa Clara",
    coordenadas: [22.789198555937222, -80.25066377098489],
  },
  {
    municipio: "Trinidad",
    provincia: "Sancti Spíritus",
    coordenadas: [21.796787504488133, -79.97992240087594],
  },
  {
    municipio: "Cabaiguán",
    provincia: "Sancti Spíritus",
    coordenadas: [22.081682266497694, -79.494709965707],
  },
  {
    municipio: "Yaguajay",
    provincia: "Sancti Spíritus",
    coordenadas: [22.32889797206708, -79.23653132950928],
  },
  {
    municipio: "Jatibonico",
    provincia: "Sancti Spíritus",
    coordenadas: [21.944190341451183, -79.16038360712201],
  },
  {
    municipio: "Taguasco",
    provincia: "Sancti Spíritus",
    coordenadas: [22.001906396044827, -79.26348205878716],
  },
  {
    municipio: "Fomento",
    provincia: "Sancti Spíritus",
    coordenadas: [22.09873961376978, -79.72290558298704],
  },
  {
    municipio: "La Sierpe",
    provincia: "Sancti Spíritus",
    coordenadas: [21.770629187709545, -79.2685461836602],
  },
  {
    municipio: "Morón",
    provincia: "Ciego de Ávila",
    coordenadas: [22.09191904396549, -78.62155444892772],
  },
  {
    municipio: "Chambas",
    provincia: "Ciego de Ávila",
    coordenadas: [22.198251100021068, -78.91187677804065],
  },
  {
    municipio: "Baraguá",
    provincia: "Ciego de Ávila",
    coordenadas: [21.69365285192526, -78.63127271573339],
  },
  {
    municipio: "Ciro Redondo",
    provincia: "Ciego de Ávila",
    coordenadas: [22.012190505266922, -78.70882286582946],
  },
  {
    municipio: "Primero de Enero",
    provincia: "Ciego de Ávila",
    coordenadas: [21.944238948502903, -78.4317828182087],
  },
  {
    municipio: "Venezuela",
    provincia: "Ciego de Ávila",
    coordenadas: [21.742796099173294, -78.78703597301597],
  },
  {
    municipio: "Majagua",
    provincia: "Ciego de Ávila",
    coordenadas: [21.919258714866576, -79.00474562365737],
  },
  {
    municipio: "Florencia",
    provincia: "Ciego de Ávila",
    coordenadas: [22.146428944624592, -78.97127157212499],
  },
  {
    municipio: "Bolivia",
    provincia: "Ciego de Ávila",
    coordenadas: [22.076865771618184, -78.34342422021703],
  },
  {
    municipio: "Florida",
    provincia: "Camaguey",
    coordenadas: [21.515760514828767, -78.21875574547633],
  },
  {
    municipio: "Guáimaro",
    provincia: "Camaguey",
    coordenadas: [21.052702482909545, -77.34967238275836],
  },
  {
    municipio: "Vertientes",
    provincia: "Camaguey",
    coordenadas: [21.264078876769638, -78.15101402986195],
  },
  {
    municipio: "Santa Cruz del Sur",
    provincia: "Camaguey",
    coordenadas: [20.716081089318394, -77.9941182327994],
  },
  {
    municipio: "Nuevitas",
    provincia: "Camaguey",
    coordenadas: [21.550332170577548, -77.269206189015],
  },
  {
    municipio: "Minas",
    provincia: "Camaguey",
    coordenadas: [21.49136356484854, -77.60508433137569],
  },
  {
    municipio: "Sibanicú",
    provincia: "Camaguey",
    coordenadas: [21.238722099938258, -77.52459528321492],
  },
  {
    municipio: "Esmeralda",
    provincia: "Camaguey",
    coordenadas: [21.848274127169677, -78.11626911723776],
  },
  {
    municipio: "Carlos M. de Céspedes",
    provincia: "Camaguey",
    coordenadas: [21.577769923114946, -78.27567952024029],
  },
  {
    municipio: "Jimaguayú",
    provincia: "Camaguey",
    coordenadas: [21.241902291749714, -77.82668557972298],
  },
  {
    municipio: "Sierra de Cubitas",
    provincia: "Camaguey",
    coordenadas: [21.736210280416053, -77.7907178451521],
  },
  {
    municipio: "Najasa",
    provincia: "Camaguey",
    coordenadas: [21.07196279438538, -77.74669188869073],
  },
  {
    municipio: "Puerto Padre",
    provincia: "Las Tunas",
    coordenadas: [21.18909033249298, -76.60547742992088],
  },
  {
    municipio: "Jesús Menéndez",
    provincia: "Las Tunas",
    coordenadas: [21.160676247412084, -76.47398604963746],
  },
  {
    municipio: "Jobabo",
    provincia: "Las Tunas",
    coordenadas: [20.90720598112448, -77.28117958215294],
  },
  {
    municipio: "Amancio",
    provincia: "Las Tunas",
    coordenadas: [20.82419636122758, -77.57935528914544],
  },
  {
    municipio: "Majibacoa",
    provincia: "Las Tunas",
    coordenadas: [20.819756886622304, -76.7734315758619],
  },
  {
    municipio: "Manatí",
    provincia: "Las Tunas",
    coordenadas: [21.298468324255982, -76.96355258939292],
  },
  {
    municipio: "Colombia",
    provincia: "Las Tunas",
    coordenadas: [20.988205245272884, -77.41893783207888],
  },
  {
    municipio: "Mayarí",
    provincia: "Holguín",
    coordenadas: [20.651821547844882, -75.6840274472097],
  },
  {
    municipio: "Banes",
    provincia: "Holguín",
    coordenadas: [20.958111497482218, -75.7188464687336],
  },
  {
    municipio: "Gibara",
    provincia: "Holguín",
    coordenadas: [21.113086888061385, -76.13304384710003],
  },
  {
    municipio: "Moa",
    provincia: "Holguín",
    coordenadas: [20.657807628815195, -74.95009998479824],
  },
  {
    municipio: "Calixto García",
    provincia: "Holguín",
    coordenadas: [20.89664411435277, -76.59213225530269],
  },
  {
    municipio: "Báguano",
    provincia: "Holguín",
    coordenadas: [20.75065541975727, -76.03315842488414],
  },
  {
    municipio: "Sagua de Tánamo",
    provincia: "Holguín",
    coordenadas: [20.5802221299477, -75.24337653743078],
  },
  {
    municipio: "Rafael Freyre",
    provincia: "Holguín",
    coordenadas: [21.027348339880106, -75.99788190107871],
  },
  {
    municipio: "Urbano Noris",
    provincia: "Holguín",
    coordenadas: [20.59391484179065, -76.21199699475336],
  },
  {
    municipio: "Cacocum",
    provincia: "Holguín",
    coordenadas: [20.736750797192336, -76.33095990384064],
  },
  {
    municipio: "Cueto",
    provincia: "Holguín",
    coordenadas: [20.64840619525599, -75.9290458318593],
  },
  {
    municipio: "Frank País",
    provincia: "Holguín",
    coordenadas: [20.667185343027406, -75.2701190980828],
  },
  {
    municipio: "Antilla",
    provincia: "Holguín",
    coordenadas: [20.832479411738934, -75.7281234263715],
  },
  {
    municipio: "Manzanillo",
    provincia: "Granma",
    coordenadas: [20.333622283561528, -77.12035487520926],
  },
  {
    municipio: "Jiguaní",
    provincia: "Granma",
    coordenadas: [20.365488393655703, -76.42978197695604],
  },
  {
    municipio: "Yara",
    provincia: "Granma",
    coordenadas: [20.27161683591898, -76.95515163885696],
  },
  {
    municipio: "Bartolomé Masó",
    provincia: "Granma",
    coordenadas: [20.157262816533798, -76.947062209007],
  },
  {
    municipio: "Guisa",
    provincia: "Granma",
    coordenadas: [20.25450663200165, -76.54305695420683],
  },
  {
    municipio: "Río Cauto",
    provincia: "Granma",
    coordenadas: [20.559870064741233, -76.91004768441057],
  },
  {
    municipio: "Niquero",
    provincia: "Granma",
    coordenadas: [20.03972256123144, -77.5793554110854],
  },
  {
    municipio: "Campechuela",
    provincia: "Granma",
    coordenadas: [20.228414866735886, -77.28057857104714],
  },
  {
    municipio: "Media Luna",
    provincia: "Granma",
    coordenadas: [20.14592155503283, -77.43031042139786],
  },
  {
    municipio: "Buey Arriba",
    provincia: "Granma",
    coordenadas: [20.17597669519037, -76.75529488194786],
  },
  {
    municipio: "Pilón",
    provincia: "Granma",
    coordenadas: [19.915739519632616, -77.32654118147393],
  },
  {
    municipio: "Cauto Cristo",
    provincia: "Granma",
    coordenadas: [20.555250477254127, -76.4706587324794],
  },
  {
    municipio: "Palma Soriano",
    provincia: "Santiago de Cuba",
    coordenadas: [20.222251493873145, -75.98693867976249],
  },
  {
    municipio: "Contramaestre",
    provincia: "Santiago de Cuba",
    coordenadas: [20.300758433446518, -76.24185579801181],
  },
  {
    municipio: "Songo-La Maya",
    provincia: "Santiago de Cuba",
    coordenadas: [20.16443028566044, -75.70719484927996],
  },
  {
    municipio: "San Luis(SC)",
    provincia: "Santiago de Cuba",
    coordenadas: [20.187311774120438, -75.84703453967552],
  },
  {
    municipio: "Segundo Frente",
    provincia: "Santiago de Cuba",
    coordenadas: [20.429762318231237, -75.47844274621968],
  },
  {
    municipio: "Guamá",
    provincia: "Santiago de Cuba",
    coordenadas: [19.979883020191128, -76.52446981591838],
  },
  {
    municipio: "Mella",
    provincia: "Santiago de Cuba",
    coordenadas: [20.367153945034698, -75.9058298544339],
  },
  {
    municipio: "Tercer Frente",
    provincia: "Santiago de Cuba",
    coordenadas: [20.147605557741663, -76.2937638184481],
  },
  {
    municipio: "Baracoa",
    provincia: "Guantánamo",
    coordenadas: [20.347798058745216, -74.50242812171577],
  },
  {
    municipio: "El Salvador",
    provincia: "Guantánamo",
    coordenadas: [20.217364669314666, -75.2306830953092],
  },
  {
    municipio: "Maisí",
    provincia: "Guantánamo",
    coordenadas: [20.22651608656926, -74.15318791852172],
  },
  {
    municipio: "San Antonio del Sur",
    provincia: "Guantánamo",
    coordenadas: [20.055710680286865, -74.8068392528039],
  },
  {
    municipio: "Imías",
    provincia: "Guantánamo",
    coordenadas: [20.068629072573284, -74.62547073003188],
  },
  {
    municipio: "Yateras",
    provincia: "Guantánamo",
    coordenadas: [20.38331404928915, -74.91921530675698],
  },
  {
    municipio: "Niceto Pérez",
    provincia: "Guantánamo",
    coordenadas: [20.12366279430082, -75.32657143691165],
  },
  {
    municipio: "Manuel Tames",
    provincia: "Guantánamo",
    coordenadas: [20.176239036083068, -75.0579500149199],
  },
  {
    municipio: "Caimanera",
    provincia: "Guantánamo",
    coordenadas: [19.991267202058207, -75.15314065948819],
  },
];
module.exports = { data };
