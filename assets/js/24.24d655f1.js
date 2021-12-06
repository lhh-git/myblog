(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{387:function(a,e,r){"use strict";r.r(e);var t=r(45),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"正则表达式可以"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式可以"}},[a._v("#")]),a._v(" 正则表达式可以:")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("测试字符串的某个模式。例如，可以对一个输入字符串进行测试，看在该字符串是否存在一个电话号码模式或一个信用卡号码模式。这称为数据有效性验证")])]),a._v(" "),r("li",[r("p",[a._v("替换文本。可以在文档中使用一个正则表达式来标识特定文字，然后可以全部将其删除，或者替换为别的文字")])]),a._v(" "),r("li",[r("p",[a._v("根据模式匹配从字符串中提取一个子字符串。可以用来在文本或输入字段中查找特定文字")])])]),a._v(" "),r("h2",{attrs:{id:"创建正则表达式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建正则表达式"}},[a._v("#")]),a._v(" 创建正则表达式")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('1. RegExp构造函数\n// RegExp是一个对象,和Aarray一样。但这样没有任何效果,需要将正则表达式的内容作为字符串传递进去  \nvar reg = new RegExp();        \n// 最简单的正则表达式, 将匹配字母a\nreg = new RegExp("a");  \n// 第二个参数, 表示匹配时不分大小写            \nreg = new RegExp("a", "i");  \n\nRegExp构造函数第一个参数为正则表达式的文本内容,而第一个参数则为可选项标志.标志可以组合使用\n•g （执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）） \n•i （忽略大小写） \n•m （多行查找）\nvar reg = new RegExp("a", "gi");        // 匹配所有的a或A \n\n2. 字面量的声明方式  \nvar reg = /a/gi;                        // 匹配所有的a或A \n')])])]),r("h2",{attrs:{id:"字符串方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串方法"}},[a._v("#")]),a._v(" 字符串方法")]),a._v(" "),r("h3",{attrs:{id:"search"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[a._v("#")]),a._v(" search")]),a._v(" "),r("p",[a._v("search() 方法使用表达式来搜索匹配，然后返回匹配的位置。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('1. 字符串用法\nvar str = "Visit W3School!";\nvar n = str.search("W3School"); \nconsole.log(n)                          // 6\n\n2. 正则用法\nvar str = "Visit W3School";\nvar n = str.search(/w3school/i); \nconsole.log(n)                          // 6\n')])])]),r("h3",{attrs:{id:"replace"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replace"}},[a._v("#")]),a._v(" replace")]),a._v(" "),r("p",[a._v("replace() 方法返回模式被替换处修改后的字符串。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('1. 字符串用法\nvar str = "Visit Microsoft!";\nvar res = str.replace("Microsoft", "W3School"); \nconsole.log(res)                        // Visit W3School!\n\n2. 正则用法\nvar str = "Visit Microsoft!";\nvar res = str.replace(/microsoft/i, "W3School"); \nconsole.log(res)                        // Visit W3School!\n')])])]),r("h2",{attrs:{id:"regexp-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#regexp-对象"}},[a._v("#")]),a._v(" RegExp 对象")]),a._v(" "),r("p",[a._v("在 JavaScript 中，RegExp 对象是带有预定义属性和方法的正则表达式对象。")]),a._v(" "),r("h3",{attrs:{id:"test"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[a._v("#")]),a._v(" test")]),a._v(" "),r("p",[a._v("test() 方法通过模式来搜索字符串，然后根据结果返回 true 或 false。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var reg = /e/;\nvar str = "a b c d E"\nvar flag = reg.test(str); \nconsole.log(flag)                       // false\n\nvar reg = /e/i;\nvar str = "a b c d E"\nvar flag = reg.test(str); \nconsole.log(flag)                       // true\n')])])]),r("h3",{attrs:{id:"exec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[a._v("#")]),a._v(" exec")]),a._v(" "),r("p",[a._v("exec() 方法通过指定的模式（pattern）搜索字符串，并返回已找到的文本。如果未找到匹配，则返回 null。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var reg = /e/i;\nvar str = ['a', 'b', 'c', 'd', 'E']\nvar str2 = reg.exec(str); \nconsole.log(str2)                        // E\n\nvar reg = /e/;\nvar str = ['a', 'b', 'c', 'd', 'E']\nvar str2 = reg.exec(str); \nconsole.log(str2)                        // null\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);