// dentro de esta clase se resaliza las declaraciones delos comando haciendo uso del yargs

const descripcion={
    demand:true,
    alias:'d',
    desc:"Descripcion de la tarea por hacer"
};
const completado={
    default:"true",
    alias:'c',
    desc:"marca como completada o pendiente "
};


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
   .command('tareas', 'muestra todas la tareas realizadas y tareas por realizar',{ //agregando el comando para mostra las tareas ya hechas
    completado
       
   })
   
.help()
.argv;


module.exports={
    argv
}