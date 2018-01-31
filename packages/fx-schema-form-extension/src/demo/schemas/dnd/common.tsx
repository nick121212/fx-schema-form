export default {
    type: "object",
    $id: "dnd-common",
    properties: {
        className: {
            type: "string",
            title: "类名称",
            description: "高度类:h-{10-100};宽度类:w-{10-100};边框类:ba b--dasbed b--solid;"
        },
        style: {
            type: "object",
            properties: {
                width: { type: "string", title: "宽度" },
                height: { type: "string", title: "高度" }
            }
        },
        deg: {
            type: "string",
            description: "这里使用数据源中的数据，首先先得有数据源。输入$开启选择列表；格式为：{{$.test.dataCol}}；也可以支持$sum,$count,$average,$max,$min等，格式为{{$min($.test_008.ORDER_COUNT_SUM)}}"
        }
    }
};
