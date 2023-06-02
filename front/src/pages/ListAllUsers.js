import React, { useEffect, useState } from "react";
import { FaUserNinja } from "react-icons/fa";
import { toast } from "react-toastify";

import ClientUsers from "../services/user.js";

import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import "./Create/style.css";

export default function ListAllUsers() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function fetchUsers() {
         try {
            const response = await ClientUsers.list();
            if (response.status === 200) {
               setUsers(response.data);
            } else {
               toast.error("Falha ao carregar usuários");
            }
         } catch (error) {
            toast.error("Falha ao carregar usuários");
         }
      }

      fetchUsers();
   }, []);

   return (
      <div>
         <Sidebar />

         <div className="content">
            <Title name="Listar Todos os Usuários">
               <FaUserNinja size={30} />
            </Title>

            <div className="container">
               <ul>
                  {users.map((user) => (
                     <li key={user.id}>
                        <strong>Nome:</strong> {user.nome} -{" "}
                        <strong>E-mail:</strong> {user.email}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}
