import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function UserList() {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const request = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUser(request.data);
        };
        getData(setListOfUser);
    }, []);

    return (
        <div>
            {listOfUser.map(user => (
                <div key={user.id}>
                   {user.name} 
                </div>
            ))}
        </div>
    );
}
