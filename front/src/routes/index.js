import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from "../pages/Create";
import Update from "../pages/Update";
import Delete from "../pages/Delete";
import ListAllUsers from "../pages/ListAllUsers"; // Importa a página de listar todos os usuários
import ListUserByEmail from "../pages/ListUserByEmail"; // Importa a página de listar usuários por e-mail

export default function Routers() {
   return (
      <Routes>
         <Route exact path="/" element={<Create />} />
         <Route exact path="/update" element={<Update />} />
         <Route exact path="/delete" element={<Delete />} />
         <Route exact path="/list" element={<ListAllUsers />} />
         <Route exact path="/listByEmail" element={<ListUserByEmail />} />
      </Routes>
   );
}
