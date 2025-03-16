import React, { useState, useEffect } from 'react';

function Profile(){
    const [username,setUsername] = useState('');
    const [age,setAge] =useState('');
        const [profile,setProfile] = useState(null);
    
    useEffect(()=>{
        console.log('Username changed:',username);
        console.log('Age changed to :',age);
        


    },[username,age]);
    useEffect(()=> {
            async function fetchData(){
                const response = await fetch('http://localhost:3001/api/profile');
                const data = await response.json();
                setProfile(data);
            }
            fetchData();
        },[]);
    return(
        <div style={{ padding: '1rem' }}>
            <h2>Profile</h2>
            <label>
                Username:
                <input
                   value={username}
                   onChange={(e)=> setUsername(e.target.value)}
                   style={{width:'50%'}}
                   />
                   </label>
                   <div>
                   <label>
                   Age:
                   <input
                    value={age}
                    onChange={(e)=> setAge(e.target.value)}
                    style={{width:'50%'}}
                    />

            </label>
            <div>
            {profile ? (
                <div>
                    <p>User: {profile.user}</p>
                    <p>Role: {profile.role}</p>
                    </div>
                    ) : (
                        <p> Loading...</p>
                    )
            }
        </div>
            </div>
            <p>Welcome, {username || 'Guest'} of age {age || 'Unknown'}!</p>
            <p>
                Here you can manage your chatbot preferences or view personal stats.
            </p>
        </div>
    );
}


export default Profile;