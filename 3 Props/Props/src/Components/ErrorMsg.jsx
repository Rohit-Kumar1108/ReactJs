function ErrorMsg({ foodItems }) {
  return (
    <>
      {(!foodItems || foodItems.length === 0) && <h3>I am still Hungry.</h3>}
    </>
  );
}

export default ErrorMsg;
