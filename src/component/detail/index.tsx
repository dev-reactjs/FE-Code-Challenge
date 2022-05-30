import React,{FunctionComponent} from "react";
import "./detail.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Detail: FunctionComponent<DetailProps> = ({ data }) => {
  const lang = Object.values(data?.languages);
  const cur = Object.values(data?.currencies);
  console.log(cur,'hello')
  const currenciesName = cur.map((res) =>  res?.name  )

  const details = [
    {
      name: "Native Name:",
      value: data?.name?.nativeName?.spa?.common,
    },
    {
      name: "Region:",
      value: data?.region,
    },
    {
      name: "Sub Region:",
      value: data?.subregion,
    },
    {
      name: "Capital:",
      value: data?.capital && data?.capital[0],
    },
    {
      name: "Population:",
      value: data?.population,
    },
  ];

  const lowerDetail = [
    {
      name: "Top Level Domain:",
      value: data?.tld && data?.tld[0],
    },
    {
      name: "Languages:",
      value: lang.toString(),
    },
    {
      name: "Currencies:",
      value: currenciesName.toString(),
    },
  ];

  return (
    <div className="conatiner">
      <Typography
        gutterBottom
        variant="h4"
        sx={{ fontWeight: 600, ml: 6, mb: 6, color: "primary.text" }}
        component="span"
      >
        {data?.name?.common}
      </Typography>

      <div className="detailSection">
        <div>
          {details.map((res,index) => {
            return (
              <div className="innerSection" key={index}>
                <Typography
                  gutterBottom
                  variant="inherit"
                  sx={{ fontWeight: 600, ml: 6, mb: 2, color: "primary.text" }}
                  component="span"
                >
                  {res.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="inherit"
                  component="span"
                  sx={{ color: "primary.light", ml: 1 }}
                >
                  {res.value}
                </Typography>
              </div>
            );
          })}
        </div>
        <div>
          {lowerDetail.map((res) => {
            return (
              <div className="innerSection">
                <Typography
                  gutterBottom
                  variant="inherit"
                  sx={{ fontWeight: 600, ml: 6, mb: 2, color: "primary.light" }}
                  component="span"
                >
                  {res.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="inherit"
                  component="span"
                  sx={{ color: "primary.light", ml: 1 }}
                >
                  {res.value}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lowestSection">
        <Typography
          gutterBottom
          variant="inherit"
          sx={{ fontWeight: 600, ml: 6, mb: 6, color: "primary.light" }}
          component="span"
        >
          Border Countries:
        </Typography>
        {data?.borders.map((res) => (
          <Paper
            component="div"
            sx={{
              p: 0.2,
              pr: 1,
              pl: 1,
              display: "flex",
              alignItems: "center",
              height: 30,
              bgcolor: "background.color",
              ml: 1,
              color: "primary.light",
            }}
          >
            {res}
          </Paper>
        ))}
      </div>
    </div>
  );
};

interface DetailProps {
  data:{
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

}

export default Detail;
