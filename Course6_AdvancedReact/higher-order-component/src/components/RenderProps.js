import { useState, useEffect } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "icecream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);
  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} - desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} - drinks</p>}
    />
  );
};

const RenderProps = () => {
    return (
        <div>
            <DessertsCount />
            <DrinksCount />
        </div>
    )
}

export default RenderProps