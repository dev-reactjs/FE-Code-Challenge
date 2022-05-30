import React,{FunctionComponent} from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search : FunctionComponent<SearchProps>= ({ value, onChange }) => {
  return (
    <Paper
      component="div"
      sx={{
        pl: 5,
        display: "flex",
        alignItems: "center",
        width: 350,
        height: 50,
        bgcolor: "background.paper",
        mt: 6,
      }}
    >
      <SearchIcon color="secondary" />
      <InputBase
        sx={{ ml: 2, flex: 1, color: "secondary" }}
        color="secondary"
        placeholder="Search for a country..."
        inputProps={{
          "aria-label": "search for a country",
        }}
        value={value}
        onChange={onChange}
      />
    </Paper>
  );
};


interface SearchProps{
  value:string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=> void
}
export default Search;
