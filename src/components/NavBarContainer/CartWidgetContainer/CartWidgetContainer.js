
const CartWidgetContaier = ({rutImg, children, altt}) => {
  return (
    <div className="--cardWidgetC">
      <img src={rutImg} alt={altt}/>
      {children}
    </div>
  );
};

export default CartWidgetContaier 
