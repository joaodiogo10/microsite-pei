import { lazy } from "react";
import "./styles.css"

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const deliverables = [
    { name: "Micro Site", version: "1.1", link: "/" },
    { name: "Apresentação Do Projeto", version: "1.0", link: "/" },
    { name: "Centro de controlo de tráfego", version: "0.1", link: "https://ccam.av.it.pt" },
    { name: "C-ITS Mobile App", version: "", link: "" },
    { name: "Elaboration Relatório", version: "1.0", link: "/doc/PEI-Elaboration-Presentation.pdf" },
    { name: "Elaboration Apresentação", version: "1.0", link: "/doc/PEI-Elaboration-Report.pdf" },
    { name: "Relatório Final", version: "", link: "" },
  ]

  return (
    <Container>
      <ScrollToTop />
      <div style={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <table>
          <thead>
            <th >Entregavel</th>
            <th>Entrega</th>
          </thead>
          <tbody>
            {deliverables.map((elem, index) => {
              return (<tr key={index}>
                <td>{elem.name}</td>
                <td><a href={elem.link}>{elem.version}</a></td>
              </tr>)
            })}

          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Home;
