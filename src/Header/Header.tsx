import Box from '@mui/material/Box';
import { AppBar, Typography, Toolbar, IconButton  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
       <Box>
           <AppBar position='static'>
               <Toolbar>
                    <IconButton 
                        color = 'inherit'
                        edge = 'start'
                        size = 'large'
                            >
                        <MenuIcon onClick =  {()=> alert("sidebar yet to be built")} />
                    </IconButton>
                    <Typography variant ='h5'>
                        Apod-api
                    </Typography>
               </Toolbar>
           </AppBar>

       </Box>
    )
}

export default Header;