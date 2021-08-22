import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';


const Image = ({ image_ref, getImage }) => {

    const [state, setstate] = useState()

    useEffect(async () => {
        !!image_ref && setstate(await getImage(image_ref))
    }, [image_ref])


    return (
        <Avatar shape="square" size={64} src={state} />
    );
}

export default Image;