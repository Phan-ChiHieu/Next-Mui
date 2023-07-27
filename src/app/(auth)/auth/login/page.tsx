import JwtLoginView from '@/sections/auth/login/jwt-login-view';
import React from 'react'

export const metadata = {
    title: 'Jwt: Login',
};

export default function pageLogin() {
    return (
        <JwtLoginView />
    )
}
