const fs=require('fs');


let tareasPorHAcer=[];
const cargardb=()=>{
    try{
        tareasPorHAcer=require('../db/data.json');
    }catch(error){
        tareasPorHAcer=[];

    }    
}

const gruardarDb=()=>{
    let data=JSON.stringify(tareasPorHAcer);
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) throw new Error('NO SE PUDO CREAR',err)
    })
}
const crear=(descripcion)=>{
    cargardb();
    let tarea={
        descripcion,
        completado:false
    };

    tareasPorHAcer.push(tarea);
    gruardarDb();
    return tarea;
}
const getlista =()=>{
    cargardb();
    return tareasPorHAcer
//    let txt= fs.readFile('db/data.json')
//    console.log(txt)

}
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

module.exports={
    crear
   
}
module.exports={
    getlista
    ,
    actualizar,eliminar
}