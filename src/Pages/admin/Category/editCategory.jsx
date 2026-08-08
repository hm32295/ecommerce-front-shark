import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext";
import { useEffect, useState } from "react";
import Header from "../../../component/admin/Header/Header";
import AdminForm from "../../../component/admin/AdminForm/AdminForm";

  const fields = [
    {
      name: "name",
      label: "category Name",
      placeholder: "Enter category name",
      required: true,
      col: "col-12 col-md-6",
    },

    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Write category description...",
      required: true,
      rows: 6,
      col: "col-12",
    },
  ];


const EditCategory = () => {
    const {editCategory,category,getSingleCategory,loading} = useCategory()
    const navigate = useNavigate();

    const { id } = useParams()

    const handleSubmit = async (data) => {
        try {
            const response = await editCategory( id,data)
            console.log(response);
            navigate("/admin/categories");
        } catch (error) {
            console.log(error);
        }
    };
  
  useEffect(() => {
          const handelCategory = async () => {
        try {
             await getSingleCategory(id)  
        } catch (error) {
            console.log(error);
        }
    }
     handelCategory()   
    },[getSingleCategory , id])
  return (
    <>
      <Header
        title="edit category"
        subtitle="update a category for your store"
        addButton={false}
      />
          {category?.name && (
              

              <AdminForm
                  defaultValues={category}
                    title="category Information"
                    subtitle="Enter the category details below"
                    fields={fields}
                    onSubmit={handleSubmit}
                    submitText="update category"
                    loading={loading}
                />
            )}

    </>
  );
};

export default EditCategory;