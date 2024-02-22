import clientPromise from ".";

let client
let db
let customers

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        customers = await db.collection(`customers`)
    } catch (error) {
        throw new Error(`Failed to stablish connection to database`)
    }
}

; (async () => {
    await init()
})()

// ===== Creating and Fetching new records ===== //

export const createNewCustomersCollection = async () => {
    const databaseInstance = await connectToDatabase();
   
    // Define your schema (keys) for the collection
    const collectionSchema = {
        _id: '',
        fullName: '',
        // Add more keys as needed
    };
    
    // Create the collection with the defined schema
    await databaseInstance.createCollection('your-collection-name', {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: Object.keys(collectionSchema),
                properties: Object.entries(collectionSchema).reduce((acc, [key, value]) => {
                    acc[key] = { bsonType: typeof value };
                    return acc;
                }, {})
            }
        }
    });
 
    console.log('Collection created successfully');
}

export async function getCustomers() {
    try {
        if (!customers) await init()
        const result = await customers.find({}).limit(20).map(customer => ({
            ...customer, _id: customer._id.toString()
        })).toArray()
        return { customers: result }
    } catch (error) {
        return {
            error: `Failed to fetch Customers`
        }
    }
}