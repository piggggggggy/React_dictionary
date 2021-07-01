import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { firestore } from "./firebase";

import Card from "./Card";
import Create from "./Create";
import NotFound from "./NotFound";

import { connect } from "react-redux";
import { loadDictFB } from "./redux/modules/dict";

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
    // this.props.load();
    // console.log(this.state.dict.list);

  }



  render(){
    return (
      <div className="App">
        <MainOutter>
          <Title>세련된 으-른이 되기 위한 언어사용 지침서</Title>
          <Line/>
          <Switch>
            <Route path="/" exact component={Card} />
            <Route path="/create" exact component={Create}/>
            {/* <Route component={NotFound}/> */}
          </Switch>
          <CreateBtn onClick={() => {this.props.history.push('/create')}}/>
        </MainOutter>
      </div>
    )
  };


};

const MainOutter = styled.div`

`
const Title = styled.div`

`
const Line = styled.div`

`
const CreateBtn = styled.button`

`

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
