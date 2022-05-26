import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardSection = ({
  flag,
  region,
  population,
  country,
  capital,
  countryData,
}) => {
  const navigate = useNavigate();
  const handleClick = () =>
    navigate("/country-discription", { state: countryData });

  const details = [
    {
      name: "Population:",
      value: population,
    },
    {
      name: "Region:",
      value: region,
    },
    {
      name: "Capital:",
      value: capital,
    },
  ];

  return (
    <Card
      sx={{
        width: { xs: 220, sm: 200, md: 280, lg: 310, xl: 400 },
        mr: { xs: 2, sm: 4, md: 6, lg: 12, xl: 14 },
        mt: { xs: 2, sm: 4, md: 6, lg: 12, xl: 14 },
        mb: { xs: 2, sm: 4, md: 6, lg: 12, xl: 14 },
        bgcolor: "background.color",
        color: "primary.text",
        height: 300,
      }}
      onClick={handleClick}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <CardMedia component="img" height="140" image={flag} alt={country} />
        <CardContent sx={{ height: "100%" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 600, textOverflow: "ellipsis" }}
            component="span"
          >
            {country}
          </Typography>
          <br />
          {details?.map((res,index) => {
            return (
              <>
                <Typography
                  key={index}
                  gutterBottom
                  variant="h7"
                  sx={{ fontWeight: 600 }}
                  component="span"
                >
                  {res.name}
                </Typography>
                <Typography variant="body2" component="span">
                  {res.value}
                </Typography>
                <br />
              </>
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSection;
