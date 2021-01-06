import React from 'react';
import { Grid, Footer, MenuItem } from './styles';

const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            {children}
            <Footer>
                <MenuItem>
                    Menu 1
                </MenuItem>
                <MenuItem>
                    Menu 2
                </MenuItem>
            </Footer>
        </Grid>
    )

}

export default Layout;