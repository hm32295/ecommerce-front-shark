import { useNavigate } from "react-router-dom";
import Header from "../../../../component/admin/Header/Header";
import AdminForm from "../../../../component/admin/AdminForm/AdminForm";
import { useCategory } from "../../../../context/CategoryContext";
import { useEffect, useState } from "react";
import { useProduct } from "../../../../context/ProductsContext";

const AddProduct = () => {
  const [categories ,setCategories] = useState([])
  const navigate = useNavigate();
  const { getAllCategories } = useCategory()
  const {addProducts ,loading} = useProduct()

  const handelCategories = async () => {
    try {
      const response = await getAllCategories()
      setCategories(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    handelCategories()
  }, [])
  

  const handleSubmit = async (data) => {
    data.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10'
  try {
    const response = await addProducts(data)
    console.log(response);
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

      options: categories.map(category => {
        return {value : category._id, label:category.name}
      })
  
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


  return (
    <>
      <Header
        title="Add Product"
        subtitle="Create a new product for your store"
        addButton={false}
      />


      <AdminForm
        title="Product Information"
        subtitle="Enter the product details below"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Create Product"
        loading={loading}
      />

    </>
  );
};

export default AddProduct;