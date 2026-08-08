import {  useParams } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext";
import { useEffect, useState } from "react";
import AdminDetails from "../../../component/admin/AdminDetails/AdminDetails";

const CategoryDetails = () => {

  const { id } = useParams();

    const {getSingleCategory,category,loading} = useCategory()


    
    
    useEffect(() => {
    const handelCategory = async () => {
        try {
            await getSingleCategory(id);
          } catch (error) {
          console.log(error);
          } 
    };
    handelCategory();
  }, [getSingleCategory ,id]);


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