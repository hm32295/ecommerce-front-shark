import { useNavigate } from "react-router-dom";
import { useCoupon } from "../../../context/CouponContext";
import AdminForm from "../../../component/admin/AdminForm/AdminForm";
import Header from "../../../component/admin/Header/Header";

  const fields = [
    {
      name: "code",
      label: "coupon code",
      placeholder: "Enter coupon code",
      required: true,
      col: "col-12 col-md-6",
    },
    {
      name: "expireDate",
      label: "expire Date",
      placeholder: "Enter expireDate",
      required: true,
      type:"date",
      col: "col-12 col-md-6",
    },

    {
      name: "usageLimit",
      label: "usageLimit",
      type: "number",
      placeholder: "0",
      required: true,
      rows: 6,
      col: "col-12",
    },
    {
      name: "discount",
      label: "discount",
      type: "number",
      placeholder: "",
      required: true,
      rows: 6,
      col: "col-12",
    },
  ];


const AddCoupon = () => {
    const {addCoupon,loading} = useCoupon()
  const navigate = useNavigate();


  const handleSubmit = async (data) => {
   try {
    const response = await addCoupon(data)
    console.log(response);
    
    navigate("/admin/coupon");
  } catch (error) {
    console.log(error);
    
  }
  };


  return (
    <>
      <Header
        title="Add coupon"
        subtitle="Create a new coupon for your store"
        addButton={false}
      />


      <AdminForm
        title="coupon Information"
        subtitle="Enter the coupon details below"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Create coupon"
        loading={loading}
      />

    </>
  );
};

export default AddCoupon;