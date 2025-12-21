import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from 'bcryptjs' 

    export async function POST(req: Request) {
        try {
            const body = await req.json();
            const { email, username, password } = body; 
            
            //check if email already exists
            const existingUserByEmail = await db.user.findUnique({
                where : { email: email }
            })

            if (existingUserByEmail) {
                return NextResponse.json({ user: null, message: 'User with this email already exists' }, {status: 409})
            }

            //check if username already exists
            const existingUserByUsername = await db.user.findUnique({
                where : { username: username }
            })

            if (existingUserByUsername) {
                return NextResponse.json({ user: null, message: 'User with this name already exists' }, {status: 409})
            }

            const hashedPassword = await 

            //create new user if there isn't already account w/ username or email
            const newUser = await db.user.create({
                data: {
                    username,
                    email,
                    password
                }
            })

        } catch (error) {

        }
    }