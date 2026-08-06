import { useNavigate, useParams } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext";
import { useEffect, useState } from "react";
import AdminDetails from "../../../component/admin/AdminDetails/AdminDetails";

const CategoryDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();
    const {getSingleCategory,loading} = useCategory()
    const [category, setCategory] = useState(null);


  const handelCategory = async () => {
      try {
          const response = await getSingleCategory(id);
            setCategory(response.data);
        } catch (error) {
        console.log(error);
        } 

  };


  useEffect(() => {
    handelCategory();
  }, []);


  return (

    <AdminDetails
      title={category?.name || "category Details"}
      subtitle="View complete category information"
      loading={loading}
      data={[
        {
          label: "name",
          value: category?.name,
        },
        {
            label: "description",
            value: category?.description,
        }

      ]}

    />

  );
};

export default CategoryDetails;