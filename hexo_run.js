//run
const {exec} = require('child_process')
exec('hexo server',(error,stdout,stderr)=>{
    if(error){
        console.log('exec error: ${error}');
    }
    console.log('stdout:${stdout}')
    console.log('stderr:${stderr}')
})