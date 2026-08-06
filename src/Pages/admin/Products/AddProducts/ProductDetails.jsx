import { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import AdminDetails from "../../../../component/admin/AdminDetails/AdminDetails";
import { useProduct } from "../../../../context/ProductsContext";
const ProductDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();
    const {getOneProduct,loading} = useProduct()
  const [product, setProduct] = useState(null);


  const getProduct = async () => {
    
      try {
          const response = await getOneProduct(id);
          console.log(response);
        
        setProduct(response.data);
        } catch (error) {
        console.log(error);
        } 

  };


  useEffect(() => {
    getProduct();
  }, []);


  return (

    <AdminDetails
      title={product?.title || "Product Details"}
      subtitle="View complete product information"
      loading={loading}
      data={[
        
        {
          label: "Product Name",
          value: product?.title,
        },
        {
          label: "Brand",
          value: product?.brand,
        },
        {
          label: "Price",
          value: product
            ? `${product.price} EGP`
            : "—",
        },
        {
          label: "Stock",
          value: product?.stock,
        },
        {
          label: "Create At",
          value: product?.createdAt,
        },
        {
          label: "updated At",
          value: product?.updatedAt,
        },

        {
          label: "Category",
          value: product?.category?.name,
        },
        {
          label: "Rating",
          value: product?.rating,
        },
        {
          label: "Description",
          value: product?.description,
          className: "admin-detail-item col-span-2",
          },
        {
            label: "image",
            type:'image',
            value: product?.image,
        },
      ]}

      actions={[
        {
          name: "edit",
          label: "Edit",
          icon: Edit,
          variant: "edit",
          path: `/admin/products/edit/${id}`,
        },

 
      ]}

    />

  );
};

export default ProductDetails;