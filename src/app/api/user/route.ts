import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hash } from 'bcrypt' 

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

            const hashedPassword = await hash(password, 10); //encrypt the password before anything else! 

            //create new user if there isn't already account w/ username or email
            const newUser = await db.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword //
                }
            })
            //and ":" extracts the password property to newUserPassword and ...rest collects all remaining properties into a new object. 
            const { password:newUserPassword, ...rest} = newUser //remove password from response sent back to us 

          return NextResponse.json({ user: rest, message: 'User created successfully'}, { status: 201 })
        } catch (error) { //if you don't have the catch error block, the code will err 500 internal server issue. 
            console.error('Error creating user:', error)
            return NextResponse.json({ user: null, message: 'An error occurred while creating user' }, { status: 500 })
        }
    }