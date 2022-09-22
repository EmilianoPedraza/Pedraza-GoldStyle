
const CartWidgetContaier = ({rutImg, children}) => {
  return (
    <div className="--cardWidgetC">
      <img src={rutImg}/>
      {children}
    </div>
  );
};

export default CartWidgetContaier 
