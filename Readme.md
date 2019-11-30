#               UNIVERSIDAD POLITECNICA SALESIANA
#                       CARRERA COMPUTACIÓN
#                         PLATAFORMAS WEB

## NOMBRE: SEBASTIAN GUANDINANGO


## 1 Implementacion de las funciones que nos permita ver ya sea las tareas realizadas y las tareas aun por hacer para esto se creo dos metodo dentro la clase tareas-por-hacer.js el cual nos quedo de la siguiente manera:
//funcion que permite en listar las tareas ralizadas y laas tarea pendients, recibe el estado true o fal como enteada,dentro de esta se utilizo la funcion filter
const tareas =(estado)=>{
    console.log(estado)
    console.log(estado===true)
    if(estado==="true"){
        console.log("=====TAREAS HECHAS ======".blue);    
    }else{
        console.log("=====TAREAS POR HACER ======".blue);
    }
    cargardb();
    let nuevalista=tareasPorHAcer.filter(tarea=>tarea.completado==estado);
    return nuevalista;
}

## Una ves realizada los metodos dentro de la clase yargs.js se aumento los parametros para los comandos como se puede observar:

.command('tareas', 'muestra todas la tareas realizadas y tareas por realizar',{ //agregando el comando para mostra las tareas ya hechas
    completado
       
   })

   ## Y para finalizar dentro de la clase app.js se hizo el llamdo alos metodos para poder ejecutalos el cual nos queda de la siguiente manera.

   case 'tareas':
        let tarea_hecha=tareas.tareas(argv.completado);
        if (tarea_hecha.length>0){
            for(let tarea of tarea_hecha){
                console.log("Tarea:\t",tarea.descripcion);
                console.log("Estado:\t",tarea.completado);
            }
        }else{
            console.log("===== CERO ======".red);
        }
        break;

## Resultado

=====TAREAS HECHAS ======
Tarea:   Ir de compras
Estado:  true
Tarea:   Estudiar
Estado:  true

=====TAREAS POR HACER ======
Tarea:   Hacer deporte
Estado:  false

## Detalle de la aplicacion

Dentro de esta aplicacion se han realizado la implmentacion de la funcion que nos permita realizar una busqueda de la tareas realizada y las tareas por hacer para lo cual se debe ejecutar de la siguinte manera:

## Comandos
Permite crear uan tarea:          node app crear -d "Ir de compras" 
Permite enlistar las tareas:      node app listar
Permite actualizar una tarea :    node app actualizar -d "Ir de compras"
Permite eliminar una tarea:       node app borrar -d "Ir de compras"
Permite ver tareas hechas:        node app tareas -c true
Permite ver las tareas por hacer: node app tareas -c false
 
Estas dos ultimas consulatas si no se le asigna un valor  por defecto enlista las tareas ya realizadas 