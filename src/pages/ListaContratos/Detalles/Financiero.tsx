import { FC } from "react";
import { CIFinanciero } from "../../../interfaces/financiero";
import ContratoDetallesContainer from "./ContratoDetallesContainer";
import ConDerivadosContainer from "./ConDerivadosContainer";
import RubrosContainer from "./RubrosContainer";
interface MainContainerProps {
  data: CIFinanciero;
}
const Financiero: FC<MainContainerProps> = ({ data }) => {
  return (
    <div>
      <h1>Detalles del Contrato</h1>
      <ContratoDetallesContainer contratoDetalles={data.contrato_detalles} />
      {data.con_derivados[0].cliente && (
        <>
          <h2>Contratos Derivados</h2>
          <ConDerivadosContainer conDerivados={data.con_derivados} />
        </>
      )}

      <h2>Rubros</h2>
      <RubrosContainer rubros={data.rubros} />
    </div>
  );
};

export default Financiero;
