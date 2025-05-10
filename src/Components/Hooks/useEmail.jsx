import { useUser } from '@clerk/clerk-react';
import React from 'react'

const useEmail = () => {
    const {user} = useUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    return email;
}

export default useEmail