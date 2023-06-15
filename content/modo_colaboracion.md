---
title: Modo de colaborar
author: Sabela Sobrino
weight: 2
---

Para colaborar será necesario realizar los pasos descritos a continuación

### Solicitar ser incluído como editor del proyecto apuntes

Es necesario ser usuario miembro del proyecto apuntes con rol de edición. Para ello accedemos al proyecto [Apuntes](https://gitlab.iessanclemente.net/manuais/apuntes). 

Una vez accedemos a él **solicitamos el acceso a través del enlace "Request Access"** a la derecha del nombre del proyecto "apuntes".

### Fork del proyecto apuntes

El modo de colaboración está basado en un sistema de supervisión que permite controlar y organizar las aportaciones. Una vez que la petición de acceso descrita en el punto anterior haya sido aceptada podremos hacernos con una copia del proyecto apuntes (vía fork), editar y añadir los contenidos del mismo y enviar una solicitud de tipo *"merge request"* al supervisor. 

Lo primero que tenemos que hacer es realizar un fork del proyecto apuntes, para ello, desde la página principal del proyecto **apuntes** activamos la opción **"Fork"** de la esquina superior derecha de la ventana. De esta forma, crearemos un nuevo repositorio *forkeado* en nuestro *workspace* de usuario:

* **Project name:** Puede utilizarse el mismo "apuntes"
* **Project URL:** https://gitlab.iessanclemente.net/usuario donde usuario corresponde con nuestro usuario del gitlab (esto creará un fork del proyecto en nuestro workspace, o espacio personal, de nuestra cuenta de gitlab). 

Una vez establecidos los parámetros anteriores activamos la creación del fork mediante el botón **"Fork Project"**.

El proceso de fork anterior crea una **copia del proyecto** en nuestro espacio personal y por tanto del repositorio con todos los contenidos. El repositorio contiene todos los artefactos necesarios para la elaboración de apuntes según se describirá más abajo.

A partir de este momento ya podemos editar nuestra **copia privada** del repositorio obtenida vía fork del proyecto apuntes. Todos los cambios que hagamos se mantendrán dentro del repositorio **privado**.

Una vez hayamos terminado de realizar las aportaciones debidas podremos enviar una solicitud **merge request** al supervisor designado. En caso de que los cambios se aprueben éstos serán incorporados a la versión pública del proyecto apuntes.

### Envío de merge request

Para enviar la solicitud de merge request desde nuestra copia privada del proyecto seleccionamos la opción "Merge request" del menú lateral izquierdo de la ventana, una vez se cargue la página correspondiente activamos con **"New merge request"**

#### Caracterización del merge request

En la siguiente página dejamos el primer campo de la sección **"Source branch"** tal cual pero seleccionamos el el segundo campo el valor correspondiente a la **rama** que hemos editado en nuestro repositorio privado (normalmente rama main). 

Para la sección **"Target branch"** seleccionamos **"manuais/apuntes"** en el primer campo (correspondiente al proyecto de apuntes colaborativo) y dejamos el valor **"main"** en el segundo campo (correspondiente a la rama principal).

Una vez modificados el *Source* y *Target branch* activamos el lanzamiento del merge request con **"Compare branches and continue"**.

Para finalizar añadimos la siguiente información al merge request:

* **Title**: Título ilustrativo de los cambios propuestos en el merge request. Será un texto breve descriptivo de los cambios que a revisar.
* **Description**: Si procede incorporaremos un texto aclaratorio más exhaustivo en caso de que la modificación sea muy amplia o necesite algún tipo de aclaración para el supervisor.

Terminamos el proceso con el botón **"Create merge request"**

## Estructura de contenidos para edición de apuntes

Una vez hecho el fork y descargado el repositorio apuntes, nos encontramos con la estructura de directorios siguiente:

* apuntes
  * content
    * index.md
    * basedatos
    * ciberseguridad
    * hardware
    * programacion
    * redes

Es decir, dentro del directorio **content** se ubica un archivo **_index.md** y un subdirectorio para cada área temática. A su vez dentro del directorio de cada área temática (redes, sistemas, programación , etc.) nos encontramos con los archivos markdown a editar.

Veamos un ejemplo:

Dentro del área temática de redes nos encontramos con:

* apuntes
  * content
    * redes
      * _index.md
      * direccionamientoip
        * _index.md
        * introduccion.md
        * etc...

La plantilla utilizada para generar posteriormente los apuntes en formato "pages" sigue una sencilla lista de convenios que facilitan la edición de los contenidos.

### Archivo _index.md

Cada directorio dispondrá de un archivo **_index.md** con metadatos significativos para la plantilla. Por lo general, salvo que estemos creando una sección nueva dentro del área temática no es necesario editar este archivo. En caso de crear una sección nueva podemos duplicar uno de los _index.md existentes y adaptarlo.

> NOTA
>
> A partir de estos archivos _index.md se construye el menú de navegación del panel izquierdo de las pages generadas con los apuntes accesible en la URL:
> [http://manuais.pages.iessanclemente.net/apuntes/](http://manuais.pages.iessanclemente.net/apuntes)

Los elementos básicos definidos en este archivo son

```
title: Redes
chapter: true
weight: 1
author: Sabela 
```

Donde el elemento más significativo, **title**, es el que da nombre a la sección correspondiente, en este caso al estar el archivo _index.md ubicado el el directorio raíz del área temática de redes, establece que en el menú de navegación izquierdo de la página se creará un menú desplegable cuyo elemento principal mostrará el texto "Redes".

El elemento **chapter** se establece a true para indicar que se tratará de una sección que contendrá en su interior otras subsecciones y por tanto se creará un submenú desplegable en el panel de navegación izquierdo.

**weight** está relacionado con la posición relativa de los elementos en el menú de navegación.
El elemento **author** es opcional y se reflejará en la parte final de la página. 

Todos los directorios que alberguen secciones de contenidos de un área temática, del subnivel que sean, contendŕan dentro un archivo _index.md.

### Subdirectorios

#### _index.md

Cada área temática se estructura en subdirectorios, cada uno de esos directorios contendrá un elemento **_index.md** como el descrito en el apartado anterior y un conjunto de archivos markdown (.md) con los contenidos correspondientes a la sección. 

#### Archivos .md

Pueden definirse la cantidad de archivos .md que sean necesarios dentro del directorio de una sección. Por cada uno de esos archivos se creará una entrada en el menú de navegación del panel izquierdo dentro de la sección definida en el archivo _index.md. Todos estos ficheros deben tener una cabecera como la que sigue indicando el título del documento y la posición del mismo dentro del apartado, definido a través del elemento *weight*.

Por ejemplo:  

```
title: Direccionamiento IP
weight: 1
```

#### Incorporar images

Si queremos añadir una o varias imágenes a nuestro fichero .md tenemos dos opciones: 
1. Crear un directorio con el mismo nombre que el fichero .md y añadir ahí las imágenes. En este caso para hacer referencia a las mismas sólo debemos poner el nombre de la imagen. Por ejemplo: 

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
2. Otra opción sería una carpeta con un nombre común (por ejemplo, images) y meter en esa carpeta todas las imágenes de nuestro subdirectorio. En este caso, para hacer referencia a ellas usaremos la ruta completa desde el directorio donde nos encontramos. Por ejemplo: 

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

#### Borrador

En el caso de querer hacer los apuntes y manterlos ocultos se puede introducir el siguiente elemento en la cabecera: 

```
title: Redes
chapter: true
weight: 1
author: Sabela 
draft: true 
```

## Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!).  Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.
