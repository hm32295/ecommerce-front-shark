import {  useNavigate } from "react-router-dom";
import Header from "../../../../component/admin/Header/Header";
import AdminForm from "../../../../component/admin/AdminForm/AdminForm";
import { useCategory } from "../../../../context/CategoryContext";
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


const AddCategory = () => {
    const {addCategory,loading} = useCategory()
  const navigate = useNavigate();


  const handleSubmit = async (data) => {
    data.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10'
  try {
    const response = await addCategory(data)
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
    navigate("/admin/categories");
  };


  return (
    <>
      <Header
        title="Add category"
        subtitle="Create a new category for your store"
        addButton={false}
      />


      <AdminForm
        title="category Information"
        type="add"
        subtitle="Enter the category details below"
        fields={fields}
        onSubmit={handleSubmit}
        submitText="Create category"
        loading={loading}
      />

    </>
  );
};

export default AddCategory;