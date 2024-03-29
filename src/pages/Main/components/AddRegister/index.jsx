import * as A from "./styles";
import IconClose from "../../../../assets/IconClose.svg";
import { useEffect, useRef } from "react";
import useUser from "../../../../hooks/useUser";
import useRequest from "../../../../hooks/useRequest";

function AddRegister() {
  const { listCategory, handleRegister } = useRequest();
  const {
    setOpenModalAdd,
    categorys,
    btnClicked,
    setBtnClicked,
    setAddRegisterValue,
    setAddRegisterCategory,
    setAddRegisterDate,
    setAddRegisterDescription,
  } = useUser();
  const btnEntryRef = useRef();
  const btnExitRef = useRef();

  useEffect(() => {
    if (btnClicked !== "exit") {
      btnEntryRef.current.style = "background: #3A9FF1;";
      btnExitRef.current.style = "background: #B9B9B9;";
    } else {
      btnExitRef.current.style = "background: #FF576B;";
      btnEntryRef.current.style = "background: #B9B9B9;";
    }
  });
  useEffect(() => {
    (async () => {
      await listCategory();
    })();

    setAddRegisterValue("");
    setAddRegisterCategory("");
    setAddRegisterDate("");
    setAddRegisterDescription("");
  }, []);

  return (
    <A.Container>
      <div className="container">
        <div className="container-form">
          <div className="title-close">
            <h1>Adicionar Registro</h1>
            <img src={IconClose} onClick={() => setOpenModalAdd(false)} alt=""/>
          </div>
          <div className="btn-entry-exit">
            <button ref={btnEntryRef} onClick={() => setBtnClicked("entry")}>
              Entrada
            </button>
            <button ref={btnExitRef} onClick={() => setBtnClicked("exit")}>
              Saída
            </button>
          </div>
          <form>
            <label>Valor</label>
            <input
              type="text"
              onChange={(e) => setAddRegisterValue(e.target.value)}
            />
            <label>Categoria</label>
            <select onChange={(e) => setAddRegisterCategory(e.target.value)}>
              <option>Selecione</option>
              {categorys.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.description}
                </option>
              ))}
            </select>
            <label>Data</label>
            <input
              type="date"
              onChange={(e) => setAddRegisterDate(e.target.value)}
            />
            <label>Descrição</label>
            <input
              type="text"
              onChange={(e) => setAddRegisterDescription(e.target.value)}
            />
          </form>
        </div>
        <button onClick={handleRegister}>Confirmar</button>
      </div>
    </A.Container>
  );
}

export default AddRegister;
