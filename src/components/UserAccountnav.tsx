'use client';

import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const UserAccountnav = () => {
    return (         
    <Button onClick = {() => signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in` //redirects user to the signin page? 
    })} variant='destructive'>
        Sign Out
    </Button>
    );
}

export default UserAccountnav;