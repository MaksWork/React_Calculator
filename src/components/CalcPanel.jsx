import React from "react";

import { TextField } from "@material-ui/core";

const CalcPanel = (props) => {
    return (
        <div className='panel-container'>
            <TextField
                size='medium'
                value={props.value}
                InputProps={{ readOnly: true }}
                inputProps={{
                    style: {
                        backgroundColor: "#fff",
                        width: 255,
                        color: "#34444B",
                        textAlign: "right",
                        fontSize:23
                    },
                }}></TextField>
        </div>
    );
};

export default CalcPanel;
