const { UserModel } = require("../src/infrastructure/database");
const user = require("../src/port/user_repository");

describe("create", () => {
   it("Valid User", async () => {
      UserModel.prototype.save = jest.fn().mockImplementation(() => ({
         toObject: () => ({
            id: 1,
            nome: "Leonardo",
            email: "leonardo.franco@ges.inatel.br",
            senha: "1020304050"
         }),
      }));

      expect(
         await user.create({
            id: 1,
            nome: "Leonardo",
            email: "leonardo.franco@ges.inatel.br",
            senha: "1020304050",
         })
      ).toEqual(
         expect.objectContaining({
            id: expect.any(Number),
            nome: expect.any(String),
            email: expect.any(String),
            senha: expect.any(String),
         })
      );
   });
});

describe("editUser", () => {
   it("Valid edit", async () => {
      UserModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
         exec: () => ({
            toObject: () => ({
               id: 1,
               senha: "Heat01",
               email: "leo12@hotmail.com",
               nome: "leo fran",
            }),
         }),
      }));

      expect(
         await user.update({
            email: "leo12@hotmail.com",
            nome: "leo fran",
         })
      ).toEqual(
         expect.objectContaining({
            email: expect.any(String),
            nome: expect.any(String),
            senha: expect.any(String),
            id: expect.any(Number),
         })
      );
   });
});

describe("listUsers", () => {
   it("Valid list", async () => {
      UserModel.find = jest.fn().mockImplementation(() => ({
         exec: () => ({
            id: 1,
            email: "mendonca1@hotmail.com",
            nome: "Fabio Mendonca",
            senha: "01020304",
         }),
      }));

      expect(await user.list()).toEqual(
         expect.objectContaining({
            id: expect.any(Number),
            email: "mendonca1@hotmail.com",
            nome: "Fabio Mendonca",
            senha: "01020304",
         })
      );
   });
});

describe("listByEmail", () => {
   it("Valid list", async () => {
      UserModel.findOne = jest.fn().mockImplementation(() => ({
         exec: () => ({
            id: 1,
            email: "mendonca1@hotmail.com",
            nome: "Fabio Mendonca",
            senha: "01020304",
         }),
      }));

      expect(
         await user.listByEmail({
            email: "mendonca1@hotmail.com",
         })
      ).toEqual(
         expect.objectContaining({
            id: expect.any(Number),
            email: "mendonca1@hotmail.com",
            nome: "Fabio Mendonca",
            senha: "01020304",
         })
      );
   });
});

describe("deleteUser", () => {
   it("Valid delete", async () => {
      UserModel.deleteOne = jest.fn().mockImplementation(() => ({
         exec: () => ({
            deletedCount: 1,
         }),
      }));

      expect(
         await user.delete({
            email: "leo12@hotmail.com",
         })
      ).toEqual(1);
   });
});
