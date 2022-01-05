import React, { useState } from "react";
import Col from "components/Container/Col";
import FormResult from "components/Container/FormResult";
import PageWrapper from "components/Container/PageWrapper";
import Row from "components/Container/Row";
import SplitPane from "components/Container/SplitPane";
import FormSchemasEditor from "components/Primary/FormSchemasEditor";
import ToggleForm from "components/Toggles/ToggleForm";
import {
  initAlertSchema,
  initGeneralSchema,
  initUserSchema,
} from "data/dummyFormSchemas";
import {
  alertInitialvalues,
  generalInitialvalues,
  userInitialvalues,
} from "data/dummyInitialValues";
import { useFormSchema } from "hooks";

function App() {
  const [userFormData, setUserFormData] = useState({});
  const [generalFormData, setGeneralFormData] = useState({});
  const [alertFormData, setAlertFormData] = useState({});

  const { schema: userSchema } = useFormSchema(initUserSchema);
  const { schema: generalSchema } = useFormSchema(initGeneralSchema);
  const { schema: alertSchema } = useFormSchema(initAlertSchema);

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
                  schema={userSchema}
                  onChange={setUserFormData}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={generalSchema}
                  initialValues={generalInitialvalues}
                  onChange={setGeneralFormData}
                />
              </Col>
              <Col>
                <ToggleForm
                  schema={alertSchema}
                  initialValues={alertInitialvalues}
                  onChange={setAlertFormData}
                />
              </Col>
            </Row>
          </>
        }
        rightSide={
          <FormSchemasEditor
            schemas={[userSchema, generalSchema, alertSchema]}
            // onChange={(newSchema) =>
            //   setFormSchemas((oldSchemas) => {
            //     return { ...oldSchemas, ...newSchema };
            //   })
            // }
          />
        }
      />
      {/* form Results */}
      <Row>
        <Col>
          <FormResult schema={userSchema} data={userFormData} />
        </Col>
        <Col>
          <FormResult schema={generalSchema} data={generalFormData} />
        </Col>
        <Col>
          <FormResult schema={alertSchema} data={alertFormData} />
        </Col>
      </Row>
    </PageWrapper>
  );
}

export default App;
