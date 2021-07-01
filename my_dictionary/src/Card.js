import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";



const Card = (props) => {
    const dict_list = useSelector(state => state.dict.list);
    console.log(dict_list);


    return (
        <CardContainer>
            <Card></Card>
        </CardContainer>
    );

}

const CardContainer = styled.div`

`

const Card = styled.div`

`

export default Card;