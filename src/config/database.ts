import mongoose from 'mongoose';

class Mongoose {
    private mongo: any = mongoose;
    private databaseUrl: any = process.env.MONGO_URL;
    private mongoConfig = {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    };

    constructor() {
        this.mongo.connect(this.databaseUrl, this.mongoConfig);
    }

    public setup(): void {
        const db = this.mongo.connection;

        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', () => {
            console.info(`Database connected: ${this.databaseUrl}`);
            
            this.addRandomCat();
        });
    }

    /**
     * Test method
     * @return {void}
     */
    private addRandomCat(): void  {   
        const kittySchema =  this.mongo.Schema({
            name: String
        });

        const Kitten = this.mongo.model('Kitten', kittySchema);

        const cat = new Kitten({
            name: 'Silence' + Math.random()
        });

        cat.save((err, object) => {
            if (err) return console.error(err);
            console.log('There is a new random cat in the neighborhood');
        });
    }
}

export = Mongoose;