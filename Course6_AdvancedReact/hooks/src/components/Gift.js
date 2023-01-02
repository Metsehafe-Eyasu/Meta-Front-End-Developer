import { useState } from "react";

const Gift = () => {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    value: true,
    instructions: "to use your coupon, click the button below",
  });

  const spendGiftCard = () => {
    setGiftCard((prevState) => {
      return { ...prevState, 
            value:false, 
            instructions: 'Please visit our restaurant to renew your gift card', 
            text: " Your coupon had been used " 
        };
    });
  };

  return (
    <div className="giftCard">
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.value && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
};

export default Gift;
