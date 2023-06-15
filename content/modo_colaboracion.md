---
title: Modo de colaborar
author: Sabela Sobrino
weight: 1
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

