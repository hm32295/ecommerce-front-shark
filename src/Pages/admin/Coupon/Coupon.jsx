import { useEffect } from "react";
import { useCoupon } from "../../../context/CouponContext";
import Header from "../../../component/admin/Header/Header";
import AdminDataPage from "../../../component/admin/AdminData/AdminData";

const columns=[
          {
            key: "code",
            label: "code",
           
          },

          {
            key: "discount",
            label: "discount",
          },
          {
            key: "usageLimit",
            label: "usage Limit",
          },

          {
            key: "expireDate",
            label: "expireDate",
          },

        ]
const Coupon = () => {
  
  const { getAllCoupons,coupons, loading ,deleteCoupon} = useCoupon();

 
  
  
  useEffect(() => {
    const handelCoupon = async () => {
      try {
        await getAllCoupons();
      } catch (error) {
        console.log(error);
      }
    }
    handelCoupon()
  }, [getAllCoupons])
  
 
  const handelDeleteCoupon = async (id) => {
    try {
      await deleteCoupon(id)
      await getAllCoupons()
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div>
      <Header
        title="Coupons"
        subtitle="Manage your Coupons and inventory"
        addButton={true}
        addText="Add Coupon"
        addPath="/admin/coupon/add"
      />

      <AdminDataPage title="coupons" subtitle="Manage your coupons and inventory" loading={loading}
        
        columns={columns}
        data={coupons}
        actions={[
          {
            type: "show",
            label: "Show",
            link: (item) => `/admin/coupon/${item._id}`,
            onClick: (coupon ,index) => {
              console.log("Show coupon:", coupon,index);
            },
          },

          {
            type: "edit",
            label: "Edit",
            link: (item) => `/admin/coupon/edit/${item._id}`,
            onClick: (coupon) => {
              console.log("Edit coupon:", coupon);
            },
          },

          {
            type: "delete",
            label: "Delete",
            onClick: (coupon) => {
              handelDeleteCoupon(coupon._id)
            },
          }]}

    />
    </div>
  )
}

export default Coupon