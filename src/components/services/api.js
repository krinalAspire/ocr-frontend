import axios from "axios";

export const getrowData = async () => {
  try {
    const data = await axios.get("http://localhost:5000/PaymentData");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

// export const getrowData=()=>{
//     axios
//     .get("http://localhost:5000/PaymentData")
//     .then((res) => {
//       // setrowData(res.data);
//     //   console.log(res);
//       return res;
//       // console.log(res.data)
//     })
//     .catch((err) => {
//       // toast.error("Failed: " + err.message);
//       console.log(err.message);
//     });
// }


