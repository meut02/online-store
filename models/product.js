const path=require('path')
const fs=require('fs')
const rootDir = require('../util/path');
const p= path.join(rootDir, 'data', 'products.json')

const getproductfromfile=(cb)=>{
    fs.readFile(p,(err,filecontent)=>{
        if(err)
        {
            cb ([])
        }
        else{
        cb(JSON.parse(filecontent))
        }
    })
    
}


module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getproductfromfile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err)
            })
           })
           
        }
      
      
       
    

    static fetchAll(cb) {
        getproductfromfile(cb)
    }
}