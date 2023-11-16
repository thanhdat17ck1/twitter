import { MongoClient, Db, Collection } from "mongodb";
import dotenv from 'dotenv'
import User from "~/models/schemas/User.schema";

dotenv.config()


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@facebook.fovmbte.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

class DatabaseService {
    private client: MongoClient
    private db: Db
    constructor() {
        this.client = new MongoClient(uri)
        this.db = this.client.db(process.env.DB_NAME)
    }

    async connect() {
        try {
            await this.client.connect();
            // Send a ping to confirm a successful connection
            await this.db.command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }catch(error) {
            console.log(error);
        }
    }

    get users(): Collection<User> {
        return this.db.collection(process.env.DB_USERS_COLLECTION as string)
    }
}

const databaseService = new DatabaseService();

export default databaseService;


