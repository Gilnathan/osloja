import "./FormularioEntrada.css";
import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";

function FormularioEntrada() {
  const [clientes, setClientes] = useState([]);
  const [TotalOS, setTotalOS] = useState(0);

  

  const [cliente, setCliente] = useState({
    id:"",
    nome: "",
    telefone: "",
    email: "",
    tipo_aparelho: "",
    marca: "",
    modelo: "",
    numero_serie: "",
    senha_aparelho: "",
    diagnostico: "",
  });

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

   
  useEffect( () =>{
    localStorage.setItem("@clientes", JSON.stringify(clientes));
    localStorage.setItem("@totalOS", JSON.stringify(TotalOS));
  } ,[clientes]);




  function handRegister(e) {
    
    e.preventDefault();
    alert(`Ordem de Serviço OS: ${TotalOS} Registrada com Sucesso!`);
    setClientes([...clientes, { ...cliente, id: TotalOS }]);
    setTotalOS(TotalOS + 1);

  }



  return (

    <section className="appContainer">
      <div className="formularioEntrada">
        
      <form className="formulario" onSubmit={handRegister} >
        <h2> Entrada Rapida de Aparelhos - OS: {TotalOS}  </h2>
        
        <p> {clientes.map((cliente) =>{ } )} </p>
        <div className="formulario_dadosCliente">
          <label> Dados do Cliente </label>

          <input
            placeholder="Nome do Cliente"
            type="text"
            value={cliente.nome}
            onChange={e => setCliente({ ...cliente, nome: e.target.value })}
            autoFocus
          />

          <input placeholder="Telefone" type="tel" 
          value={cliente.telefone}
          onChange={e => setCliente({ ...cliente, telefone: e.target.value })}
          />

          <input placeholder="E-mail" type="email" 
          value={cliente.email}
          onChange={e => setCliente({ ...cliente, email: e.target.value })}
          />
        </div>

        <div className="formulario_dadosCliente">

          <label for="tipo_aparelho">Tipo de Aparelho</label>
          <select name="tipo_aparelho" id="tipo_aparelho"
          value={cliente.tipo_aparelho}
          onChange={e => setCliente({ ...cliente, tipo_aparelho: e.target.value })} 
          >
            <option value="" selected disabled>
              Escolha uma opção...
            </option>
            <option value="celular">Celular</option>
            <option value="notebook ">Notebook</option>
            <option value="computador">Computador (Desktop)</option>
            <option value="tablet">Tablet</option>
            <option value="smartwatch">Smartwatch</option>
          </select>

          <input placeholder="Marca" type="text" 
          value={cliente.marca}
          onChange={e => setCliente({ ...cliente, marca: e.target.value })}
          />
          <input placeholder="Modelo" type="text" 
          value={cliente.modelo}
          onChange={e => setCliente({ ...cliente, modelo: e.target.value })}
          />
          <input placeholder="Número de Série" type="text" 
          value={cliente.numero_serie}
          onChange={e => setCliente({ ...cliente, numero_serie: e.target.value })}
          />
          <input placeholder="Senha do Aparelho" type="text" 
          value={cliente.senha_aparelho}
          onChange={e => setCliente({ ...cliente, senha_aparelho: e.target.value })}  
          />
        </div>

        <div className="formulario_dadosCliente">
          <label> Diagnóstico Inicial </label>
          <textarea
            id="diagnostico"
            name="diagnostico"
            rows="5"
            placeholder="Descrição do defeito relatado pelo cliente..."
            value={cliente.diagnostico}
            onChange={e => setCliente({ ...cliente, diagnostico: e.target.value })}
          ></textarea>
        </div>

        <div className="formularioNav">
          
          <input type="submit" value="Salvar OS" className="btnEnviar" />
        </div>
      </form>
      
    </div>

    <section className="ContainerlistaOS">
      <button onClick={()=>{
            localStorage.clear();
            window.location.reload();
          }} > Limpar Cacher </button>
      <h1>Ordens de Serviço Registradas ({TotalOS})</h1>
      {clientes.map((cliente) =>{
         return <div key={cliente.id} className="listaOS">
        <h2>OS: {cliente.id}</h2>
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>Telefone:</strong> {cliente.telefone}</p>
        <p><strong>E-mail:</strong> {cliente.email}</p>   
        <p><strong>Tipo de Aparelho:</strong> {cliente.tipo_aparelho}</p>
        <p><strong>Marca:</strong> {cliente.marca}</p>
        <p><strong>Modelo:</strong> {cliente.modelo}</p>

        <button onClick={()=>{
          const updatedClientes = clientes.filter(c => c.id !== cliente.id);
          setClientes(updatedClientes);
          localStorage.setItem("clientes", JSON.stringify(updatedClientes));
        }}> X </button>

        </div>
      })}
    </section>

    </section>
    
  );

  
}

export default FormularioEntrada;
