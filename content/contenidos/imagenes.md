---
title: Imágenes
author: Sabela Sobrino
weight: 2
---


Si queremos añadir una o varias imágenes a nuestro fichero .md tenemos dos opciones: 

1. Crear un **directorio** con el mismo nombre que el fichero .md y añadir ahí las imágenes. En este caso para hacer referencia a las mismas sólo debemos poner el nombre de la imagen. Por ejemplo: 

* apuntes
  * content
    * redes
      * _index.md
      * direccionamientoip
        * _index.md
        * **intruduccion** -> Carpeta
          * ejemplo.png
        * introduccion.md
        * etc...

En el archivo introduccion.md para hacer referencia a la imagen *ejemplo.png* haremos referencia de la siguiente forma: 
```
![ejemplo](ejemplo.png)
```

2. Otra opción sería una carpeta con un **nombre común** (por ejemplo, images) y meter en esa carpeta todas las imágenes de nuestro subdirectorio. En este caso, para hacer referencia a ellas usaremos la ruta completa desde el directorio donde nos encontramos. Por ejemplo: 

* apuntes
  * content
    * redes
      * _index.md
      * direccionamientoip
        * _index.md
        * **images** -> Carpeta
          * ejemplo.png
        * introduccion.md
        * etc...

En el archivo introduccion.md para hacer referencia a la imagen *ejemplo.png* haremos referencia de la siguiente forma: 
```
![ejemplo](images/ejemplo.png)
 ```