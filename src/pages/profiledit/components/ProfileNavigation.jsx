import React from "react";
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const TabLink = (props) => (
    <Tab component={Link} {...props} />
)

export const ProfileNavigation = ({ className }) => (
    <Tabs
        orientation="vertical"
        variant="scrollable"
        className={ className }
    >
        <TabLink
            label="Profile Edit"
            to="/profile"
        />
        <TabLink
            label="Billing Edit"
            to="/billings"
        />
        <TabLink
            label="Account Edit"
            to="/accountedit"
        />
        <TabLink
            label="Settings Edit"
            to="/settingsedit"
        />
        <TabLink
            label="Sessions"
            to="/sessions"
        />
    </Tabs>
);
ProfileNavigation.propTypes = {
    className: PropTypes.string
};
