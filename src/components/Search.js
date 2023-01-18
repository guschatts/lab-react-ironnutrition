import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function Search(props) {

    return (
        <>
        <Divider> Search </Divider>
        <label> Search </label>
        <Input type='text' onChange={(e) => {
            const search = e.target.value();
            props.handleSearch = (search);
            props.setFiltered(search);
          }} />
        </>
    );
}

export default Search;