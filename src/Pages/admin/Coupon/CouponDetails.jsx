import { useNavigate, useParams } from "react-router-dom";
import { useCoupon } from "../../../context/CouponContext";
import { useEffect, useState } from "react";
import AdminDetails from "../../../component/admin/AdminDetails/AdminDetails";

const CouponDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();
    const {getSingleCoupon,loading} = useCoupon()
  const [coupon, setCoupon] = useState({});


  const getCoupon = async () => {
    
      try {
          const response = await getSingleCoupon(id);
      
        setCoupon(response.data);
        } catch (error) {
        console.log(error);
        } 

  };


  useEffect(() => {
    getCoupon();
  }, []);


  return (

    <AdminDetails
      title={coupon?.name || "coupon Details"}
      subtitle="View complete coupon information"
      loading={loading}
      data={[
        
        {
          label: "code",
          value: coupon?.code,
        },
        {
          label: "discount",
          value: coupon?.discount,
        },
        {
          label: "expireDate",
          value: coupon?.expireDate,
        },
        {
          label: "usageLimit",
          value: coupon?.usageLimit,
        },
        
      ]}

    />

  );
};

export default CouponDetails;