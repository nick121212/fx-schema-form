import React from "react";
import { Divider, Grid, Button, Icon, MobileStepper, Card, CardHeader, CardContent, CardActions, IconButton } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { NoneComponent } from "./none";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

export class FormComponent extends React.PureComponent<any> {
    public render() {
        const { parentKeys, globalOptions, ajv, title, uiSchemas, schemaId, RootComponent, children, validateAll, resetForm } = this.props;

        return (
            <Card className="h-100 overflow-hidden flex flex-column" raised={false} elevation={0} square={false}>
                <CardHeader
                    className="pt4 pb4"
                    title={title}
                />
                <Divider />
                <CardContent className="overflow-auto flex-auto pl3 pr3 ma0">
                    <SchemaForm
                        RootComponent={RootComponent || NoneComponent}
                        schemaId={schemaId}
                        uiSchemas={uiSchemas}
                        parentKeys={parentKeys}
                        globalOptions={globalOptions}
                        ajv={ajv} >
                    </SchemaForm>
                </CardContent>
                <Divider />
                <CardActions className="flex pt3 pb3">
                    <Button color="primary" variant="flat" size="large" onClick={() => {
                        resetForm();
                    }}>
                        <Icon>keyboard_backspace</Icon>
                        重置
                    </Button>
                    <span className="flex-auto"></span>
                    <Button variant="fab" className="ma2" color="primary" aria-label="add" onClick={validateAll}>
                        <Icon>send</Icon>
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
