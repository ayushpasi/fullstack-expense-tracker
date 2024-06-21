/* global Razorpay */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const BuyPremium = () => {
  const [token, setToken] = useState("");
  const [text, setText] = useState(
    "Processing your Premium Membership Purchase..."
  );
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Fetch the token from localStorage when the component mounts
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }

    // Start the premium purchase process automatically
    const initiatePurchase = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/purchase/premium-membership`,
          {
            headers: { Authorization: storedToken },
          }
        );

        const options = {
          key: res.data.key_id,
          order_id: res.data.order.id,
          handler: async function (response) {
            try {
              const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/purchase/update-transaction-status`,
                {
                  order_id: options.order_id,
                  payment_id: response.razorpay_payment_id,
                },
                { headers: { Authorization: storedToken } }
              );

              alert(
                "Welcome to our Premium Membership! You now have access to Reports and LeaderBoard."
              );

              localStorage.setItem("token", res.data.token);
              setToken(res.data.token);
              window.location.reload();
            } catch (error) {
              console.error("Error updating transaction status", error);
              alert("Transaction failed. Please try again.");
            }
          },
        };

        const rzp1 = new Razorpay(options); // ESLint will now recognize Razorpay
        rzp1.open();

        rzp1.on("payment.failed", (response) => {
          console.error(response.error.code);
          console.error(response.error.description);
          alert("Something went wrong with the payment.");
        });
      } catch (error) {
        console.error("Error initiating premium membership purchase", error);
        alert(
          "Failed to initiate premium membership purchase. Please try again."
        );
      }
    };
    if (user.isPremiumUser) {
      setText(" You are a premium member");
    } else {
      initiatePurchase();
    }
  }, []);

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

export default BuyPremium;
