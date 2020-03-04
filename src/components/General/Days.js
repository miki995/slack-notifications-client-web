import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Days() {

    const classes = useStyles();

    const handleToggle = value => {
        console.error(value);
    };

    return (
        <div className={classes.section}>
            <div className={classes.title}>
                <h5>Days</h5>
            </div>
            <FormControlLabel
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(22)}
                        checked={true}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                        }}
                    />
                }
                classes={{label: classes.label, root: classes.labelRoot}}
                label="Monday"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(22)}
                        checked={true}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                        }}
                    />
                }
                classes={{label: classes.label, root: classes.labelRoot}}
                label="Tuesday"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(22)}
                        checked={true}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                        }}
                    />
                }
                classes={{label: classes.label, root: classes.labelRoot}}
                label="Wednesday"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(22)}
                        checked={true}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                        }}
                    />
                }
                classes={{label: classes.label, root: classes.labelRoot}}
                label="Thursday"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        tabIndex={-1}
                        onClick={() => handleToggle(22)}
                        checked={true}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                        }}
                    />
                }
                classes={{label: classes.label, root: classes.labelRoot}}
                label="Friday"
            />
        </div>
    )
}
