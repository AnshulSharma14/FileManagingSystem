function helpfnc(dirpath)
    {
     console.log(
        `list of All commands:
                            node main.js tree "directoryPath"  
                            node main.js organize "directoryPath"
                            node main.js help`
                            )
    } 
    module.exports={
        helpKey:helpfnc
    }