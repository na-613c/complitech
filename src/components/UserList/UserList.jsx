import React, { useEffect, useState } from 'react';
import Image from './Image';
import { Table } from 'antd';

const UserList = ({ allPeople, getImage }) => {

    console.log(allPeople.length)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        allPeople.length !== 0 && setLoading(false)
    }, [allPeople])

    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Фото',
            dataIndex: 'image_ref',
            key: 'image_ref',
            render: (text, row, index) => <Image key={text} getImage={getImage} image_ref={text} />
        }
    ];

    return (
        <div>
            <Table
                dataSource={allPeople}
                columns={columns}
                pagination={{ defaultPageSize: 15 }}
                loading={loading}
                bordered
            />
        </div>
    );
}

export default React.memo(UserList);