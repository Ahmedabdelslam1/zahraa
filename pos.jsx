const addItem = (name, fixedPrice) => {
  const price = prompt("ادخل السعر:", fixedPrice);
  if (!price) return;

  setItems([...items, { name, price: Number(price) }]);
};
