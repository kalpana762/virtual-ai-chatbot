import React,{useEffect, useState} from 'react';

function FetchDemoAsync(){
    const [profile,setProfile] = useState(null);
    useEffect(()=> {
        async function fetchData(){
            const response = await fetch('http://localhost:3001/api/profile');
            const data = await response.json();
            setProfile(data);

            // try {
            //     const response = await fetch('http://localhost:3001/api/profile');
            //     const data = await response.json();
            //     console.log('Fetched data(async/await):', data);

            // }catch (error){
            //     console.error('Error fetching data: ',error);
            // }
        }
        fetchData();
    },[]);
    return(
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
    );
}

export default FetchDemoAsync;