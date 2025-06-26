import "./ListaOs.css";
import React, { useState, useEffect } from "react";

function ListaOS() {

    const [clientes, setClientes] = useState([]);
    const [TotalOS, setTotalOS] = useState(0);

    useEffect(() => {
        const storedClientes = localStorage.getItem("@clientes");
        if (storedClientes) {
          setClientes(JSON.parse(storedClientes));
        }
        const storedTotalOS = localStorage.getItem("@totalOS");
        if (storedTotalOS) {
          setTotalOS(JSON.parse(storedTotalOS));
        }
      }, []);





  return (
    <section className="ContainerlistaOS">
      <h1>Ordens de Serviço Registradas ({clientes.length})</h1>
      
    </section>
  );
}

export default ListaOS;
