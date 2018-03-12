import React from "react";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import propTypes from "prop-types";
import { compose } from "recompose";

import { Portal, Card, CardHeader, CardContent, CardActions, IconButton, Icon } from "material-ui";
import { WidthProvider, Responsive } from "react-grid-layout";

import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);


export class Dashboard extends React.PureComponent<any, any> {
    constructor(props: any, context: any) {
        super();
    }
    public render() {
        let layout = [
            { i: "a", x: 0, y: 0, w: 1, h: 2 },
            { i: "b", x: 1, y: 0, w: 3, h: 2 },
            { i: "c", x: 4, y: 0, w: 1, h: 2, aspectRatio: 2, isSaveAspectRatio: true, isDraggable: true, isResizable: true }
        ];
        return (
            <ResponsiveReactGridLayout className="layout"
                margin={[5, 5]}
                rowHeight={15}
                layouts={{
                    lg: layout
                } as any}
                onLayoutChange={console.log}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}>
                <Card key="a">
                    <CardContent>
                        hello world---a
                    </CardContent>
                </Card>
                <Card key="b">
                    <CardContent>
                        hello world---b
                    </CardContent>
                </Card>
                <Card key="c">
                    <CardContent>
                        hello world---c
                    </CardContent>
                </Card>
            </ResponsiveReactGridLayout>
        );
    }
}
