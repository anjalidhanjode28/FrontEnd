import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getWatches } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";

const Watches = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const watchData = useSelector((state) => state.AppReducer.watches);
  const [searchParams] = useSearchParams();

console.log(watchData);
  useEffect(()=>{
    let getWatchParams;
    if(location.search || watchData.length === 0){
      getWatchParams = {
        params: {
          category: searchParams.getAll('category'),
        },
      };
    }
    dispatch(getWatches(getWatchParams))
  }, [location.search, dispatch, watchData.length, searchParams]);


  return (
    <div data-testid="watches" style={{ display: "flex"}}>
      <Filter />
      <div 
        data-testid="watches-wrapper"
        style={{
          width: "100%",
          display: "grid",
          gap: "5px",
          gridAutoColumns: "repeat(3, 1fr)",
          justifyContent: 'center',
        }}
        >
        {/* Map through the watch list here using WatchCard Component */
         watchData.length > 0 && 
         watchData.map((watch) => {
          return (
            <div key={watch.id} style={{width: "310px"}}>
              <Link 
                to={`/watches/${watch.id}`}
                style={{textDecoration: "none", color: "black"}}
              >
                 <WatchCard {...watch}/>
              </Link>
            </div>
            
          );
         })}
         
      </div>
    </div>
  );
};

export default Watches;
