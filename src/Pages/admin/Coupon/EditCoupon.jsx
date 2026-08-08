import { useNavigate, useParams } from "react-router-dom";
import { useCoupon } from "../../../context/CouponContext";
import AdminForm from "../../../component/admin/AdminForm/AdminForm";
import Header from "../../../component/admin/Header/Header";
import { useEffect } from "react";

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


const EditCoupon = () => {
    const {id} = useParams()
    const {editCoupon,loading,getSingleCoupon,coupon} = useCoupon()
    const navigate = useNavigate();


    useEffect(() => {
      const getCoupon = async () => {
            try {
                 await getSingleCoupon(id)
            } catch (error) {
                console.log(error);
                
            }
        };
        getCoupon()
    },[getSingleCoupon,id])
  const handleSubmit = async (data) => {
   try {
    const response = await editCoupon(id,data)
    console.log(response);
    
    navigate("/admin/coupon");
  } catch (error) {
    console.log(error);
    
  }
  };


  return (
    <>
      <Header
        title="edit coupon"
        subtitle="update a coupon for your store"
        addButton={false}
      />

          {coupon?.code && (
              
              <AdminForm
                  defaultValues={coupon}
                    title="update coupon "
                    subtitle="Enter the coupon details below"
                    fields={fields}
                    onSubmit={handleSubmit}
                    submitText="update coupon"
                    loading={loading}
                />
            )}

    </>
  );
};

export default EditCoupon;