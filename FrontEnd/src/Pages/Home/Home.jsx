import React, { useContext, useEffect } from "react";
import Search from "./Search/Search";
import "./home.css";
import Context from "../../Components/Context/Context";

const Home = () => {
  const { location, setLocation, setWp } = useContext(Context);
  useEffect(() => {
 

    if (
      location[0] === 22.986886203432356 &&
      location[1] === -82.46164577350554
    ) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setLocation([position.coords.latitude, position.coords.longitude]);
            setWp((e) => {
              if (e.length > 1)
                return [
                  [position.coords.latitude, position.coords.longitude],
                  e[1],
                ];
              else
                return [[position.coords.latitude, position.coords.longitude]];
            });
          },
          function (error) {
            console.log(error);
          }
        );
      }
    }
  }, []);

  return (
    <>
      <Search />
    </>
  );
};

export default Home;
