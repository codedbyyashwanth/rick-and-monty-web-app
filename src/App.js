import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query"
import axios from "axios";
import { useState } from "react";

function App() {
      const [pageValue, setPageValue] = useState(1);
      const [page, setPage] = useState(1);

      const fetchData = ({ queryKey }) => {
            return axios.get(`https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`)
            .then(response => response.data);
      }

      const { data, status } = useQuery(["characters", pageValue], fetchData, {
            keepPreviousData : false
      });

      if (status === "loading")
            return <div className="loading"><h4>Loading...</h4></div>
      
      if (status === "error")
            return <div className="error"><h4>Error...</h4></div>

      return (
            <>
                  <Navbar />
                  <Main data={data} pageValue={pageValue} setPageValue={setPageValue} page={page} setPage={setPage} />
            </>
      );
}

export default App;
