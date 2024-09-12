import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <>
      <div className="items-container">
        {items.map((item) => {
          return <HomeItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
export default Home;
