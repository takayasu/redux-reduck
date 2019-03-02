import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import {AppBar, Toolbar, Button} from "@material-ui/core";

import MENU_DATA from './MenuData';

const AppBarMenu = () => {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        {MENU_DATA.map(row => (
                                <Link to={row.path} key={row.id}>
                                    <Button variant={"text"} style={{color: 'white'}}>{row.value}</Button>
                                </Link>
                            )
                        )}
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
};

export default AppBarMenu;
