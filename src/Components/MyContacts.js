import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Fuse from 'fuse.js';

export default function MyContacts({data}) {
    const [query, setQuery] = useState("");
    
    const fuse = new Fuse(data, {
        keys: [
            'name',
            'email',
            'phone'
        ],
        includeScore : true
    })
    const results = fuse.search(query);
    
    const dataResults = query ? results.map( result => result.item) : data;


    function handleOnSearch({currentTarget = {}}) {
        const {value} = currentTarget;
        setQuery(value);
    }
    return <>
        <div className="search-card">
            <input placeholder="Search ..." className="search-bar" type="text" value={query} onChange={handleOnSearch} />
        </div>
        <div className="table-wrapper">
        <table className="fl-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                   {dataResults.map((data) => (
                        <tr key={uuidv4()}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                        </tr>
                    ))}

            </tbody>
            </table>
        </div>


    </>
}