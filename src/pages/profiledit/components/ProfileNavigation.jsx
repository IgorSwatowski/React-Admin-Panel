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
            to="/apps/profiledit/profileedit"
        />
        <TabLink
            label="Billing Edit"
            to="/apps/profiledit/billings/billing"
        />
        <TabLink
            label="Account Edit"
            to="/apps/profiledit/accountedit"
        />
        <TabLink
            label="Settings Edit"
            to="/apps/profiledit/settingsedit"
        />
        <TabLink
            label="Sessions"
            to="/apps/profiledit/sessions"
        />
    </Tabs>
);
ProfileNavigation.propTypes = {
    className: PropTypes.string
};
