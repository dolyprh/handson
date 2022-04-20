
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import {Box, Paper, Grid} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Giff = ({source, title}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} >
                    <img src={source} alt={title} key={title} />;
                </Grid>
            </Grid>
        </Box>
    )
}

export default Giff;