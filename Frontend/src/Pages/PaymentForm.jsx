// // PaymentForm.js
// import React, { useState, useEffect } from 'react';
// import { CardElement, injectStripe } from 'react-stripe-elements';

// const PaymentForm = ({ stripe }) => {
//   const [clientSecret, setClientSecret] = useState('');
//   const [amount, setAmount] = useState(1000); // Amount in cents, e.g., $10.00

//   useEffect(() => {
//     // Fetch a client secret from your server when the component mounts
//     async function fetchClientSecret() {
//       const response = await fetch('/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount }),
//       });
//       const data = await response.json();
//       setClientSecret(data.clientSecret);
//     }

//     fetchClientSecret();
//   }, [amount]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { token, error } = await stripe.createToken({ name: 'Name' });

//     if (error) {
//       console.error(error);
//     } else {
//       const response = await fetch('/process-payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount,
//           token: token.id,
//         }),
//       });

//       if (response.status === 200) {
//         console.log('Payment successful!');
//       } else {
//         console.error('Payment failed.');
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Amount:
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Card details:
//           <CardElement />
//         </label>
//       </div>
//       <button type="submit">Pay</button>
//     </form>
//   );
// };

// export default injectStripe(PaymentForm);
