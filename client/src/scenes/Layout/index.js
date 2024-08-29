import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useGetUserQuery } from '../../state/api';


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1.5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const userId=useSelector((state)=>state.global.userId);
  const {data}=useGetUserQuery(userId);
  const isNonMobile=useMediaQuery("(min-width: 600px)");
  
  //for drawer
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar
        data={data||{}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={open}
        setIsSidebarOpen={setOpen}
      />
      <Navbar
        data={data||{}}
        isSidebarOpen={open}
        setIsSidebarOpen={setOpen}
      />
      <Main sx={{padding:(open?"10px":"20px"),width:"fit-screen"}} open={open}>
        <DrawerHeader/>
        <Outlet/>
      </Main>
    </Box>
  );
}
