export class BaseLogger{
    log(data){
        console.log("Default Logger" + data)
    }
}

export class ElastcLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

// Class'lar referans tiptir.