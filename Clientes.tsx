import Cadastro from "../../components/Cadastro";
import { useState } from "react";

const initialValues = {
  nome: "",
  cpf: "",
  rg: "",
  telefone: "",
  cep: "",
  logradouro: "",
  numero: "",
  complemento: "",
};

const page = "Cliente";

export default function Clientes() {
  const [values, setValues] = useState({ initialValues, page });
  return (
    <>
      <Cadastro info={values} />
    </>
  );
}
