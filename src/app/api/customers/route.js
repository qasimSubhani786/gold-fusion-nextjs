import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongo';

export const GET = async (request, response) => {
       try {
        const db = await connectToDatabase();
        const collection = db.collection('customers');
        const data = await collection.find({}).toArray() || [];
        console.log('Data fetched from MongoDB:', data); // Server-side logging
        return NextResponse.json({
            data: data
        },{
            status: 200
        })
        // response.status(200).json({});
    } catch (error) {
        return NextResponse.json({message: `Error in fetching data from Server ${error}`}, {
            status: 500
        })
    }
}