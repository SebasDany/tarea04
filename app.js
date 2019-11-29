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
        for(let tarea of listado){
            console.log("=====POR HACER ======".green);
            console.log(tarea.descripcion);
            console.log("estado: ",tarea.completado);
        }

            console.log('listar tareas');
        break;
    case 'actualizar':
        let actualizado= tareas.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        //console.log('borrar elemento')
        tareas.eliminar(argv.descripcion);
        break;
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
    default:
        console.log("comando no conocido");

}