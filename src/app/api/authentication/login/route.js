import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../_lib/mongo';
import jwt from 'jsonwebtoken'

const KEY = 'goldiamCraftersCMS'

export const POST = async (request, response) => {
    const requestObject = await request.json();
    if (!requestObject) {
        return NextResponse.json({
            message: `Bad Request`
        }, {
            status: 404
        })
    }

    const { email, password } = requestObject

    return NextResponse.json({
        token: jwt.sign({
            email,
            isAdmin: email === 'umer.asif@devexcelit.com' && password === '123456'
        }, KEY)
    })
}