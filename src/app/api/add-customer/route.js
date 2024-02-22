import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongo';

export const POST = async (request, response) => {
       try {
        const db = await connectToDatabase();
        const requestData = await request.json();
        console.log('requestData', requestData);
        const collection = db.collection('customers');
        const data = await collection.find({}).toArray() || [];
        console.log('Data fetched from MongoDB:', data); // Server-side logging
        return NextResponse.json({
            data: requestData
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