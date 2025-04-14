import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/PricingOption/PricingOption";
import ResultChart from "./components/ResultCharts/ResultChart";
import axios from "axios";
import MarksCharts from "./components/MarksCharts/MarksCharts";

const pricingPromise = fetch("PricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header>
        {/* <DaisyNav/> */}
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense >

        <Suspense fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }>
            <MarksCharts marksPromise={marksPromise}></MarksCharts>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
