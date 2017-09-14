import { Ajv } from "ajv";

export default (mergeSchema: any, ajv: Ajv, value: any) => {
    // string类型，类似input，textarea会返回一个空字符串
    // 如果是空，tv4验证的时候会返回成功
    // 这时候会违反"required"的验证规则,所以需要做处理
    if (value === "") {
        value = undefined;
    }

    // number类型会返回一个null的数据，这里需要做处理
    if (mergeSchema.type === "number" && value === undefined) {
        value = undefined;
    }

    // array类型会返回一个null的数据，这里需要做处理
    if (mergeSchema.type === "array" && !value) {
        value = [];
    }

    // JSON Schema的第四版本的${REQUIRED}字段不是配置在他同级的json里面
    // 所以我们需要自定义验证JSON
    let wrap = { type: "object", "properties": {}, required: undefined };
    let propName = mergeSchema.keys[mergeSchema.keys.length - 1];

    wrap.properties[propName] = mergeSchema;
    if (mergeSchema.isRequired) {
        wrap.required = [propName];
    }

    let valueWrap = {};

    if (value !== undefined && value != null) {
        valueWrap[propName] = value;
    }

    let isValid = ajv.validate(wrap, valueWrap);

    return {
        dirty: true,
        isValid: isValid,
        errors: [].concat(ajv.errors || []),
        errorText: ajv.errorsText(ajv.errors, {})
    };
};
