function organizefnc(dirpath)
    {
      let destpath;
      if(dirpath==undefined)
      {
        destpath=process.cwd();
        return;
      }
      else
      {
        let doesExist=fsy.existsSync(dirpath);
        if(doesExist)
        {
           destpath=path.join(dirpath,"organized_files")
          if(fsy.existsSync(destpath)==false)
          {
             fsy.mkdirSync(destpath);
          }
        }
        else
        {
            console.log("kindly enter the right path")
        }
      }
      organizehelper(dirpath,destpath)
    }
    
    function organizehelper(src,dest)
    {
      let childNames=fsy.readdirSync(src)
      for(let i=0;i<childNames.length;i++)
      {
       let childAddress= path.join(src,childNames[i]);
       let isFile=fsy.lstatSync(childAddress).isFile();
       if(isFile)
       {
        let category=getCategory(childNames[i]);
        sendFiles(childAddress,dest,category)
       }
      }
    }
    function getCategory(name)
    {
     let ext= path.extname(name)
      ext=ext.slice(1);
      for(let type in types)
      {
        let cTypeArray=types[type];
        for(let i=0;i<cTypeArray[i];i++)
        {
          if(ext==cTypeArray[i])
          {
            return type;
          }
        }
      }
      return "others";
    }
    function sendFiles(srcfile,dest,category)
    {
      let categoryPath=path.join(dest,category)
      if(fsy.existsSync(categoryPath)==false)
      {
         fsy.mkdirSync(category);
      }
      let filename=path.basename(srcfile);
      let destfilePath=path.join(categoryPath,filename);
      fsy.copyFileSync(srcfile,destfilePath);
      fsy.unlinkSync(srcfile);
    }
    module.exports={
        organizeKey:organizefnc
    }