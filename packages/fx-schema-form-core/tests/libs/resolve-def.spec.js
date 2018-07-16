import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaTypeFactory,
    schemaFieldFactory,
    schemaKeysFactory,
    ResolveLib,
    MergeLib
} from "../../dist/index.dev";

const jsonschema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$ref": "#/definitions/Pokedex",
    "$id": "testdef",
    "definitions": {
        "Pokedex": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "pokemon": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Pokemon"
                    }
                }
            },
            "required": [
                "pokemon"
            ],
            "title": "Pokedex"
        },
        "Pokemon": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "id": {
                    "type": "integer"
                },
                "num": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "img": {
                    "type": "string"
                },
                "type": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "height": {
                    "type": "string"
                },
                "weight": {
                    "type": "string"
                },
                "candy": {
                    "type": "string"
                },
                "candy_count": {
                    "type": "integer"
                },
                "egg": {
                    "$ref": "#/definitions/Egg"
                },
                "spawn_chance": {
                    "type": "number"
                },
                "avg_spawns": {
                    "type": "number"
                },
                "spawn_time": {
                    "type": "string"
                },
                "multipliers": {
                    "anyOf": [
                        {
                            "type": "array",
                            "items": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "null"
                        }
                    ]
                },
                "weaknesses": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Weakness"
                    }
                },
                "next_evolution": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Evolution"
                    }
                },
                "prev_evolution": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Evolution"
                    }
                }
            },
            "required": [
                "avg_spawns",
                "candy",
                "egg",
                "height",
                "id",
                "img",
                "multipliers",
                "name",
                "num",
                "spawn_chance",
                "spawn_time",
                "type",
                "weaknesses",
                "weight"
            ],
            "title": "Pokemon"
        },
        "Evolution": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "num": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                }
            },
            "required": [
                "name",
                "num"
            ],
            "title": "Evolution"
        },
        "Egg": {
            "type": "string",
            "enum": [
                "2 km",
                "Not in Eggs",
                "5 km",
                "10 km",
                "Omanyte Candy"
            ],
            "title": "Egg"
        },
        "Weakness": {
            "type": "string",
            "enum": [
                "Fire",
                "Ice",
                "Flying",
                "Psychic",
                "Water",
                "Ground",
                "Rock",
                "Electric",
                "Grass",
                "Fighting",
                "Poison",
                "Bug",
                "Fairy",
                "Ghost",
                "Dark",
                "Steel",
                "Dragon"
            ],
            "title": "Weakness"
        }
    }
}

describe("测试MergeLib类", () => {
    let ajv;

    before(() => {
        ajv = new Ajv({
            extendRefs: true,
            missingRefs: true
        });
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();

        let b = [new ResolveLib(ajv, jsonschema)];
    });

    it("实例化MergeLib，返回正确的uiSchema", () => {
        // console.log(schemaKeysFactory, schemaFieldFactory);
        let merge = new MergeLib(ajv, "testdef", null, ["*"]);

        // console.log(merge.mergeUiSchemaList[0]);

        expect(merge.mergeUiSchemaList[0].keys.join()).to.eq(["pokemon"].join());
    });
});

