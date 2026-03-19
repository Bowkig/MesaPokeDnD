let baseDeDatosCompendio = [
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Ascuas",
        "subtitulo": "1 PP",
        "desc": "(Ascuas usa Atq. Esp.).\n\nLanza pequeñas llamas candentes.\nTira un dado de 4 caras para el efecto adicional:\n\n6: Las chispas logran prender. Quema al enemigo por 2 turnos (-1 HP por turno).\n2+: Daño normal.\n1: El ataque es demasiado débil y se apaga en el aire. Hace solo -1 HP y no aplica la fórmula ofensiva (solo la Defensa del enemigo).\n\nDesventaja: -1 HP de daño total contra tipo Agua o Fuego.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Colmillo Ígneo / Puño Fuego",
        "subtitulo": "2 PP",
        "desc": "(Usa Atq. para el daño).\n\nEnvuelve un puño o colmillos en llamas vivas.\nTira 1d6, aplica el efecto segun el resultado:\n\n6: El calor extremo derrite la defensa. Quema al enemigo (pierde -1 HP por 2 turnos) y reduce su DEF en -1 durante el resto del combate.\n2+: Daño normal.\n1: El usuario calcula mal, falla el golpe y se quema ligeramente la extremidad (-1 HP).\n\nDesventaja: El ataque siempre ara -1 HP contra Pokemon tipo Fuego y tipo Agua, ademas, no los quemara.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Lanzallamas",
        "subtitulo": "3 PP",
        "desc": "(Lanzallamas usa Atq. Esp.).\n\nGran aliento de Fuego.\nLanza un dado de 6 caras. El Resultado del dado sera el daño del movimeinto. Si el resultado es 6 o 1; aplica los siguientes efectos segun el resultado:\n\n6: El ataque ara su maximo daño. Lanzallamas quemara al enemigo x3 turnos, ademas, el enemigo perdera -1 HP por cada turno que pase quemado.\n1: El ataque se reducira al minimo (1), ademas, no aplicara la formula de daño (excepto la defensa del enemigo).\n\nDesventaja: El ataque lanzallamas siempre ara -1 HP contra Pokemon tipo Fuego y tipo Agua, ademas, no los quemara.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Envite Ígneo",
        "subtitulo": "5 PP",
        "desc": "(Usa Atq. para el daño).\n\nEl usuario se envuelve completamente en fuego azul y se lanza como un meteorito.\nTira 1d10, aplica el efecto segun el resultado:\n\n9+: Impacto brutal. Quema al enemigo gravemente (-2 HP por 3 turnos).\n2+: El ataque impacta, pero la fuerza es tanta que el usuario sufre Daño de Retroceso (-3 HP).\n1: El enemigo lo esquiva. El usuario se estrella contra el suelo, recibiendo -4 HP y perdiendo el turno.\n\nDesventaja: El ataque siempre ara -1 HP contra Pokemon tipo Fuego y tipo Agua, ademas, no los quemara.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Llamarada",
        "subtitulo": "5 PP",
        "desc": "(Llamarada usa Atq. Esp.).\n\nUna explosión de fuego con forma de estrella que arrasa con todo.\nTira 1d10 y aplica el siguiente efecto segun el resultado del tiro:\n\n9 o 10: ¡Impacto crítico ardiente! Quema al enemigo por 4 turnos (-2 HP por turno). El daño inicial ignora la mitad de la DEF. Esp. del enemigo (si tiene menos de 0 o negativo reduce en 1 mas la Def. Esp del enemigo).\n2 a 8: Daño normal masivo.\n1: Falla catastróficamente. El usuario no controla la temperatura, el fuego le explota en la cara (-3 HP al usuario) y pierde el PP.\n\nDesventaja: El ataque Llamarada no ara daño contra Pokemon tipo Fuego o Agua, ademas, no los quemara.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Fuego",
        "nombre": "Sofoco",
        "subtitulo": "4 PP",
        "desc": "(Sofoco usa Atq. Esp.).\n\nLibera todo el calor interno del cuerpo en un solo ataque explosivo de desesperación (1d20).\n \nEste ataque suma +5 de Daño Directo a tu fórmula ofensiva de forma automática.\n\nDesventaja: Por el desgaste extremo, el ATQ. ESP. del usuario bajará -2 puntos por el resto del combate. (Si al tirar el d20 sacas Pifia, el ataque falla pero tus stats bajan igual por el agotamiento).",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "elemento": "Agua",
        "nombre": "Burbuja",
        "subtitulo": "1 PP",
        "desc": "(Burbuja usa Atq. Esp.).\n\nLanza una ráfaga de burbujas densas. Tira 1d6:\n\n6: Las burbujas estallan en los ojos del rival, bajando su Velocidad (VEL) en -1 durante 2 turnos.\n2 a 5: Daño normal.\n1: Las burbujas revientan antes de llegar al objetivo. El ataque falla.\n\nDesventaja: Si se usa contra un Pokemon tipo planta, el daño se convertira en restauracion de HP (Segun el resultado).",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Agua",
        "nombre": "Acua Jet",
        "subtitulo": "2 PP",
        "desc": "(Acua Jet usa Atq).\n\nEl usuario se propulsa con agua a una velocidad cegadora.\n\nSolo puedes aplicar el primer (1) efecto una vez por combate y el segundo (2) una vez por Tirada:\n(1) Acua Jet puede ser usado antes de que el jugador/enemigo mas rapido inicie.\n\n(2) Si usas Aqua Jet, esta tirada contara como turno extra (tu turno normal no contara como una siguiente tirada para ganar prioridad el siguiente turno).\n\n(3) Tira 1d6 aplica el Daño correspondiente, si el resultado es 1: Resbalas por el agua antes de impactar y fallas.\n\nDesventaja: si se usa contra Pokemon tipo Planta, le aras la mitad del daño.",
        "nivel": 1,
        "clasificacion": "Prioridad"
    },
    {
        "tipo": "magia",
        "elemento": "Agua",
        "nombre": "Cascada / Acua Cola",
        "subtitulo": "3 PP",
        "desc": "(Usa Atq. para el daño).\n\nGolpea con la fuerza aplastante de una cascada o un apéndice rodeado de agua pesada.\n\nTira 1d6 aplica el efecto segun el resultado:\n\n5 o 6: La fuerza del agua arrastra al enemigo. Si tu Velocidad (VEL) es mayor a la suya, lo haces retroceder y pierde su próximo turno.\n2+: Daño Normal.\n1: El ataque es predecible y el enemigo lo esquiva sin problema.\n\nDesventaja: si se usa contra Pokemon tipo Planta, le aras la mitad del daño.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Agua",
        "nombre": "Hidropulso",
        "subtitulo": "3 PP",
        "desc": "(Hidropulso usa Atq. Esp.).\n\nDispara una esfera de agua que emite vibraciones aturdidoras.\nTira 1d6 y aplica el efecto del resultado:\n\n5 o 6: La onda sónica causa [Confusión] en el enemigo por 2 turnos (Debe tirar 1d20 y sacar 10+ para poder atacar, o se hará daño a sí mismo).\n2 a 4: Daño normal.\n1: La esfera se desestabiliza y salpica sin hacer daño.\n\nDesventaja: Si se usa contra un Pokemon tipo Planta, el daño se convertira en restauracion de HP (Segun el resultado).",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Agua",
        "nombre": "Hidrobomba",
        "subtitulo": "6 PP",
        "desc": "(Hidrobomba usa Atq. Esp.).\n\nUn torrente de agua a una presión extrema y violenta.\nTira 1d10; aplica el efecto correspondiente al resultado:\n\n9 o 10: La presión es tan fuerte que empuja al enemigo. Lo obliga a retroceder, perdiendo su próximo turno de ataque.\n2 a 8: Daño normal masivo.\n1: La presión del agua es demasiada. Empuja al propio usuario hacia atrás, haciéndolo caer (-1 HP) y fallando el ataque.\n\nDesventaja: Si se usa contra un Pokemon tipo Planta, el daño se convierte en restauracion de HP (Segun el resultado).",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Agua",
        "nombre": "Acua Aro",
        "subtitulo": "3 PP",
        "desc": "El usuario (o un aliado cercano) se envuelve en un velo de agua curativa. No hace daño a los enemigos.\n\nEl objetivo recuperará +2 HP al final de cada turno durante 4 turnos seguidos.\n\nMecánica Extra: Si el portador del velo recibe un ataque de tipo Fuego, el daño de ese ataque se divide a la mitad, pero el Acua Aro se evapora inmediatamente perdiendo sus turnos restantes.",
        "clasificacion": "Soporte",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Planta",
        "nombre": "Absorber",
        "subtitulo": "1 PP",
        "desc": "(Absorber usa Atq. Esp.).\n\nDrena pasivamente la energía del objetivo.\n\nEl daño sera segun el resultado de 2d4 (te quedas con el resultado mayor), ademas, te curas a ti mismo la mitad del daño total que le hiciste al enemigo (se redondea hacia arriba). Si sacas 1, Las raíces se secan y el ataque falla.\n\nDesventaja: Los pokemon de tipo Fuego sufren la mitad del daño.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Planta",
        "nombre": "Hoja Afilada",
        "subtitulo": "3 PP",
        "desc": "(Hoja Afilada usa Atq.).\n\nDispara hojas duras como cuchillas a todos los enemigos.\nTira 1d6 aplica el efecto segun el resultado:\n\n5+: ¡Punto ciego! El ataque ignora la mitad de la Defensa (DEF) del enemigo a la hora de calcular el daño.\n4+: El ataque ignora 1/3 la Defensa (DEF) del enemigo.\n2+: Daño normal.\n1: Las hojas pierden el filo por la humedad o el viento, haciendo solo 1 punto de daño fijo.\n\nDesventaja: si el ataque se usa contra un Pokemon de tipo Fuego o Veneno, el daño se convierte en 1.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Planta",
        "nombre": "MegaAgotar",
        "subtitulo": "2 PP",
        "desc": "(MegaAgotar usa Atq. Esp.).\n\nGran drenado de energía vital del objetivo.\n\nEl daño sera segun el resultado de 2d6 + 1 (te quedas con el resultado mayor), ademas, te curas a ti mismo la mitad del daño total que le hiciste al enemigo (se redondea hacia arriba). Si sacas 1, Las raíces se secan y el ataque falla.\n\nDesventaja: Los pokemon de tipo Fuego sufren la mitad del daño.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Planta",
        "nombre": "Gigadrenado",
        "subtitulo": "4 PP",
        "desc": "(Gigadrenado usa Atq. Esp.).\n\nRaices gruesas que absorben la energia vital del enemigo restaurando vida al usuario.\n\nEl daño sera segun el resultado de 2d10 (te quedas con el resultado mayor) + 1, ademas, te curas a ti mismo la mitad del daño total que le hiciste al enemigo (se redondea hacia arriba). Si sacas 1, Las raíces se secan y el ataque falla.\n\nDesventaja: Los pokemon de tipo Fuego sufren la mitad del daño.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Eléctrico",
        "nombre": "Chispa",
        "subtitulo": "2 PP",
        "desc": "(Chispa usa Atq.).\n\nEl usuario se rodea de electricidad estática y embiste.\nTira 1d4, aplica el efecto segun el resultado:\n\n4: La estática hace corto circuito. Paraliza al enemigo por 1 turno completo.\n2 o 3: Daño normal.\n1: El usuario recibe un pequeño toque eléctrico en el pie (-1 HP) y falla.\n\nDesventaja: Chispa no puede paralizar a enemigos que ya esten [Paralizados] y no puede paralizar Pokemon tipo Electrico o tipo Tierra. Chispa ara la mitad del daño si se lanza contra Pokemon tipo Tierra o Pokemon con Habilidades Inmunes.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Eléctrico",
        "nombre": "Rayo",
        "subtitulo": "4 PP",
        "desc": "(Rayo usa Atq. Esp.).\n\nLanza un relámpago directo desde el cuerpo.\n\nTira 1d6 aplica el efecto:\n\n5 o 6: El voltaje es perfecto. Paraliza al enemigo (15+), ademas, otorga +2 de daño adaptable adicional.\n3 o 4: Daño normal\n2: Daño minimo.\n1: El rayo se desvía hacia el metal más cercano o al suelo, fallando por completo.\n\n(El Rival debe lanzar 1d20 para intentar sacar igual o mayor al efecto de parálisis para poder atacar).\n\nDesventaja: Rayo no puede paralizar a enemigos que ya esten [Paralizados] y no puede paralizar Pokemon tipo Electrico o tipo Tierra. Rayo no puede hacerle daño a pokemon tipo Tierra o Pokemon con Habilidades inmunes.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Eléctrico",
        "nombre": "Voltio Cruel",
        "subtitulo": "6 PP",
        "desc": "(Volteo Cruel usa Atq.).\n\nUna tacleada a gran velocidad cubierta con un voltaje inmenso.\n\nTira 1d10 aplica el efecto segun el resultado:\n\n9+: Impacto crítico. Paraliza gravemente (15+) y causa daño masivo. El turno del enemigo despues de haber recibido el golpe se Paralizara 100%.\n8+: Daño normal.\n3+: Daño normal, pero la corriente residual quema al usuario (recibe Daño de Retroceso de -2 HP).\n1+: Falla. El usuario choca contra el entorno o tropieza, recibiendo -4 HP por su propia inercia eléctrica.\n\nDesventaja: Voltio Cruel no puede paralizar a enemigos que ya esten [Paralizados] y no puede paralizar Pokemon tipo Electrico o tipo Tierra. Voltio Cruel ara la mitad del daño si se lanza contra Pokemon tipo Tierra o Pokemon con Habilidades Inmunes.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Eléctrico",
        "nombre": "Tacleada de Voltios",
        "subtitulo": "7 PP",
        "desc": "Una tacleada a máxima velocidad cubierta con un voltaje letal.\n\nTira 3d20 selecciona el resultado mas alto de uno de ellos y, despues, aplica el efecto segun el resultado:\n\n20 (Natural): Impacto Letal. Paraliza gravemente (16+) y causa daño masivo. El turno del enemigo despues de haber sido impactado por Tacleada de Voltios se paralizara 100%.\n12+: Daño normal.\n2+: Daño normal, pero la corriente residual quema al usuario (recibe Daño de Retroceso de -4 HP).\n1: Falla. El usuario choca contra el entorno o tropieza, recibiendo -8 HP por su propia inercia eléctrica.\n\nSi sacas en las 3 tiradas el mismo numero aplica el efecto de 20 (Natural).\n\nDesventaja: Tacleada de Voltios solo puede aprenderlo Pikachu.\nTacleada de Voltios no puede paralizar a enemigos que ya esten [Paralizados] y no puede paralizar Pokemon tipo Electrico o tipo Tierra. Tacleada de Voltios ara la mitad del daño si se lanza contra Pokemon tipo Tierra o Pokemon con Habilidades Inmunes.",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "elemento": "Psíquico",
        "nombre": "Confusión",
        "subtitulo": "1 PP",
        "desc": "(Confusión usa Atq. Esp.).\n\nAtaca la mente del enemigo con una fuerza telequinética leve.\n\nTira 1d4, aplica el efecto según el resultado + 1:\n\n4: La mente del enemigo se satura. Queda [Confuso] por 2 turnos (Debe tirar 1d20 y sacar 11+ para poder atacar sin herirse a sí mismo).\n2 a 3: Daño normal.\n1: El ataque falla y el usuario sufre un dolor de cabeza (-1 PP extra).\n\nDesventaja: El ataque Confusión no hará daño a los Pokemon de tipo Siniestro.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Psíquico",
        "nombre": "Psico Corte",
        "subtitulo": "3 PP",
        "desc": "(Psico Corte usa Atq.).\n\nCrea cuchillas de energía mental y las lanza al enemigo.\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Corte en un punto vital! El ataque ignora la mitad de la Defensa (DEF) del enemigo a la hora de calcular el daño.\n2 a 4: Daño normal.\n1: El usuario pierde la concentración y las cuchillas se disipan antes de impactar.\n\nDesventaja: El ataque Psico Corte no hará daño a los Pokémon de tipo Siniestro.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Psíquico",
        "nombre": "Psicocarga",
        "subtitulo": "4 PP",
        "desc": "(Psicocarga usa Atq. Esp. vs. Def).\n\nMaterializa ondas de energía psíquica densa y las lanza como proyectiles físicos.\nA diferencia de otros ataques especiales, al calcular el daño, pondrás tu Ofensiva (Atq. Esp.), pero en la Defensa del rival deberás poner su Defensa Física (Def.) en lugar de su Def. Esp.\n\nTira 1d6, si sacas 1 el ataque falla por agotamiento mental.\n\nDesventaja: El ataque Psicocarga no hará daño a los Pokemon de tipo Siniestro.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Psíquico",
        "nombre": "Psíquico",
        "subtitulo": "6 PP",
        "desc": "(Psíquico usa Atq. Esp.).\n\nUna poderosa fuerza telequinética que aplasta al enemigo desde todas las direcciones.\n\nTira 1d10, aplica el efecto:\n\n9+: La presión mental rompe la guardia. Reduce la Def. Esp. del enemigo en -1 por el resto del combate y hace daño masivo. Recuperas +1 PP. \n8: Daño mental potente. Recuperas +1 PP.\n2 a 7: Daño normal.\n1: Sobrecarga mental. El usuario recibe Daño de Retroceso (-2 HP) y pierde el turno.\n\nDesventaja: El ataque Psíquico no hará daño a los Pokemon de tipo Siniestro.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Psíquico",
        "nombre": "Premonición",
        "subtitulo": "8 PP",
        "desc": "(Premonición usa Atq. Esp.).\n\nEl usuario concentra energía psíquica y prevé un ataque futuro.\nEste ataque no hace daño en el turno que se usa.\nEste ataque tiene dos efectos (1) y (2):\n\n(1) Tira 3d20, puedes seleccionar solo una de las tres tiradas. Dos turnos después de haberlo activado, un inmenso ataque psíquico caerá sobre el enemigo desde el cielo; aplica el resultado del tiro a la formula de daño (ignora escudos activados después de usar Premonición).\n\n(2) Si en los 3 tiros sacas el mismo numero: Aplica un +20 Natural al daño. El ataque se hace en el mismo turno que usas Premonición.\n\nDesventaja: El ataque Premonición no hará daño a los Pokemon de tipo Siniestro.",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Infortunio",
        "subtitulo": "1 PP",
        "desc": "(Infortunio usa Atq. Esp.).\n\nUn ataque espectral que se alimenta del sufrimiento ajeno.\n\nSi el enemigo ya tiene un Estado Alterado ([Quemado], [Paralizado], [Envenenado], [Dormido], [Confuso]), este ataque DUPLICA el resultado de tu tirada.\nSi el enemigo está sano, hace daño normal bajo.\nTira 1d4 para el daño +1. Si sacas 1: Falla y no hace daño.\n\nDesventaja: No afecta a tipo Normal.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Garra Umbría",
        "subtitulo": "3 PP",
        "desc": "(Garra Umbría usa Atq.).\n\nAtaca con una garra hecha de sombras puras que busca los puntos ciegos.\n\nTira 1d6, aplica el efecto segun el resultado:\n\n6: ¡Impacto crítico de las sombras! Ignora la mitad de la Defensa (DEF) del enemigo a la hora de calcular el daño final.\n2+: Daño normal.\n1: El enemigo esquiva y la garra se disipa.\n\nDesventaja: No afecta a tipo Normal.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Bola Sombra",
        "subtitulo": "4 PP",
        "desc": "(Bola Sombra usa Atq. Esp.).\n\nLanza una bola oscura que drena la energía del alma.\n\nTira 1d10, aplica el efecto segun el resultado:\n\n10: La sombra penetra la voluntad del rival. Baja la Def. Esp. del enemigo en -1 por el resto del combate (acumulable).\n2+: La Sombra acierta. causando gran daño.\n1: La bola sombra explota en la mano del usuario, cegándolo temporalmente (pierde -2 HP).\n\nDesventaja: No afecta a tipo Normal.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Puño Sombra",
        "subtitulo": "2 PP",
        "desc": "(Puño Sombra usa Atq.).\n\nLanza un puñetazo desde las sombras que persigue al objetivo.\n\nEste ataque NUNCA falla. No importa si al tirar 1d10 sacas un 1 natural; el ataque siempre conectará y hará su daño correspondiente.\n\nDesventaja: No afecta a los Pokémon de tipo Normal.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Tinieblas",
        "subtitulo": "5 PP",
        "desc": "Muestra al enemigo un espejismo aterrador que daña directamente su vitalidad.\n\nEste ataque IGNORA la formula de combate. No usa tus estadísticas ni la defensa del rival. Simplemente tira 1d10.\n\nEl daño que recibirá el enemigo será EXACTAMENTE el número que salga en el dado (ej. si sacas 7, el enemigo pierde -7 HP sin multiplicadores ni reducciones).\n\nDesventaja: No afecta a los Pokémon de tipo Normal.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Fantasma",
        "nombre": "Golpe Umbrío",
        "subtitulo": "7 PP",
        "desc": "(Golpe Umbrío usa Atq.).\n\nEl movimiento característico que desgarra la tela de la realidad.\nToma 2 turnos en completarse:\n\nTurno 1: El usuario se desvanece y entra al Mundo Distorsión. Durante este turno es completamente inmune a cualquier ataque o estado.\nTurno 2: El usuario reaparece y ataca. Lanza 2d20 y quédate con el más alto para calcular el daño.\n\nEste ataque ignora movimientos de protección como Protección, Detección, Barrera Espinosa, Escudo Tatami, Búnker o Escudo Real.\n\nDesventaja: Golpe Umbrío solo puede aprenderlo Giratina y solo Giratina puede enseñarlo. No afecta a tipo Normal.",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "elemento": "Siniestro",
        "nombre": "Alarido",
        "subtitulo": "2 PP",
        "desc": "(Alarido usa Atq. Esp.).\n\nUn grito desgarrador, molesto y lleno de malicia que asusta a los rivales.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: La malicia intimida al enemigo. Baja el Atq. Esp. del enemigo en -1 por el resto del combate.\n2 o 3: Daño normal.\n1: Te quedas sin aire a mitad del grito y el ataque falla por completo.\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Lucha o Hada.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Siniestro",
        "nombre": "Mordisco",
        "subtitulo": "2 PP",
        "desc": "(Mordisco usa Atq.).\n\nUn ataque cruel y sorpresivo con colmillos afilados.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: El golpe es tan brutal que hace retroceder al enemigo (Pierde su turno).\n2 o 3: Daño normal.\n1: El enemigo forcejea, el ataque falla y te muerdes la lengua o lastimas la mandíbula (-1 HP).\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Lucha o Hada.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "nivel": 2,
        "clasificacion": "Área",
        "elemento": "Siniestro",
        "nombre": "Pulso Umbrío",
        "subtitulo": "4 PP",
        "desc": "(Pulso Umbrío usa Atq. Esp.).\n\nLibera una horrible aura expansiva llena de oscuros pensamientos.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: El horror hace retroceder al enemigo presa del pánico. El enemigo pierde su próximo turno.\n2 a 4: Daño normal masivo.\n1: El aura oscura envuelve al propio usuario, asustándolo a él mismo. Baja tu Vel. en -1 por un turno y el ataque falla.\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Lucha o Hada."
    },
    {
        "tipo": "magia",
        "elemento": "Siniestro",
        "nombre": "Triturar",
        "subtitulo": "3 PP",
        "desc": "(Triturar usa Atq.).\n\nDesgarra con colmillos despiadados buscando romper la armadura o piel del rival.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Rompe la guardia! Además de hacer daño normal, baja la Def. del enemigo en -1 por el resto del combate, ademas, hace retroceder al enemigo (Pierde su turno).\n5: Das una gran mordida que logra bajarle la Def. del enemigo en -1 por el resto del combate.\n2 a 4: Daño normal.\n1: El ataque resbala en la armadura enemiga o muerdes algo muy duro, fallando y rompiéndote un diente (-2 HP).\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Lucha o Hada.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Siniestro",
        "nombre": "Juego Sucio",
        "subtitulo": "5 PP",
        "desc": "(Juego Sucio usa el Atq. del enemigo en lugar del tuyo).\n\nUsa la propia fuerza bruta del enemigo en su contra. Ideal para personajes débiles que se enfrentan a monstruos gigantes.\n\nTira 1d10:\n9 o 10: ¡Golpe bajo perfecto! Ignora la armadura/defensa del rival al impactar.\n2 a 8: Daño masivo usando la fuerza del rival.\n1: El rival predice tu movimiento, fallas y quedas expuesto (-2 a tu Defensa por 1 turno).\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Lucha o Hada.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Normal",
        "nombre": "Placaje",
        "subtitulo": "1 PP",
        "desc": "(Placaje usa Atq.).\n\nUna embestida física con todo el cuerpo.\n\nTira 1d4:\n\n4: Empujas al rival, desequilibrándolo y restándole -1 a su Velocidad (VEL) el próximo turno.\n2 o 3: Daño normal.\n1: Tropiezas y fallas el ataque (-1 HP).\n\nDesventaja: Inmune contra tipo Fantasma y mitad de daño a tipo Roca/Acero.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "nivel": 2,
        "clasificacion": "Área",
        "elemento": "Normal",
        "nombre": "Rapidez",
        "subtitulo": "2 PP",
        "desc": "(Rapidez usa Atq. Esp.).\n\nDispara rayos con forma de estrella que persiguen mágicamente al objetivo.\n\nEste ataque NUNCA falla y es imposible de esquivar. \n\nTira un 1d4 para el daño.\n\nDesventaja: Inmune contra tipo Fantasma."
    },
    {
        "tipo": "magia",
        "elemento": "Normal",
        "nombre": "Golpe Cuerpo",
        "subtitulo": "3 PP",
        "desc": "(Golpe Cuerpo usa Atq.).\n\nEl usuario se deja caer sobre el enemigo con todo su peso.\n\nTira 1d6:\n\n5 o 6: El impacto aplasta los nervios del rival. Lo deja [Paralizado] (14+).\n2 a 4: Daño normal.\n1: Calculas mal el salto y te estrellas fuertemente contra el suelo (-2 HP).\n\nDesventaja: Inmune contra tipo Fantasma.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Normal",
        "nombre": "Triataque",
        "subtitulo": "4 PP",
        "desc": "(Triataque usa Atq. Esp.).\n\nDispara tres rayos simultáneos: Fuego, Hielo y Electricidad.\n\nTira 1d6, aplica el efecto segun el resultado:\n\n6: El rayo de fuego domina. Quema al enemigo (-1 HP x 3 turnos).\n5: El rayo eléctrico domina. Paraliza al enemigo (15+).\n4: El rayo de hielo domina. Congela al enemigo (debe sacar 15+ en 1d20 para descongelarse y atacar).\n2 o 3: Los tres rayos se cancelan entre sí. Daño normal puro.\n1: Las energías colapsan y el ataque te explota en la cara (-2 HP).",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Normal",
        "nombre": "Doble Filo",
        "subtitulo": "6 PP",
        "desc": "(Doble Filo usa Atq.).\n\nUna embestida temeraria y letal que ignora la propia seguridad del usuario.\n\nTira 1d10:\n\n9 o 10: ¡Impacto demoledor! Daño masivo y hace retroceder al enemigo (pierde su turno). El usuario recibe Daño de Retroceso (-2 HP).\n2 a 8: Daño masivo. El usuario recibe Daño de Retroceso (-3 HP).\n1: Fallas estrepitosamente. Chocas contra un muro o el suelo, sufriendo -5 HP de Daño de Retroceso masivo.\n\nDesventaja: Inmune contra tipo Fantasma.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Normal",
        "nombre": "Hiperrayo",
        "subtitulo": "7 PP",
        "desc": "(Hiperrayo usa Atq. Esp.).\n\nUn láser de energía pura y destructiva que agota completamente al usuario.\n\nTira 1d10:\n\n9 o 10: Devastación total. Ignora la Def. Esp. en -2.\n2 a 8: Daño normal extremadamente alto.\n1: El láser se desvía y gastas toda tu energía para nada.\n\nDesventaja: Sin importar el resultado del dado, el ataque es tan potente que el usuario queda exhausto y DEBE perder su próximo turno sin hacer nada.\nInmune contra tipo Fantasma.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "nivel": 1,
        "clasificacion": "Prioridad",
        "elemento": "Normal",
        "nombre": "Sorpresa",
        "subtitulo": "2 PP",
        "desc": "(Sorpresa usa Atq.).\n\nUn aplauso o golpe repentino y aturdidor.\n\nSolo puedes usar el efecto de Sorpresa una vez por combate.\n\nTira 1d6:\n\n2 a 6: Atacas tú primero (Prioridad) sin importar la Vel. del rival. El enemigo se asusta y pierde su turno de ese asalto.\n1: El enemigo no se asusta, fallas la sorpresa."
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Golpe Kárate",
        "subtitulo": "1 PP",
        "desc": "(Golpe Kárate usa Atq.).\n\nUn tajo seco con el borde de la mano diseñado para golpear puntos vitales.\n\nTira 1d4, aplica el efecto:\n\n4: ¡Golpe certero! El ataque ignora la mitad de la Defensa (DEF) del rival al calcular el daño final.\n2 o 3: Daño normal.\n1: Mides mal la distancia y golpeas el aire, fallando el ataque.\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Puntapié",
        "subtitulo": "2 PP",
        "desc": "(Puntapié usa Atq.).\n\nUna patada rápida dirigida a las piernas o la base del enemigo para desequilibrarlo.\n\nTira 1d4, aplica el efecto:\n\n4: El enemigo pierde el equilibrio. Reduce su Vel. en -1 durante el próximo turno.\n2 o 3: Daño normal.\n1: El enemigo predice el golpe y te pisa el pie (-1 HP). Falla el ataque.\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Puño Drenaje",
        "subtitulo": "5 PP",
        "desc": "(Puño Drenaje usa Atq.).\n\nUn puñetazo que absorbe la energía vital del impacto y revitaliza al usuario.\n\nTira 1d6, aplica el efecto segun el resultado:\n\n5 o 6: Golpe de absorción perfecta. Te curas a ti mismo la mitad del daño total que le hiciste al enemigo (redondeado hacia arriba).\n4: Te curas +3 HP fijos tras el golpe. \n2 o 3: Curación menor. Te curas +2 HP fijos tras el golpe.\n1: El enemigo esquiva y golpeas una roca o el suelo, lastimándote la mano (-2 HP).\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Esfera Aural",
        "subtitulo": "7 PP",
        "desc": "(Esfera Aural usa Atq. Esp.).\n\nEl usuario lee el aura del objetivo y dispara una bola de energía espiritual inesquivable.\n\nEste ataque NUNCA falla y persigue al objetivo. Tira 1d10: el resultado sera el daño que el ataque haga.\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Onda Certera",
        "subtitulo": "10 PP",
        "desc": "(Onda Certera usa Atq. Esp.).\n\nReúne toda la energía mental y física en una ráfaga devastadora. Dificil de acertar.\n\nTira 1d10, aplica el siguiente efecto segun el resultado:\n\n10: ¡Impacto directo! Hace daño masivo y destruye la guardia mágica enemiga (Baja la Def. Esp. del enemigo en -1 por el resto del combate).\n3+: El ataque apenas roza, haciendo la mitad del daño total calculado.\n1 o 2: El ataque es demasiado lento y el enemigo lo esquiva por completo. Pierdes tu siguiente turno.\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Lucha",
        "nombre": "Combate Cercano",
        "subtitulo": "6 PP",
        "desc": "(Combate Cercano usa Atq.).\n\nEl usuario abandona toda su defensa y se lanza en un frenesí de golpes a quemarropa sin piedad.\n\nTira 1d20 para el daño:\n\n20 (Natural): Combo demoledor imparable. Suma un +5 al daño final calculado. Te agotas y tu Def. y Def. Esp. baja en -1 por un turno.\n2+: Daño normal masivo. El agotamiento hace bajar tu Def. y Def. Esp. en -1 por el resto del combate (puede ser acumulable asta -4).\n1: Te tropiezas en tu propia ráfaga de golpes, perdiendo el ataque y quedando exhausto. pierdes -2 de Def. y Def. Esp.\n\nDesventaja: Inmune contra tipo Fantasma. Mitad de daño a tipo Volador, Veneno o Psíquico.",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "nivel": 4,
        "clasificacion": "",
        "elemento": "Lucha",
        "nombre": "Espada Santa",
        "subtitulo": "5 PP",
        "desc": "(Espada Santa usa Atq.).\n\nUn tajo maestro ejecutado con un cuerno o extremidad imbuida de aura purificadora.\n\n(1) Este ataque corta a través de cualquier barrera. Ignora cualquier mejora de Defensa (DEF) que el enemigo se haya aplicado durante el combate asi como tambien es benevolente y cualquier pokemon que tenga Def. negativa, esta Def. pasara de negativo a 0.\n\n(2) Tira 1d20, aplica el efecto según el resultado:\n\n16+: ¡Corte perfecto! Daño masivo y crítico.\n2 a 15: Daño normal masivo.\n1: El golpe rebota contra el suelo o una armadura pesada, desafilando tu arma y perdiendo el turno.\n\nDesventaja: Inmune contra tipo Fantasma.\nEspada Santa solo pueden usarla Cobalion, Virizion y Terrakion (Espadachines Místicos) (y solo los ESPADACHINES MISTICOS pueden enseñarle el movimiento a otros pokemon especificos)."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Eléctrico",
        "nombre": "Onda Trueno",
        "subtitulo": "1 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en función del número que sacaste:\n\n6: Paraliza al Enemigo (18+). Otorga +2 (ATK o ATK. ESP).\n5: Paraliza al Enemigo (16+), no otorga daño.\n4 o 3: Paraliza al Enemigo (14+), no otorga daño.\n2: Paraliza al Enemigo (12+), no otorga daño.\n1: El usuario recibe -1 HP y pierde -1 PP adicional.\n\n(El Rival puede lanzar 1d20 para intentar sacar igual o mayor al efecto de parálisis para poder atacar).\n\nDesventaja: No afecta a tipo Eléctrico, Tierra o Habilidades inmunes.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Control",
        "elemento": "Planta",
        "nombre": "Drenadoras",
        "subtitulo": "2 PP",
        "desc": "Planta semillas en el cuerpo del rival.\n\nTira 1d6 aplica el el efecto segun el resultado:\n\n4+: Las raíces germinan. Durante 4 turnos, el enemigo pierde -3 HP al final de su turno, y esos 2 HP se te suman a ti (o a un aliado que elijas).\n2+: Germinación débil. Drena -2 HP por 3 turnos.\n1: Las semillas no logran penetrar la piel/armadura y caen al suelo inútilmente.\n\nDesventaja: el ataque no funcionara contra Pokemon tipo Planta o Veneno. El ataque Drenadoras dejara de tener efecto si el enemigo usa un ataque/movimiento de tipo fuego."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Planta",
        "nombre": "Paralizador",
        "subtitulo": "1 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste: \n\n6: Paraliza al Enemigo (16+), no otorga daño.\n5 o 4: Paraliza al Enemigo (14+), no otorga daño.\n3 o 2: Paraliza al Enemigo (12+), no otorga daño.\n1: El usuario falla y -2 PP.\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto de paralizis (la tirada no cuenta como tirada de ataque) (no se acumula)).\n\nDesventaja: No afecta a Pokemon tipo Planta, Acero o Habilidades inmunes.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Planta",
        "nombre": "Polvo Veneno",
        "subtitulo": "3 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste (Si el pokemon atacado o usuario es de tipo veneno aplica el efecto despues del  \"/\"): \n\n6: El rival queda envenenado por 5 turnos restandole -4 HP cada turno. / Restaura al Rival +4 HP.\n5 o 4: El rival queda envenenado por 3 turnos restandole -3 HP cada turno. / Restaura al Rival +3 HP.\n3 o 2: El rival queda envenenado por 2 turnos restandole -3 HP cada turno. / Restaura al Rival +2 HP.\n1: El Usuario pierde -3 HP al respirarlo. / Si el usuario es tipo veneno pierde -2 PP adicionales.\n\n(El efecto puede acumularse una vez mas volviendolo [envenenamiento grave]).\n\nDesventaja: No afecta a Pokemon tipo Planta, Veneno o Habilidades inmunes.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Planta",
        "nombre": "Somnifero",
        "subtitulo": "2 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste: \n\n6: Duerme al enemigo por 5 turnos (18+).\n5 o 4: Duerme al enemigo por 4 turnos (16+).\n3: Duerme al enemigo por 3 turnos (15+).\n2: Duerme al enemigo por 2 turnos (12+).\n1: El usuario falla, y queda dormido por un turno o asta que le den un golpe.\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto de Somnifero (la tirada no cuenta como tirada de ataque)(Si el enemigo ya estaba dormido el movimiento fallara (y no se acumula))).\n\nNo afecta a Pokemon tipo Planta, Acero o Habilidades inmunes.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 4,
        "clasificacion": "Protección",
        "elemento": "Planta",
        "nombre": "Barrera Espinosa",
        "subtitulo": "4 PP",
        "desc": "Crea un escudo impenetrable de espinas gruesas alrededor del usuario.\n\nEl usuario bloquea el daño y los efectos de la mayoría de ataques de los rivales dirigidos a él durante este turno. Además, si un enemigo ataca con un movimiento físico (Atq.) directo contra la barrera, el rival sufrirá -3 HP de Daño de Retroceso por pincharse.\n\nSi intentas usar Barrera Espinosa en dos turnos consecutivos, debes lanzar 1d6. Si sacas 1, 2 o 3, la barrera se rompe por estrés mágico y el ataque enemigo te impacta con normalidad.\n\nDesventaja: El movimiento solo puede usarlo Chesnaught (y solo CHESNAUGHT puede enseñarle el movimiento a otros pokemon especificos)."
    },
    {
        "tipo": "magia",
        "elemento": "Veneno",
        "nombre": "Picotazo Venenoso",
        "subtitulo": "1 PP",
        "desc": "(Picotazo Venenoso usa Atq.).\n\nAtaca con un aguijón, cuerno o tentáculo tóxico.\n\nSolo puedes aplicar el segundo (2) efecto de Picotazo Venenoso una vez por turno.\n\n(1) Tira 1d4, aplica el efecto según el resultado:\n\n4: El veneno entra directo al torrente sanguíneo.  El Rival pierde -2 HP extra.\n2 o 3: Daño normal.\n1: Fallas el golpe y te pinchas torpemente con tu propia púa (-1 HP).\n\n(2) Si sacaste 4: El rival quedara [Envenenado]. Si el Rival ya estaba [Envenenado], el efecto puede acumularse una vez mas convirtiendolo en [Envenenamiento GRAVE].\n\nDesventaja: Inmune contra Pokémon tipo Acero.\nSi lo usas contra un Pokemon tipo Veneno lo curas.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Veneno",
        "nombre": "Bomba Lodo",
        "subtitulo": "3 PP",
        "desc": "(Bomba Lodo usa Atq. Esp.).\n\nLanza una bola de lodo tóxico y pestilente que explota al impactar.\n\nSolo puedes aplicar el segundo (2) efecto de Bomba Lodo una vez por turno.\n\n(1) Tira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Explosión tóxica! Hace daño masivo y el rival pierde -3 HP extra.\n2 a 4: Daño normal.\n1: La bomba de lodo explota en tus propias manos, perdiendo el turno y recibiendo -2 HP.\n\n(2) Si sacaste 5 o mas: El rival quedara [Envenenado]. Si el Rival ya estaba [Envenenado], el efecto puede acumularse una vez mas convirtiendolo en [Envenenamiento GRAVE].\n\nDesventaja: Inmune contra Pokémon tipo Acero. Mitad de daño a tipo Veneno y Roca.\nSi lo usas contra un Pokemon tipo Veneno lo curas.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Veneno",
        "nombre": "Lanza Mugre",
        "subtitulo": "5 PP",
        "desc": "(Lanza Mugre usa Atq.).\n\nDispara un torrente de basura, lodo y toxinas extremadamente asquerosas.\n\nSolo puedes aplicar el segundo (2) efecto de Lanza Mugre una vez por turno.\n\n(1) Tira 1d10, aplica el efecto según el resultado:\n\n9 o 10: ¡Impacto crítico y repulsivo! Daño masivo. El rival pierde -4 HP extra y pierde -1 de Vel. por el asco durante un turno.\n3 a 8: Daño normal masivo.\n1 o 2: [Baja Precisión]. El ataque es muy pesado e inestable; fallas por completo y desperdicias tu PP.\n\n(2) Si sacas 9 o mas: El rival quedara [Envenenado]. Si el Rival ya estaba [Envenenado], el efecto puede acumularse una vez mas convirtiendolo en [Envenenamiento GRAVE].\n\nDesventaja: Inmune contra Pokémon tipo Acero.\nSi lo usas contra un Pokemon tipo Veneno lo curas.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Veneno",
        "nombre": "Eructo",
        "subtitulo": "6 PP",
        "desc": "(Eructo usa Atq. Esp.).\n\nLibera gases tóxicos altamente concentrados desde el estómago en un ataque sónico y corrosivo.\n\n[Consumo]: Este ataque SOLO puede usarse si el usuario ha consumido una Baya, Poción o Comida (como los Guisos del Campamento) durante este combate. Si no has comido nada, el movimiento falla automáticamente.\n\nSi cumples la condición, tira 1d20 para el daño:\n20 (Natural): Daño Devastador y el enemigo queda [Confuso] por el tufo.\n2 a 19: Daño masivo inesquivable.\n1: Indigestión severa. Fallas el ataque y pierdes -3 HP.\n\nDesventaja: Inmune contra Pokémon tipo Acero.\nSi lo usas contra un Pokemon tipo Veneno lo curas.",
        "nivel": 4
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Control",
        "elemento": "Veneno",
        "nombre": "Púas Tóxicas",
        "subtitulo": "2 PP",
        "desc": "El usuario esparce trampas venenosas por el suelo alrededor de los enemigos.\n\nCualquier enemigo nuevo que entre al combate, o cualquier enemigo que ataque cuerpo a cuerpo (con Atq.), pisará las púas y quedará envenenado automáticamente (perdiendo -2 HP cada turno).\n\nSi el Rival ya estaba [Envenenado], el efecto puede acumularse una vez mas convirtiendolo en [Envenenamiento GRAVE].\n\nDesventaja: Las Púas Tóxicas desaparecen si un Pokémon enemigo de tipo Veneno pisa el campo (las absorbe) o si usan ataques que despejen el terreno (como Vuelo o Tajo Aéreo)."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Veneno",
        "nombre": "Armadura Ácida",
        "subtitulo": "2 PP",
        "desc": "Altera la estructura celular del usuario para volverse temporalmente líquido y altamente corrosivo.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Otorga +2 de Def. permanente durante el resto del combate. Además, cualquier enemigo que te ataque con contacto físico recibirá -1 HP de Daño de Retroceso por quemadura ácida.\n2 a 4: Otorga +1 de Def. permanente durante el resto del combate.\n1: La mutación falla temporalmente. Pierdes el turno y bajas tu Vel. en -1.\n\n(Máximo acumulable en combate: +4 Def.)."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 1,
        "clasificacion": "Daño/T.",
        "elemento": "Veneno",
        "nombre": "Toxico",
        "subtitulo": "3 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste (Si el pokemon atacado o usuario es de tipo veneno aplica el efecto despues del  \"/\"): \n\n6: El rival queda envenenado restandole -3 HP cada turno. / Restaura al Rival +5 HP.\n5 o 4: El rival queda envenenado por 3 turnos restandole -3 HP cada turno. / Restaura al Rival +4 HP.\n3 o 2: El rival queda envenenado por 2 turnos restandole -2 HP cada turno. / Restaura al Rival +3 HP.\n1: El Usuario pierde -3 HP al tratar de lanzarlo y fallar. / Si el usuario es tipo veneno pierde -2 PP adicionales.\n\n(El efecto puede acumularse una vez mas volviendolo [Envenenamiento GRAVE]).\n\nNo afecta a Pokemon tipo Acero o Habilidades inmunes."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Fantasma",
        "nombre": "Rayo Confuso",
        "subtitulo": "3 PP",
        "desc": "Lanza 1d20, aplica el efecto en base al resultado:\n\n20 (Natural): El enemigo queda confuso, los dos primeros turnos luego de haber sido confundido; atacara a sus compañeros (el ataque sera elejido al azar) (18+).\n15+: El enemigo queda confuso durante 5 turnos (16+). El enemigo confundido se ara daño a si mismo (ATK). El primer turno luego de haber sido confundido se atacara a si mismo 100%.\n10+: El enemigo queda confuso durante 4 turnos (15+).  El enemigo confundido se ara daño a si mismo (ATK).\n8+: El enemigo queda confuso durante 3 turnos (14+). El enemigo confundido se ara daño a si mismo (ATK).\n2+: El enemigo queda confuso durante 2 turnos (12+). El enemigo confundido se ara daño a si mismo (ATK).\n1: El usuario falla el ataque y se queda confundido el mismo por un turno, ademas, el usuario se hace daño el mismo (ATK)(12+). El usuario se ara daño en el mismo turno que a usado rayo confuso.\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto asignado (Si el enemigo ya estaba Confuso el movimiento fallara (no se acumulan turnos))).",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Siniestro",
        "nombre": "Maquinación",
        "subtitulo": "2 PP",
        "desc": "El usuario estimula su cerebro con pensamientos estrategicos sucios.\n\nTira 1d6 aplica el efecto segun el resultado:\n\n4, 5 o 6: Otorga +2 de Atq. Esp. permanente durante el resto del combate.\n2 o 3: Otorga +1 de Atq. Esp.\n1: El usuario se distrae con sus propios pensamientos. Falla y pierde el turno.\n\n(Máximo acumulable en combate: +4 Atq. Esp.)."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Control",
        "elemento": "Siniestro",
        "nombre": "Mofa",
        "subtitulo": "2 PP",
        "desc": "Enfurece al enemigo con insultos y gestos provocadores que lo sacan de sus casillas.\n\nTira 1d6 aplica el efecto segun el resultado:\n\n5 o 6: El enemigo se enfurece por 3 turnos.\n2 a 4: El enemigo se enfurece por 2 turnos.\n1: El enemigo te ignora por completo y quedas en ridículo (-1 Vel. por un turno).\n\n(Mientras esté enfurecido, el enemigo NO puede usar movimientos de Estado, Curación o Soporte. Está obligado a usar únicamente ataques que causen daño directo (Atq.))."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Normal",
        "nombre": "Canto",
        "subtitulo": "2 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste: \n\n6: Duerme al enemigo por 5 turnos (18+).\n5 o 4: Duerme al enemigo por 4 turnos (17+).\n3: Duerme al enemigo por 3 turnos (15+).\n2: Duerme al enemigo por 2 turnos (14+).\n1: El usuario falla al desafinar (si un enemigo ya estaba dormido, lo despierta).\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto de Canto(la tirada no cuenta como tirada de ataque)(Si el enemigo ya estaba dormido el movimiento fallara (y no se acumula))).",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Normal",
        "nombre": "Danza Caos",
        "subtitulo": "1 PP",
        "desc": "Lanza un dado de 6 caras y aplica el efecto en funcion del numero que sacaste:\n\n6: El enemigo queda confuso durante 1 turno (18+). El enemigo confundido ara daño a sus compañeros (ATK).\n5 o 2: El enemigo queda confuso durante 4 turnos (15+). El enemigo confundido ara daño a sus compañeros (ATK).\n3: El enemigo queda confuso durante 3 turnos (+8). El enemigo confundido ara daño a sus compañeros (ATK).\n4: El enemigo queda confuso durante 2 turnos (12+). El enemigo confundido ara daño a sus compañeros (ATK). \n1: El enemigo queda Confuso durante 5 turnos (18+). El enemigo confundido ara daño a sus compañeros (ATK).\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto asignado (Si el enemigo ya estaba Confuso el movimiento fallara (no se acumulan turnos))).\n\nDesventaja: El movimiento solo puede usarlo Spinda (y solo SPINDA puede enseñarle el movimiento a otros pokemon especificos).",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Normal",
        "nombre": "Danza Espada",
        "subtitulo": "2 PP",
        "desc": "Un baile marcial agresivo que eleva el espíritu de combate y afina el instinto asesino.\n\nTira 1d6:\n\n4, 5 o 6: Otorga +2 de Atq. permanente durante el resto del combate.\n2 o 3: Otorga +1 de Atq.\n1: Tropiezas torpemente durante la danza, fallando y bajando tu propia Vel. en -1 por un turno.\n\n(Máximo acumulable en combate: +4 Atq.).",
        "clasificacion": "Mejora",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Normal",
        "nombre": "Protección",
        "subtitulo": "3 PP",
        "desc": "Crea una barrera mágica impenetrable alrededor del usuario.\n\nEl usuario bloquea el daño y los efectos de la mayoria de ataques de los rivales dirigidos a él durante este turno.\n\nSi intentas usar Protección en dos turnos consecutivos, debes lanzar 1d6. Si sacas 1, 2 o 3, la barrera se rompe por estrés mágico y el ataque enemigo te impacta con normalidad."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Normal",
        "nombre": "Recuperación",
        "subtitulo": "4 PP",
        "desc": "Las células del cuerpo se regeneran a un ritmo acelerado.\n\nTira 1d6, el numero que saques sera la potencia del efecto:\n\n5 o 6: Recuperas +15 HP.\n2 a 4: Recuperas +10 HP.\n1: La regeneración celular falla por el cansancio, curando solo +2 HP y perdiendo tu PP.",
        "clasificacion": "Curación",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 1,
        "clasificacion": "Control",
        "elemento": "Normal",
        "nombre": "Super Sonico",
        "subtitulo": "1 PP",
        "desc": "Lanza el dado de 20 caras, aplica el efecto en base al resultado:\n\n20 (Natural): El enemigo queda confuso, el primer turno luego de haber sido confundido; atacara a sus compañeros (el ataque sera elejido al azar) (17+).\n15+: El enemigo queda confuso durante 5 turnos (15+). El enemigo confundido se ara daño a si mismo (ATK).\n10+: El enemigo queda confuso durante 4 turnos (14+).  El enemigo confundido se ara daño a si mismo (ATK).\n8+: El enemigo queda confuso durante 3 turnos (13+). El enemigo confundido se ara daño a si mismo (ATK).\n2+: El enemigo queda confuso durante 2 turnos (12+). El enemigo confundido se ara daño a si mismo (ATK).\n1: El usuario falla el ataque y se queda confundido el mismo por un turno. ademas, el usuario se hace daño el mismo (ATK)(18+). El usuario se ara daño en el mismo turno que a usado Super Sonico. Si habia un Pokemon dormido, se despierta.\n\n(El Rival puede lanzar un dado de 20 caras para poder atacar y debera sacar igual o mayor numero del efecto asignado (Si el enemigo ya estaba Confuso el movimiento fallara (no se acumulan turnos)))."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Lucha",
        "nombre": "Corpulencia",
        "subtitulo": "2 PP",
        "desc": "El usuario tensa sus músculos al máximo, expandiendo su cuerpo para golpear más fuerte y resistir los impactos físicos.\n\nTira 1d6, aplica el efecto segun el resultado:\n\n5 o 6: ¡Músculos de acero! Otorga +1 de Atq. y +1 de Def. permanente durante el resto del combate.\n2 a 4: Otorga solo +1 de Atq.\n1: Te da un calambre muscular grave por tensarte demasiado. Pierdes -2 HP y no recibes ninguna mejora.\n\n(Máximo acumulable en combate: +4 en cada estadística)."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Pesada",
        "nombre": "Collar Grillete",
        "subtitulo": "Collar",
        "desc": "Un Grillete enorme utilizado para para restringir a pokemon peligrosos. Algunos pokemon gustan usarlos como accesorios. Parece tambien algo desgastado...\n\nOtorga +1 DEF."
    },
    {
        "tipo": "arma",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Cuerpo a Cuerpo",
        "nombre": "Daga de Ladrón",
        "subtitulo": "Arma",
        "desc": "Una cuchilla pequeña pero muy afilada y fácil de ocultar.\nOtorga +1 ATQ. Si el portador ataca a un enemigo que está sufriendo un estado alterado (Dormido, Paralizado, Confuso), el daño final recibe un bonus de +2."
    },
    {
        "tipo": "armadura",
        "nivel": 2,
        "clasificacion": "Protección",
        "elemento": "Media",
        "nombre": "Escudo de Madera Férrea",
        "subtitulo": "Def.",
        "desc": "Un escudo redondo hecho con la madera de un árbol milenario.\nOtorga +1 DEF y +1 DEF. ESP.\n\nDesventaja: Su peso reduce en -1 la Velocidad (VEL) del usuario mientras lo lleve equipado."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Baya Zidra",
        "subtitulo": "Baya",
        "desc": "Recupera 15 HP inmediatamente.\nTiene un sabor dulce."
    },
    {
        "tipo": "receta",
        "elemento": "Curación",
        "nombre": "Brocheta de Hongos Vigorizantes",
        "subtitulo": "Comida Casera",
        "desc": "**Ingredientes:** 2x Seta Pequeña, 1x Especias Fuertes.\n\nUnos sabrosos hongos asados preparados por gran chef. Restaura +10 HP a un aliado. Además, el intenso sabor a especias otorga +1 a la Velocidad (VEL) durante el próximo combate.",
        "nivel": 1
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Guiso de Carne Picante",
        "subtitulo": "Comida de Supervivencia",
        "desc": "**Ingredientes:** 1x Carne Seca, 1x Baya Tamate, 1x Agua Fresca.\n\nUn guiso que calienta el cuerpo hasta el alma. Cura +5 HP.\nEl usuario que lo consuma se vuelve inmune al estado [Congelado] durante el próximo combate, y el primer ataque de tipo Hielo que reciba tendrá un multiplicador de (x0.5)."
    },
    {
        "tipo": "magia",
        "elemento": "Volador",
        "nombre": "Golpe Aéreo",
        "subtitulo": "2 PP",
        "desc": "(Golpe Aéreo usa Atq.).\n\nEl usuario se lanza en un vuelo rasante a una velocidad imposible de rastrear con la vista.\n\nEste ataque NUNCA falla. No importa si al tirar 1d6 sacas un 1 natural o si el enemigo tiene barreras menores; el ataque siempre conectará y hará su daño correspondiente.\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Roca, Acero o Eléctrico.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Volador",
        "nombre": "Tajo Aéreo",
        "subtitulo": "3 PP",
        "desc": "(Tajo Aéreo usa Atq. Esp.).\n\nBate las alas (o brazos) con fuerza para lanzar hojas de aire afiladas como cuchillas cortando el cielo.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: La onda de choque aturde al rival. Lo hace retroceder (El enemigo pierde su próximo turno).\n2 a 4: Daño normal.\n1: El viento se desvía y el ataque falla por completo.\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Roca, Acero o Eléctrico.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Volador",
        "nombre": "Pájaro Osado",
        "subtitulo": "6 PP",
        "desc": "(Pájaro Osado usa Atq.).\n\nEl usuario pliega sus alas y se lanza en un bombardeo kamikaze envolviéndose en un aura de energía.\n\nTira 1d10 aplica el efecto segun el resultado:\n\n9 o 10: ¡Impacto devastador! Daño masivo. Ignora la mitad de la Def. del enemigo. El usuario recibe Daño de Retroceso (-3 HP).\n2 a 8: Daño masivo. El usuario recibe Daño de Retroceso (-2 HP).\n1: Fallas estrepitosamente. Chocas contra el suelo a toda velocidad, sufriendo -5 HP de Daño de Retroceso puro.\n\nDesventaja: Hace la mitad del daño contra Pokémon tipo Roca, Acero o Eléctrico.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "nivel": 1,
        "clasificacion": "Táctica",
        "elemento": "Volador",
        "nombre": "Vuelo",
        "subtitulo": "4 PP",
        "desc": "(Vuelo usa Atq.).\n\nUn ataque estratégico que usa los cielos como refugio.\n\nToma 2 turnos en completarse:\nTurno 1: El usuario se eleva alto en el cielo. Durante este turno, el usuario se vuelve INMUNE a todos los ataques físicos de corto alcance (y a magias que no puedan alcanzar el cielo como Terremoto).\nTurno 2: El usuario cae en picada a una velocidad sónica. Lanza 2d10 y quédate con el resultado más alto para calcular el daño.\n\nDesventaja: Mientras estás en el aire (Turno 1), si recibes un ataque de tipo Eléctrico como Rayo, te hará el DOBLE de daño por estar expuesto."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Curación",
        "elemento": "Volador",
        "nombre": "Respiro",
        "subtitulo": "3 PP",
        "desc": "El usuario aterriza y descansa un momento para sanar sus heridas y recuperar el aliento.\n\nTira 1d6 para determinar la sanación:\n5 o 6: Recuperas +15 HP.\n2 a 4: Recuperas +10 HP.\n1: Un enemigo te distrae o aterrizas mal, curando solo +2 HP y perdiendo tu -1 PP extra.\n\nDesventaja: Al aterrizar para usar este movimiento, el usuario PIERDE su inmunidad pasiva a los ataques de tipo Tierra y sus resistencias de tipo Volador hasta que vuelva a ser su turno."
    },
    {
        "tipo": "magia",
        "elemento": "Tierra",
        "nombre": "Bofetón Lodo",
        "subtitulo": "2 PP",
        "desc": "(Bofetón Lodo usa Atq.).\n\nArroja lodo pegajoso directamente a la cara o los ojos del enemigo.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: El lodo ciega al rival. Reduce la precisión del enemigo (para su próximo turno, el rival al tirar el dado de su ataque este se reducira en -1).\n2 o 3: Daño normal.\n1: El lodo se te resbala de las manos y fallas el ataque.\n\nDesventaja: Inmune contra Pokémon tipo Volador o habilidades Inmunes. Mitad de daño a tipo Planta o Bicho.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Tierra",
        "nombre": "Terratemblor",
        "subtitulo": "4 PP | Área",
        "desc": "(Terratemblor usa Atq.).\n\nPisa el suelo con una fuerza brutal, creando una onda sísmica que desestabiliza a los enemigos cercanos.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: La onda de choque hace perder el equilibrio. Hace daño y baja la Vel. de los enemigos afectados en -1 por el resto del combate.\n2+: Daño normal.\n1: Calculas mal el pisotón y te lastimas la pierna (-1 HP y fallas).\n\nDesventaja: Inmune contra Pokémon tipo Volador o habilidades Inmunes. Mitad de daño a tipo Planta o Bicho.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Tierra",
        "nombre": "Terremoto",
        "subtitulo": "6 PP | Área",
        "desc": "(Terremoto usa Atq.).\n\nGenera un sismo devastador que quiebra el terreno y afecta a todos en el campo de batalla terrestre.\n\nTira 1d10, aplica el efecto según el resultado:\n\n10: ¡Falla tectónica! Daño masivo inesquivable. Si algún enemigo está bajo tierra, recibe el DOBLE de daño.\n2+: Daño normal masivo.\n1: El sismo se descontrola y te hace perder el equilibrio a ti también, perdiendo tu próximo turno.\n\nDesventaja: Inmune contra Pokémon tipo Volador o habilidades Inmunes. Mitad de daño a tipo Planta o Bicho.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Roca",
        "nombre": "Lanzarrocas",
        "subtitulo": "1 PP",
        "desc": "(Lanzarrocas usa Atq.).\n\nLevanta una roca pesada del suelo y la arroja con fuerza bruta.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: El golpe contundente abolla la armadura o debilita la postura enemiga, restándole -1 a su Def. para el próximo ataque que reciba.\n2 o 3: Daño normal.\n1: La roca se resbala de tus manos antes de lanzarla o calculas mal el peso, fallando el ataque.\n\nDesventaja: Mitad de daño a Pokémon tipo Lucha, Tierra o Acero.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Roca",
        "nombre": "Roca Veloz",
        "subtitulo": "2 PP",
        "desc": "(Roca Veloz usa Atq.).\n\nEl usuario se recubre de rocas afiladas y embiste a una velocidad que rompe la barrera del sonido, ignorando el peso de su elemento.\n\nSolo puedes usar el efecto de prioridad una vez por combate o cuenta como turno extra.\n\nTira 1d6:\n\n2 a 6: Atacas tú primero (Prioridad) sin importar la Vel. del rival. Daño normal.\n1: Pierdes el control por la fricción extrema, fallas el ataque y recibes -1 HP de daño.\n\nDesventaja: Mitad de daño a Pokémon tipo Lucha, Tierra o Acero.",
        "clasificacion": "Prioridad",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Roca",
        "nombre": "Avalancha",
        "subtitulo": "4 PP | Área",
        "desc": "(Avalancha usa Atq.).\n\nProvoca un derrumbe masivo de rocas que cae sobre los enemigos.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Las rocas sepultan temporalmente a los enemigos. Los rivales golpeados retroceden y pierden su próximo turno.\n2 a 4: Daño normal en área.\n1: El derrumbe es inestable y algunas rocas caen sobre tu propio equipo. El usuario recibe -2 HP y el ataque falla.\n\nDesventaja: Mitad de daño a Pokémon tipo Lucha, Tierra o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Roca",
        "nombre": "Roca Afilada",
        "subtitulo": "6 PP",
        "desc": "(Roca Afilada usa Atq.).\n\nHace surgir pilares de piedra puntiaguda desde debajo del enemigo para empalarlo.\n\nTira 1d10, aplica el efecto según el resultado:\n\n10: ¡Punto ciego y crítico! El pilar atraviesa la guardia. Ignora la mitad de la Def. del rival y causa daño masivo.\n3+: Daño normal masivo.\n1 o 2: Las rocas surgen en el lugar equivocado, fallando el ataque por completo.\n\nDesventaja: Mitad de daño a Pokémon tipo Lucha, Tierra o Acero.",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Roca",
        "nombre": "Pulimento",
        "subtitulo": "2 PP",
        "desc": "El usuario pule su cuerpo de roca (o su armadura/armas) para reducir drásticamente la resistencia al viento y moverse como un relámpago.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Fricción cero. Otorga +2 de Vel. permanente durante el resto del combate.\n2 a 4: Otorga +1 de Velocidad (VEL).\n1: Pules demasiado y te resbalas, perdiendo el equilibrio. Pierdes tu turno y -1 Vel.\n\n(Máximo acumulable en combate: +4 Vel.).",
        "clasificacion": "Mejora",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Clima",
        "elemento": "Roca",
        "nombre": "Tormenta de Arena",
        "subtitulo": "4 PP",
        "desc": "Invoca una feroz tormenta de arena que envuelve todo el campo de batalla.\n\nTira 1d6, aplica el efecto según el resultado:\n\n2 a 6: La tormenta se activa y dura 4 turnos completos.\n1: La humedad del ambiente impide que la arena se levante, el movimiento falla.\n\n[Efectos de la Tormenta]:\n1. Al final de cada turno, TODOS los combatientes en el campo reciben -1 HP de daño por la arena abrasiva. (Los Pokémon de tipo Roca, Tierra y Acero son inmunes a este daño).\n2. Mientras la tormenta esté activa, la Def. Esp. de todos los Pokémon de tipo Roca aumenta en +1 automáticamente."
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Picadura",
        "subtitulo": "1 PP",
        "desc": "(Picadura usa Atq.).\n\nUn mordisco rápido que busca robar los recursos del enemigo.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: Si el enemigo tiene un objeto Consumible o Baya equipado, se lo arrebatas y te curas +5 HP automáticamente.\n2 o 3: Daño normal.\n1: Muerdes una armadura dura y te lastimas los dientes (-1 HP).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Viento Plateado",
        "subtitulo": "4 PP",
        "desc": "(Viento Plata usa Atq. Esp.).\n\nBate las alas para esparcir escamas plateadas que cortan al enemigo y revitalizan al usuario.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Milagro plateado! La energía de las escamas te envuelve. Otorga +1 a TODAS tus estadísticas (Atq, Def, Atq. Esp, Def. Esp, Vel) por el resto del combate.\n2 a 5: Daño normal.\n1: El viento sopla en tu contra y las escamas se dispersan sin hacer daño.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Chupavidas",
        "subtitulo": "3 PP",
        "desc": "(Chupavidas usa Atq.).\n\nClava sus colmillos o aguijón para drenar el fluido vital del enemigo.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Absorción brutal. Te curas a ti mismo la mitad del daño total que le hiciste al enemigo (redondeado hacia arriba).\n2 a 4: Daño normal y te curas +2 HP fijos.\n1: El enemigo forcejea y te lanza lejos antes de que puedas drenarlo (-2 HP).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Tijera X",
        "subtitulo": "4 PP",
        "desc": "(Tijera X usa Atq.).\n\nCruza sus garras, guadañas o brazos para dar un tajo letal en forma de X.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Corte limpio! El ataque ignora la mitad de la Defensa (DEF) del rival al calcular el daño final.\n2+: Daño normal.\n1: Calculas mal el cruce y te enredas temporalmente, perdiendo el turno.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Rayo Señal",
        "subtitulo": "3 PP",
        "desc": "(Rayo Señal usa Atq. Esp.).\n\nDispara un rayo de luz extraña y parpadeante que desorienta la vista.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Las luces hipnóticas dejan al rival [Confuso] por 2 turnos (Debe sacar 13+ en 1d20 para poder atacar).\n2 a 4: Daño normal.\n1: El rayo hace cortocircuito y ciega levemente al usuario (-1 Vel. por un turno).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "nivel": 2,
        "clasificacion": "Táctica",
        "elemento": "Bicho",
        "nombre": "Ida y Vuelta",
        "subtitulo": "5 PP",
        "desc": "(Ida y Vuelta usa Atq.).\n\nUn ataque relámpago donde el usuario golpea e inmediatamente huye a un punto ciego.\n\nTira 1d6. Si sacas 1: Te tropiezas al intentar huir, fallas el ataque y no consigues la inmunidad.\n\nDespués de calcular y hacer tu daño normal, te reposicionas a una zona segura. Durante el resto de este turno, eres INMUNE a cualquier ataque físico cuerpo a cuerpo (Atq.) dirigido hacia ti, ya que no te encuentran.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero."
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Bola de Polen",
        "subtitulo": "4 PP",
        "desc": "(Bola de Polen usa Atq. Esp. si se lanza a un enemigo).\n\nForma una esfera de polen altamente concentrado. \n\n[Mecánica Dual]:\n- Si se la lanzas a un ALIADO: La bola estalla en nutrientes curando +10 HP automáticamente (no ocupa tirada de daño).\n- Si se la lanzas a un ENEMIGO: La bola explota violentamente causando daño especial.\n\nTira 1d6 (solo si atacas a un enemigo). Si sacas 1: La bola estalla en tus manos, curando a un enemigo al azar +5 HP.\n\nSolo puedes usar 1 efecto de Bola de Polen una vez por turno.",
        "clasificacion": "Soporte",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "nivel": 3,
        "clasificacion": "Área",
        "elemento": "Bicho",
        "nombre": "Zumbido",
        "subtitulo": "5 PP",
        "desc": "(Zumbido usa Atq. Esp.).\n\nHace vibrar sus alas o cuerpo a una frecuencia sónica destructiva que destroza los tímpanos de los enemigos cercanos.\n\nTira 1d10, aplica el efecto según el resultado:\n\n9 o 10: La vibración destroza la voluntad enemiga. Hace daño masivo y baja la Def. Esp. del rival en -1 durante el resto del combate.\n2 a 8: Daño normal masivo en área.\n1: La frecuencia te aturde a ti mismo, perdiendo el turno y restando -2 HP a tu propia vitalidad.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero."
    },
    {
        "tipo": "magia",
        "elemento": "Bicho",
        "nombre": "Mega Cuerno",
        "subtitulo": "7 PP",
        "desc": "(Mega Cuerno usa Atq.).\n\nUna embestida absolutamente devastadora usando un cuerno rígido, pero es difícil de acertar.\n\nTira 1d10, aplica el efecto según el resultado:\n\n9 o 10: ¡Impacto brutal! El daño es masivo y hace retroceder al enemigo (pierde su turno) por la fuerza del golpe.\n4 a 8: Daño normal masivo.\n1 a 2: El ataque es tan predecible que el enemigo lo esquiva sin esfuerzo, gastando tu PP en vano.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Volador o Acero.",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Bicho",
        "nombre": "Red Viscosa",
        "subtitulo": "2 PP",
        "desc": "Escupe una red de hilos extremadamente pegajosos sobre el campo de batalla enemigo.\n\nDisminuye inmediatamente la Vel. de todos los enemigos en el campo en -1. Además, cualquier enemigo nuevo que entre al combate pisará la red y su Velocidad también bajará en -1 automáticamente.\n\nDesventaja: Los Pokémon de tipo Volador o habilidades Inmunes no son afectados por la red.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Bicho",
        "nombre": "A Defender",
        "subtitulo": "3 PP",
        "desc": "Llama a un enjambre de insectos subordinados para que formen un escudo vivo alrededor del usuario.\n\nTira 1d6:\n4, 5 o 6: El enjambre es denso. Otorga +1 de Def. y +1 de Def. Esp. permanente durante el resto del combate.\n2 o 3: El enjambre es disperso. Otorga solo +1 de Def.\n1: Los subordinados no hacen caso y no consigues ninguna mejora.\n\n(Máximo acumulable en combate: +4 en cada estadística)."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Bicho",
        "nombre": "Danza Aleteo",
        "subtitulo": "4 PP",
        "desc": "Realiza un vuelo místico y hermoso que concentra la mente y aligera el cuerpo. Es considerado uno de los mejores bailes de mejora.\n\nTira 1d6:\n5 o 6: ¡Danza perfecta! Otorga +1 de Atq. Esp., +1 de Def. Esp. y +1 de Vel. permanente durante el resto del combate.\n2 a 4: Otorga +1 de Atq. Esp. y +1 de Vel.\n1: Tropiezas durante el vuelo, perdiendo el ritmo. No obtienes mejoras y pierdes tu turno.\n\n(Máximo acumulable en combate: +4 en cada estadística)."
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Cabeza de Hierro",
        "subtitulo": "3 PP",
        "desc": "(Cabeza de Hierro usa Atq.).\n\nEl usuario endurece su cabeza como el acero y embiste con todo su peso.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Impacto aturdidor! El golpe desorienta al enemigo, haciéndolo retroceder (pierde su próximo turno).\n2+: Daño normal.\n1: El enemigo se aparta a tiempo y chocas tu cabeza contra una pared o el suelo (-1 HP y -1 Vel. por el mareo).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Eléctrico o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Cola de Hierro",
        "subtitulo": "4 PP",
        "desc": "(Cola de Hierro usa Atq.).\n\nGolpea al objetivo con una cola dura como el acero puro. Es devastador pero algo impreciso.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Golpe aplastante! Hace daño normal y abolla la armadura del enemigo (Baja la Def. del rival en -1 por el resto del combate).\n3 o 4: Daño normal.\n1 o 2: Fallas el golpe y destrozas el suelo, perdiendo el turno sin hacer daño.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Eléctrico o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Cuerno Certero",
        "subtitulo": "4 PP",
        "desc": "(Cuerno Certero usa Atq.).\n\nClava un cuerno endurecido con una precisión quirúrgica, buscando los puntos vulnerables.\n\nEste ataque NUNCA falla. No importa si el enemigo tiene efectos de evasión; el ataque siempre conectará y hará su daño correspondiente.\n\nPara el Daño lanza 1d6.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Eléctrico o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Foco Resplandor",
        "subtitulo": "5 PP",
        "desc": "(Foco Resplandor usa Atq. Esp.).\n\nConcentra la luz del entorno en su cuerpo metálico y dispara un potente cañón de energía lumínica.\n\nTira 1d10, aplica el efecto según el resultado:\n\n9 o 10: ¡Haz cegador! Hace daño masivo y derrite la barrera mágica del enemigo (Baja su Def. Esp. en -1 permanentemente).\n2 a 8: Daño normal masivo.\n1: El cañón se sobrecalienta, el ataque falla y el usuario se quema levemente (-2 HP).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Eléctrico o Acero.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Meteoimpacto",
        "subtitulo": "10 PP",
        "desc": "(Meteoimpacto usa Atq.).\n\nLanza un puñetazo destructivo con la fuerza y velocidad de un meteorito cayendo a la tierra.\n\nTira 1d10, aplica el efecto según el resultado:\n\n10: ¡Impacto perfecto! Daño masivo. La fuerza del golpe motiva tu instinto de combate, otorgándote +1 de Atq. permanente por el resto de la batalla.\n3 a 9: Daño normal masivo.\n1 o 2: Fallas el golpe, golpeando el entorno y creando un cráter inútil.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Eléctrico o Acero.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Acero",
        "nombre": "Deseo Final",
        "subtitulo": "8 PP",
        "desc": "(Deseo Final usa Atq. Esp.).\n\nReúne una cantidad absurda de energía solar/estelar y pide un deseo destructivo. No hace daño en el turno que se usa.\n\nDos turnos después de haberlo activado, múltiples rayos de luz metálica caerán del cielo aniquilando al enemigo. En ese momento tira 1d10 para calcular un daño masivo que IGNORA las resistencias de tipo (golpea neutral a todos) y anula escudos activados después de usar Deseo Final.",
        "nivel": 4
    },
    {
        "tipo": "magia",
        "nivel": 4,
        "clasificacion": "Área",
        "elemento": "Acero",
        "nombre": "Fiebre Dorada",
        "subtitulo": "6 PP",
        "desc": "(Fiebre Dorada usa Atq. Esp.).\n\nGenera una lluvia masiva de monedas de oro macizo que caen como misiles sobre todos los enemigos del campo.\n\n(1) Tira 1d20:\n20: Lluvia devastadora. Daño masivo en área inesquivable. Al final de combate recibiras el doble de Poke's (Dinero).\n2+: Daño normal masivo en área.\n1: Las monedas se atoran o rebotan de regreso, perdiendo tu PP y tu turno.\n\n(2) Sin importar si aciertas o fallas, el inmenso esfuerzo de crear tanto oro disminuye tu Atq. Esp. en -1 permanentemente durante el combate.\n\nDesventaja: Este movimiento solo puede usarlo Gholdengo (y solo GHOLDENGO puede enseñarlo a otros Pokémon específicos)."
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Acero",
        "nombre": "Sonido Metálico",
        "subtitulo": "2 PP",
        "desc": "El usuario raspa sus extremidades de acero entre sí, generando un chirrido espantoso que altera los nervios de los rivales.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: El chirrido es insoportable. Baja la Def. Esp. del enemigo en -2 temporalmente (por 3 turnos).\n2 a 4: Baja la Def. Esp. del enemigo en -1 permanentemente.\n1: El sonido no es lo suficientemente agudo o el enemigo se tapa los oídos a tiempo. Fallas.\n\nDesventaja: No afecta a Pokémon con la habilidad Insonorizar.",
        "clasificacion": "Control",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 4,
        "clasificacion": "Mejora",
        "elemento": "Acero",
        "nombre": "Escudo Real",
        "subtitulo": "4 PP",
        "desc": "Adopta una postura defensiva regia, levantando un escudo impenetrable imbuido en magia.\n\n(1) El usuario bloquea el 100% del daño y de los efectos de ataques directos durante este turno. \nSi un enemigo ataca con un movimiento cuerpo a cuerpo (contacto físico), el escudo lo repele violentamente y baja el Atq. del atacante en -1 por el resto del combate.\n\n(2) Si intentas usar Escudo Real (o Protección) en turnos consecutivos, debes lanzar 1d6. Si sacas 1, 2 o 3, la guardia se rompe y recibes el ataque completo.\n\n(3) Si usas Escudo Real, tu Atq. se suma a tu Def. y tu Atq. Esp. se suma a tu Def. Esp dejandote el Atq. y Atq. Esp. se queden en 0 durante 2 turnos.\n \nDesventaja: Este movimiento solo puede aprenderlo Aegislash (y solo AEGISLASH puede enseñarlo a otros Pokémon específicos).\nAegislash es el unico que no es afectado por el tercer (3) efecto de Escudo Real."
    },
    {
        "tipo": "magia",
        "elemento": "Hielo",
        "nombre": "Canto Helado",
        "subtitulo": "2 PP",
        "desc": "(Canto Helado usa Atq.).\n\nEl usuario lanza trozos de hielo a una velocidad imperceptible.\n\nSolo puedes usar el efecto de prioridad una vez por combate o cuenta como turno extra.\n\nTira 1d6:\n2 a 6: Atacas tú primero (Prioridad) sin importar la Vel. del rival. Daño normal.\n1: El hielo se derrite antes de ser lanzado, fallando el ataque.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Acero o Hielo.",
        "clasificacion": "Prioridad",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Hielo",
        "nombre": "Chuzos",
        "subtitulo": "4 PP",
        "desc": "(Chuzos usa Atq.).\n\nHace caer estalactitas afiladas y pesadas sobre la cabeza del rival.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Impacto contundente! El peso del hielo hace retroceder al enemigo (pierde su próximo turno).\n2+: Daño normal.\n1: Los chuzos caen lejos del objetivo y se hacen añicos en el suelo inútilmente.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Acero o Hielo.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Hielo",
        "nombre": "Rayo Hielo",
        "subtitulo": "5 PP",
        "desc": "(Rayo Hielo usa Atq. Esp.).\n\nDispara un rayo de energía congelante directamente al cuerpo del objetivo.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: ¡Frío extremo! El enemigo queda [Congelado] (debe sacar 16+ en 1d20 para descongelarse y poder atacar).\n2+: Daño normal.\n1: El rayo se desvía y congela una parte del entorno, fallando el golpe.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Acero o Hielo.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Hielo",
        "nombre": "Ventisca",
        "subtitulo": "6 PP | Área",
        "desc": "(Ventisca usa Atq. Esp.).\n\nInvoca una tormenta de hielo brutal que arrasa todo el campo de batalla frente al usuario.\n\n(1) Tira 1d10, aplica el efecto según el resultado:\n\n10: ¡Devastación helada! Daño masivo inesquivable a todos los enemigos. Además, todos los afectados quedan [Congelados] (16+).\n3+: Daño normal masivo en área.\n1 o 2: Los vientos son demasiado erráticos, los enemigos logran cubrirse y el ataque falla por completo.\n\n(2) Si el clima \"Granizo\" está activo, este ataque nunca falla (ignora los resultados 1 y 2).\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Agua, Acero o Hielo.",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Hielo",
        "nombre": "Granizo",
        "subtitulo": "4 PP",
        "desc": "El usuario altera la temperatura drásticamente, provocando una feroz tormenta de granizo sobre el campo.\n\n(1) Tira 1d6:\n\n2 a 6: La tormenta se activa y dura 4 turnos completos.\n1: La temperatura no baja lo suficiente, el movimiento falla.\n\n(2) Al final de cada turno, TODOS los combatientes en el campo reciben -1 HP de daño por los golpes de hielo. (Los Pokémon de tipo Hielo son completamente inmunes a este daño).",
        "clasificacion": "Clima",
        "nivel": 1
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Hielo",
        "nombre": "Velo Aurora",
        "subtitulo": "4 PP",
        "desc": "Crea una hermosa y mística cortina de luz boreal que reduce los impactos físicos y mágicos.\n\nTira 1d6, aplica el efecto según el resultado:\n\n4, 5 o 6: La aurora cubre a TODO tu equipo. Todo el daño que reciban tú y tus aliados se reduce a la MITAD durante 3 turnos.\n2 o 3: La aurora es pequeña y solo te protege a ti (reduce tu daño a la mitad por 3 turnos).\n1: La aurora no logra formarse por falta de energía. Pierdes tu turno.\n\n(No es acumulable con otras barreras como Protección o Pantalla de Luz en el mismo turno)."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Soporte",
        "elemento": "Hielo",
        "nombre": "Niebla",
        "subtitulo": "2 PP",
        "desc": "Cubre el terreno aliado con una niebla blanca, gélida y muy espesa que oculta sus puntos débiles.\n\nTira 1d6:\n\n2 a 6: Durante los próximos 4 turnos, el usuario y sus aliados se vuelven INMUNES a cualquier efecto, habilidad o ataque enemigo que intente bajar sus estadísticas (Defensa, Velocidad, etc.).\n1: El viento sopla y disipa la niebla de inmediato, perdiendo el PP.\n\n(No evita estados alterados como quemaduras o parálisis)."
    },
    {
        "tipo": "magia",
        "elemento": "Dragón",
        "nombre": "Aliento Dragón",
        "subtitulo": "2 PP",
        "desc": "(Aliento Dragón usa Atq. Esp.).\n\nExhala una ráfaga de aire místico y sobrecalentado que adormece el cuerpo del rival.\n\nTira 1d4, aplica el efecto según el resultado:\n\n4: La energía ancestral paraliza el sistema nervioso del enemigo. Lo deja [Paralizado] (debe sacar 14+ en 1d20 para poder atacar).\n2 o 3: Daño normal.\n1: Te quedas sin aliento a mitad del ataque y fallas por completo.\n\nDesventaja: Mitad de daño a Pokémon tipo Acero. Completamente inutil contra tipo Hada.",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Dragón",
        "nombre": "Garra Dragón",
        "subtitulo": "3 PP",
        "desc": "(Garra Dragón usa Atq.).\n\nDesgarra al enemigo con unas garras afiladas envueltas en un aura dracónica destructiva.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Corte implacable! La energía desgarra la armadura, ignorando la mitad de la Def. del enemigo a la hora de calcular el daño.\n2 a 4: Daño normal.\n1: El enemigo esquiva el golpe y tus garras se atoran en el suelo o la pared (-1 Vel. por un turno).\n\nDesventaja: Mitad de daño a Pokémon tipo Acero. Completamente inutil contra tipo Hada.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Dragón",
        "nombre": "Pulso Dragón",
        "subtitulo": "4 PP | Área",
        "desc": "(Pulso Dragón usa Atq. Esp.).\n\nGenera una onda de choque expansiva desde la boca que tiene la forma de un dragón rugiendo.\n\nTira 1d6, aplica el efecto según el resultado:\n\n6: La onda es tan fuerte que hace retroceder a los enemigos golpeados (pierden su próximo turno por el impacto).\n2+: Daño normal en área.\n1: La energía dracónica colapsa en tu garganta, haciéndote perder -1 HP y fallando el ataque.\n\nDesventaja: Mitad de daño a Pokémon tipo Acero. Completamente inutil contra tipo Hada.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "elemento": "Dragón",
        "nombre": "Enfado",
        "subtitulo": "6 PP",
        "desc": "(Enfado usa Atq.).\n\nUn ataque de rabia pura y destructiva. El usuario se deja llevar por su instinto más salvaje.\n\nTira 1d10, aplica el efecto:\n\n9 o 10: ¡Furia imparable! Daño masivo. Además, en el SIGUIENTE turno repites este mismo ataque automáticamente SIN gastar PP y sumando un +2 extra al daño.\n2 a 8: Daño normal masivo.\n1: La furia te ciega, tropiezas y te estrellas contra el suelo (-3 HP de Daño de Retroceso).\n\nSin importar el resultado, después de ejecutar este ataque (o al terminar su repetición (si no sacaste 1)), el usuario queda [Confuso] por la fatiga.\n\nDesventaja: Mitad de daño a Acero. Inutil contra Hada.",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Dragón",
        "nombre": "Danza Dragón",
        "subtitulo": "3 PP",
        "desc": "Una danza mística y vigorosa que despierta los genes ancestrales de los dragones, mejorando la fuerza física y la agilidad a niveles terroríficos.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Danza perfecta! Otorga +1 de Atq. y +1 de Vel. permanente durante el resto del combate.\n2 a 4: Otorga +1 de Atq. o +1 de Vel. (tú eliges cuál subir).\n1: Tropiezas torpemente con tus propios pies o cola, perdiendo tu turno sin ganar mejoras.\n\n(Máximo acumulable en combate: +4 en cada estadística)."
    },
    {
        "tipo": "magia",
        "elemento": "Hada",
        "nombre": "Beso Drenaje",
        "subtitulo": "3 PP",
        "desc": "(Beso Drenaje usa Atq. Esp.).\n\nRoba la energía del objetivo con un beso ilusorio o de luz pura.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: Absorción feérica. Te curas a ti mismo la mitad del daño total que le hiciste al enemigo (redondeado hacia arriba).\n2 a 4: Daño normal y te curas +2 HP fijos.\n1: El enemigo te rechaza bruscamente, fallando el ataque y perdiendo el turno.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Veneno o Acero.",
        "nivel": 2
    },
    {
        "tipo": "magia",
        "nivel": 2,
        "clasificacion": "Área",
        "elemento": "Hada",
        "nombre": "Brillo Mágico",
        "subtitulo": "4 PP",
        "desc": "(Brillo Mágico usa Atq. Esp.).\n\nEmite un destello cegador de luz mística que impacta a los enemigos frente al usuario.\n\nTira 1d6, aplica el efecto según el resultado:\n\n5 o 6: ¡Destello cegador! El daño en área es crítico.\n2 a 4: Daño normal en área.\n1: La luz parpadea y se apaga antes de causar daño.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Veneno o Acero."
    },
    {
        "tipo": "magia",
        "elemento": "Hada",
        "nombre": "Carantoña",
        "subtitulo": "6 PP",
        "desc": "(Carantoña usa Atq.).\n\nUn ataque físico engañoso. El usuario parece jugar, pero golpea con una fuerza brutal y mágica.\n\nTira 1d10, aplica el efecto según el resultado:\n\n8, 9 o 10: ¡Juego brusco! Daño masivo. La fuerza mágica del impacto baja el Atq. del enemigo en -1 permanentemente.\n3 a 7: Daño normal masivo.\n1: Calculas mal tu salto y te estrellas, perdiendo el turno y recibiendo -1 HP.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Veneno o Acero.",
        "nivel": 3
    },
    {
        "tipo": "magia",
        "elemento": "Hada",
        "nombre": "Fuerza Lunar",
        "subtitulo": "6 PP",
        "desc": "(Fuerza Lunar usa Atq. Esp.).\n\nInvoca el poder puro y pesado de la luna para aplastar al rival.\n\nTira 1d10, aplica el efecto según el resultado:\n\n9 o 10: ¡Impacto estelar! Daño masivo. La presión cósmica rompe la mente del rival, bajando su Atq. Esp. en -1 por el resto del combate.\n2 a 8: Daño normal masivo.\n1: La conexión cósmica se rompe, fallas el ataque y pierdes -2 HP por el estrés mágico.\n\nDesventaja: Mitad de daño a Pokémon tipo Fuego, Veneno o Acero.",
        "nivel": 3
    },
    {
        "tipo": "tecnica_con_pp",
        "elemento": "Hada",
        "nombre": "Luz Lunar",
        "subtitulo": "4 PP",
        "desc": "El usuario se baña en la luz de la luna para restaurar su vitalidad y sus heridas.\n\n(1) Tira 1d6 para determinar la sanación:\n\n5 o 6: Recuperas +15 HP.\n2 a 4: Recuperas +10 HP.\n1: Las nubes tapan la luna o te desconcentras, curando solo +2 HP.\n\n(2) Si el clima del campo es Despejado o hay luz de luna directa, este movimiento siempre curará el máximo (+15 HP) sin importar el resultado del dado.",
        "clasificacion": "Curación",
        "nivel": 1
    },
    {
        "tipo": "magia",
        "elemento": "Hada",
        "nombre": "Luz de la Ruina",
        "subtitulo": "8 PP",
        "desc": "(Luz de la Ruina usa Atq. Esp.).\n\n\"Flor de luz fatal, rompe la ilusión,\nBorra el lienzo gris, de esta creación.\nFragmenta el cristal, marchita la flor,\nTrae la dulce ruina... y el fin del color\"\n\nTira 1d20 para revelar su letal efecto:\n\n20 (Natural): ¡El Desgarro Cósmico! El daño causado es Absoluto e Inesquivable (Daño Masivo X2). Sin embargo, el poder inmenso exige un sacrificio: el usuario pierde automáticamente la mitad de su HP actual por el retroceso.\n5 a 19: El láser de luz antigua impacta causando daño masivo directo. El usuario sufre Daño de Retroceso severo (-4 HP).\n2 a 4: (Sumas +2 al daño por tratar de esforzarte) Impacta causando daño masivo directo. El usuario sufre Daño de Retroceso severo (-6 HP).\n1: CUIDADO La luz colapsa antes de dispararse. El usuario y todos en el lugar reciben -10 HP de daño directo por la inestabilidad de la energía prohibida.\n\nDesventaja: Este movimiento solo puede aprenderlo Floette Flor Eterna (y solo ELLA puede aprenderlo a otros Pokemon).",
        "nivel": 4
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Clima",
        "elemento": "Fuego",
        "nombre": "Día Soleado",
        "subtitulo": "4 PP",
        "desc": "El usuario intensifica los rayos del sol, creando un clima de calor abrasador sobre el campo de batalla.\n\n(1) Tira 1d6:\n\n2 a 6: El sol extremo se activa y dura 4 turnos completos.\n1: Una nube densa tapa el sol abruptamente, el movimiento falla.\n\n(2) Mientras esté activo, suma un +2 al Daño Final calculado de cualquier ataque de tipo Fuego.\n\n(3) Todo el daño de los ataques de tipo Agua se reduce a la MITAD.\n\n(4) Los movimientos de curación basados en luz (como Luz Lunar) curarán siempre su máximo posible (+15 HP) sin importar lo que salga en el dado."
    },
    {
        "tipo": "tecnica_con_pp",
        "nivel": 2,
        "clasificacion": "Clima",
        "elemento": "Agua",
        "nombre": "Danza Lluvia",
        "subtitulo": "4 PP",
        "desc": "El usuario realiza una danza mística que invoca densas nubes y desata un aguacero torrencial.\n\n(1) Tira 1d6:\n\n2 a 6: La lluvia torrencial se activa y dura 4 turnos completos.\n1: La humedad se disipa rápidamente y no cae ni una gota, el movimiento falla.\n\n(2) Mientras esté activo, suma un +2 al Daño Final calculado de cualquier ataque de tipo Agua.\n\n(3) Todo el daño de los ataques de tipo Fuego se reduce a la MITAD.\n\n(4) Si se lanzan ataques de área o baja precisión, el agua los guía, haciéndolos Infalibles (no fallan con 1 ni 2 en sus dados)."
    },
    {
        "tipo": "receta",
        "elemento": "Curación",
        "nombre": "Jugo Dulce de Baya Aranja",
        "subtitulo": "Bebida Básica",
        "desc": "**Ingredientes:** 2x Baya Aranja, 1x Agua Fresca.\n\nUn jugo muy dulce y refrescante, ideal para los primeros auxilios. Restaura +10 HP a quien lo beba. No ocupa tirada de dado para consumirse en combate.",
        "nivel": 1
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Ensalada de Raíces Energía",
        "subtitulo": "Comida Amarga",
        "desc": "**Ingredientes:** 1x Raíz Energía, 2x Hojas Silvestres.\n\nUna ensalada terriblemente amarga pero milagrosa. Restaura +20 HP al instante. Sin embargo, su mal sabor es tan fuerte que el consumidor recibe -1 de Atq. Esp. durante su próximo turno por el asco."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Sopa de Setas Grandes",
        "subtitulo": "Comida Caliente",
        "desc": "**Ingredientes:** 1x Seta Grande, 1x Baya Meloc, 1x Agua Fresca.\n\nUn caldo espeso y reconfortante. Restaura +15 HP y además cura automáticamente el estado [Envenenado] (incluso si es Envenenamiento Grave)."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Té Despertar de Baya Atania",
        "subtitulo": "Infusión Mágica",
        "desc": "**Ingredientes:** 2x Baya Atania, 1x Polvo Estelar.\n\nUna bebida caliente que huele a menta fuerte. Si un aliado está [Dormido], dársela lo despierta inmediatamente y le otorga +1 de Velocidad (VEL) en ese mismo turno por el subidón de energía."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Tónico de Miel Combee",
        "subtitulo": "Bebida Energética",
        "desc": "**Ingredientes:** 1x Miel, 1x Baya Zidra.\n\nUn jarabe muy espeso que revitaliza la mente. No restaura HP, pero recupera +4 PP de cualquier movimiento que elijas. Ideal para los magos del grupo."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Galletas Lava Horneadas",
        "subtitulo": "Postre Crujiente",
        "desc": "**Ingredientes:** 1x Polvo de Carbón, 2x Baya Safre, 1x Miel.\n\nUnas galletas tradicionales que crujen como piedra. Cura TODOS los estados alterados (Congelado, Quemado, Paralizado, Dormido, Confuso o Envenenado) de un aliado. Restaura +5 HP."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Panecillo de Baya Zan",
        "subtitulo": "Comida Casera",
        "desc": "**Ingredientes:** 2x Baya Zan, 1x Seta Pequeña.\n\nUn panecillo suave con mermelada. Cura la [Confusión] y restaura +10 HP. Si se come fuera de combate, su delicioso sabor mejora el ánimo del equipo."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Guiso Picante de Baya Tamate",
        "subtitulo": "Comida Intensa",
        "desc": "**Ingredientes:** 2x Baya Tamate, 1x Champiñón Picante, 1x Carne Seca.\n\nUn plato que te hace sudar a mares. Cura +10 HP. Además, la furia del picante le otorga al consumidor +1 de Ataque (Atq.) físico durante todo el combate."
    },
    {
        "tipo": "receta",
        "nivel": 4,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Revitalizador de Hierba Mental",
        "subtitulo": "Medicina Natural",
        "desc": "**Ingredientes:** 2x Hierba Mental, 1x Raíz Energía, 1x Baya Zidra.\n\nUna pasta verdosa de olor penetrante. Si un aliado cae en combate (llega a 0 HP), aplicarle esto lo revive inmediatamente con la MITAD de sus HP máximos."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Batido Cítrico Multivitamínico",
        "subtitulo": "Bebida Completa",
        "desc": "**Ingredientes:** 1x Baya Aranja, 1x Baya Zidra, 1x Baya Meloc.\n\nUna mezcla tropical deliciosa. Restaura +25 HP de golpe. Es uno de los mejores objetos curativos que puedes preparar con ingredientes comunes."
    },
    {
        "tipo": "receta",
        "elemento": "Curación",
        "nombre": "Manzanas Asadas con Miel",
        "subtitulo": "Receta de Tierras Salvajes",
        "desc": "**Ingredientes:** 2x Baya Zan (Manzana), 1x Miel Combee.\n\nUna receta clásica de las praderas de un reino lejano adaptada a este mundo. Restaura +15 HP. Al estar recubierta de miel caramelizada, su sabor alivia la fatiga y restaura +1 PP extra al instante.",
        "nivel": 1
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Curación",
        "nombre": "Sopa de Calabaza Robusta",
        "subtitulo": "Comida Consistente",
        "desc": "**Ingredientes:** 1x Calabaza Grande, 1x Leche Mu-mu, 1x Especias Suaves.\n\nUna receta famosa de una aldea pacífica. Es tan espesa y nutritiva que, además de curar +10 HP, endurece el cuerpo del consumidor otorgándole +2 de Defensa (DEF) durante los próximos 3 turnos."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Protección",
        "elemento": "Curación",
        "nombre": "Mar y Tierra Picante",
        "subtitulo": "Plato de Supervivencia.",
        "desc": "**Ingredientes:** 1x Carne Cruda, 1x Pescado Fresco, 1x Baya Tamate.\n\nEl plato favorito de cierto anciano misterioso que vive en una meseta aislada. Cura +30 HP de golpe. Su increíble nivel de picante hace al usuario completamente INMUNE al daño y efectos de los ataques de tipo Hielo (y a la congelación) durante todo el combate."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Protección",
        "elemento": "Soporte",
        "nombre": "Infusión de Baya Perasi",
        "subtitulo": "Bebida Gélida",
        "desc": "**Ingredientes:** 2x Baya Perasi, 1x Agua Fresca, 1x Hielo Seco.\n\nUna bebida tan fría que congela el cerebro si se bebe rápido. Cura automáticamente la [Quemadura]. Además, el próximo ataque de tipo Fuego que reciba el usuario verá su daño reducido a 0 (Inmunidad a un golpe)."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Curry de Baya Algama",
        "subtitulo": "Plato Complejo",
        "desc": "**Ingredientes:** 2x Baya Algama, 1x Paquete de Curry, 1x Carne Seca.\n\nUn plato de sabor profundo y textura cremosa. Al comerlo, la mente del usuario se aclara de golpe: otorga +1 de Atq. Esp. y +1 de Def. Esp. permanente para el resto de ese combate."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Ensalada de Baya Zreza",
        "subtitulo": "Comida Ligera",
        "desc": "**Ingredientes:** 3x Baya Zreza, 1x Hojas Silvestres.\n\nUna ensalada agridulce muy crujiente. Cura la [Parálisis] de inmediato y otorga +5 HP. Oler sus hojas te hace sentir más ligero y ágil (+1 Vel. por un turno)."
    },
    {
        "tipo": "receta",
        "nivel": 4,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Estofado de Cola de Slowpoke",
        "subtitulo": "Manjar Exquisito",
        "desc": "**Ingredientes:** 1x Cola de Slowpoke, 2x Seta Grande, 1x Leche Mu-mu.\n\nUn platillo de altísimo valor, cremoso y dulzón. Restaura completamente los HP (hasta el máximo de la vitalidad) de quien lo consuma. Se rumorea que sus ingredientes son ilegalmente caros en el mercado negro."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Zumo Púrpura Purificador",
        "subtitulo": "Bebida Desintoxicante",
        "desc": "**Ingredientes:** 2x Baya Meloc, 1x Polvo Veneno, 1x Agua Fresca.\n\nAplicando el peligroso principio de 'el veneno cura al veneno', esta mezcla burbujeante hace a un personaje completamente inmune a la condición de [Envenenado] y [Envenenamiento Grave] durante todo un combate."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Batido de Polvo Estelar",
        "subtitulo": "Bebida Mística",
        "desc": "**Ingredientes:** 1x Polvo Estelar, 2x Baya Aranja, 1x Leche Mu-mu.\n\nUna bebida que brilla suavemente en la oscuridad. Restaura +2 PP de cualquier movimiento. Si el usuario es de tipo Hada o Dragón, además se cura +10 HP adicionales por la sinergia mágica de su ADN."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Tarta de Baya Atania",
        "subtitulo": "Postre Despertador",
        "desc": "**Ingredientes:** 3x Baya Atania, 1x Harina, 1x Miel Combee.\n\nUna tarta que huele a café fuerte y menta. Si un jugador cae [Dormido] mágicamente, comer una rebanada lo despierta de inmediato y lo hace inmune al sueño por el resto de la batalla."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Curación",
        "nombre": "Filete de Tauros a la Parrilla",
        "subtitulo": "Banquete Carnívoro",
        "desc": "**Ingredientes:** 2x Carne Cruda, 1x Especias Fuertes, 1x Baya Tamate.\n\nUn corte de carne jugoso y lleno de proteínas. Restaura +10 HP. La fuerza pura de la carne otorga un brutal +2 de Ataque (Atq.) físico durante los próximos 3 turnos, ideal para romper defensas pesadas."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "???",
        "elemento": "Soporte",
        "nombre": "Guiso Sospechoso",
        "subtitulo": "Comida Censurada",
        "desc": "**Ingredientes:** 1x Baya Extraña, 1x Restos de Monstruo, 1x Hojas Silvestres (o ingredientes sin sinergia).\n\nUna mezcla de color morado brillante que burbujea sola y huele a peligro. Si te atreves a comerlo, tira 1d6: con 4, 5 o 6 te curas un masivo +20 HP. Con 1, 2 o 3 te intoxicas por el asco, perdiendo -5 HP y quedando [Envenenado]."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Tarta de Baya Enigma",
        "subtitulo": "Postre Impredecible",
        "desc": "**Ingredientes:** 1x Baya Enigma, 2x Harina, 1x Leche Mu-mu.\n\nUn pastel que cambia de color y sabor con cada mordisco. \nAl comerlo, tira 1d4 para descubrir su efecto místico:\n1: +2 Atq.\n2: +2 Def.\n3: +2 Vel.\n4: Te quedas [Dormido] de inmediato por lo pesada que es. El efecto positivo dura todo el combate."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Taco de Raíz Energía",
        "subtitulo": "Comida Callejera",
        "desc": "**Ingredientes:** 1x Raíz Energía, 1x Harina, 1x Carne Seca.\n\nUn bocadillo rápido y muy amargo, pero envuelto en una deliciosa tortilla para disimular. Restaura +15 HP y, por su portabilidad, se puede consumir como una Acción Rápida (no gasta tu turno completo de ataque pero solo puedes usar ataques normales)."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Macarrones de Polvo Estelar",
        "subtitulo": "Postre Fino",
        "desc": "**Ingredientes:** 1x Polvo Estelar, 1x Baya Meloc, 1x Miel Combee.\n\nUnos dulces crujientes por fuera y mágicos por dentro. No curan HP, pero expanden la mente del usuario, otorgando +2 de Atq. Esp. durante todo el combate. Si lo come un aliado de tipo Psíquico o Hada, recupera +2 PP extra."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Coraza de Pan de Piedra",
        "subtitulo": "Receta de las Montañas",
        "desc": "**Ingredientes:** 2x Harina, 1x Polvo de Carbón, 1x Agua Fresca.\n\nUn pan tan duro que podrías usarlo como arma, pero altamente rico en minerales. Cura +5 HP. Al digerirlo, tu piel se endurece otorgando +2 de Defensa (DEF) contra ataques físicos por el resto del combate."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Albóndigas Voltorb Picantes",
        "subtitulo": "Comida Explosiva",
        "desc": "**Ingredientes:** 2x Carne Cruda, 2x Champiñón Picante.\n\nUnas albóndigas redondas y rojas que chisporrotean. Al comerlas curan +15 HP, pero debes tirar 1d6. Si sacas un 1 o un 2, el picante es tan explosivo que el usuario recibe -5 HP de Daño de Retroceso y queda [Confuso] por un turno."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Brochetas de Baya Asper",
        "subtitulo": "Snack Aerodinámico",
        "desc": "**Ingredientes:** 2x Baya Asper, 1x Hojas Silvestres.\n\nUnas bayas ácidas asadas en una vara. Su acidez extrema hace que tus músculos se contraigan y reacciones más rápido. Cura +5 HP y te otorga un aumento de +2 de Velocidad (VEL) para asegurar que ataques primero en los próximos 2 turnos."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Sopa Clara de Manantial",
        "subtitulo": "Plato Purificador",
        "desc": "**Ingredientes:** 2x Agua Fresca, 1x Baya Safre, 1x Seta Pequeña.\n\nUn caldo transparente y sin condimentos que limpia el organismo de toxinas. Restaura +10 HP y elimina cualquier penalización de estadísticas (ej. si el enemigo te bajó la Defensa o Velocidad con un ataque, vuelves a la normalidad)."
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Zumo Espirituoso de Baya Zidra",
        "subtitulo": "Bebida Fermentada",
        "desc": "**Ingredientes:** 3x Baya Zidra, 1x Miel Combee. (Dejado reposar).\n\nUn jugo que ha pasado su punto de maduración y ahora tiene efectos embriagadores. Cura unos masivos +25 HP de golpe y puedes atacar con ataques normales aun en este turno, pero el alcohol te deja [Confuso] por 2 turnos (debes sacar 11+ en tu d20 para no golpearte a ti mismo)."
    },
    {
        "tipo": "receta",
        "nivel": 1,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Jugo Concentrado de Baya Zan",
        "subtitulo": "Bebida Mágica Básica",
        "desc": "**Ingredientes:** 2x Baya Zan, 1x Agua Fresca.\n\nUn jugo dulce que revitaliza la mente al instante. Restaura +5 PP a quien lo beba. Ideal para mantener el ritmo de los ataques elementales en combates regulares."
    },
    {
        "tipo": "receta",
        "elemento": "Soporte",
        "nombre": "Café Expreso de Raíz Energía",
        "subtitulo": "Estimulante Intenso",
        "desc": "**Ingredientes:** 1x Raíz Energía, 1x Polvo de Carbón, 1x Agua Fresca.\n\nUna infusión extremadamente oscura, amarga y densa. Restaura unos masivos +10 PP de golpe por el subidón de cafeína y magia, pero el nerviosismo extremo hace que el consumidor pierda -1 de Defensa (DEF) por los próximos 2 turnos.",
        "nivel": 1
    },
    {
        "tipo": "receta",
        "nivel": 2,
        "clasificacion": "Curación",
        "elemento": "Curación",
        "nombre": "Té de Miel y Polvo Estelar",
        "subtitulo": "Infusión Relajante",
        "desc": "**Ingredientes:** 1x Miel Combee, 1x Polvo Estelar, 1x Baya Aranja.\n\nUna bebida caliente y reconfortante que brilla suavemente en la taza. Al beberla, el cuerpo y la mente se relajan al unísono: restaura +5 HP y +5 PP simultáneamente. Es un bálsamo perfecto para los magos heridos."
    },
    {
        "tipo": "receta",
        "nivel": 3,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Postre Místico de Hadas",
        "subtitulo": "Manjar Legendario",
        "desc": "**Ingredientes:** 2x Baya Enigma, 2x Miel Combee, 1x Leche Mu-mu.\n\nUn postre digno de la realeza mágica. Consumirlo restaura la increíble cantidad de +15 PP. Además, el aura pura y dulce del platillo despeja la mente, curando instantáneamente cualquier estado de [Confusión] o [Sueño] que aflija al usuario."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Baya Aranja",
        "subtitulo": "Baya",
        "desc": "Una baya muy común de color azul. Si se come cruda, restaura +5 HP al instante. Es la base de muchos platillos curativos."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Meloc",
        "subtitulo": "Baya",
        "desc": "Una baya con forma de durazno rosado. Su jugo neutraliza toxinas suaves. Comerla cruda cura automáticamente el estado de [Envenenado] y [Envenenamiento Grave]."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Atania",
        "subtitulo": "Baya",
        "desc": "Una baya dura y algo amarga. Su sabor te da un sobresalto. Comerla cruda cura el estado [Dormido] al instante."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Agua Fresca",
        "subtitulo": "Agua Embotellada",
        "desc": "Agua mineral extraída del Monte Corona. Beberla restaura +10 HP. Es el líquido base más importante para sopas y jugos."
    },
    {
        "tipo": "consumible",
        "nivel": 4,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Leche Mu-mu",
        "subtitulo": "Leche",
        "desc": "Leche fresca y muy nutritiva. Beberla restaura +15 HP. Además, por su alto valor nutricional, puede calmar los nervios, curando la [Confusión]."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Carne Cruda",
        "subtitulo": "Ingrediente de Caza",
        "desc": "Un trozo de carne recién cortado. \n[Peligro de Ingestión]: Si te la comes cruda en combate por desesperación, tira 1d6. Con 4, 5 o 6 recuperas +5 HP. Con 1, 2 o 3 te da dolor de estómago, pierdes -2 HP y tu próximo turno. ¡Mejor cocínala!"
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Raíz Energía",
        "subtitulo": "Raíz Silvestre",
        "desc": "Una raíz gruesa que contiene mucha vitalidad. \n[Sabor Horrible]: Si la comes cruda, te curas +15 HP de golpe. Sin embargo, su sabor es tan asqueroso que reduce tu Velocidad (VEL) en -1 por el resto del combate debido a las náuseas."
    },
    {
        "tipo": "consumible",
        "nivel": 4,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Miel Combee",
        "subtitulo": "Néctar Dulce",
        "desc": "Un tarro de miel dorada y brillante. Comerla cruda directamente del tarro no restaura HP, pero recupera +2 PP de cualquier movimiento."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Seta Pequeña",
        "subtitulo": "Hongo Pequeño",
        "desc": "Un hongo recolectado en cuevas o bosques húmedos. Comerlo crudo apenas restaura +2 HP y sabe a tierra. Es mejor guardarlo para hacer brochetas."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Polvo Estelar",
        "subtitulo": "Mineral Mágico",
        "desc": "Arena roja y brillante recolectada en zonas de meteoritos. \nNo se debe comer sola. Sin embargo, si un jugador se esparce este polvo sobre sí mismo, brillará en la oscuridad durante toda una exploración de mazmorra (útil en cuevas sin antorchas)."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Baya Zan",
        "subtitulo": "Baya",
        "desc": "Una baya con forma de manzana. Si se come cruda en combate, su jugo dulce y textura firme restauran +5 HP de manera segura y rápida.\n[Sustituto]: Puede llegar a ser buen sustito de ingredientes parecidos."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Baya Tamate",
        "subtitulo": "Baya",
        "desc": "Una baya roja y abultada que arde al tacto.\n[Peligro de Ingestión]: Si se come cruda, tira 1d6. Con 4, 5 o 6 la adrenalina te otorga +1 de Atq. temporalmente. Con 1, 2 o 3, te quemas la lengua, pierdes -2 HP y tu próximo turno por el dolor."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "???",
        "elemento": "Curación",
        "nombre": "Baya Enigma",
        "subtitulo": "Baya",
        "desc": "Una baya oscura con manchas que parecen estrellas.\n[Efecto Caótico]: Comerla cruda restaura +5 HP y +2 PP, pero la sobrecarga de energía cósmica deja al usuario [Confuso] durante 1 turno."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Safre",
        "subtitulo": "Baya",
        "desc": "Una baya amarilla que reseca la boca. Su pulpa tiene propiedades refrescantes que absorben el calor. Comerla cruda cura instantáneamente el estado [Quemado]."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Asper",
        "subtitulo": "Baya",
        "desc": "Una baya verde y dura. Su acidez extrema provoca escalofríos. Comerla cruda te despierta bruscamente, curando el estado [Dormido] o curando mágicamente la [Congelación] por el espasmo muscular."
    },
    {
        "tipo": "consumible",
        "nivel": 4,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Cola de Slowpoke",
        "subtitulo": "Ingrediente Ilegal",
        "desc": "Un manjar carísimo y muy difícil de conseguir.\n[Pesadez Dulce]: Si te la comes cruda, es muy gomosa y deliciosa. Restaura +10 HP, pero la digestión es tan pesada que reduce tu Velocidad (VEL) en -1 por el resto del combate."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Champiñón Picante",
        "subtitulo": "Hongo Peligroso",
        "desc": "Un hongo rojo que emite un ligero humo.\n[Fuego Interno]: Si lo muerdes crudo, sufres el estado [Quemado] (-1 HP por turno), pero el calor extremo hace que tus ataques físicos causen +1 de Daño extra mientras ardas."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Carne Seca",
        "subtitulo": "Ración de Viaje",
        "desc": "Carne curada en sal que dura meses sin echarse a perder. Al masticarla en combate restaura +5 HP, es muy dura que se dificulta masticarla."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Hojas Silvestres",
        "subtitulo": "Hierba Común",
        "desc": "Hojas recolectadas de arbustos limpios. Crudas no curan vitalidad, pero masticarlas en silencio ayuda a calmar la ansiedad, curando condiciones leves de [Confusión]."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Especias Fuertes",
        "subtitulo": "Condimento Intenso",
        "desc": "Un polvo molido de semillas raras.\n[Peligro de Ingestión]: Ingerir este polvo crudo es una pésima idea. Provoca un ataque de estornudos tan violento que el usuario pierde automáticamente su próximo turno."
    },
    {
        "tipo": "arma",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Cuerpo a Cuerpo",
        "nombre": "Espada Larga de Hierro",
        "subtitulo": "Arma Básica",
        "desc": "Una espada recta y bien balanceada, forjada en acero común.\n\n[Efecto de Equipo]: Otorga un bono pasivo de +1 al Ataque (Atq.) físico mientras esté equipada. Es el arma estándar de cualquier aventurero novato."
    },
    {
        "tipo": "arma",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Cuerpo a Cuerpo",
        "nombre": "Dagas de Ladrón",
        "subtitulo": "Arma Doble",
        "desc": "Un par de cuchillos cortos y muy ligeros.\n\n[Efecto de Equipo]: Son tan rápidas que te permiten tirar 2d20 al hacer un ataque físico básico y elegir el resultado más alto. Sin embargo, debido a su corto alcance, restan -1 al Daño Final de tus golpes."
    },
    {
        "tipo": "arma",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Cuerpo a Cuerpo",
        "nombre": "Martillo de Forja",
        "subtitulo": "Arma Pesada",
        "desc": "Un martillo de cabeza cuadrada diseñado para abollar armaduras.\n\n[Efecto de Equipo]: Otorga un masivo +2 al Ataque (Atq.), pero su inmenso peso reduce tu Velocidad (VEL) en -1 permanentemente mientras lo empuñes."
    },
    {
        "tipo": "arma",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Distancia o Rango",
        "nombre": "Arco de Cazador",
        "subtitulo": "Arma a Distancia",
        "desc": "Un arco de madera de fresno curvo y resistente.\n\n[Efecto de Equipo]: Te permite realizar ataques físicos básicos a distancia. Eres inmune a habilidades o contraataques que requieran contacto físico (como la habilidad Punta Acero o el movimiento Escudo Real)."
    },
    {
        "tipo": "arma",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Distancia o Rango",
        "nombre": "Báculo de Aprendiz",
        "subtitulo": "Arma Mágica",
        "desc": "Una vara de madera con un pequeño cristal de cuarzo en la punta.\n\n[Efecto de Equipo]: No sirve para golpear, pero canaliza la energía interior. Otorga un bono de +1 al Ataque Especial (Atq. Esp.) mientras se sostenga en las manos."
    },
    {
        "tipo": "arma",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Cuerpo a Cuerpo",
        "nombre": "Lanza de Guardia",
        "subtitulo": "Arma de Alcance",
        "desc": "Una lanza larga con punta de hierro.\n\n[Efecto de Equipo]: Otorga +1 al Ataque (Atq.). Su largo alcance te permite atacar a enemigos voladores cuerpo a cuerpo sin sufrir penalización, y atacar desde la segunda línea de tu formación sin que los enemigos de corto alcance te alcancen."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Ligera",
        "nombre": "Peto de Cuero Curtido",
        "subtitulo": "Def.",
        "desc": "Una armadura hecha de pieles superpuestas y endurecidas.\n\n[Efecto de Equipo]: Otorga +1 a la Defensa (DEF) física. Es tan ligera que no afecta tus movimientos ni tu capacidad de esquivar."
    },
    {
        "tipo": "armadura",
        "nivel": 2,
        "clasificacion": "Protección",
        "elemento": "Pesada",
        "nombre": "Cota de Mallas Pesada",
        "subtitulo": "Def.",
        "desc": "Una red de anillos de acero entrelazados que cubre el torso.\n\n[Efecto de Equipo]: Otorga +2 a la Defensa (DEF) física contra cortes y golpes. Sin embargo, su peso ruidoso reduce tu Velocidad (VEL) en -1."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Ligera",
        "nombre": "Túnica de Sabio",
        "subtitulo": "Def. Mágica",
        "desc": "Una capa tejida con hilos imbuidos en energía elemental.\n\n[Efecto de Equipo]: Otorga +1 a la Defensa Especial (Def. Esp.), ayudando a resistir el daño de hechizos, rayos y fuego."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Media",
        "nombre": "Escudo de Madera Dura",
        "subtitulo": "Def. Auxiliar",
        "desc": "Un escudo circular de roble con un borde de hierro.\n\n[Efecto de Equipo]: Otorga +1 a la Defensa (DEF).\n[Mecánica de Sacrificio]: Si un enemigo saca un 20 Natural (Crítico) contra ti, puedes elegir que el escudo absorba todo el golpe. Recibes 0 de daño, pero el escudo se hace astillas y se destruye permanentemente."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Ligera",
        "nombre": "Botas de Explorador",
        "subtitulo": "Calzado",
        "desc": "Unas botas de suela muy gruesa diseñadas para terrenos hostiles.\n\n[Efecto de Equipo]: Otorga +1 a la Velocidad (VEL). Además, te hace completamente inmune a trampas de suelo como 'Púas' o 'Red Viscosa' al entrar al combate."
    },
    {
        "tipo": "armadura",
        "nivel": 2,
        "clasificacion": "Protección",
        "elemento": "Pesada",
        "nombre": "Yelmo de Caballero",
        "subtitulo": "Casco",
        "desc": "Un casco de hierro cerrado con una pequeña ranura para los ojos.\n\n[Efecto de Equipo]: Otorga +1 a la Defensa (DEF). Su diseño protege el cráneo de conmociones, haciéndote inmune a cualquier ataque que intente causarte el estado de [Confusión] por golpes físicos."
    },
    {
        "tipo": "reliquia",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Ligera",
        "nombre": "Anillo de Vitalidad",
        "subtitulo": "Anillo",
        "desc": "Un anillo de plata con un rubí incrustado que palpita suavemente.\n\n[Efecto de Equipo]: Mientras esté equipado, aumenta tus HP Máximos en +5. (Si te lo quitas, pierdes esos 5 puntos de vida máxima)."
    },
    {
        "tipo": "reliquia",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Amuleto de la Estrella",
        "subtitulo": "Amuleto",
        "desc": "Un colgante con un fragmento de meteorito que brilla en la oscuridad.\n\n[Efecto de Equipo]: Mientras esté equipado, aumenta tus PP Máximos en +3, permitiéndote lanzar más magias antes de cansarte."
    },
    {
        "tipo": "reliquia",
        "nivel": 2,
        "clasificacion": "Protección",
        "elemento": "Agua",
        "nombre": "Colgante de Gota Pura",
        "subtitulo": "Colgante",
        "desc": "Un collar con un zafiro frío al tacto que siempre está húmedo.\n\n[Efecto de Equipo]: El aura de agua pura que emite hace al portador completamente inmune a la condición de estado [Quemado]."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Mejora",
        "elemento": "Ligera",
        "nombre": "Bufanda de Seda Ligera",
        "subtitulo": "Acce.",
        "desc": "Una bufanda blanca que parece flotar sola con el viento.\n\n[Efecto de Equipo]: Aumenta tu aerodinámica, otorgando un bono pasivo de +1 a tu Capacidad de Iniciativa (C.I.), ayudándote a esquivar mejor los ataques."
    },
    {
        "tipo": "armadura",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Lucha",
        "nombre": "Cinturón Negro",
        "subtitulo": "Accesorio",
        "desc": "Un cinturón gastado que representa años de disciplina marcial.\n\n[Efecto de Equipo]: Potencia el espíritu de lucha del portador. Todo el daño final causado por movimientos de tipo Lucha (como Espada Santa) aumenta en +1."
    },
    {
        "tipo": "armadura",
        "nivel": 1,
        "clasificacion": "Protección",
        "elemento": "Ligera",
        "nombre": "Lentes de Precisión",
        "subtitulo": "Acce.",
        "desc": "Unos anteojos especiales con lentes tintados que evitan los reflejos.\n\n[Efecto de Equipo]: El portador ignora por completo cualquier daño ante climas así como bajas a su Vel."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "Curación",
        "elemento": "Soporte",
        "nombre": "Hierba  Mental",
        "subtitulo": "Hierba Medicinal",
        "desc": "Una hierba seca de aroma penetrante y profundamente relajante. Su simple olor ayuda a despejar los pensamientos nublados.\n\n[Uso en Combate/Exploración]: Al consumirla o masticarla, el usuario se cura instantáneamente de cualquier estado mental negativo como [Confusión], [Provocación] o [Enamoramiento].\n[Uso Culinario]: Es un ingrediente clave y muy cotizado en recetas exóticas para calmar el espíritu."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Pescado Fresco",
        "subtitulo": "Pez de lo Salvaje",
        "desc": "Un pez recién capturado, con escamas brillantes y ojos claros. Huele a río limpio y promete ser una comida nutritiva.\n\n[Uso en Exploración]: Si un jugador está desesperado y lo come crudo, restaura solo +5 HP.\n[Uso Culinario]: Un ingrediente fundamental en la cocina. Perfecto para asados, caldos reconfortantes o para alimentar a aliados con un apetito voraz."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Harina",
        "subtitulo": "Harina de Trigo",
        "desc": "Un polvo blanco y fino obtenido al moler cereales de la mejor calidad. Viene en un pequeño saco de tela.\n\n[Uso en Exploración]: Ingerirla cruda es una pésima idea (te deja la boca seca, te hace toser y no restaura HP). Sin embargo, puedes arrojarla a los ojos de un enemigo para intentar cegarlo temporalmente.\n[Uso Culinario]: La base absoluta para panes, pasteles, rebozados y espesar salsas."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "Control",
        "elemento": "Soporte",
        "nombre": "Polvo de Carbón",
        "subtitulo": "Polvo",
        "desc": "Un polvo blanco y fino obtenido al moler cereales de la mejor calidad. Viene en un pequeño saco de tela.\n\n[Uso en Exploración]: Ingerirla cruda es una pésima idea (te deja la boca seca, te hace toser y no restaura HP). Sin embargo, puedes arrojarla a los ojos de un enemigo para intentar cegarlo temporalmente.\n[Uso Culinario]: La base absoluta para panes, pasteles, rebozados y espesar salsas."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Curación",
        "nombre": "Calabaza Grande",
        "subtitulo": "Fruta Enorme",
        "desc": "Una calabaza enorme y pesada de color naranja brillante. Su cáscara es dura, pero su interior es dulce y muy nutritivo.\n\n[Uso en Exploración]: Comerla cruda es un poco difícil para los dientes, pero restaura +5 HP si estás desesperado.\n[Uso Culinario]: El ingrediente estrella para purés, sopas espesas o pasteles dulces que reconfortan el corazón de cualquier explorador cansado."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "Control",
        "elemento": "Soporte",
        "nombre": "Especias Suaves",
        "subtitulo": "Especia de lo Salvaje",
        "desc": "Una delicada mezcla de hierbas aromáticas y semillas molidas. No pican en absoluto, pero realzan el sabor natural de cualquier comida.\n\n[Uso en Exploración]: Si tomas un puñado y lo soplas a la cara de un enemigo cercano, puedes causarle un ataque de estornudos, reduciendo su Defensa en -1 durante un turno.\n[Uso Culinario]: El toque mágico necesario para darle aroma a los estofados y pescados sin abrumar el paladar."
    },
    {
        "tipo": "consumible",
        "nivel": 1,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Zreza",
        "subtitulo": "Baya",
        "desc": "Una baya pequeña, roja y de sabor increíblemente picante. Al morderla, da un pequeño toque eléctrico en la lengua.\n\n[Uso en Combate/Exploración]: Al consumirla, relaja los músculos agarrotados y cura instantáneamente a un objetivo de la condición de estado [Paralizado].\n[Uso Culinario]: Se usa en pequeñas dosis para darle un toque muy picante a las comidas."
    },
    {
        "tipo": "consumible",
        "nivel": 3,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Perasi",
        "subtitulo": "Baya",
        "desc": "Una baya de color amarillo pálido. Es dura y fría al tacto, pero al entrar en contacto con la boca, genera un calor interno muy reconfortante.\n\n[Uso en Combate/Exploración]: Al consumirla, eleva la temperatura corporal y cura instantáneamente a un objetivo de la condición de estado [Congelado].\n[Uso Culinario]: Excelente para preparar bebidas calientes o postres que regulan la temperatura."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "",
        "elemento": "Soporte",
        "nombre": "Baya Algama",
        "subtitulo": "Baya",
        "desc": "Una baya verde con forma de raíz o alga. Tiene un sabor bastante amargo y terroso, pero propiedades medicinales únicas.\n\n[Uso en Combate/Exploración]: Al consumirla, relaja excesivamente los músculos. Reduce el [Ataque] del consumidor en -1 temporalmente, pero aumenta su amabilidad o lo calma de estados de furia extrema [Confusión].\n[Uso Culinario]: Un ingrediente clave en remedios naturistas para relajar a Pokémon muy agresivos."
    },
    {
        "tipo": "consumible",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Soporte",
        "nombre": "Hielo Seco",
        "subtitulo": "Hielo+",
        "desc": "Un bloque de hielo especial que no se derrite convirtiéndose en agua, sino que emite una niebla blanca y muy espesa.\n\n[Uso en Exploración]: Si se lanza al suelo, crea una densa cortina de niebla que otorga cobertura para escapar o esconderse. Tocarlo con las manos desnudas por mucho tiempo puede causar daño leve.\n[Uso Culinario]: Se usa constantemente en hieleras para mantener el Pescado Fresco y otros ingredientes crudos en perfecto estado durante varios días."
    },
    {
        "tipo": "reliquia",
        "nivel": 1,
        "clasificacion": "???",
        "elemento": "Ligera",
        "nombre": "Banda Rara",
        "subtitulo": "Objeto Extraño",
        "desc": "Objeto con un pequeño lugar para poner un Orbe."
    },
    {
        "tipo": "armadura",
        "nivel": 4,
        "clasificacion": "Mejora",
        "elemento": "Ligera",
        "nombre": "Bandana de Chef",
        "subtitulo": "Premio Curativo",
        "desc": "Bandana especial entre chefs. Tiene el nombre de la persona que la gana. (+1 Atq. y 2 C.I. (solo para recetas)).\nAdemas, te curas +1 HP cada turno que pasa."
    },
    {
        "tipo": "armadura",
        "nivel": 2,
        "clasificacion": "Mejora",
        "elemento": "Media",
        "nombre": "Mini delantal",
        "subtitulo": "Delantal",
        "desc": "Delantal algo sucio pero muy resistente. (+1 Def. y +1 Def. Esp.)"
    },
    {
        "tipo": "arma",
        "nivel": 3,
        "clasificacion": "Mejora",
        "elemento": "Media",
        "nombre": "Guantes de Cocinero",
        "subtitulo": "Orgullo+",
        "desc": "Estos guantes parecen muy especiales para ciertos chef. (+4 Atq.)."
    }
];