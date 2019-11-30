const argv=require('./config/yargs').argv;
let comando=argv._[0];//permite obtener la palabra ingresada para usarlo como un comando utilizando yargs
const tareas=require('./controlador/tareas-por-hacer');//haciendo la instanciacion de la clase para poder utilizar las funciones
const colors=require('colors')
switch (comando){

    case 'crear':
        let tarea=tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado=tareas.getlista();
        console.log("=====LISTADO DE TAREAS ======".green);
        for(let tarea of listado){
           
            console.log("Descripcion:\t",tarea.descripcion);
            console.log("Estado: \t",tarea.completado);
        }
        break;
    case 'actualizar':
        let actualizado= tareas.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        //console.log('borrar elemento')
        tareas.eliminar(argv.descripcion);
        break;
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
    
    default:
        console.log("comando no conocido");

}