import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Filter from "../../component/filter";
import Search from "../../component/search";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../../component/card";
import { fetchApi } from "./Api";
import "./landingPage.css";

const LandingPage = () => {
  const [regionName, setRegionName] = useState("");
  const [coutries, setCountries] = useState([]);
  const [filterCoutries, setFilterCoutries] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRegionName(value);
    const selected = coutries?.filter((rr) => rr?.region == value);
    setFilterCoutries(selected);
  };

  useEffect(() => {
    fetchApi().then((res) => {
      setCountries(res);
      setFilterCoutries(res);
    });
  }, []);

  useEffect(() => {
    setFilterCoutries(coutries);
    if (coutries) {
      const name = coutries?.filter((res) => {
        if (res?.name?.common.includes(search)) {
          return res?.name?.common;
        }
      });
      if (name) {
        setFilterCoutries(name);
      } else {
        setFilterCoutries(coutries);
      }
    }
  }, [search]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  let loading = filterCoutries.length > 0 && coutries.length > 0;

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height: "100%",
        pr: 8,
        pl: 8,
        pt: 8,
      }}
    >
      <div className="container">
        <div className="upperArea">
          <Search value={search} onChange={(e) => handleChangeSearch(e)} />
          <Filter
            handleChange={handleChange}
            regionName={regionName}
            region={coutries}
          />
        </div>
        <div className="cardArea">
          {!loading && (
            <div className="loading">
              <CircularProgress color="secondary" />
            </div>
          )}
          {filterCoutries.map((country, index) => (
            <div key={index}>
              <Card
                flag={country?.flags?.png}
                region={country?.region}
                population={country?.population}
                country={country?.name?.common}
                countryData={country}
                capital={country?.capital && country?.capital[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default LandingPage;
