import React  from "react";
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { routes } from "routes/index.js";
import { Link } from "react-router-dom";


function CollapseSidebarUserItems() {

  return (
            <Tabs
            orientation="vertical"
            variant="scrollable"
            >
              <Tab
                label="Profile"
                component={Link}
                to={routes.profile}
              />
               <Tab
                label="Account Settings"
                component={Link}
                to={routes.settings}
              />
               <Tab
                label="Password"
                component={Link}
                to={routes.password}
              />
              <Tab
                label="Billing"
                component={Link}
                to={routes.billings}
              />
              <Tab
                label="Card"
                component={Link}
                to={routes.card}
              />
            </Tabs>
  );
}

export default CollapseSidebarUserItems;