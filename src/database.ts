import {Client, ClientConfig} from 'pg'

const config: ClientConfig = {
    connectionString: 'postgresql://postgres:1@localhost:5432/teams'
}

const client = new Client(config)

client.connect(error => {
    if(error){
        console.log('Connection error: ' + error)         
    }
    else{
        console.log('Connect to Database')     
    }
})

export default client