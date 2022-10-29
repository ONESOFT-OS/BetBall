import axios from "axios";
import { useEffect, useState } from "react";
import * as crypto from "crypto-js";
import { Buffer } from "buffer";



const api = axios.create({
    
})

export const useApi = () =>({

    signin: async (email: string, password: string) => {
        const header = JSON.stringify({
            'alg': 'HS256',
            'typ': 'JWT'
        });
        
        const payload = JSON.stringify({
            'email': email,
            'password': password
        });
        
        const base64Header =  Buffer.from(header).toString('base64').replace(/=/g, '');
        const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');
        const secret = 'my-custom-secret';
        
        const data = base64Header + '.' + base64Payload;
        
        const signature = crypto
            .HmacSHA256(data, 'sha256' + secret).toString()
        
        const signatureUrl = signature
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '') 
        
        console.log(signatureUrl);
         
        return{
            user: { password: password, email: email},
            token: signatureUrl

        }        
        const response = await api.post('/signin', {email, password});

        return response.data;

    },

    signout: async() => {
        return {status: true};
        const response = await api.post('/signout');
        return response.data;

    }   

});