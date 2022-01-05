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
import { useFormSchema, useToggleForm } from "hooks";

function App() {
  const { values: userFormData, setValues: setUserFormData } =
    useToggleForm(userInitialvalues);

  const { values: generalFormData, setValues: setGeneralFormData } =
    useToggleForm(generalInitialvalues);

  const { values: alertFormData, setValues: setAlertFormData } =
    useToggleForm(alertInitialvalues);

  const { schema: userSchema, setSchema: updateUserSchema } =
    useFormSchema(initUserSchema);

  const { schema: generalSchema, setSchema: updateGeneralSchema } =
    useFormSchema(initGeneralSchema);

  const { schema: alertSchema, setSchema: updateAlertSchema } =
    useFormSchema(initAlertSchema);

  const handleSchemaUpdate = (newSchema) => {
    switch (newSchema.formId) {
      case userSchema.formId:
        updateUserSchema(newSchema);
        break;
      default:
        console.log(newSchema);
        break;
    }
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
            onChange={handleSchemaUpdate}
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
