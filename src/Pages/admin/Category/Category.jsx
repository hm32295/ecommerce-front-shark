import { useEffect, useState } from "react";
import AdminDataPage from "../../../component/admin/AdminData/AdminData";
import Header from "../../../component/admin/Header/Header"
import { useCategory } from "../../../context/CategoryContext";

const Category = () => {
  
  const [categories, setCategories] = useState([])
  const {getAllCategories,loading ,deleteCategory} = useCategory()

 const handelCategories = async () => {
    try {
      const response = await getAllCategories()
      setCategories(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  const handelDeleteCategory = async (id) => {
    try {
      await deleteCategory(id)
      handelCategories()
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    handelCategories()
  }, [])
  
 
  return (
    <div>
      <Header
        title="Categories"
        subtitle="Manage your category and inventory"
        addButton={true}
        addText="Add Category"
        addPath="/admin/category/add"
      />

    <AdminDataPage  title="Category" subtitle="Manage your categories and inventory" loading={loading}
  
          columns={[
            
            {
              key: "name",
              label: "name",
            },
            
            {
              key: "description",
              label: "description",
            },
          
         
          ]}
                  actions={[
          {
            type: "show",
            label: "Show",
            link: (item) => `/admin/category/${item._id}`,
         
          },

          {
            type: "edit",
            label: "Edit",
            link: (item) => `/admin/category/edit/${item._id}`,
         
          },

          {
            type: "delete",
            label: "Delete",
            onClick: (category) => {
              handelDeleteCategory(category._id)
            },
          }]}
          data={categories}

    />
    </div>
  )
}

export default Category