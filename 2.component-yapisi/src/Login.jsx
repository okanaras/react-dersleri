import React from 'react'

export const users = [
    {
        username: 'Okan',
        password: '1'
    },
    {
        username: 'Ali',
        password: '2'
    }
]

function Login() {
    return (
        <>
            <div>
                <div>
                    <p>Kullanici Adi</p>
                    <input type='text' />
                </div>

                <div>
                    <p>Parolaniz</p>
                    <input type='password' />
                </div>

                <button>Giris Yap</button>
            </div>
        </>
    )
}

export default Login