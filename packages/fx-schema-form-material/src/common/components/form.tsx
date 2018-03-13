import React from "react";
import { Divider, Button, Icon, Card, CardHeader, CardContent, LinearProgress } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { NoneComponent } from "./none";

const { SchemaForm, hocFactory, schemaFormDec, reducerFactory } = schemaFormReact;

export class FormComponent extends React.PureComponent<any> {
    public render() {
        const { parentKeys, globalOptions, ajv, title, uiSchemas, schemaId, RootComponent, children, validateAll, resetForm, isLoading } = this.props;

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
                        ajv={ajv}>
                    </SchemaForm>
                </CardContent>
                <Divider />
                {isLoading ? <LinearProgress variant="query" /> : null}
                <div className="flex pt3 pb3 items-center justify-center">
                    <Button color="secondary" disabled={isLoading} aria-label="reset" size="large" onClick={() => {
                        resetForm();
                    }}>
                        <Icon>keyboard_backspace</Icon>
                        重置
                    </Button>
                    <Button color="primary" disabled={isLoading} aria-label="submit" onClick={validateAll}>
                        确定
                        <Icon>done</Icon>
                    </Button>
                </div>
            </Card>
        );
    }
}
