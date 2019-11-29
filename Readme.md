#               UNIVERSIDAD POLITECNICA SALESIANA
#                       CARRERA COMPUTACIÓN
#                         PLATAFORMAS WEB

# NOMBRE: SEBASTIAN GUANDINANGO


# 1 Implementacion de las funciones que nos permita ver ya sea las tareas realizadas y las tareas aun por hacer para esto se creo dos metodo dentro la clase tareas-por-hacer.js el cual nos quedo de la siguiente manera:

//funcion que permite en listar las tareas ralizadas para lo cual se utilizo la funcion filter
const tareas_hechas =()=>{
    cargardb();
    let nuevalista=tareasPorHAcer.filter(tarea=>tarea.completado==true);
    return nuevalista;
}
//funcion que permite en listar las tareas existentes por realizar para lo cual se utilizo la funcion filter
const tareas_por_hacer =()=>{
    cargardb();
    let nuevalista=tareasPorHAcer.filter(tarea=>tarea.completado==false);
    return nuevalista;

}

# Una ves realizada los metodos dentro de la clase yargs,js se aumento los parametros para los comandos como se puede observar:

.command('hechas', 'muestra todas la tareas realizadas',{ //agregando el comando para mostra las tareas ya hechas
    
       
   })
   .command('por_hacer', 'muestra todas las tareas por realizar',{//agregando el comando para mostrar las tareas aun por hacer
           
   })


   # Y para finalizar dentro de la clase app.js se hizo el llamdo alos metodos para poder ejecutalos el cual nos queda de la siguiente manera.

    case 'hechas':
        //console.log('borrar elemento')
        let tarea_hecha=tareas.tareas_hechas();
        if (tarea_hecha.length!==0){
            console.log("=====TAREAS HECHAS ======".bgCyan);
            for(let tarea of tarea_hecha){
                console.log("Tarea:\t",tarea.descripcion);
                console.log("Estado:\t",tarea.completado);
            }
        }else{
                console.log("=====NO HAY TAREAS HECHAS ======".red);
            }
        break;
    
    case 'por_hacer':
        let tarea_hacer=tareas.tareas_por_hacer();
        if (tarea_hacer.length!==0){
            console.log("=====TAREAS POR HACER ======".bgCyan);
            for(let tarea of tarea_hacer){
                console.log("Tarea:\t",tarea.descripcion);
                console.log("Estado:\t",tarea.completado);
            }
        }else{
                console.log("=====NO HAY TAREAS POR HACER ======".red);
            }
        break;

# Resultado

=====TAREAS HECHAS ======
Tarea:   Ir de compras
Estado:  true
Tarea:   Estudiar
Estado:  true

=====TAREAS POR HACER ======
Tarea:   Hacer deporte
Estado:  false