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
  const [formData, setFormData] = useState({});

  const handleFormResultChange = (valObj) => {
    console.log(valObj);
    setFormData(valObj);
  };

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
                  onChange={handleFormResultChange}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={formSchemas.generalSettingsSchema}
                  initialValues={generalInitialvalues}
                  onChange={handleFormResultChange}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={formSchemas.alertSettingsSchema}
                  initialValues={alertInitialvalues}
                  onChange={handleFormResultChange}
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
      <FormResult data={formData} />
    </PageWrapper>
  );
}

export default App;
