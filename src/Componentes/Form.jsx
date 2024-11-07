import React, { useState } from "react";
import Message from "./Message";
import Card from "./Card";

const Form = () => {

  const [user, setUser] = useState({
    nombre: "",
    peliculaFavorita: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /(\s*)+([A-Z+a-z])/;
    console.log(regexNum.test(user.nombre));
    if (
      user.nombre.length >= 3 &&
      user.peliculaFavorita.length >= 6 &&
      regexNum.test(user.nombre)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
     
      {show ? (
        <Message nombre={user.nombre} peliculaFavorita={user.peliculaFavorita} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Película Favorita: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, peliculaFavorita: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;