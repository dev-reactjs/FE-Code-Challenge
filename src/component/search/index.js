import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import styled from '@emotion/styled'



const Search = ({value,onChange}) => {
    return(
        <Paper
        component="div"
        sx={{
          pl: 5,
          display: "flex",
          alignItems: "center",
          width: 350,
          height: 50,
          bgcolor: "background.color",
          mt: 6
        }}
      >
        <SearchIcon color="secondary" />
        <InputBase
          sx={{ ml: 2, flex: 1,color:"secondary" }}
          color="secondary"
          placeholder="Search for a country..."
          inputProps={{
            "aria-label": "search for a country",
          }}
          value={value}
          onChange={(e)=>onChange(e)}
        />
      </Paper>
    )
}

export default Search;