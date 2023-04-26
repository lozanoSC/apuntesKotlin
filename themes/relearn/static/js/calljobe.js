//Devuelve el nombre del archivo de código que se enviará al servidor

function addCodeRunnerBlockIds() {
    const blocks = document.querySelectorAll('.coderunner-block');

    for(let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        block.children[0].setAttribute('id',`code${i}`)

        block.querySelector('textarea').setAttribute('id',`res${i}`)
        block.querySelector('textarea').setAttribute('name',`res${i}`)

        block.querySelector('a').setAttribute('id',i)
    }
}
function callJOBE(element, urlServer, port, lenguaje) {
    const id = element.getAttribute('id');
    console.log(urlServer, port, lenguaje, id)
    calljobe(urlServer, port, lenguaje, id)
}
addCodeRunnerBlockIds()

function _getSourceFileName(text, ext) {
    var sourceName = "calljobe";

    if (ext == "java" ) {    
        var arrLines = text.split(/\r?\n|\r|\n/g);
        //Array con la línea del encabezado de la clase "public class ..."
        const arrLine = arrLines.filter(line  => line.includes("class") && ! line.includes("*"));
        var line =  arrLine[0].split(/(\s+)/);
            
        line.forEach(function (value, i) {
            if (value == "class") {
                index = i+2;
                sourceName = line[index];
            }
        })
    }

    return sourceName;
}

//Obtiene la lista de lenguajes soportados
function getlans(lansid, server, port) {
    refresh.addEventListener('click', _ => {
                    location.reload();
    })
    const Http = new XMLHttpRequest();
    const url='https://' + server + ':' + port + '/jobe/index.php/restapi/languages';
    Http.open("GET", url, true);
    Http.send(null);
    
    Http.onreadystatechange = (e) => {
       document.getElementById('lans').innerHTML = Http.responseText;
    } 
}  

//Llama al API de JOBE con los ids de las cajas de texto de código, resultado, servidor y puerto
function calljobe(server, port, lan, numbloque) {
    const resid = 'res'+numbloque;
    const extensions = {'java':'java', 'c':'c', 'python3':'py', 'cpp':'cpp', 'php':'php', 'js':'js',
                        'pascal':'pas', 'octave':'m'}


    nombre= 'code'+numbloque;
    runcodeText = document.getElementById(nombre).textContent;
   // lan = document.getElementById('language').value;
    ext = extensions[lan];
    const Http = new XMLHttpRequest();
    const url='https://' + server + ':' + port + '/jobe/index.php/restapi/runs';
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json");
    Http.send(JSON.stringify({"run_spec": {"language_id": lan, "sourcefilename": _getSourceFileName(runcodeText, ext) + "." + ext, "sourcecode": runcodeText}}));
    
    Http.onreadystatechange = (e) => {
       // console.log(Http.responseText)
        //const responseString = Http.responseText.replaceAll('\n','\\n'); // Falla (pero no debería)
        jres = JSON.parse(Http.responseText);
        stdout = jres['stdout']; 
        stderr = jres['stderr'];
        cmpinfo = jres['cmpinfo'];
        
        
        
      
        if(stderr) {
            document.getElementById(resid).value = stderr;  
        }
        else {
            document.getElementById(resid).value = stdout.trim();   
            //document.getElementById(resid).value = stdout + "\n" + stderr + "\n" + cmpinfo;               
        }

    } 
}
