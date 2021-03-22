import React, { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/index"
import Table from "../Table/index.js";


const searchResults = () => {
    state = {
        search: "",
        results: [],
        allResults: [],
        sort: true,
    };

    switchSortDir = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            sort: !this.state.sort
        })
    },

        sortAlph = name => {
            const sortedEmployees = this.state.results.sort((a, b) => {
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else return 0;
            })
            console.log(sortedEmployees);
        };

    render() {
        return (
            <div>
                <Card heading="Search">
                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        sortDescending={this.toggleSort}
                    />
                </Card>
                <Card>
                    <ResultList
                        handleSortNames={this.sortNames}

                        results={this.state.results}


                    />
                </Card>
            </div>
        );
    }
};



