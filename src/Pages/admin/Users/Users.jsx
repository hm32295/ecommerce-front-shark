import {  useEffect, useState } from "react";
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
  
  const [users, setUsers] = useState([])
  const { getAllUsers,blockUser, loading } = useUsers();

  
  const handelUsers = async () => {
    try {
      const response = await getAllUsers();
      const handelResponse = response.data.map(user => {
        return {
          address: `${user.adress?.city || ''}- ${user.adress?.area || ''}- ${user.adress?.street || ''} `,
          ...user}
        })
        
      setUsers(handelResponse);
    } catch (error) {
      console.log(error);
    }
  }


  const handelBlockUser = async (id) => {
    try {
       await blockUser(id) 
      handelUsers()
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    handelUsers()
  }, [])
  

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