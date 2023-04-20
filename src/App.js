import { Col, Container, Row } from "react-grid-system";
import { CampoDeTexto } from "./componentes/CampoDeTexto/CampoDeTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Botao } from "./componentes/Botao/Botao";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Container style={{margin: '80px 0px'}}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoDeTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoDeTexto titulo="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoDeTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoDeTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoDeTexto titulo="Senha" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoDeTexto titulo="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>Próxima</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
