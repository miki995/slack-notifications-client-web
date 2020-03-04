import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
    const classes = useStyles();
    return (
        <Header
            brand=""
            color="transparent"
            rightLinks={
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <CustomDropdown
                            left
                            caret={false}
                            hoverColor="black"
                            buttonText={
                                <img
                                    src={profileImage}
                                    className={classes.img}
                                    alt="profile"
                                />
                            }
                            buttonProps={{
                                className:
                                    classes.navLink + " " + classes.imageDropdownButton,
                                color: "transparent"
                            }}
                            dropdownList={[
                                "Sign out"
                            ]}
                        />
                    </ListItem>
                </List>
            }
        />
    );
}
