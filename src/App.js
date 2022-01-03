import React, { useState } from "react";
import PageWrapper from "components/Container/PageWrapper";
import Title from "components/Primary/Title";
import Panel from "components/Container/Panel";
import Toggle from "components/Toggles/Toggle";
import Row from "components/Container/Row";
import Col from "components/Container/Col";
import ToggleGroup from "components/Toggles/ToggleGroup";
import SplitPane from "components/Container/SplitPane";
import FormSchemasEditor from "components/Primary/FormSchemasEditor";
import dummyFormSchemas from "data/dummyFormSchemas";
import FormResult from "components/Container/FormResult";
import { userInitialvalues } from "data/dummyInitialValues";

function App() {
  const [formSchemas, setFormSchemas] = useState(dummyFormSchemas);
  const [formData, setFormData] = useState({});

  return (
    <PageWrapper>
      <SplitPane
        leftSide={
          <>
            <Row>
              <Col>
                <Title text="General" />
                <Panel>
                  <Toggle
                    label={"Case Management"}
                    name={"caseManagement"}
                    onChange={() => console.log("fuck it switch")}
                  />
                </Panel>
                <Panel>
                  <Toggle
                    label={"Case Management"}
                    name={"caseManagement"}
                    onChange={() => console.log("fuck it switch")}
                  />
                </Panel>
              </Col>
              <Col>
                <Title text="General" />
                <Panel>
                  <Toggle
                    name="adduser"
                    label="Add User"
                    onChange={(val) => console.log(val)}
                  />
                </Panel>
                <Panel>
                  <Toggle
                    additionalValue={4}
                    onAdditionalValueChange={(val) =>
                      console.log("new number value", val)
                    }
                    name="notification"
                    label="Notifications"
                    onChange={(val) => console.log(val)}
                  />
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title text="Settings" />
                <Panel>
                  <Toggle
                    name="adduser"
                    label="Add User"
                    onChange={(val) => console.log(val)}
                  />
                  <ToggleGroup
                    schema={dummyFormSchemas.userSettingsSchema.users}
                    label="Users"
                    name="users"
                    initialValues={userInitialvalues}
                    onChange={setFormData}
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
                    additionalValue={4}
                    onAdditionalValueChange={(val) =>
                      console.log("new number value", val)
                    }
                    name="notification"
                    label="Notifications"
                    onChange={(val) => console.log(val)}
                  />
                </Panel>
              </Col>
              <Col>
                <Title text="Alerts" />
                <Panel>
                  <Toggle
                    label={"Alert Manager"}
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
            </Row>
          </>
        }
        rightSide={
          <FormSchemasEditor schemas={formSchemas} onChange={setFormSchemas} />
        }
      />
      {/* form Results */}
      <FormResult data={formData} />
    </PageWrapper>
  );
}

export default App;
