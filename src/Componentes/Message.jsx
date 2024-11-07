import React from "react";

const Message = ({ nombre, peliculaFavorita }) => {
  return (
    <>
      <h4>¡Gracias, {nombre}!</h4>
      <h4>Excelente peli me parece {peliculaFavorita}. ¡La mía es Brazil!</h4>
    </>
  );
};

export default Message;