/*Datos de ejercicios por grupo muscular.
  Cada ejercicio: nombre, ejecucion y errorComun.*/
const EJERCICIOS_POR_GRUPO = {
  "Pecho": [
    { nombre: "Press de banca con barra", ejecucion: "Acostado, escápulas juntas y pies firmes. Baja la barra a la parte baja del pecho con control y empuja hacia arriba sin despegar los glúteos.", errorComun: "Rebotar la barra en el pecho o abrir los codos a 90°." },
    { nombre: "Press inclinado con mancuernas", ejecucion: "Banco a 30°–45°. Baja las mancuernas hasta sentir estiramiento en el pecho alto y empuja juntándolas ligeramente arriba.", errorComun: "Inclinar demasiado el banco, lo que carga el hombro más que el pecho." },
    { nombre: "Cruces en polea", ejecucion: "Con un paso adelante y el torso firme, lleva las manos al frente con los codos ligeramente flexionados y aprieta el pecho un segundo.", errorComun: "Usar impulso del cuerpo en lugar de mover solo los brazos." }
  ],
  "Espalda": [
    { nombre: "Dominadas o jalón al pecho", ejecucion: "Agarre un poco más ancho que los hombros. Baja los hombros, lleva el pecho hacia la barra y jala con los codos hacia abajo.", errorComun: "Jalar solo con los brazos o balancearse para subir." },
    { nombre: "Remo con barra", ejecucion: "Torso inclinado cerca de 45°, espalda neutra. Lleva la barra hacia el abdomen apretando las escápulas y baja controlado.", errorComun: "Redondear la espalda baja o subir el torso en cada repetición." },
    { nombre: "Remo con mancuerna", ejecucion: "Apoya una mano y rodilla en el banco. Jala la mancuerna hacia la cadera con el codo pegado al cuerpo.", errorComun: "Girar el tronco para ayudarse a subir el peso." }
  ],
  "Hombros": [
    { nombre: "Press militar", ejecucion: "De pie, glúteos y abdomen apretados. Empuja la barra por encima de la cabeza en línea recta, moviendo la cabeza hacia atrás y luego al frente.", errorComun: "Arquear la espalda baja para ayudarse." },
    { nombre: "Elevaciones laterales", ejecucion: "Con mancuernas ligeras, sube los brazos hacia los lados hasta la altura de los hombros con el codo apenas flexionado.", errorComun: "Usar demasiado peso y balancear el cuerpo." },
    { nombre: "Face pull", ejecucion: "Con cuerda en polea alta, jala hacia la cara separando las manos y abriendo los codos. Fortalece el deltoide posterior y el manguito.", errorComun: "Echar el cuerpo hacia atrás en vez de jalar con los hombros." }
  ],
  "Bíceps": [
    { nombre: "Curl con barra", ejecucion: "De pie, codos pegados al torso. Sube la barra sin mover los hombros y baja en 2 a 3 segundos.", errorComun: "Balancear el cuerpo para subir el peso." },
    { nombre: "Curl martillo", ejecucion: "Con agarre neutro (palmas enfrentadas), sube la mancuerna sin girar la muñeca. Trabaja también el braquial y el antebrazo.", errorComun: "Dejar que el codo se adelante." },
    { nombre: "Curl predicador", ejecucion: "Con los brazos apoyados en el pupitre, baja hasta casi extender y sube con control, sin despegar el pecho.", errorComun: "Rebotar abajo con el codo totalmente extendido." }
  ],
  "Tríceps": [
    { nombre: "Fondos en paralelas", ejecucion: "Torso erguido y codos hacia atrás. Baja hasta que el brazo quede cerca de 90° y sube extendiendo los codos.", errorComun: "Bajar demasiado con los hombros adelantados." },
    { nombre: "Extensión en polea", ejecucion: "Codos pegados al cuerpo. Extiende los brazos hacia abajo y vuelve controlado hasta 90°.", errorComun: "Mover los codos hacia delante y atrás." },
    { nombre: "Press francés", ejecucion: "Acostado, baja la barra Z hacia la frente flexionando solo los codos y sube extendiéndolos.", errorComun: "Abrir los codos hacia los lados." }
  ],
  "Piernas": [
    { nombre: "Sentadilla", ejecucion: "Pies al ancho de hombros, core apretado. Baja con la espalda neutra y las rodillas siguiendo los pies, y sube empujando el piso.", errorComun: "Rodillas hacia dentro o talones levantados." },
    { nombre: "Peso muerto rumano", ejecucion: "Con la barra pegada a los muslos, lleva la cadera hacia atrás con las rodillas semiflexionadas hasta sentir los femorales y vuelve apretando glúteos.", errorComun: "Redondear la espalda o flexionar demasiado las rodillas." },
    { nombre: "Zancadas", ejecucion: "Da un paso largo al frente y baja la rodilla trasera hacia el suelo con el torso erguido. Empuja con el pie delantero.", errorComun: "Paso demasiado corto que carga la rodilla." }
  ],
  "Glúteos": [
    { nombre: "Hip thrust", ejecucion: "Con la espalda alta apoyada en un banco y la barra sobre la cadera, sube la pelvis hasta alinear rodillas, cadera y hombros y aprieta arriba.", errorComun: "Arquear la zona lumbar al final del movimiento." },
    { nombre: "Sentadilla búlgara", ejecucion: "Con el pie trasero sobre un banco, baja con el torso ligeramente inclinado y empuja con el talón delantero.", errorComun: "Poner el pie delantero demasiado cerca del banco." },
    { nombre: "Patada de glúteo en polea", ejecucion: "Con tobillera en polea baja, lleva la pierna hacia atrás con el torso estable y aprieta el glúteo arriba.", errorComun: "Arquear la espalda baja para subir más la pierna." }
  ],
  "Core": [
    { nombre: "Plancha", ejecucion: "Apoyado en antebrazos y puntas, cuerpo en línea recta, glúteos y abdomen apretados. Empieza con 20 a 30 segundos.", errorComun: "Dejar caer la cadera." },
    { nombre: "Rueda abdominal", ejecucion: "De rodillas, rueda hacia delante con el abdomen contraído y vuelve sin perder la posición de la pelvis.", errorComun: "Hundir la zona lumbar al extenderte." },
    { nombre: "Elevación de piernas colgado", ejecucion: "Colgado de la barra, sube las piernas controlando sin balanceo, enrollando ligeramente la pelvis.", errorComun: "Balancearse para tomar impulso." }
  ],
  "Antebrazo": [
    { nombre: "Curl de muñeca", ejecucion: "Con el antebrazo apoyado sobre el banco y la palma hacia arriba, baja la barra con los dedos y sube flexionando solo la muñeca.", errorComun: "Mover el antebrazo en vez de la muñeca." },
    { nombre: "Caminata de granjero", ejecucion: "Camina con una mancuerna pesada en cada mano, hombros atrás y core firme. Trabaja agarre y estabilidad.", errorComun: "Encoger los hombros hacia las orejas." },
    { nombre: "Colgarse de la barra", ejecucion: "Cuélgate con agarre firme el mayor tiempo posible con buena postura de hombros. Mejora el agarre para dominadas y peso muerto.", errorComun: "Relajar los hombros hacia las orejas." }
  ]
};


const FISICOCULTURISTAS = [
  { nombre: "Franco Columbu", alturaCm: 165, pesoKg: 85 },
  { nombre: "Frank Zane", alturaCm: 171, pesoKg: 84 },
  { nombre: "Jay Cutler", alturaCm: 175, pesoKg: 120 },
  { nombre: "Phil Heath", alturaCm: 175, pesoKg: 108 },
  { nombre: "Sergio Oliva", alturaCm: 178, pesoKg: 109 },
  { nombre: "Dorian Yates", alturaCm: 178, pesoKg: 118 },
  { nombre: "Lee Haney", alturaCm: 180, pesoKg: 111 },
  { nombre: "Ronnie Coleman", alturaCm: 180, pesoKg: 135 },
  { nombre: "Steve Reeves", alturaCm: 185, pesoKg: 100 },
  { nombre: "Chris Bumstead", alturaCm: 185, pesoKg: 111 },
  { nombre: "Arnold Schwarzenegger", alturaCm: 188, pesoKg: 107 }
];
