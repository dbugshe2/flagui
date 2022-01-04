import React, { useState } from "react";
import Col from "components/Container/Col";
import FormResult from "components/Container/FormResult";
import PageWrapper from "components/Container/PageWrapper";
import Row from "components/Container/Row";
import SplitPane from "components/Container/SplitPane";
import FormSchemasEditor from "components/Primary/FormSchemasEditor";
import ToggleForm from "components/Toggles/ToggleForm";
import dummyFormSchemas from "data/dummyFormSchemas";
import {
  alertInitialvalues,
  generalInitialvalues,
  userInitialvalues,
} from "data/dummyInitialValues";

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
                  // initialValues={generalInitialvalues}
                  onChange={setGeneralFormData}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={formSchemas.alertSettingsSchema}
                  // initialValues={alertInitialvalues}
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
