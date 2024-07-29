const importar = (marca) =>{
    const fs= require('fs')
    
    let nombre= "";
    
    if(marca === "hotToys") {
        nombre ="figuras1"        
    }
    else if(marca === "bandai"){
        nombre = "figuras2"
    }
    else if (marca === "starWars") {
        nombre= "figuras3"
    }
    
    const path = `./datos/${nombre}.json`
    
    const figurasJSON =fs.readFileSync(path,'utf-8')
    
    const figurasParse= JSON.parse(figurasJSON)
    
    return figurasParse
}

module.exports = importar