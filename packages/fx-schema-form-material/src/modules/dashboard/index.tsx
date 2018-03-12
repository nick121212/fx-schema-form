import React from "react";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import propTypes from "prop-types";
import { compose } from "recompose";
import { Portal, Card, CardHeader, CardContent, CardActions, IconButton, Icon } from "material-ui";
import { Mosaic, MosaicWindow, MosaicZeroState } from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";

export type ViewId = "a" | "b" | "c" | "new";

class ViewIdMosaic extends Mosaic<string> { }
class ViewIdMosaicWindow extends MosaicWindow<string> { }

const TITLE_MAP: Record<string, string> = {
    a: "Left Window",
    b: "Top Right Window",
    c: "Bottom Right Window",
    new: "New Window"
};

export class Dashboard extends React.PureComponent<any, any> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            currentNode: {
                direction: "row",
                first: {
                    direction: "column",
                    first: 1,
                    second: 2,
                },
                second: {
                    direction: "column",
                    first: 3,
                    second: 4,
                }
            }
        };
    }

    public render() {
        return (
            <ViewIdMosaic
                className="none"
                renderTile={(id, path) => (
                    <ViewIdMosaicWindow
                        path={path}
                        title=""
                        createNode={(props: any) => {
                            console.log(props);
                            return Date.now().toString();
                        }}>
                        {`Window ${id}`}
                    </ViewIdMosaicWindow>
                )}
                zeroStateView={<MosaicZeroState createNode={() => {
                    return Date.now();
                }} />}
                value={this.state.currentNode}
                onChange={(val) => {
                    this.setState({
                        currentNode: val
                    });
                }}
            />
        );
    }
}
