import { useParams } from "react-router-dom";
import { useUsers } from "../../../context/UsersContext";
import { useEffect,  } from "react";
import AdminDetails from "../../../component/admin/AdminDetails/AdminDetails";

const UsersDetails = () => {

  const { id } = useParams();

    const {getOneUsers,loading ,user} = useUsers()


    
    
  useEffect(() => {
    const getUser = async () => {
      
        try {
            await getOneUsers(id);
          } catch (error) {
          console.log(error);
          } 
  
    };
    getUser();
  }, [getOneUsers ,id]);


  return (

    <AdminDetails
      title={user?.name || "User Details"}
      subtitle="View complete user information"
      loading={loading}
      data={[
        
        {
          label: "Name",
          value: user?.name,
        },
        {
          label: "phone",
          value: user?.phone,
        },
        {
            label: 'address',
            value : `${user?.adress?.city} ${user?.adress?.area} ${user?.adress?.street} `
            
        },
        {
          label: "email",
          value: user?.email
        },
        {
          label: "role",
          value: user?.role,
        },
        {
          label: "secondary Phone",
          value: user?.secondaryPhone,
        },
        {
          label: "created At",
          value: user?.createdAt,
        },
        {
          label: "Blocked",
          value: user?.isBlocked ? 'Blocked' : "un Blocked" ,
        },
        {
          label: "Active",
          value: user?.inactive ?"un Active" : "Active"
        },

      ]}

    />

  );
};

export default UsersDetails;