const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Leonardo",
        email: "leonardo.franco@ges.inatel.br",
        senha: "1020304050"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "leonardo.franco@ges.inatel.br",
        senha: "1020304050"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
