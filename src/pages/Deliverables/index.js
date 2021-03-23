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
    { name: "Micro Site", version: "1.0", link: "/" },
    { name: "Apresentação Do Projeto", version: "1.0", link: "/" },
    { name: "Centro de controlo de tráfego", version: "", link: "" },
    { name: "C-ITS Mobile App", version: "", link: "" },
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
              <th >Entregavel</th>
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
