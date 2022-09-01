import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
  const orderListItems = orders.map(o =>
    <OrderListItem
      order={o}
      isSelected={o === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={o._id}
    />
  );
  return (
    <main className="OrderList">
      {orderListItems}
    </main>
  );
}