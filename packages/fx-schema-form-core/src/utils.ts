/**
 * 警告方法
 * @param   {string} message 消息内容
 * @returns {Error}
 */
export const warn = (message: string) => {
  console.error(message);
  throw new Error(message);
};

/**
 * 判断是否是生产环境
 */
export const isProd = (() => {
  const { NODE_ENV } = process.env;

  return typeof NODE_ENV !== "undefined" && NODE_ENV === `"production"`;
})();

/**
 * 暴露hasOwnProperty方法
 */
export const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 暴露toString方法
 */
export const toString = Object.prototype.toString;

function typeOf(value: any) {
  if (null === value) {
    return "null";
  }

  let type = typeof value;
  if ("undefined" === type || "string" === type) {
    return type;
  }

  let typeString = toString.call(value);
  switch (typeString) {
    case "[object Array]":
      return "array";
    case "[object Date]":
      return "date";
    case "[object Boolean]":
      return "boolean";
    case "[object Number]":
      return "number";
    case "[object Function]":
      return "function";
    case "[object RegExp]":
      return "regexp";
    case "[object Object]":
      if (undefined !== value.nodeType) {
        if (3 === value.nodeType) {
          return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
        } else {
          return "element";
        }
      } else {
        return "object";
      }
    default:
      return "unknow";
  }
}

/**
 * 判断参数是不是数字
 * @param   {Any}      n    需要验证的参数
 * @returns {Boolean}
 */
export const isNumber = (n: any): boolean => {
  return typeOf(n) === "number";
};

/**
 * 判断参数是不是boolean
 * @param   {Any}      n    需要验证的参数
 * @returns {Boolean}
 */
export const isArray = (n: any): boolean => {
  return typeOf(n) === "array";
};
