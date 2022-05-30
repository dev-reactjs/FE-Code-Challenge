import React,{FunctionComponent} from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import "./filter.css";

const Filter : FunctionComponent<FilterProps>= ({ handleChange, regionName, region }) => {
  const theme = useTheme();


  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 50,
        bgcolor: "background.paper",
        mt: 6,
      }}
    >
      <select
        onChange={handleChange}
        value={regionName}
        className="sectionSelect"
        style={{
          backgroundColor: theme?.palette?.background?.paper,
          border: "none",
          color: theme?.palette?.secondary?.main,
          width: "150px",
          paddingLeft: "2px",
          paddingRight: "2px",
        }}
      >
        <option value="Filter countries">FIlter countries</option>
        {region.length &&
          region?.map((name, index) => (
            <option
              key={index}
              value={name?.region}
            >
              {name?.region}
            </option>
          ))}
      </select>
    </Paper>
  );
};

interface FilterProps{
  handleChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
  regionName:string
  region :coutries[]
}

interface coutries{
    flags:{
      png:string
    }
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

export default Filter;
