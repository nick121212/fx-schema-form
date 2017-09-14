import React from "react";
import { BaseFactory, merge } from "fx-schema-form-core";

import { RC, NsFactory } from "../types";

export class SchemaFormNsFactory extends BaseFactory<NsFactory> {
    constructor() {
        super();
    }
}

export const nsFactory = new SchemaFormNsFactory();
