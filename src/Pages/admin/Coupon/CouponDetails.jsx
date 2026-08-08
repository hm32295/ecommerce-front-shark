import { useParams } from "react-router-dom";
import { useCoupon } from "../../../context/CouponContext";
import { useEffect } from "react";
import AdminDetails from "../../../component/admin/AdminDetails/AdminDetails";

const CouponDetails = () => {

  const { id } = useParams();

    const {getSingleCoupon,loading,coupon} = useCoupon()


    
    
    useEffect(() => {
    const getCoupon = async () => {
      
        try {
             await getSingleCoupon(id);
        
          } catch (error) {
          console.log(error);
          } 
  
    };
    getCoupon();
  }, [getSingleCoupon,id]);


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