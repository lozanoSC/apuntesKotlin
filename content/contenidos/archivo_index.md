---
title: Archivo _index.md
author: Sabela Sobrino
weight: 1
---


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
draft: false
```

Donde el elemento más significativo, **title**, es el que da nombre a la sección correspondiente, en este caso al estar el archivo _index.md ubicado el el directorio raíz del área temática de redes, establece que en el menú de navegación izquierdo de la página se creará un menú desplegable cuyo elemento principal mostrará el texto "Redes".

El elemento **chapter** se establece a true para indicar que se tratará de una sección que contendrá en su interior otras subsecciones y por tanto se creará un submenú desplegable en el panel de navegación izquierdo.

**weight** está relacionado con la posición relativa de los elementos en el menú de navegación.
El elemento **author** es opcional y se reflejará en la parte final de la página. 
**draft** nos permite subir las páginas sin que las vea el alumnado. 

Todos los directorios que alberguen secciones de contenidos de un área temática, del subnivel que sean, contendŕan dentro un archivo _index.md.
