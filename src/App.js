import React from "react";
import PageWrapper from "components/Container/PageWrapper";
import Title from "components/Primary/Title";
import Panel from "components/Container/Panel";
import Toggle from "components/Toggles/Toggle";
import Row from "components/Container/Row";
import Col from "components/Container/Col";

function App() {
  return (
    <PageWrapper>
      <Row>
        <Col>
          <Title text="General" />
          <Panel>
            <Toggle
              label={"Case Management"}
              name={"caseManagement"}
              onChange={() => console.log("fuck it switch")}
            />
            <Toggle
              label={"User Management"}
              name={"useManagement"}
              onChange={() => console.log("fuck it switch")}
            />
            <Toggle
              label={"Profile Management"}
              name={"profileManagement"}
              onChange={() => console.log("fuck it switch")}
            />
          </Panel>
        </Col>
        <Col>
          <Title text="Settings" />
          <Panel>
            {/* TODO: remove hardcoded form name, value, and onChange and provide a schema for a Form instead */}
            <Toggle
              name="adduser"
              label="Add User"
              onChange={(val) => console.log(val)}
            />
          </Panel>
          <Panel>
            <Toggle
              name="notification"
              label="Notifications"
              onChange={(val) => console.log(val)}
            />
          </Panel>
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default App;