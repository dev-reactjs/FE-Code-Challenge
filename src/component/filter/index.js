import React from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import "./filter.css";

const Filter = ({ handleChange, regionName, region }) => {
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        backgroundColor: theme?.palette?.primary?.main,
        color: "secondary",
      },
    },
  };

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 50,
        bgcolor: "background.color",
        mt: 6,
      }}
    >
      <select
        onChange={handleChange}
        value={regionName}
        className="sectionSelect"
        style={{
          backgroundColor: theme?.palette?.background?.color,
          border: "none",
          color: theme?.palette?.secondary?.main,
          width: '150px',
          paddingLeft: "2px",
          paddingRight:"2px"
        }}
      >
        <option value="Filter countries">FIlter countries</option>
        {region.length &&
          region?.map((name, index) => (
            <option
              key={index}
              value={name?.region}
              style={{ bgColor: "background.color" }}
            >
              {name?.region}
            </option>
          ))}
      </select>
    </Paper>
  );
};

export default Filter;
