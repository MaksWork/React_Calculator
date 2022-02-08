import React from "react";

import { Button } from "@material-ui/core";

const CalcButton = (props) => {
    return (
        <div>
            <Button
                onClick={props.onClick}
                value={props.value}
                style={{
                    backgroundColor: "#34444B",
                    fontSize: 23,
                    color: "#fff",
                    borderRadius: 1,
                }}
                variant='outlined'>
                {props.value}
            </Button>
        </div>
    );
};

export default CalcButton;
