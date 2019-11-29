// dentro de esta clase se resaliza las declaraciones delos comando haciendo uso del yargs

const descripcion={
    demand:true,
    alias:'d',
    desc:"Descripcion de la tarea por hacer"
};
const completado={
    default:true,
    alias:'c',
    desc:"marca como completada o pendiente "
}

const argv=require('yargs')
.command('crear', 'crear una tarea',{
 descripcion
    
})
.command('actualizar', 'actualiza una tarea',{
    descripcion,
    completado
       
   })
.command('borrar', 'borra una tarea',{
    descripcion,
   
       
   })
   .command('hechas', 'muestra todas la tareas realizadas',{ //agregando el comando para mostra las tareas ya hechas
    
       
   })
   .command('por_hacer', 'muestra todas las tareas por realizar',{//agregando el comando para mostrar las tareas aun por hacer
           
   })
.help()
.argv;


module.exports={
    argv
}