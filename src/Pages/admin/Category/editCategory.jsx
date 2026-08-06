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
    const {editCategory,getSingleCategory,loading} = useCategory()
    const navigate = useNavigate();
    const [category, setCategory] = useState({})

    const { id } = useParams()
    const handelCategory = async () => {
        try {
            const response = await getSingleCategory(id)
            setCategory(response.data);     
        } catch (error) {
            console.log(error);
        }
    }
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
     handelCategory()   
    },[])
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