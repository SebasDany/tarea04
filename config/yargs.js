const descripcion={
    demand:true,
    alias:'d',
    desc:"Descripcion de la tarea por acer"
};
const completado={
    default:true,
    alias:'c',
    desc:"marca como completada o pendinet la ataraesa"
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
.help()
.argv;


module.exports={
    argv
}