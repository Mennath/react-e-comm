import { Stack } from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "@mui/material";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { IconButton } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Header2r = () => {
  return (
    <Container  sx={{ my: 3 , display: "flex" ,  alignItems: "center"}}> 
      <Stack
       sx={{ alignItems: "center"}}>
        <ShoppingCartCheckoutIcon />E-commerce

      </Stack>
     <Search sx={{ flexGrow: 1 , mx: 3}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      </Search>
      <ShoppingCartCheckoutIcon />
      <IconButton>
        <Person2OutlinedIcon />
      </IconButton>

      </Container>
  )
}
