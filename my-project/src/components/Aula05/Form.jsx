import { useState } from "react";
const Form = () => {
  const USER = (e) => {
    e.preventDefault();
    console.log(`Usuário ${name}; Senha ${password}`);
  };

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form action="" onSubmit={USER}>
        <div>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
