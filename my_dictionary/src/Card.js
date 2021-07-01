import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";



const Card = (props) => {
  const dict_list = useSelector(state => state.dict.list);
  console.log(dict_list);


  return (
    <CardContainer>
      {dict_list.map((list, index) => {
				return (
					<CardBox key={index} >
						<Word>{list.word}</Word>
						<Pronounce>{list.pronounce}</Pronounce>
						<Discription>{list.discription}</Discription>
						<Example>{list.example}</Example>
						<button></button>
					</CardBox>
				)
      })}
        
    </CardContainer>
    );

}

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	
`

const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
	max-width: 350px;
	height: 150px;
	border-radius: 15px;
	border: 2px solid purple;
`

const Word = styled.div`

`

const Pronounce = styled.div`

`

const Discription = styled.div`

`

const Example = styled.div`

`

export default Card;