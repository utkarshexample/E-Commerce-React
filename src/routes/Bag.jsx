import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => {
              return (
                <>
                  <CartItem key={item.id} item={item} />
                </>
              );
            })}
          </div>
          <div className="bag-summary">
            <CartSummary />
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
