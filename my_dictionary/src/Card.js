import React from "react";
import styled, {keyframes} from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteDictFB } from "./redux/modules/dict";

import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Card = (props) => {
  const dict_list = useSelector(state => state.dict.list);
  console.log(dict_list);

	const dispatch = useDispatch();

  return (
    <CardContainer>
      {dict_list.map((list, index) => {
				return (
					<CardBox key={index} >
						<Word>{list.word}  <Pronounce>{list.pronounce}</Pronounce></Word>
						<Discription>{list.discription}</Discription>
						<Example>{list.example}</Example>
						<BtnGroup>
							<IconButton onClick={() => {window.alert("기능구현을 위해 후원을 부탁드려요! \n 신한은행 110-308-391020 박용태")}}>
								<EditIcon fontSize="small"/>
							</IconButton>
							<IconButton onClick={() => {dispatch(deleteDictFB(index))}}>
								<DeleteOutlinedIcon fontSize="small"/>
							</IconButton>
						</BtnGroup>
					</CardBox>
				)
      })}
        
    </CardContainer>
    );

}


const CardContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	max-width: 1080px;
	
`

const fade = keyframes`
	0%{
		box-shadow: none;
		background-color: #fff;
	}

	100%{
		box-shadow: 3px 3px 20px gray;
		background-color: #7c4dff;
	}
`

const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 350px;
	max-width: 350px;
	height: 150px;
	border-radius: 15px;
	border: 1px solid #7c4dff;
	box-sizing: border-box;
	margin: 5px;
	padding: 20px 20px 20px 20px;
	position: relative;

	&:hover{
		background-color: #7c4dff;
		animation: ${fade} 0.3s linear;
		box-shadow: 3px 3px 20px gray;
	}
	&:hover div {
		display: none;
	}
	&:hover span {
		font-size: 20px;
		color: #fff;
	}
	& svg {
		color: #7c4dff;
	}
	&:hover svg {
		color: #fff;
	}

`

const Word = styled.div`
	font-size: 20px;
	font-weight: bold;
	height: 30px;
	min-height: 30px;
`

const Pronounce = styled.span`
	font-size: 12px;
	height: 15px;
	min-height: 15px;
`

const Discription = styled.div`
	font-size: 14px;
	height: 30px;
	min-height: 30px;

`

const Example = styled.span`
	font-size: 14px;
	height: 60px;
	min-height: 60px;
	color: blue;
	text-align: bottom;
`

const BtnGroup = styled.span`
	position: absolute;
	left: 250px;
	top: 5px;

`

export default Card;