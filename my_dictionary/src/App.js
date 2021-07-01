import React from "react";
import styled, {keyframes} from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { firestore } from "./firebase";

import Card from "./Card";
import Create from "./Create";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { loadDictFB } from "./redux/modules/dict";

import AddCircleIcon from '@material-ui/icons/AddCircle';

const mapStateTopProps = (state) => ({
  dict_list: state.dict.list,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadDictFB());
  }
  // create: (new_dict) => {
  //   dispatch(creatDict(new_dict));
  // }
  
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  };

  componentDidMount() {
    this.props.load();
    // console.log(this.state.dict.list);

  }



  render(){
    return (
      <div className="App">
        <MainOutter>
          <Title onClick={() => {this.props.history.push('/')}}>세련된 으-른이 되기 위한 언어사용 지침서</Title>
          <Line/>
          <Switch>
            <Route path="/" exact component={Card} />
            <Route path="/create" exact component={Create}/>
            {/* <Route component={NotFound}/> */}
          </Switch>
          <CreateBtn onClick={() => {this.props.history.push('/create')}}>
            <AddCircleIcon style={{fontSize:"45px", color:"#7c4dff"}}/>
          </CreateBtn>
        </MainOutter>
        
      </div>
    )
  };


};

const MainOutter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`

`
const Line = styled.hr`
  width: 90%;
  margin: 16px 0px;
  border: 1px solid gray;
`

const CreateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 80%;
  top: 30%;
  transition: all ease 1s;

  $:hover div svg {
    transform: rotate( 90deg );
  }
`

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
