import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createDictFB } from "./redux/modules/dict";

const Create = (props) => {
	const dispatch = useDispatch();

	const wordinput = useRef();
	const pronounceinput = useRef();
	const discriptioninput = useRef();
	const exampleinput = useRef();

	const addDict = () => {
		const dict = {word: wordinput.current.value, pronounce: pronounceinput.current.value, discription: discriptioninput.current.value, example: exampleinput.current.value, completed: false};
		console.log(dict);

		dispatch(createDictFB(dict));
		props.history.goBack();
	}

  return (
    <CreateContainer>
      <MiniTitle>단어 추가하기</MiniTitle>
			<Items>
				<Box>
					<Item>단어</Item>
					<Input type='text' ref={wordinput}></Input>
				</Box>
				<Box>
					<Item>발음</Item>
					<Input type='text' ref={pronounceinput}></Input>
				</Box>
				<Box>
					<Item>설명</Item>
					<Input type='text' ref={discriptioninput}></Input>
				</Box>
				<Box>
					<Item>예시</Item>
					<Input type='text'ref={exampleinput}></Input>
				</Box>
			</Items>
			<SaveBtn onClick={addDict} >추가하기</SaveBtn>
    </CreateContainer>
	);
}

const CreateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const MiniTitle = styled.div`

`
const Items = styled.div`

`
const Box = styled.div`
	width: 350px;
	height: 500px;
`
const Item = styled.div`

`
const Input = styled.input`
	width: 350px;
`
const SaveBtn = styled.button`

`

export default Create;