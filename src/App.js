import { Col, Container, Row } from "react-grid-system";
import { CampoDeTexto } from "./componentes/CampoDeTexto/CampoDeTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Botao } from "./componentes/Botao/Botao";
import { ListaSuspensa } from "./componentes/ListaSuspensa/ListaSuspensa";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Link } from "./componentes/Link/Link";
import { FreelandoLogo } from "./componentes/Icones/FreelandoLogo";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho style={{ height: '104px' }}>
        <Container>
          <Row align="center">
            <Col style={{marginTop: '20px'}}>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right', marginTop: '20px' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      {/* <Container style={{m */}
        <Row justify="center">
          <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0'}}>
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
                  <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros} />
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
      {/* </Container> */}
    </ProvedorTema>
  );
}

export default App;
