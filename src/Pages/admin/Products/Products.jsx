import { useEffect, useState } from "react";
import AdminDataPage from "../../../component/admin/AdminData/AdminData";
import Header from "../../../component/admin/Header/Header"
import { useProduct } from "../../../context/ProductsContext";
import { useCategory } from "../../../context/CategoryContext";
import AdminPagination from "../../../component/admin/AdminPagination/AdminPagination";
const filters = (categories) => {
  return [
    {
      name: "title",
      label: "Product name",
      placeholder: "Search by name",
      col: "col-12 col-md-6 col-lg-3",
    },
    {
      name: "min_price",
      label: "Minimum price",
      type: "number",
      placeholder: "Min price",
      col: "col-12 col-md-6 col-lg-3",
    },
    {
      name: "max_price",
      label: "Maximum price",
      type: "number",
      placeholder: "Max price",
      col: "col-12 col-md-6 col-lg-3",
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      placeholder: "All categories",

      options: categories.map(category => {
        return { value: category._id, label: category.name }
      })
      ,

      col: "col-12 col-md-6 col-lg-3",
    },

  ]
}

const columns=[
          {
            key: "title",
            label: "title",
           
          },

          {
            key: "brand",
            label: "Brand",
          },

          {
            key: "category",
            label: "Category",
            render: (product) => product.category?.name || "-",
          },

          {
            key: "price",
            label: "Price",
            render: (product) =>
              `${product.price ?? 0} EGP`,
          },

        ]
const Products = () => {
  const [countProduct ,setCountProduct] = useState(0)
  const [product, setProduct] = useState([])
  const { getProducts, loading ,deleteOneProduct} = useProduct();
  const [categories, setCategories] = useState([])
  const {getAllCategories} = useCategory()

 const handelCategories = async () => {
    try {
      const response = await getAllCategories()
      setCategories(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  const handelProduct = async () => {
    const page = 1;
    const size = 5
    try {
      const response = await getProducts({page,size});

      setCountProduct(response.count)
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleFilter = async ({ title,min_price , max_price ,category }) => {
      try {
        const response = await getProducts({ title, min_price, max_price, category,page:1,size:5 });
        setCountProduct(response.count);
  

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    handelProduct()
    handelCategories()
  }, [])
  



  const deleteProduct = async (id) => {
    try {
      await deleteOneProduct(id)
      handelProduct()
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div>
      <Header
        title="Products"
        subtitle="Manage your products and inventory"
        addButton={true}
        addText="Add Product"
        addPath="/admin/products/add"
      />

      <AdminDataPage title="Products" subtitle="Manage your products and inventory" loading={loading}
        filters={filters(categories)}
        columns={columns}
        type ="add"
        data={product}
        onFilter={handleFilter}
        actions={[
          {
            type: "show",
            label: "Show",
            link: (item) => `/admin/products/${item._id}`,
            onClick: (product ,index) => {
              console.log("Show Product:", product,index);
            },
          },

          {
            type: "edit",
            label: "Edit",
            link: (item) => `/admin/products/edit/${item._id}`,
            onClick: (product) => {
              console.log("Edit Product:", product);
            },
          },

          {
            type: "delete",
            label: "Delete",
            onClick: (product) => {
              deleteProduct(product._id)
            },
          }]}

      />
      
    </div>
  )
}

export default Products