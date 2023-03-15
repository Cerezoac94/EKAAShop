import CreateOrder from "./components/listCart/CreateOrder";
import ListCartMap from "./components/listCart/ListCartMap";

const ShoppingCartContainer = () => {
  return (
    <>
      <ListCartMap me={14} />
      <CreateOrder me={14} />
    </>
  );
};

export default ShoppingCartContainer;
