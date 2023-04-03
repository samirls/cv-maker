import Main from "./Main"
import { useReactToPrint } from 'react-to-print';
import { useRef } from "react";
import "bulma/css/bulma.css";
import "./beforemain.css"

function BeforeMain() {

  const mainRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => mainRef.current,
    documentTitle: 'emp-data',
  });

  function updateMainRef(ref) {
    mainRef.current = ref;
  }

  return(
    <>
      <div className="buttonsContainer">
        <button className="button is-info" onClick={handlePrint}>Print</button>
      </div>
      <Main onUpdateRef={updateMainRef} />
    </>
  )
}

export default BeforeMain