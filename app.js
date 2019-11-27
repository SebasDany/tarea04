const argv=require('./config/yargs').argv;
let comando=argv._[0];
const tareas=require('./controlador/tareas-por-hacer');
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
            console.log("estado: ",tarea.completado)
        }

            console.log('listar tareas');
        break;
    case 'actualizar':
        let actualizado= tareas.actualizar(argv.descripcion,argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        //console.log('borrar elemento')
        tareas.eliminar(argv.descripcion)
        break;
    default:
        console.log("comando no conocido");

}