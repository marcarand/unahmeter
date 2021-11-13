# UNaH Meter
## Tu distancia hasta UNAHUR

Proyecto para el segundo parcial del Construcción de Interface de Usuario del segundo cuatrimestre del 2021 de la Tecnicatura de Informática de la Universidad Nacional de Hurlingham.
Estudiante: Carlos Andrés Martín

## Descripción de la aplicación.

La página diseñada con React y Bootstrap permite ingresar una dirección en el buscador y calcular la distancia en línea recta hasta la Universidad Nacional de Hurlingham.

El buscador permite ingresar el nombre de la calle y su altura o alternativamente su intersección, seguido de la ciudad o partido. La aplicación consulta el USIG (ver más abajo) y visualiza las sugerencias de direcciones aproximadas. Cuando se obtiene una única dirección, se puede presionar el botón de **Calcular** y la aplicación calcula y visualiza la distancia para cualquier ubicación del conurbano bonaerense o CABA.
La API consultada entrega, además del nombre de la calle normalizado, brinda las coordenadas de localización por latitud y longitud. El cálculo de la distancia utiliza estos valores y los de la UNaHur usando la fórmula de Haversine.

## API: USIG

La Unidad de Sistemas de Información Geográfica es un servicio de información geográfica mantenido por el Gobierno de la Ciudad de Buenos Aires.
* [USIG](http://servicios.usig.buenosaires.gob.ar/normalizar) - Normalizador de Direcciones v2.1.2
Este servicioe normaliza una dirección de la Ciudad autonoma de Buenos Aires (CABA) y/o Area Metropolitana de Buenos Aires (AMBA) entregando información sobre la ubicación precisa de la dirección buscada con las coordenadas exactas.

### Utilización de la API:
Parametros:
* String direccion: Dirección a normalizar expresada como "calle altura, partido" o "calle y calle, partido".
   - El partido es opcional.
* Int maxOptions: Cantidad máxima de resultados a devolver. (Opcional. Default: 10)
* Bool geocodificar: Indica si se debe geocodificar los resultados de la normalización. (Opcional. Default: False)
* Int srid: srid de la geocodificación. (Opcional. Default: 4326)
* Float lat, lng: Devuelve la esquina mas cercana a la coordenada (latitud y longitud) ingresada.
* String tipoResultado: determina el tipo de dirección del resultado. (Opcional. Default: calle_y_calle)
    - 'calle_y_calle': Devuelve una dirección de tipo calle y calle.
    - 'calle_altura': Devuelve una dirección de tipo calle altura.
        - Para CABA es la puerta mas cercana al punto.
        - Para Conurbano es la altura media del tramo de calle mas cercano.
    - 'calle_altura_calle_y_calle': devuelve una dirección calle altura. En caso de no encontrarla, devuelve una dirección calle y calle.

Ejemplos:

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao ycorrientes, caba](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao%20y%20corrientes,%20caba)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao y corrientes, moron](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao%20y%20corrientes,%20moron)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao y corrientes](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=callao%20y%20corrientes)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=santa&maxOptions=25](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=santa&maxOptions=25)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=corrientes y santa fe&geocodificar=TRUE](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=corrientes%20y%20santa%20fe,%20san%20isidro)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria e italia](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria%20e%20italia)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria 300, lomas](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria%20300,%20lomas)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria 300](http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=loria%20300)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.490674&lat=-34.524909](http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.490674&lat=-34.524909)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.409039&lat=-34.601427](http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.409039&lat=-34.601427)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.402165&lat=-34.762920&tipoResultado=calle_y_calle](http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.402165&lat=-34.762920&tipoResultado=calle_y_calle)

[http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.402165&lat=-34.762920&tipoResultado=calle_altura](http://servicios.usig.buenosaires.gob.ar/normalizar/?lng=-58.402165&lat=-34.762920&tipoResultado=calle_altura)

## 0Calcular la distancia:
[https://ourcodeworld.co/articulos/leer/1021/como-calcular-la-distancia-entre-2-marcadores-coordenadas-en-google-maps-con-javascript](https://ourcodeworld.co/articulos/leer/1021/como-calcular-la-distancia-entre-2-marcadores-coordenadas-en-google-maps-con-javascript)
[https://reviblog.net/2016/01/08/javascript-obtener-la-distancia-distancia-en-kilometros-entre-dos-puntos-dadas-por-su-latitud-y-longitud/](https://reviblog.net/2016/01/08/javascript-obtener-la-distancia-distancia-en-kilometros-entre-dos-puntos-dadas-por-su-latitud-y-longitud/)
