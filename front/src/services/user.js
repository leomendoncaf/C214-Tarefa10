import client from "./config";

const userPath = "/user";

const ClientUsers = {
   async createUser(data) {
      try {
         console.log(data);
         const response = await client.post(`${userPath}/create`, data);
         return response;
      } catch (e) {
         return e;
      }
   },

   async updateUser(data) {
      try {
         const response = await client.put(`${userPath}/update`, data);
         return response;
      } catch (e) {
         return e;
      }
   },

   async list(data) {
      try {
         const response = await client.put(`${userPath}/list`, data);
         return response;
      } catch (e) {
         return e;
      }
   },

   async listByEmail(data) {
      try {
         const response = await client.put(`${userPath}/listByEmail`, data);
         return response;
      } catch (e) {
         return e;
      }
   },

   async deleteUser(data) {
      try {
         const response = await client.delete(
            `${userPath}/delete/${data.email}`
         );
         return response;
      } catch (e) {
         return e;
      }
   },
};

export default ClientUsers;
