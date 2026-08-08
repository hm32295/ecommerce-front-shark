import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext";
import { useProduct } from "../../../context/ProductsContext";
import Header from "../../../component/admin/Header/Header";
import AdminForm from "../../../component/admin/AdminForm/AdminForm";


const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const { getAllCategories ,categories } = useCategory()
  const {getOneProduct,editOneProduct,product ,loading} = useProduct()

  useEffect(() => {
    const handelProduct= async () => {
      try {
         await getOneProduct(id)
      } catch (error) {
        console.log(error);
        
      }
    }
    const handelCategories = async () => {
      try {
         await getAllCategories()
      } catch (error) {
        console.log(error);
        
      }
    }
      handelCategories();
      handelProduct()
  }, [getAllCategories ,getOneProduct ,id])
  
  const handleSubmit = async (data) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("brand", data.brand);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("category", data.category);
      formData.append("description", data.description);
      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
    }
    try {
    await editOneProduct(id,formData)
    navigate("/admin/products");
    
  } catch (error) {
    console.log(error); 
  }
  };


  const fields = [
    {
      name: "title",
      label: "Product Name",
      placeholder: "Enter product name",
      required: true,
      col: "col-12 col-md-6",
    },

    {
      name: "brand",
      label: "Brand",
      placeholder: "Enter brand",
      required: true,
      col: "col-12 col-md-6",
    },

    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "Enter price",
      required: true,
      col: "col-12 col-md-6",
    },

    {
      name: "stock",
      label: "Stock",
      type: "number",
      placeholder: "Enter stock quantity",
      required: true,
      col: "col-12 col-md-6",
    },

    {
      name: "category",
      label: "Category",
      type: "select",
      placeholder: "Select category",
      required: true,
      col: "col-12 col-md-6",


      options: categories?.map((category) => ({
        value: category._id,
        label: category.name,
      })) || [],
      
    },

    {
      name: "image",
      label: "Product Image",
      type: "file",
      accept: "image/png,image/jpeg,image/webp",
      placeholder: "Choose product image",
      col: "col-12 col-md-6",
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Write product description...",
      required: true,
      rows: 6,
      col: "col-12",
    },
  ];

const defaultValues = {
  title: product?.title || "",
  brand: product?.brand || "",
  price: product?.price || "",
  stock: product?.stock || "",
  category: product?.category?._id || "",
  description: product?.description || "",
};
  return (
    <>
      <Header
        title="edit Product"
        subtitle="update a product for your store"
        addButton={false}
      />
      {defaultValues.title && (
          <AdminForm
            title="update Product"
            defaultValues={defaultValues}    
            subtitle="Enter the product details below"
            fields={fields}
            onSubmit={handleSubmit}
            submitText="update Product"
            loading={loading}
          />
  )}

    </>
  );
};

export default EditProduct;