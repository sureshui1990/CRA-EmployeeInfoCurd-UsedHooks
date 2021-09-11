import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fetch() {

    const [loading, setLoading] = useState(true);
    
    const [error, setError] = useState('');
    
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = 'https://reqres.in/api/users/3';
        axios.get(url)
        .then((res) => {
            console.log('res', res);
            setLoading(false);
            setPost(res.data);
            setError('');
        })
        .catch(err => {
            setLoading(false);
            setError('Something went wrong - Network issue');
            setPost('');
        })
    }, []);
    const { data = {} } = post;
    const { avatar, email, first_name } = data;
    const Profile = () => {
        if(!email) return null;
        return <>
        <h3>{first_name}</h3>
        <p>Email: {email}</p>
        <p><img src={avatar} alt="jj" title={first_name} /></p>
        </>
    }
    return (
        <div>
            <h2>Fetch data</h2>
            {loading ? 'Loading' : <Profile />}
            {error ? <p><b>{error}</b></p> : null}
        </div>
    )
}
