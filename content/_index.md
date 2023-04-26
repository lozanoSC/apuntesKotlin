---
title: Ejemplos códigos
---

## Insertar código que se pueda ejecutar  

#### Código 

````html
{{</* coderunner java */>}}
public class HolaMundo {
	public static void main(String[] args) {		
		System.out.println("Hola Mundo");
	}
}
{{</* /coderunner  */>}}

````

#### Resultado 

{{< coderunner java >}}
public class HolaMundo {
	public static void main(String[] args) {		
		System.out.println("Hola Mundo");
	}
}
{{< /coderunner  >}}


Se puede cambiar el lenguaje a ejecutar por: php, c, cpp, python3, nodejs, pascal y octave.

## Insertar Vídeo de Youtube 

#### Código 

````html
  {{</* youtube rKCVFPCxddc */>}}
````

#### Resultado 

  {{< youtube rKCVFPCxddc >}}

Las letras son el id del vídeo después de subirlo a Youtube. 

## Insertar contenido de Apuntes 
 
#### Código 

``` 
{{%/* insert   "redes/2.direccionamientoip/4.direccionamientosinclase"  */%}}
```

Se obtiene de la url de la página directamente. 

## Deplegable 
#### Código 

``` 
{{%/* expand title="Expand me..." */%}}Thank you!{{%/* /expand */%}}
```
#### Resultado 

{{% expand title="Expand me" %}}Thank you!{{% /expand %}}

## Pestañas
#### Código 


````go
{{</* tabs */>}}
{{%/* tab name="python" */%}}
```python
print("Hello World!")
```
{{%/* /tab */%}}
{{%/* tab name="R" */%}}
```R
> print("Hello World!")
```
{{%/* /tab */%}}
{{%/* tab name="Bash" */%}}
```Bash
echo "Hello World!"
```
{{%/* /tab */%}}
{{</* /tabs */>}}
````

#### Resultado 


{{< tabs >}}
{{% tab name="python" %}}
```python
print("Hello World!")
```
{{% /tab %}}
{{% tab name="bash" %}}
```bash
echo "Hello World!"
```
{{% /tab %}}
{{< /tabs >}}

## Botones

#### Código 

```go
{{%/* button href="https://gohugo.io/" */%}}Get Hugo{{%/* /button */%}}
{{%/* button href="https://gohugo.io/" icon="fas fa-download" */%}}Get Hugo with icon{{%/* /button */%}}
{{%/* button href="https://gohugo.io/" icon="fas fa-download" icon-position="right" */%}}Get Hugo with icon right{{%/* /button */%}}
```

#### Resultado 


{{% button href="https://gohugo.io/" style="info" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="note" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="tip" %}}Get Hugo{{% /button %}}
{{% button href="https://gohugo.io/" style="warning" %}}Get Hugo{{% /button %}}