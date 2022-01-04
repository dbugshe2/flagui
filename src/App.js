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
import {
  alertInitialvalues,
  generalInitialvalues,
  notificationInitialvalues,
  userInitialvalues,
} from "data/dummyInitialValues";
import ToggleForm from "components/Toggles/ToggleForm";
import schemas from "data/dummyFormSchemas";

function App() {
  const [formSchemas, setFormSchemas] = useState(dummyFormSchemas);
  const [userFormData, setUserFormData] = useState({});
  const [generalFormData, setGeneralFormData] = useState({});
  const [alertFormData, setAlertFormData] = useState({});

  return (
    <PageWrapper>
      <SplitPane
        leftSide={
          <>
            <Row>
              <Col>
                <ToggleForm
                  title="User"
                  initialValues={userInitialvalues}
                  schema={formSchemas.userSettingsSchema}
                  onChange={setUserFormData}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={formSchemas.generalSettingsSchema}
                  initialValues={generalInitialvalues}
                  onChange={setGeneralFormData}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={formSchemas.alertSettingsSchema}
                  initialValues={alertInitialvalues}
                  onChange={setAlertFormData}
                />
              </Col>
            </Row>
          </>
        }
        rightSide={
          <FormSchemasEditor
            schemas={formSchemas}
            onChange={(newSchema) =>
              setFormSchemas((oldSchemas) => {
                return { ...oldSchemas, ...newSchema };
              })
            }
          />
        }
      />
      {/* form Results */}
      <Row>
        <Col>
          <FormResult
            schema={formSchemas.userSettingsSchema}
            data={userFormData}
          />
        </Col>
        <Col>
          <FormResult
            schema={formSchemas.generalSettingsSchema}
            data={generalFormData}
          />
        </Col>
        <Col>
          <FormResult
            schema={formSchemas.alertSettingsSchema}
            data={alertFormData}
          />
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default App;
