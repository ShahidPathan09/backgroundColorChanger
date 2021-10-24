import React from "react";
import { connect } from 'react-redux';
import { color_1, color_2, color_3, color_4, color_5, reset } from "./Actions/Action";
import { Button, Radio, Switch, Checkbox } from '@material-ui/core';

function Cluster(props) {
    return (
        <>
            <div style={{ backgroundColor: props.bgColor, height: "100vh", marginTop: "-22px" }}>
                <h1>Buttons</h1>
                <Button style={{ color: "black", marginBottom: "15px" }} variant='contained' onClick={props.color_1}>click here</Button><br />
                <Button style={{ color: "red", marginBottom: "15px" }} variant='contained' onClick={props.color_2}>click here</Button><br />
                <Switch style={{ color: 'pink', marginBottom: "15px" }} onClick={props.color_3} /><br />
                <Checkbox style={{ color: "yellow", backgroundColor: "white", marginBottom: "15px" }} onClick={props.color_4} indeterminate /><br />
                <Radio style={{ color: "orange", backgroundColor: "white", marginBottom: "15px" }} onClick={props.color_5} /><br />
                <Button variant="contained" onClick={props.reset}>Reset</Button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        bgColor: state.reducer1.bgColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        color_1: () => dispatch(color_1()),
        color_2: () => dispatch(color_2()),
        color_3: () => dispatch(color_3()),
        color_4: () => dispatch(color_4()),
        color_5: () => dispatch(color_5()),
        reset: () => dispatch(reset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cluster);
