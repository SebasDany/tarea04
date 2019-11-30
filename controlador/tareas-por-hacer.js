const fs=require('fs');


let tareasPorHAcer=[];
//funcion que permite obtener el contenido  del documento creado 
const cargardb=()=>{
    try{
        tareasPorHAcer=require('../db/data.json');
    }catch(error){
        tareasPorHAcer=[];

    }    
}
//funcion que permite crear un archivo y guardar en formato json el cual recibe una lista de objeto de la tarea
const gruardarDb=()=>{
    let data=JSON.stringify(tareasPorHAcer);
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) throw new Error('NO SE PUDO CREAR',err)
    });
}
//funcion que permite crear una tarea el cual recibe como parametro una decripcion de la tarea
const crear = (descripcion)=>{
    cargardb();
    let tarea={
        descripcion,
        completado:"false"
    };
//Una vez ya ingresada la tarea con el metodo push agregamos la tarea  aun vector
    tareasPorHAcer.push(tarea);
    gruardarDb();
    return tarea;
}
const getlista =()=>{
    cargardb();
    return tareasPorHAcer
}
// funcion que permite actualizar la tarea como realizada el cual recibe como parametro la descripcion y el estado el cual esta por defecto como true
const actualizar=(descripcion, completado=true)=>{
    cargardb();
    let index=tareasPorHAcer.findIndex(tarea=>tarea.descripcion===descripcion);
    if (index>=0){
        tareasPorHAcer[index].completado=completado;
        gruardarDb();
        return true;

    }
    return false;
}
//funcion que permite eliminar una tarea en el cual se utiliza la funcion filter el cual permite hacer un filtrado decauedo auna condicion para asi alamacenar en un nuevo vector y asi sobreescribir el documento existente, con el contenido del nuevo vector
const eliminar=(descripcion)=>{
    cargardb();
    let nuevalista=tareasPorHAcer.filter(tarea=>tarea.descripcion!==descripcion);

    if (tareasPorHAcer.length===nuevalista.length){
        return false;

    }else{
        tareasPorHAcer=nuevalista;
        gruardarDb();
        return true;
    }
}
//funcion que permite en listar las tareas ralizadas y laas tarea pendients, recibe el estado true o fal como enteada,dentro de esta se utilizo la funcion filter
const tareas =(estado)=>{
    
    if(estado==="true"){
        console.log("=====TAREAS HECHAS ======".blue);    
    }else{
        console.log("=====TAREAS POR HACER ======".blue);
    }
    cargardb();
    let nuevalista=tareasPorHAcer.filter(tarea=>tarea.completado==estado);
    return nuevalista;
}

//este module.exports permite que las funciones exitentes dentro de esta clase sea visible al momento de ralizar la llamada de otra clase
module.exports={
    crear,
    getlista,
    actualizar,
    eliminar,
    tareas
}