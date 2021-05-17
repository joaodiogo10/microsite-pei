import { lazy, useEffect, useState } from "react";
import "./styles.css"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const [tasks, setTasks] = useState("");
  useEffect(() => {
    fetch("/tasks.md").then(e => e.text()).then(setTasks);
  }, [])
  const deliverables = [
    { name: "Micro Site", version: "2.3", link: "/" },
    { name: "Apresentação Do Projeto", version: "1.0", link: "/doc/apresentacaoM1.pdf" },
    { name: "Centro de controlo de tráfego", version: "0.8", link: "http://ccam.av.it.pt" },
    { name: "C-ITS Mobile App", version: "1.3", link: "https://expo.io/@unn4m3dd/projects/it2s-mobile-app" },
    { name: "Elaboration Relatório", version: "1.0", link: "/doc/PEI-Elaboration-Presentation.pdf" },
    { name: "Elaboration Apresentação", version: "1.0", link: "/doc/PEI-Elaboration-Report.pdf" },
    { name: "Relatório M3", version: "1.0", link: "/doc/PEI-M3-Report.pdf" },
    { name: "Documentação API", version: "0.7", link: "https://documenter.getpostman.com/view/15665768/TzRX9kpX" },
    { name: "Link API", version: "0.5", link: "https://ccam.av.it.pt/api" },
    { name: "Documentação Broker de Tradução", version: "0.9", link: "/doc/broker-doc.7z" },
    { name: "Link Broker de Tradução", version: "0.7", link: "ccam.av.it.pt:1883" },
    { name: "Demos das Diversas Peças de Software", version: "0.6", link: "/demos" },
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
            <tr>
              <th>Entregável</th>
              <th>Versão</th>
            </tr>
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
      <ul >
        <ReactMarkdown plugins={[gfm, { stringLength: 10000 }]}  >{tasks}</ReactMarkdown>
      </ul>
    </Container>
  );
};

export default Home;
