var csv = [
    [200, 'Matutino-Ronda 1', 'Tema1- Menciona una institución (nacional o internacional) relacionada con temas de nutrición'],
    [100, 25, 'OMS'],
    [100, 21, 'FAO'],
    [100, 16, 'INCMNSZ'],
    [100, 15, 'UNICEF'],
    [100, 12, 'INSP'],
    [100, 11, 'DIF'],
    [200, 'Matutino-Ronda 1', 'Tema2- Menciona una fruta que aporta vitamina C'],
    [100, 30, 'Guayaba'],
    [100, 20, 'Naranja'],
    [100, 20, 'toronja'],
    [100, 15, 'Limón'],
    [100, 10, 'fresa'],
    [100, 5, 'kiwi'],
    [200, 'Matutino-Ronda 1', 'Tema3- Menciona una vitamina liposoluble'],
    [100, 40, 'Vitamina A Retinol'],
    [100, 25, 'Vitamina K Antihemorrágica'],
    [100, 20, 'Vitamina D Calciferol'],
    [100, 15, 'Vitamina E Tocoferol'],
    [200, 'Matutino-Ronda 1', 'Tema4- Menciona un beneficio de la lactancia materna'],
    [100, 26, 'facilita la pérdida de peso posterior al parto'],
    [100, 24, 'bajo costo'],
    [100, 16, 'previene cáncer en la madre'],
    [100, 14, 'inmunológico'],
    [100, 11, 'buen desarrollo de la microbiota'],
    [100, 9, 'temperatura adecuada'],
    [200, 'Matutino-Ronda 1', 'Tema5- Menciona una verdura de uso frecuente para acompañar la carne de res'],
    [100, 28, 'cebolla'],
    [100, 22, 'tomate'],
    [100, 18, 'nopales'],
    [100, 12, 'lechuga'],
    [100, 10, 'brócoli'],
    [100, 10, 'zanahoria'],
    [100, 29, 'tacos'],
    [100, 21, 'tortilla'],
    [100, 20, 'tamales'],
    [100, 15, 'tostadas'],
    [100, 8, 'tlacoyos'],
    [100, 7, 'tamarindo'],
    [200, 'Matutino-Ronda 2', 'Tema1- Menciona una de las principales razones para ir a un nutriólogo'],
    [100, 28, 'Para control de peso (sobrepeso obesidad'],
    [100, 20, 'Por enfermedades crónicas'],
    [100, 16, 'mejorar el rendimiento físico'],
    [100, 15, 'Aprender a tener una alimentación saludable'],
    [100, 11, 'Incrementar masa muscular'],
    [100, 10, 'Por enfermedades cardiovasculares'],
    [200, 'Matutino-Ronda 2', 'Tema2- Menciona donde puede trabajar un nutriólogo'],
    [100, 30, 'Hospitales'],
    [100, 22, 'Programas de alimentación'],
    [100, 20, 'Consulta privada'],
    [100, 18, 'Escuelas'],
    [100, 15, 'industria alimentaria'],
    [100, 10, 'servicios de alimentación'],
    [200, 'Matutino-Ronda 2', 'Tema3-Menciona un alimento derivado lácteo:'],
    [100, 27, 'Leche'],
    [100, 25, 'Queso'],
    [100, 18, 'Mantequilla'],
    [100, 14, 'Yogur'],
    [100, 10, 'Crema'],
    [100, 6, 'Nata'],
    [200, 'Matutino-Ronda 2', 'Tema4- Menciona uno de los órganos que conforman el aparato digestivo:'],
    [100, 21, 'Estomago'],
    [100, 20, 'Intestino grueso'],
    [100, 18, 'Esófago'],
    [100, 16, 'Hígado'],
    [100, 15, 'Intestino delgado'],
    [100, 10, 'Páncreas'],
    [200, 'Matutino-Ronda 2', 'Tema5- Instrumento de uso habitual en la medición antropométrica'],
    [100, 30, 'Cinta antropométrica'],
    [100, 25, 'Bascula'],
    [100, 15, 'Plicometro'],
    [100, 10, 'Estadimetro'],
    [100, 10, 'Antropómetro'],
    [100, 10, 'Infantómetro'],
    [200, 'Matutino-Ronda 2', 'Tema6- Menciona el hábito saludable que más recomiendan los nutriólogos'],
    [100, 25, 'tomar 8 vasos de agua al día'],
    [100, 21, 'comer frutas'],
    [100, 20, 'hacer ejercicio'],
    [100, 16, 'comer verduras'],
    [100, 10, 'evitar el consumo de alimentos procesados'],
    [100, 8, 'combinar cereales con leguminosas'],
    [200, 'Matutino-Ronda 3', 'Tema1- Menciona uno de los indicadores antropométricos (percentiles) que se utilizan para evaluar el estado nutricio de los niños'],
    [100, 25, 'talla/edad'],
    [100, 20, 'peso/edad'],
    [100, 18, 'peso/talla'],
    [100, 18, 'IMC/edad'],
    [100, 10, 'perímetro cefálico/edad'],
    [100, 9, 'circunferencia braquial/edad'],
    [200, 'Matutino-Ronda 3', 'Tema2- Menciona con una palabra una de las principales funciones del hígado'],
    [100, 33, 'filtrador de la sangre'],
    [100, 22, 'almacenamiento'],
    [100, 18, 'metabolismo de carbohidratos'],
    [100, 10, 'síntesis'],
    [100, 9, 'desintoxicación'],
    [100, 8, 'transformador'],
    [200, 'Matutino-Ronda 3', 'Tema3- Menciona un perímetro o circunferencia para medición antropométrica'],
    [100, 29, 'Cintura'],
    [100, 22, 'Muñeca'],
    [100, 18, 'Cadera'],
    [100, 11, 'Brazo'],
    [100, 10, 'Cefálica'],
    [100, 10, 'Muslo'],
    [200, 'Matutino-Ronda 3', 'Tema4- Menciona el nombre de una leguminosa:'],
    [100, 26, 'Frijol'],
    [100, 22, 'Lentejas'],
    [100, 18, 'Habas'],
    [100, 15, 'Alubias'],
    [100, 12, 'Chicharos'],
    [100, 7, 'Garbanzo'],
    [200, 'Matutino-Ronda 3', 'Tema5-Menciona una de las características de una dieta Correcta según la NOM'],
    [100, 26, 'Completa'],
    [100, 20, 'Variada'],
    [100, 17, 'Suficiente'],
    [100, 15, 'Inocua'],
    [100, 12, 'Adecuada'],
    [100, 10, 'Equilibrada'],
    [200, 'Matutino-Ronda 3', 'Tema6- Menciona un tipo de cocción de alimentos'],
    [100, 38, 'al vapor'],
    [100, 22, 'a la plancha'],
    [100, 15, 'frito'],
    [100, 13, 'hervido'],
    [100, 8, 'asado'],
    [100, 4, 'horneado'],
    [200, 'Matutino-Ronda 4', 'Tema1- Menciona un tipo de cuchillo que se usa comúnmente en un servicio de alimentos'],
    [100, 33, 'cuchillo de carnicero'],
    [100, 28, 'cuchillo filetero'],
    [100, 14, 'cuchillo de chef'],
    [100, 11, 'cuchillo mondador'],
    [100, 10, 'cuchillo para pan'],
    [100, 6, 'cuchillo de verduras'],
    [200, 'Matutino-Ronda 4', 'Tema2- Menciona un factor que influye en la elección de alimentos y comportamiento alimentario'],
    [100, 29, 'preferencias alimentarias familiares'],
    [100, 20, 'economía'],
    [100, 17, 'publicidad'],
    [100, 15, 'estado de salud'],
    [100, 10, 'entorno y clase social'],
    [100, 9, 'creencias religiosas'],
    [200, 'Matutino-Ronda 4', 'Tema3- Menciona un postre que se de en una fiesta de cumpleaños infantil'],
    [100, 27, 'Pastel'],
    [100, 21, 'Quequitos'],
    [100, 20, 'Gelatina'],
    [100, 13, 'Fruta con chamoy'],
    [100, 10, 'Chocolates'],
    [100, 9, 'Bombones con chocolate'],
    [200, 'Matutino-Ronda 4', 'Tema4- Nombra la bebida más consumida por los mexicanos'],
    [100, 30, 'coca cola'],
    [100, 25, 'Cerveza'],
    [100, 18, 'jugos naturales'],
    [100, 10, 'agua natural'],
    [100, 10, 'tequila'],
    [100, 7, 'bebidas carbonatadas'],
    [200, 'Matutino-Ronda 4', 'Tema5- Menciona un trastorno alimenticio'],
    [100, 30, 'Bulimia'],
    [100, 28, 'Anorexia'],
    [100, 15, 'Vigorexia'],
    [100, 12, 'Pica'],
    [100, 10, 'Ortorexia'],
    [100, 5, 'permarexia'],
    [200, 'Matutino-Ronda 4', 'Tema6- Menciona la composición corporal del cuerpo humano a nivel químico y/o anatómico:'],
    [100, 27, 'Oxigeno'],
    [100, 22, 'Grasas'],
    [100, 17, 'Minerales'],
    [100, 15, 'Proteínas'],
    [100, 11, 'Carbono'],
    [100, 8, 'Hidrogeno'],
    [200, 'Matutino-Ronda 5', 'Tema1- Menciona uno de los pliegues cutáneos antropométricos:'],
    [100, 27, 'Pliegue Abdominal'],
    [100, 23, 'Pliegue bicipital'],
    [100, 18, 'Pliegue Suprailiaco'],
    [100, 12, 'Pliegue Subescapular'],
    [100, 11, 'Pliegue Tricipital'],
    [100, 9, 'Pliegue gemelar'],
    [200, 'Matutino-Ronda 5', 'Tema2-Menciona un alimento que forma parte de la canasta básica alimenticia del mexicano'],
    [100, 30, 'frijol'],
    [100, 20, 'maíz'],
    [100, 15, 'arroz'],
    [100, 14, 'huevo'],
    [100, 11, 'chile'],
    [100, 10, 'aceite'],
    [200, 'Matutino-Ronda 5', 'Tema3- Menciona una de las principales funciones de las Proteínas:'],
    [100, 27, 'Hormonal'],
    [100, 22, 'Transporte'],
    [100, 18, 'Defensivas'],
    [100, 15, 'Reguladoras'],
    [100, 12, 'Estructurales o Plásticas'],
    [100, 6, 'Provee energía'],
    [200, 'Matutino-Ronda 5', 'Tema4- Menciona los principales componentes del ABCDE para una Correcta evaluación nutricional'],
    [100, 28, 'Antropométricos'],
    [100, 20, 'Bioquímicos'],
    [100, 17, ' Clínicos'],
    [100, 15, 'Dietéticos'],
    [100, 11, 'Económicos'],
    [100, 9, ' Sociodemográficos'],
    [200, 'Matutino-Ronda 5', 'Tema5- Menciona uno de los factores que son considerados para el cálculo del requerimiento energético'],
    [100, 35, 'edad'],
    [100, 20, 'sexo'],
    [100, 15, 'constitución (tamaño y composición corporal'],
    [100, 15, 'estado fisiológico'],
    [100, 10, 'enfermedad'],
    [100, 5, 'temperatura ambiental'],
    [200, 'Matutino-Ronda 5', 'Tema6- Menciona un componente nutricio de la papaya'],
    [100, 25, 'carbohidratos'],
    [100, 25, 'fibra dietética'],
    [100, 16, 'potasio'],
    [100, 14, 'calcio'],
    [100, 10, 'agua'],
    [100, 10, 'vitamina C'],
    [200, 'Matutino-Ronda 6', 'Tema1- Indica el nombre de uno de los componentes nutricionales de las sardinas enlatadas'],
    [100, 25, 'proteína'],
    [100, 20, 'ácidos grasos'],
    [100, 15, 'calcio'],
    [100, 15, 'fosforo'],
    [100, 15, 'sodio'],
    [100, 10, 'potasio'],
    [200, 'Matutino-Ronda 6', 'Tema2- Menciona uno de los alérgenos alimenticios pediátricos más frecuentes'],
    [100, 25, 'leche de vaca'],
    [100, 25, 'nueces de árbol'],
    [100, 18, 'cacahuates'],
    [100, 12, 'huevo'],
    [100, 10, 'trigo'],
    [100, 10, 'frijol de soya'],
    [200, 'Matutino-Ronda 6', 'Tema3- Menciona un método que se utiliza para la recolección y análisis de la ingesta dietética actual o reciente de un paciente'],
    [100, 30, 'recordatorio de 24 hrs'],
    [100, 25, 'frecuencia de consumo alimentario'],
    [100, 14, 'registro por pesada'],
    [100, 12, 'encuesta dietética'],
    [100, 9, 'diario dietético'],
    [200, 'Matutino-Ronda 6', 'Tema4- Menciona una cena típica de una persona que busca reducir peso'],
    [100, 30, 'Ensalada'],
    [100, 22, 'Yogurt'],
    [100, 17, 'NO cenar'],
    [100, 13, 'Cereal'],
    [100, 10, 'Sándwich'],
    [100, 8, 'Fruta'],
    [200, 'Matutino-Ronda 6', 'Tema5- Menciona cual es la leguminosa más consumida por el mexicano'],
    [100, 29, 'Frijoles'],
    [100, 22, 'Lentejas'],
    [100, 18, 'Soya'],
    [100, 12, 'Garbanzo'],
    [100, 10, 'Chicharos'],
    [100, 9, 'Habas'],
    [200, 'Matutino-Ronda 6', 'Tema6-Factores a tener en cuenta en la estimación de los requerimientos alimenticios:'],
    [100, 25, 'Composición Corporal'],
    [100, 20, 'Situación Fisiológica'],
    [100, 18, 'Actividad física'],
    [100, 15, 'Variación individual'],
    [100, 12, 'Metabolismo'],
    [100, 10, 'Digestibilidad'],
    [200, 'Vespertino-Ronda 1', 'Tema1- Menciona una de las dimensiones de la seguridad alimentaria y nutricional'],
    [100, 25, 'Disponibilidad de alimentos'],
    [100, 22, 'Acceso físico'],
    [100, 18, 'Acceso económico'],
    [100, 15, 'Consumo'],
    [100, 10, 'Estabilidad'],
    [100, 9, 'Utilización biológica'],
    [200, 'Vespertino-Ronda 1', 'Tema2- Menciona un alimento de alto índice glucémico (ig)'],
    [100, 24, 'Plátano 72 Ig'],
    [100, 22, 'Miel 87 Ig'],
    [100, 18, 'Naranjas 40 Ig'],
    [100, 14, 'Pasas 64 Ig'],
    [100, 12, 'Arroz integral 66 Ig'],
    [100, 10, 'Manzanas 39 Ig'],
    [200, 'Vespertino-Ronda 1', 'Tema3- Nombra un alimento que contenga mayor proporción de carbohidratos'],
    [100, 25, 'Tortilla'],
    [100, 20, 'papa'],
    [100, 18, 'arroz'],
    [100, 15, 'galletas'],
    [100, 12, 'pan'],
    [100, 10, 'pasta'],
    [200, 'Vespertino-Ronda 1', 'Tema4- Menciona un tipo de aceite comestible'],
    [100, 30, 'oliva'],
    [100, 20, 'aguacate'],
    [100, 18, 'soya'],
    [100, 13, 'maíz'],
    [100, 10, 'girasol'],
    [100, 9, 'cártamo'],
    [200, 'Vespertino-Ronda 1', 'Tema5- Menciona uno de los principales micronutrientes que requiere una mujer embarazada:'],
    [100, 25, 'Calcio'],
    [100, 22, 'Ácido Fólico'],
    [100, 18, 'Hierro'],
    [100, 18, 'Zinc'],
    [100, 17, 'Vitamina D'],
    [100, 10, 'vitamina C'],
    [200, 'Vespertino-Ronda 1', 'Tema6- Menciona un tipo de aditivo alimentario'],
    [100, 28, 'Conservantes'],
    [100, 22, 'Colorantes'],
    [100, 15, 'Edulcorantes'],
    [100, 14, 'Antioxidantes'],
    [100, 12, 'Aromatizantes'],
    [100, 9, 'Potenciador de sabor'],
    [200, 'Vespertino-Ronda 2', 'Tema1- alimentos para regímenes nutricionales específicos'],
    [100, 30, 'Alimentos hipo alergénicos'],
    [100, 24, 'Alimentos reducido contenido en calorías'],
    [100, 15, 'Alimentos para diabéticos'],
    [100, 14, 'Alimentos reducidos en aminoácidos'],
    [100, 12, 'Alimentos sin gluten'],
    [100, 5, 'alimentos bajos en sodio'],
    [200, 'Vespertino-Ronda 2', 'Tema2- Menciona algunos edulcorantes de alta intensidad:'],
    [100, 25, 'Sucralosa'],
    [100, 20, 'Acesulfamo de potasio'],
    [100, 17, 'Aspartamo'],
    [100, 15, 'Ciclamato de sodio'],
    [100, 13, 'Sacarina de sodio'],
    [100, 10, 'Estevia'],
    [100, 40, ' Proporcionar energía'],
    [100, 18, ' Proporcionar sabor'],
    [100, 18, ' Textura'],
    [100, 12, ' Viscosidad'],
    [100, 12, ' Color a los alimentos'],
    [100, 28, 'Azucares'],
    [100, 20, 'Dulces'],
    [100, 19, 'Fibra'],
    [100, 18, 'Almidones'],
    [100, 15, 'Edulcorantes'],
    [200, 'Vespertino-Ronda 2', 'Tema5- ¿Cuáles son las funciones biológicas de los lípidos?'],
    [100, 27, 'Función energética'],
    [100, 22, 'Termogénica'],
    [100, 20, 'Función de defensa'],
    [100, 16, 'Receptores celulares'],
    [100, 15, 'Solventes'],
    [200, 'Vespertino-Ronda 2', 'Tema6- Menciona un efecto saludable de la práctica de la actividad física'],
    [100, 25, 'mejor fuerza muscular'],
    [100, 22, 'mejor función cardiorrespiratoria'],
    [100, 21, 'mejor densidad ósea'],
    [100, 15, 'prevención de Diabetes Mellitus tipo 2'],
    [100, 12, 'mejora el estado ánimo'],
    [100, 5, 'prevención de HTA'],
    [200, 'Vespertino-Ronda 3', 'Tema1- Menciona alguna de las etapas de un programa de intervención en nutrición comunitaria'],
    [100, 25, 'Diagnóstico (de la situación nutricional de la comunidad'],
    [100, 20, 'Seguimiento a la población'],
    [100, 16, 'Evaluación de resultados'],
    [100, 15, 'Diseño del plan de intervención/programa'],
    [100, 15, 'Implementación del programa/Intervención'],
    [100, 9, 'Adaptación y ajustes'],
    [200, 'Vespertino-Ronda 3', 'Tema2- Menciona una función que puede realizar un nutriólogo comunitario'],
    [100, 22, 'Identiﬁcar y evaluar problemas nutricionales (en la población'],
    [100, 19, 'Elaborar material educativo (y de apoyo a las actividades preventivas y de Promoción de la Salud'],
    [100, 15, 'Evaluar la implementación de programas de nutrición'],
    [100, 15, 'Participar en la planificación de políticas públicas de salud y nutrición'],
    [100, 11, 'Capacitar al personal de salud, en temas de nutrición'],
    [200, 'Vespertino-Ronda 3', 'Tema3- Además de medicina, ¿con qué otras disciplinas/ciencias puede trabajar un nutriólogo?'],
    [100, 30, 'Enfermería'],
    [100, 22, 'Psicología'],
    [100, 18, 'Gastronomía'],
    [100, 10, 'Biología'],
    [100, 10, 'Antropología'],
    [100, 10, 'Agronomía'],
    [200, 'Vespertino-Ronda 3', 'Tema4- ¿En qué años se han realizado las encuestas de nutrición en México (ENN Y ENSANUT)?'],
    [100, 29, '2016 (MC)'],
    [100, 22, '2018'],
    [100, 20, '2012'],
    [100, 12, '2006'],
    [100, 9, '1999'],
    [100, 8, '1988'],
    [200, 'Vespertino-Ronda 3', 'Tema5- Dentro de la Alimentación Vegetariana existen diversos tipos de Dietas Menciona alguno'],
    [100, 30, 'Dieta Vegana'],
    [100, 27, 'Dieta Ovovegetariana'],
    [100, 20, 'Dieta Lactovegetariana'],
    [100, 18, 'Dieta Apivegetariana'],
    [100, 5, 'Dieta Crudivegana'],
    [200, 'Vespertino-Ronda 3', 'Tema6- Menciona el nombre de una de las vitaminas hidrosolubles más populares'],
    [100, 27, 'Ácido fólico'],
    [100, 22, 'Ácido Ascórbico'],
    [100, 17, 'Folato'],
    [100, 15, 'Piridoxina'],
    [100, 10, 'Cobalamina'],
    [100, 9, 'Biotina'],
    [200, 'Vespertino-Ronda 4', 'Tema1-Fórmula utilizada como parte de la estimación del requerimiento energético total, en un individuo'],
    [100, 30, 'Harris y benedic'],
    [100, 26, 'Mifflin'],
    [100, 17, 'Owen'],
    [100, 15, 'Valencia'],
    [100, 13, 'OMS'],
    [200, 'Vespertino-Ronda 4', 'Tema2- Verduras con alto contenido de hierro NO HEM'],
    [100, 29, 'Espinaca'],
    [100, 22, 'Acelgas'],
    [100, 16, 'Perejil'],
    [100, 14, 'Chile poblano'],
    [100, 11, 'Verdolagas'],
    [100, 8, 'flor de calabaza'],
    [200, 'Vespertino-Ronda 4', 'Tema3-nombre de enzimas segregadas en el intestino delgado que participan en el metabolismo de los nutrientes'],
    [100, 30, 'Maltasa'],
    [100, 24, 'Sacarasa'],
    [100, 15, 'Lactasa'],
    [100, 12, 'Aminopeptidasa'],
    [100, 10, 'Polipeptidasa'],
    [100, 9, 'lipasa'],
    [200, 'Vespertino-Ronda 4', 'Tema4-Causas de esofagitis agudas y crónicas más comunes'],
    [100, 27, 'Aumento de la presión abdominal'],
    [100, 23, 'Infección vírica'],
    [100, 20, 'Intubación incorrecta'],
    [100, 15, 'Ingesta de agentes irritantes'],
    [100, 8, 'Vómitos de repetición'],
    [100, 7, 'Reflujo'],
    [200, 'Vespertino-Ronda 4', 'Tema5-Técnica quirúrgica utilizada para administrar Alimentación enteral por sonda'],
    [100, 33, 'Gastrostomía'],
    [100, 28, 'Yeyunostomía'],
    [100, 23, 'Duodenostomía'],
    [100, 10, 'Faringostomía'],
    [100, 6, 'Esofagostomía'],
    [200, 'Vespertino-Ronda 4', 'Tema6-que órganos son los principales consumidores de energía en el cuerpo humano'],
    [100, 33, 'Cerebro'],
    [100, 27, 'Corazón'],
    [100, 14, 'Músculo esquelético'],
    [100, 15, 'hígado'],
    [100, 11, 'Riñón'],
    [200, 'Vespertino-Ronda 5', 'Tema1- Indicadores utilizados para los objetivos de control de la diabetes tipo 2'],
    [100, 28, 'HBA1C'],
    [100, 20, 'Glucemia en ayuno'],
    [100, 19, 'Presión arterial'],
    [100, 14, 'Glucemia postprandial'],
    [100, 11, 'Colesterol LDL'],
    [100, 8, 'Glucemia preprandial'],
    [200, 'Vespertino-Ronda 5', 'Tema2- Menciona una proteína o mineral que participa en la contracción muscular'],
    [100, 28, 'Calcio'],
    [100, 22, 'Fósforo'],
    [100, 20, 'Actina'],
    [100, 16, 'Miosina'],
    [100, 14, 'Troponina'],
    [200, 'Vespertino-Ronda 5', 'Tema3-Menciona un alimento que contiene carotenoide'],
    [100, 25, 'Tomate'],
    [100, 24, 'Zanahoria'],
    [100, 19, 'Espinacas'],
    [100, 13, 'calabaza de castilla'],
    [100, 11, 'mango'],
    [100, 8, 'papaya'],
    [200, 'Vespertino-Ronda 5', 'Tema4- Dentro de la Administración de los Servicios Alimentarios, Menciona los procesos que conciernen al área de los Recursos humanos'],
    [100, 29, 'Reclutamiento del personal'],
    [100, 22, 'Selección del personal'],
    [100, 20, 'Ubicación del personal'],
    [100, 18, 'Inducción del personal'],
    [100, 11, 'Capacitación del personal'],
    [200, 'Vespertino-Ronda 5', 'Tema5-Menciona cuales son los cereales que se retiran de la dieta celiaca:'],
    [100, 28, 'Trigo'],
    [100, 24, 'avena'],
    [100, 18, 'centeno'],
    [100, 15, 'triticale'],
    [100, 10, 'espelta'],
    [100, 5, 'cebada'],
    [100, 25, 'Glucosa en ayunas mayor a 100mg/dl'],
    [100, 22, 'Triglicéridos mayor o igual a 150mg/dl'],
    [100, 18, 'IMC elevado'],
    [100, 15, 'Presión arterial mayor a 130/85 mmhg'],
    [100, 11, 'Resistencia a la insulina'],
    [100, 9, 'HDL menor a 40 mg/dl en varones y 50 mg/dl en mujeres'],
    [100, 25, 'Vitamina B12 Cianocobalamina'],
    [100, 18, 'Vitamina B2 Riboflavina'],
    [100, 17, 'Vitamina B3 Niacina'],
    [100, 15, 'Vitamina B6 Piridoxina'],
    [100, 13, 'Vitamina B1 Tiamina'],
    [100, 12, 'Vitamina B8 Biotina'],
    [200, 'Vespertino-Ronda 6', 'Tema2-Menciona uno de los principales minerales presentes en el cuerpo humano:'],
    [100, 28, 'Calcio'],
    [100, 20, 'Fosforo'],
    [100, 17, 'Potasio'],
    [100, 16, 'Hierro'],
    [100, 9, 'Sodio'],
    [100, 10, 'Yodo'],
    [200, 'Vespertino-Ronda 6', 'Tema3-Menciona uno de los tipos de Anemia más frecuentes en la población'],
    [100, 33, 'Anemia por deficiencia de Hierro'],
    [100, 21, 'Anemia Megaloblastica'],
    [100, 14, 'Anemia por deficiencia de Vitamina B12'],
    [100, 12, 'Anemia perniciosa'],
    [100, 10, 'Anemia Hemolítica'],
    [100, 10, 'Anemia por deficiencia de folato (ácido fólico)'],
    [200, 'Vespertino-Ronda 6', 'Tema4- ¿Cuáles son los síntomas más comunes que presenta un paciente Diabético?'],
    [100, 27, 'Poliuria'],
    [100, 19, 'Polifagia'],
    [100, 15, 'Polidipsia'],
    [100, 12, 'Difícil Cicatrización'],
    [100, 7, 'Adormecimiento de extremidades'],
    [200, 'Vespertino-Ronda 6', 'Tema5-Menciona uno de los 9 aminoácidos esenciales:'],
    [100, 25, 'Valina'],
    [100, 18, 'Isoleucina'],
    [100, 16, 'Leucina'],
    [100, 15, 'Fenilalanina'],
    [100, 14, 'Metionina'],
    [100, 12, 'Triptófano'],
    [200, 'Vespertino-Ronda 6', 'Tema6- Menciona los tipos de Cortes en alimentos, aplicados generalmente a la cebolla y los realizados en forma de cubo'],
    [100, 29, 'Brunoise'],
    [100, 27, 'Macedonia'],
    [100, 18, 'Pluma'],
    [100, 15, 'Doble cincelado'],
    [100, 11, 'Bracelets'],
    [200, 'Vespertino-Ronda 7', 'Tema1- Dentro de los indicadores Bioquímicos Menciona alguno de los componentes que incluye la Biometría Hemática'],
    [100, 28, 'Hemoglobina'],
    [100, 24, 'Eritrocitos'],
    [100, 17, 'Linfocitos'],
    [100, 15, 'Cuenta de leucocitos'],
    [100, 13, 'Plaquetas'],
    [100, 3, 'Volumen Corpuscular medio (VCM'],
    [200, 'Vespertino-Ronda 7', 'Tema2- de acuerdo a la Historia de la Gastronomía en México que alimentos se incorporaron en le etapa Virreinal'],
    [100, 28, 'Arroz'],
    [100, 22, 'Especias (canela, clavo, orégano)'],
    [100, 18, 'Animales domesticados (pollo, cerdos, vacas, cabras y ovejas)'],
    [100, 17, 'Avena'],
    [100, 15, 'Caña de azúcar'],
    [200, 'Vespertino-Ronda 7', 'Tema3- Menciona una Técnica de cocción común del pollo'],
    [100, 29, 'a la plancha'],
    [100, 22, 'asado'],
    [100, 17, 'al horno'],
    [100, 14, 'al vapor'],
    [100, 12, 'frito'],
    [100, 6, 'cocido'],
    [200, 'Vespertino-Ronda 7', 'Tema4- Menciona un alimento rico en proteína'],
    [100, 27, 'huevo'],
    [100, 24, 'carnes rojas'],
    [100, 18, 'pollo'],
    [100, 14, 'pescado'],
    [100, 10, 'productos lácteos'],
    [100, 7, 'almendra'],
    [200, 'Vespertino-Ronda 7', 'Tema5- Menciona uno de los determinantes de la salud'],
    [100, 26, 'sanitarios'],
    [100, 22, 'estilos de vida'],
    [100, 18, 'económicos'],
    [100, 12, 'sociales'],
    [100, 12, 'biología humana'],
    [100, 10, 'medio ambientales'],
    [200, 'Vespertino-Ronda 7', 'Tema6- cuales son los estilos de vida que afectan a la salud'],
    [100, 28, 'sedentarismo'],
    [100, 24, 'dieta desbalanceada'],
    [100, 17, 'falta de higiene'],
    [100, 16, 'estrés'],
    [100, 15, 'consumo de alcohol'],
    [100, 10, 'consumo de tabaco']];
