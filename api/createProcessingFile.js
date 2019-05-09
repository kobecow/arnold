"use strict"


//dev only
let files = ["files/raw/1.010.txt"]

const main = (files) =>{
  console.log("YES");
  const fs = require('fs')
  const log4js = require('log4js')
  const log4js_extend = require('log4js-extend');
  log4js_extend(log4js, {
    path: __dirname,
    format: "at @name (@file:@line:@column)"
  });
  const logger = log4js.getLogger('debug');
  logger.level = 'debug';


  const is_Files = (files) =>{
    const is_Array = Array.isArray(files)
    if(is_Array){
      logger.debug('input type is array')
      return is_Array
    }else{
      logger.info('there no files to proccess')
      proccess.exit
    }
  }

  is_Files(files)
  const rs = fs.createReadStream(files[0], 'utf8');

  const showman = (data) =>{
    console.log(data);
    return data
  }
  rs.pipe(showman)



}

main(files)
