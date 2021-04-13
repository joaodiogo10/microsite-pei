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
    { name: "Micro Site", version: "1.1", link: "/" },
    { name: "Apresentação Do Projeto", version: "1.0", link: "/doc/apresentacaoM1.pdf" },
    { name: "Centro de controlo de tráfego", version: "0.1", link: "http://ccam.av.it.pt" },
    { name: "C-ITS Mobile App", version: "1.0", link: "https://expo.io/@unn4m3dd/projects/it2s-mobile-app" },
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
            <tr>
              <th>Entregável</th>
              <th>Entrega</th>
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
