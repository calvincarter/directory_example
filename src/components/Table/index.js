import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/index';
import API from '../utils/API';

const Table = () => {
    // hooks
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        API.getEmployee()
            .then(({ data }) => {
                if (data.results.length === 0) {
                    throw new Error("No results found.");
                }
                if (data.status === "error") {
                    throw new Error(data.message);
                }

                setEmployees(data.results);
            })
            .catch((error) => console.log(error));

    }, []);

    const searchText = (event) => {
        let input = event.target.value;
        setSearch(input);
    };

    console.log(employees);

    return employees (
        <div>
            <SearchBar searchText={searchText} />

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees
                        .filter(({ data, name, email }) => {
                            switch(search) {
                                case 
                                    null: 
                                        return data;
                                        break;
                                case    
                                    name.first.toLowerCase().includes(search.toLowerCase()) || 
                                    name.last.toLowerCase().includes(search.toLowerCase()) ||
                                    email.toLowerCase().includes(search.toLowerCase()):
                                        return data;
                                        break;
                                default: 
                                    console.log('Type something to filter results')
                            }
                        })
                        .map(({ email, picture, name }) => {
                            return (
                                <tr keys={email}>
                                    <th scope="row">
                                        <img src={picture.thumbnail} alt="employee headshot" />
                                    </th>
                                    <td>{name.first}</td>
                                    <td>{name.last}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;