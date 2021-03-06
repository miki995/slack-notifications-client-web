import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import CustomInput from "../CustomInput/CustomInput";

const useStyles = makeStyles(styles);

export default function Hours() {

    const classes = useStyles();

    return (
        <div className={classes.section}>
            <CustomInput
                labelText="Hours"
                id="hours"
            />
        </div>
    )
}
