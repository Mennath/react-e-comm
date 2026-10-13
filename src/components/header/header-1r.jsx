
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box, Typography, IconButton, useTheme, MenuItem, FormControl, Select, InputLabel,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


export const Header1r = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        bgcolor: "#474f60",
        display: "flex",
        alignItems: "center",
        p: 1,
        gap: 1,
      }}
    >
      <Typography
        sx={{
          mr: 1,
          p: "3px 10px",
          bgcolor: "#d23f57",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        HOT
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#fff" }}>
        Free Express Shipping
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        sx={{ color: "#fff" }}
      >
        {theme.palette.mode === "light" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
      <FormControl size="small" sx={{ minWidth: 20 }}>
        <InputLabel id="age-label" sx={{ color: "#fff" }}>
        </InputLabel>

        <Select
          labelId="age-label"
          id="age-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            color: "#fff",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            ".MuiSvgIcon-root": {
              color: "#fff",
            },
          }}
        >
          <MenuItem value={10}>AR</MenuItem>
          <MenuItem value={20}>EN</MenuItem>
        </Select>
      </FormControl>
      {/* Social media icons */}
      <FacebookIcon sx={{ color: "#fff", fontSize: 20 }} />
      <InstagramIcon sx={{ color: "#fff", fontSize: 20 }} />
      <TwitterIcon sx={{ color: "#fff", fontSize: 20 }} />
    </Box>
  );
};

export default Header1r;
