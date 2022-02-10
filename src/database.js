import {connect} from 'mongoose'
import {MONGODB_URI, DB_NAME} from './config'



(async ()=>{
    console.log("works")
try{
const db=await connect(MONGODB_URI)
console.log('DB connected to', db.connection.name)
} catch(error){
    console.error(error);
}
})()