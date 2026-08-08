import {  useEffect } from "react";
import AdminDataPage from "../../../component/admin/AdminData/AdminData";
import Header from "../../../component/admin/Header/Header"
import { useUsers } from "../../../context/UsersContext";
const columns=[
    {
      key: "name",
      label: "name",
    },

    {
      key: "email",
      label: "email",
    },
    {
      key: "role",
      label: "role",
    },
    {
      key: "phone",
      label: "phone",
    },
    {
      key: "secondaryPhone",
      label: "secondary Phone",
    },
    {
      key: "address",
      label: "address",
    },
    {
      key: "isBlocked",
      label: "Status",
      render: (user) =>
        user.isBlocked ? "Blocked" : "Active",
    },
  ]
const Products = () => {
  
  const { getAllUsers,blockUser, loading ,users } = useUsers();

  
 

  const handelBlockUser = async (id) => {
    try {
       await blockUser(id) 
        await getAllUsers()
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    const handelUsers = async () => {
        try {
            await getAllUsers();
            
        } catch (error) {
          console.log(error);
        }
        }

    handelUsers()
  }, [getAllUsers])
  

  return (
    <div>
      <Header
        title="Users"
        subtitle="Manage your Users and inventory"
        addButton={false}
      />

      <AdminDataPage
        title="users"
        subtitle="Manage your users and inventory"
        loading={loading}
        columns={columns}
        data={users}

        actions={[
          {
            type: "show",
            label: "Show",
            link: (item) => `/admin/users/${item._id}`,

          },


          {
            type: "delete",
            label: "Delete",
            onClick: (user) => {
              handelBlockUser(user._id)
            },
          }]}

    />
    </div>
  )
}

export default Products