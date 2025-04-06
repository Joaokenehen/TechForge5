import { ValidarCpf } from "../src/ValidarCpf";

describe("ValidarCpf", () => {
  it("deve retornar true para um CPF válido", () => {
    expect(ValidarCpf("111.444.777-35")).toBe(true);
  });

  it("deve retornar false para um CPF com dígitos verificadores inválidos", () => {
    expect(ValidarCpf("123.456.789-00")).toBe(false);
  });

  it("deve retornar false para um CPF com menos de 11 dígitos", () => {
    expect(ValidarCpf("123.456.78")).toBe(false);
  });

  it("deve retornar false para um CPF com mais de 11 dígitos", () => {
    expect(ValidarCpf("123.456.789-123")).toBe(false);
  });

  it("deve retornar false para um CPF com caracteres não numéricos", () => {
    expect(ValidarCpf("123.456.78a-09")).toBe(false);
  });

  it("deve retornar false para um CPF com todos os dígitos iguais", () => {
    expect(ValidarCpf("111.111.111-11")).toBe(false);
  });
});
