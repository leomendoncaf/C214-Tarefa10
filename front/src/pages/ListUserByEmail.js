import React, { useState } from "react";
import { FaUserNinja } from "react-icons/fa";
import { toast } from "react-toastify";

import ClientUsers from "../services/user.js";

import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import "./Create/style.css";

export default function ListUserByEmail() {
   const [email, setEmail] = useState("");
   const [user, setUser] = useState(null);

   async function handleSearch(e) {
      e.preventDefault();

      try {
         const response = await ClientUsers.listByEmail(email);
         if (response.status === 200) {
            setUser(response.data);
         } else {
            setUser(null);
            toast.error("Usuário não encontrado");
         }
      } catch (error) {
         setUser(null);
         toast.error("Falha ao buscar usuário");
      }
   }

   return (
      <div>
         <Sidebar />

         <div className="content">
            <Title name="Listar Usuário por E-mail">
               <FaUserNinja size={30} />
            </Title>

            <div className="container">
               <form onSubmit={handleSearch}>
                  <label>E-mail</label>
                  <input
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  <button type="submit">Buscar</button>
               </form>

               {user && (
                  <div className="user-details">
                     <strong>Nome:</strong> {user.nome} <br />
                     <strong>E-mail:</strong> {user.email}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
