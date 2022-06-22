# La funcion print() y println()
fíjate que ya usamos en nuestro primer ejemplo la función println()
## argumentos de una función
Sin el menor rigor, teniendo en cuenta que lo explicaremos más adelante detalladamente intenta entender lo que es un argumento. 
Cuando defines una función lo que escribes entre paréntesis son los parámetros.

Cuando usas una función ya definida y la llamas o invocas lo que escribes entre paréntesis son los argumentos. La función usa esos argumentos o valores para hacer algo. Por ejemplo en
~~~
println("hola mundo")
~~~
"hola mundo" es un argumento
## Diferencia entre print() y println()

print() es una función en Kotlin que imprime su argumento en la salida estándar, de manera similar, println() es otra función que imprime su argumento en la salida estándar pero también agrega un salto de línea en la salida. Puedes probar el siguiente ejemplo para observar la diferencia
~~~
fun main(){
    println("Hello,")
    println(" world!")

    print("Hello,")
    print(" world!")
}
~~~
Al ejecutar generará el siguiente resultado
~~~
Hello,
world!
Hello, world!
~~~
Ambas funciones (print() y println()) se pueden usar para imprimir números y cadenas y, al mismo tiempo, realizar cualquier cálculo matemático como se muestra a continuación
~~~
fun main(){
    println( 200 )
    println( "200" )
    println( 2 + 2 )
    print(4*3)
}
~~~
Al ejecutar generará el siguiente resultado
~~~
200
200
4
12
~~~
