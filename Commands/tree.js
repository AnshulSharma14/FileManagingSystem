function treefnc(dirpath)
    {
      if(dirpath==undefined)
      {
        treeHelper((process.cwd(),""));
        return;
      }
      else
      {
        let doesExist=fsy.existsSync(dirpath);
        if(doesExist)
        {
          treeHelper(dirpath,"")
        }
        else
        {
            console.log("kindly enter the right path")
        }
      }
    }
    function treeHelper(dirpath,indent)
    {
      //check is file or folder
      let isFile=fsy.lstatSync(dirpath).isFile();
      if(isFile==true)
      {
        let filename=path.basename(dirpath);
        console.log(indent+"|---"+filename)
      }
      else
      {
        let dirName=path.basename(dirpath)
        console.log(indent+"|-->>"+dirName)
        let childrens= fsy.readdirSync(dirPath)
        for(let i=0;i<childrens.length;i++)
        {
         let childPath= path.join(dirpath,childrens[i])
          treeHelper(childPath,indent+"\t")
        }
      }
    }
    module.exports={
        treekey:treefn
    }