import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Detail from "../../component/detail";
import "./description.css";

const Description = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleClick = () => navigate("/");

  const data:dataProps= state as dataProps;

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height: { xs: "200vh", sm: "200vh", md: "100vh", lg: "100vh" },
        width: "100%",
        pr: 8,
        pl: 8,
        pt: 8,
      }}
    >
      <Button
        variant="contained"
        sx={{ mt: 6 }}
        startIcon={<ArrowBackIcon />}
        onClick={handleClick}
      >
        back
      </Button>
      <div className="section">
        <Box
          component="img"
          sx={{
            width: { xs: 300, sm: 400, md: 600, lg: 600 },
            height: { xs: 150, sm: 200, md: 400, lg: 400 },
            content: {
              xs: `url(${data?.flags?.png})`,
              sm: `url(${data?.flags?.png})`,
              md: `url(${data?.flags?.png})`,
              lg: `url(${data?.flags?.png})`,
            },
          }}
          alt="image"
        />
        <Detail data={data} />
      </div>
    </Box>
  );
};

interface dataProps{
  flags:{
    png:string
  },
  languages:string
  currencies:{
    name:any
  }
  name:{
    nativeName:{
      spa:{
        common:string
      }
    },
    common:string
  }
  region:string
  subregion:string
  capital:string[]
  population:string
  tld:string[]
  borders:string[]
}

export default Description;
