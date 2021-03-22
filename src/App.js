import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/index';
import API from './utils/API';

const App = () => {
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


    return  (
        <div>
            <SearchBar searchText={searchText} />

            <table className="table">
                <thead>
                    <tr>
                        <th>Profile</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees
                        .filter(employee => {
                            const {name, email} = employee;

                            // If search is empty return all employees. No need to filter out data.
                            if(!search) {
                                return true;
                            }

                             
                            if(name.first.toLowerCase().includes(search.toLowerCase()) || 
                                name.last.toLowerCase().includes(search.toLowerCase()) ||
                                email.toLowerCase().includes(search.toLowerCase()))
                            {
                                return true;
                            }

                            return false;
                        })
                        .map(({ email, picture, name }) => {
                            return (
                                <tr keys={email}>
                                    <th scope="row">
                                        <img src={picture.thumbnail} alt="employee headshot" />
                                    </th>
                                    <td>{name.first}</td>
                                    <td>{name.last}</td>
                                    <td>{email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default App;