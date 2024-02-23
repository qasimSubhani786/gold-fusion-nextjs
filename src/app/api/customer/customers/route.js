import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../_lib/mongo';

export const GET = async (request, response) => {
       try {
        const db = await connectToDatabase();
        const collection = db.collection('customers');
        const data = await collection.find({}).toArray() || [];
        return NextResponse.json({
            data: data
        },{
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: `Error in fetching data from Server ${error}`}, {
            status: 500
        })
    }
}