(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{388:function(a,t,r){"use strict";r.r(t);var e=r(45),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"数组的定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组的定义"}},[a._v("#")]),a._v(" 数组的定义")]),a._v(" "),r("h3",{attrs:{id:"什么是数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是数组"}},[a._v("#")]),a._v(" 什么是数组？")]),a._v(" "),r("p",[a._v('数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。\n但是，JavaScript 数组最好以数组来描述。\n数组使用数字来访问其“元素”。在本例中，person[0] 返回 Bill：')]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('数组：\nvar person = ["Bill", "Gates", 62];\n')])])]),r("p",[a._v("对象使用名称来访问其“成员”。在本例中，person.firstName 返回 John：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('对象：\nvar person = {firstName:"John", lastName:"Doe", age:46};\n')])])]),r("h3",{attrs:{id:"访问数组元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#访问数组元素"}},[a._v("#")]),a._v(" 访问数组元素")]),a._v(" "),r("p",[a._v("我们通过引用索引号（下标号）来引用某个数组元素。\n这条语句访问 cars 中的首个元素的值：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var cars = ["Saab", "Volvo", "BMW"];\nvar name = cars[0];                     // Saab\n')])])]),r("h3",{attrs:{id:"改变数组元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改变数组元素"}},[a._v("#")]),a._v(" 改变数组元素")]),a._v(" "),r("p",[a._v("这条语句修改了 cars 中第一个元素的值：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var cars = ["Saab", "Volvo", "BMW"];\ncars[0] = "Opel";                        // ["Opel", "Volvo", "BMW"]\n')])])]),r("h3",{attrs:{id:"访问完整数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#访问完整数组"}},[a._v("#")]),a._v(" 访问完整数组")]),a._v(" "),r("p",[a._v("通过 JavaScript，可通过引用数组名来访问完整数组：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var cars = ["Saab", "Volvo", "BMW"];\ndocument.getElementById("demo").innerHTML = cars; \n')])])]),r("h3",{attrs:{id:"数组是对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组是对象"}},[a._v("#")]),a._v(" 数组是对象")]),a._v(" "),r("p",[a._v('数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。\n但是，JavaScript 数组最好以数组来描述。\n数组使用数字来访问其“元素”。在本例中，person[0] 返回 Bill：')]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('数组：\nvar person = ["Bill", "Gates", 62];\n')])])]),r("h2",{attrs:{id:"数组创建方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组创建方式"}},[a._v("#")]),a._v(" 数组创建方式")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("1、采用直接量创建\nvar arr = [];                             //创建一个空数组\nvar arr2 = [1, 2, 3];                     //创建一个有三个元素的数组\n\n2、采用构造函数创建\na、var arr1 = new Array();                //创建空数组\nb、var arr2 = new Array(10);              //创建一个长度为10的数组\nc、var arr3 =  new Array(5, 4, 3, 2, 1);  //创建数组并初始化\n")])])]),r("h2",{attrs:{id:"数组的属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组的属性"}},[a._v("#")]),a._v(" 数组的属性")]),a._v(" "),r("h3",{attrs:{id:"_1-length"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-length"}},[a._v("#")]),a._v(" 1. length")]),a._v(" "),r("p",[a._v("Length属性表示数组的长度，即其中元素的个数。因为数组的索引总是由0开始，所以一个数组的上下限分别是：0和length-1。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1, 2, 3]\narr[0]                                    // 1 \narr[arr.length - 1]                       // 3\n")])])]),r("p",[a._v("Length属性可以清空数组")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1, 2, 3]\narr.length = 0\narr                                       // []\narr.length                                // 0\n")])])]),r("p",[a._v("和其他大多 数语言不同的是，JavaScript数组的length属性是可变的，这一点需要特别注意。当length属性被设置得更大时，整个数组的状态事实上不 会发生变化，仅仅是length属性变大；当length属性被设置得比原来小时，则原先数组中索引大于或等于length的元素的值全部被丢失")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1, 2, 3]\narr.length                                // length: 3\narr.length = 6                            // length = 6; arr = [ 1, 2, 3, <3 empty items> ]\narr.length = 2                            // length = 2; arr = [1, 2]\n")])])]),r("p",[a._v("length对象不仅可以显式的设置，它也有可能被隐式修改")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1, 2, 3]\narr[9] = 10\narr                                       // [ 1, 2, 3, <6 empty items>, 10 ] \narr.length                                // 10\n")])])]),r("h3",{attrs:{id:"_2-constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-constructor"}},[a._v("#")]),a._v(" 2. constructor")]),a._v(" "),r("p",[a._v("对创建数组对象的Array构造函数的引用")]),a._v(" "),r("p",[a._v("constructor属性是所有具有prototype的对象的成员。它们包括除Global和Math对象以外的所有JScript固有对象。constructor属性保存了对构造特定对象实例的函数的引用")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function isArray(x) {\n  return x.constructor.toString().indexOf(\"Array\") > -1;\n}\n\nconst arr = [1, 2, 3]\nisArray(arr)                              // true\nconst obj = { name: 'jack' }\nisArray(obj)                              // false\n")])])]),r("h3",{attrs:{id:"_3-prototype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-prototype"}},[a._v("#")]),a._v(" 3. prototype")]),a._v(" "),r("p",[a._v("我们创建的每一个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，\n而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。prototype方法能让我\n们有能力向对象添加属性和方法。")]),a._v(" "),r("p",[a._v("给数组对象添加返回数组中最大元素值的方法。要完成这一点，声明一个函数，将它加入Array.prototype，并使用它")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function array_max() {  \n  var max = this[0];  \n  for( var i = 1; i < this.length; i++ ) {  \n    if( max < this[i] )  \n    max = this[i];  \n  }  \n  return max;  \n}  \n \nArray.prototype.max = array_max;  \nvar x = new Array(1, 2, 3, 4, 5, 6);  \nvar y = x.max(); \ny                                           // 6\n")])])]),r("h2",{attrs:{id:"数组的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组的方法"}},[a._v("#")]),a._v(" 数组的方法")]),a._v(" "),r("h3",{attrs:{id:"push"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[a._v("#")]),a._v(" push")]),a._v(" "),r("p",[a._v("push() 方法给数组末尾添加一个或多个元素，并返回新的长度")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.push("Lemon");                       // 向 fruits 添加一个新元素 (Lemon)\n')])])]),r("h3",{attrs:{id:"pop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[a._v("#")]),a._v(" pop")]),a._v(" "),r("p",[a._v("pop() 方法删除数组的最后一个元素，并返回删除的元素的值")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.pop();                               // 从 fruits 删除最后一个元素（"Mango"）\n')])])]),r("h3",{attrs:{id:"shift"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shift"}},[a._v("#")]),a._v(" shift")]),a._v(" "),r("p",[a._v("shift() 方法删除数组的第一个值，并返回删除的元素的值")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.shift();                             // 从 fruits 删除第一个元素 "Banana"\n')])])]),r("h3",{attrs:{id:"unshift"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unshift"}},[a._v("#")]),a._v(" unshift")]),a._v(" "),r("p",[a._v("unshift() 方法给数组开头添加一个或多个元素，并返回新的长度")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.unshift("Lemon");                    // 向 fruits 添加新元素 "Lemon"\n')])])]),r("h3",{attrs:{id:"tostring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[a._v("#")]),a._v(" toString")]),a._v(" "),r("p",[a._v("toString() 方法把数组转换为数组值（逗号分隔）的字符串")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nfruits.toString();                          // Banana,Orange,Apple,Mango\n')])])]),r("h3",{attrs:{id:"join"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[a._v("#")]),a._v(" join")]),a._v(" "),r("p",[a._v("join() 方法将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符")]),a._v(" "),r("p",[a._v("toString()与join()转换字符串区别：\ntoString()只能转换为逗号分隔的字符串，json()可以指定分隔字符")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [1, 2, 3]\narr.join()                                  // 1,2,3\narr.join('')                                // 123\narr.join(',')                               // 1,2,3\narr.join('|')                               // 1|2|3\n")])])]),r("h3",{attrs:{id:"splice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#splice"}},[a._v("#")]),a._v(" splice")]),a._v(" "),r("p",[a._v("splice() 方法向/从数组中添加/删除元素，然后返回被删除的元素。该方法会改变原始数组。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("第一个参数（0）定义了应添加新元素的位置（拼接）。\n第二个参数（2）定义应删除多少元素。\n其余参数（[5, 6, 7], 8, 9）定义要添加的新元素。\nsplice() 方法返回一个包含已删除项的数组：\n\nvar arr = [1, 2, 3]\narr.splice(0, 2, [5, 6, 7], 8, 9)           // [ 1, 2 ]\narr                                         // [ [ 5, 6, 7 ], 8, 9, 3 ]\n")])])]),r("h3",{attrs:{id:"concat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concat"}},[a._v("#")]),a._v(" concat")]),a._v(" "),r("p",[a._v("concat() 方法通过合并（连接）现有数组来创建一个新数组。不会更改现有数组。它总是返回一个新数组")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr1 = [\"Cecilie\", \"Lone\"];\nvar arr2 = [\"Emil\", \"Tobias\", \"Linus\"];\narr1.concat(arr2, 3)                        // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 3 ]\n")])])]),r("h3",{attrs:{id:"slice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slice"}},[a._v("#")]),a._v(" slice")]),a._v(" "),r("p",[a._v("slice() 方法用数组的某个片段切出新数组。创建新数组。它不会从源数组中删除任何元素")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("slice() 可接受两个参数，比如 (1, 3)。\n该方法会从开始参数选取元素，直到结束参数（不包括）为止。\n返回一个包含已删除项的数组：\nvar fruits = [\"Banana\", \"Orange\", \"Lemon\", \"Apple\", \"Mango\"];\nfruits.slice(1, 3);                         // [ 'Orange', 'Lemon' ]\nfruits                                      // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]\n\n如果结束参数被省略，如：slice(1) 会切出数组的剩余部分\n返回一个包含已删除项的数组：\nvar fruits = [\"Banana\", \"Orange\", \"Lemon\", \"Apple\", \"Mango\"];\nfruits.slice(1);                            // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]\n")])])]),r("h3",{attrs:{id:"indexof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#indexof"}},[a._v("#")]),a._v(" indexOf")]),a._v(" "),r("p",[a._v("indexOf() 方法在数组中搜索元素值并返回其位置。如果未找到项目，Array.indexOf() 返回 -1。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Apple", "Orange", "Apple", "Mango"];\nvar a = fruits.indexOf("Apple");            // a = 0\n如果项目多次出现，则返回第一次出现的位置\n\narray.indexOf(item, start)\nitem\t必需。要检索的项目。\nstart\t可选。从哪里开始搜索。负值将从结尾开始的给定位置开始，并搜索到结尾。\n')])])]),r("h3",{attrs:{id:"lastindexof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lastindexof"}},[a._v("#")]),a._v(" lastIndexOf")]),a._v(" "),r("p",[a._v("Array.lastIndexOf() 与 Array.indexOf() 类似，但是从数组结尾开始搜索。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Apple", "Orange", "Apple", "Mango"];\nvar a = fruits.lastIndexOf("Apple");        // a = 2\n')])])]),r("h3",{attrs:{id:"isarray"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isarray"}},[a._v("#")]),a._v(" isArray")]),a._v(" "),r("p",[a._v("判断是否为数组")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3]\nconsole.log(Array.isArray(arr))\n")])])]),r("h3",{attrs:{id:"from"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[a._v("#")]),a._v(" from")]),a._v(" "),r("p",[a._v("from(要转换为数组的对象, mapFunction, thisValue)：将类数组对象转换为数组，否则返回空数组")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arrLike = {\n  '0': 'a',\n  '1': 'b',\n  '2': 'c',\n  length: 3\n}\nlet arr2 = Array.from(arrLike)\nconsole.log(arr2)                            // [ 'a', 'b', 'c' ]\n")])])]),r("h3",{attrs:{id:"includes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#includes"}},[a._v("#")]),a._v(" includes")]),a._v(" "),r("p",[a._v("includes(指定值, 起始位置(负数表示倒数))：判断一个数组是否包含一个指定的值。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[1, 2, 3].includes(2)                       // true\n[1, 2, 3].includes(4)                       // false\n[1, 2, NaN].includes(NaN)                   // true\n[1, 2, 3].includes(3, 3)                    // false\n[1, 2, 3].includes(3, -1)                   // true\n")])])]),r("h3",{attrs:{id:"lastindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lastindex"}},[a._v("#")]),a._v(" lastIndex")]),a._v(" "),r("p",[a._v("lastIndex(item)：返回一个指定元素在数组中最后出现的位置，没有则没有-1。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('var fruits = ["Banana", "Orange", "Apple", "Mango"];\nvar a = fruits.lastIndexOf("Apple");        // 2\n')])])]),r("h3",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" ...")]),a._v(" "),r("p",[a._v('展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)')]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3]\nlet arr2 = [4, ...arr]\nconsole.log(arr2)                           // [ 4, 1, 2, 3 ]\n\nconst arr = [1, 2, 3]\nlet arr2 = [...arr]\narr2.push(4)\nconsole.log(arr)                            // [ 1, 2, 3 ]\nconsole.log(arr2)                           // [ 1, 2, 3, 4 ]\n展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝(只遍历一层)。不可对多维数组进行深拷贝\n")])])]),r("h3",{attrs:{id:"valueof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#valueof"}},[a._v("#")]),a._v(" valueOf")]),a._v(" "),r("p",[a._v("返回数组对象的原始值。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code")])]),r("h2",{attrs:{id:"数组的排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组的排序"}},[a._v("#")]),a._v(" 数组的排序")]),a._v(" "),r("h3",{attrs:{id:"reverse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reverse"}},[a._v("#")]),a._v(" reverse")]),a._v(" "),r("p",[a._v("reverse() 方法反转数组中的元素。\n您可以使用它以降序对数组进行排序：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\nfruits.reverse();                           // [ 'Mango', 'Apple', 'Orange', 'Banana' ]\n")])])]),r("h3",{attrs:{id:"sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sort"}},[a._v("#")]),a._v(" sort")]),a._v(" "),r("p",[a._v("sort() 方法以字母顺序对数组进行排序，对数值排序时会产生不正确的结果")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var fruits = [\"Banana\", \"Orange\", \"Apple\", \"Mango\"];\nfruits.sort();                              // [ 'Apple', 'Banana', 'Mango', 'Orange' ]\n")])])]),r("h3",{attrs:{id:"sort方法封装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sort方法封装"}},[a._v("#")]),a._v(" sort方法封装")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var points = [40, 100, 1, 5, 25, 10];\npoints.sort( function(a, b) { return a - b } );\nconsole.log(points)                         // [ 1, 5, 10, 25, 40, 100 ]\n")])])]),r("h3",{attrs:{id:"冒泡排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[a._v("#")]),a._v(" 冒泡排序")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/bigdata-stone/p/10464243.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("冒泡排序"),r("OutboundLink")],1)]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var arr = [0, 1, 23, 12, 2];\nfunction sortBubbling(arr) {\n\tfor( var i = 0; i < arr.length; i++ ){\n\t\tfor( var j = 0; j < arr.length - 1 - i; j++ ){\n\t\t\tif( arr[j] > arr[j + 1] ){\n\t\t\t\tvar tim = arr[j];\n\t\t\t\tarr[j] = arr[j+1];\n\t\t\t\tarr[j+1] = tim;\n\t\t\t}\n\t\t}\n\t}\n\treturn arr;\n}\nconsole.log( sortBubbling(arr) )           // [ 0, 1, 2, 12, 23 ]\n")])])]),r("h2",{attrs:{id:"数组的遍历"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数组的遍历"}},[a._v("#")]),a._v(" 数组的遍历")]),a._v(" "),r("h3",{attrs:{id:"break-continue-return"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#break-continue-return"}},[a._v("#")]),a._v(" break, continue, return")]),a._v(" "),r("p",[a._v("相同之处：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("三个都会将此时进行的语句停止。\n")])])]),r("p",[a._v("不同之处：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("1、break：执行break操作，跳出所在的当前整个循环，到外层代码继续执行。\n2、continue：执行continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n3、return：执行return操作，直接返回函数，所有该函数体内的代码（包括循环体）都不会再执行。\n4、使用的语句环境不一样，break和continue是用在循环或switch语句中，return是用在函数语句中。\n")])])]),r("h3",{attrs:{id:"for-for-in-for-of-while-do-while"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-for-in-for-of-while-do-while"}},[a._v("#")]),a._v(" for, for in, for of, while, do while")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("方法的回调函数中支持return返回值\nreturn: 支持return阻断当前循环与跳出当前函数\nbreak: 支持break跳出所在的当前整个循环\ncontinue：支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"for-while-do-while"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#for-while-do-while"}},[a._v("#")]),a._v(" for, while, do while")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nfor (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]) // 1 2 3 4 5\n}\n\nlet count = 0\nwhile(count < 5) {\n  count += 1\n  console.log(count)   // 1 2 3 4 5\n}\n\nlet count = 0\ndo {  //循环条件\n  count += 1\n  console.log(count) // 1\n} while (count < 0)\n\nfor和while是先判断再执行\ndo...while是先执行一次再判断继不继续\n所以for和while语句块可能一次都不执行，但是do...while至少会执行一次\n")])])]),r("h3",{attrs:{id:"foreach"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[a._v("#")]),a._v(" forEach")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("forEach方法的回调函数中不支持return返回值\nreturn: 不支持return阻断当前循环与跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"map-filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#map-filter"}},[a._v("#")]),a._v(" map,filter")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nlet arr2 = []\narr2 = arr.map((val, index) => {\n  return val\n})\narr\t\t\t\t\t\t\t\t\t\t\t\t// [ 1, 2, 3, 4, 5 ]\narr2\t\t\t\t\t\t\t\t\t\t\t// [ 1, 2, 3, 4, 5 ]\n回调函数中支持return返回值，并不影响原来的数组\nreturn: 不支持return阻断当前循环与跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"every"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#every"}},[a._v("#")]),a._v(" every")]),a._v(" "),r("p",[a._v("every()是对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nlet arr2 = []\nfunction init() {\n  arr2 = arr.every((val, index) => {\n    // return val > 3   \t\t\t\t\t\t// arr2 = false\n    return val > 0   \t\t\t\t\t\t\t// arr2 = true\n  })\n}\ninit()\n回调函数中支持return返回值，返回true或者false\nreturn: 支持return阻断当前循环（有一项不满足就阻断）不支持跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"some"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#some"}},[a._v("#")]),a._v(" some")]),a._v(" "),r("p",[a._v("some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nlet arr2 = []\nfunction init() {\n  arr2 = arr.some((val, index) => {\n    console.log(val)\n    // return val > 3   \t\t\t\t\t// arr2 = true\n    return val > 5   \t\t\t\t\t\t// arr2 = false\n  })\n}\ninit()\n\n回调函数中支持return返回值，返回true或者false\nreturn: 支持return阻断当前循环（有一项满足就阻断）不支持跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"reduce"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[a._v("#")]),a._v(" reduce")]),a._v(" "),r("p",[a._v("此函数接受 4 个参数：\n上一次的值\n当前值\n当前值的索引\n数组本身")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nlet arr2 = 0\nfunction init() {\n  arr2 = arr.reduce((prev, next, index, array) => {\n    return prev + next\n  })\n}\ninit()\narr\t\t\t\t\t\t\t\t\t\t\t// [ 1, 2, 3, 4, 5 ]\narr2\t\t\t\t\t\t\t\t\t\t// 15\n\n回调函数中支持return返回值，并不影响原来的数组\nreturn: 不支持持return阻断当前循环与跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n\n使用for方法实现reduce方法功能\nconst arr = [1, 2, 3, 4, 5]\nlet arr2 = 0\nfor (let i=0; i<arr.length; i++) {\n  arr2 += arr[i]\n}\nconsole.log(arr2)   \t\t\t\t\t\t// 15\n")])])]),r("h3",{attrs:{id:"reduceright"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reduceright"}},[a._v("#")]),a._v(" reduceRight")]),a._v(" "),r("p",[a._v("reduceRight()方法的功能和reduce()功能是一样的，不同的是reduceRight()从数组的末尾向前将数组中的数组项做累加")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [1, 2, 3, 4, 5]\nlet arr2 = 0\n\nfunction init() {\n  arr2 = arr.reduceRight((prev, next, index, array) => {\n    console.log(next) \t\t\t\t\t// 4 3 2 1\n    return prev + next   \t\t\n  })\n  console.log('不需要展示')\n}\ninit()\nconsole.log(arr)\t\t\t\t\t\t\t\t// [ 1, 2, 3, 4, 5 ]\nconsole.log(arr2)\t\t\t\t\t\t\t\t// 15\n")])])]),r("h3",{attrs:{id:"find"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[a._v("#")]),a._v(" find")]),a._v(" "),r("p",[a._v("find()方法返回数组中符合测试函数条件的第一个元素。否则返回undefined")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [\n  {\n    id: 0,\n    name: 'liu'\n  }, \n  {\n    id: 1,\n    name: 'hai'\n  }, \n  {\n    id: 2,\n    name: 'hong'\n  }\n]\nlet arr2 = arr.find((data) => data.name === 'hai')\nconsole.log(arr2)  \t\t\t\t\t\t\t\t// { id: 1, name: 'hai' }\n\n回调函数中支持return返回值，并不影响原来的数组\nreturn: 支持return阻断当前循环与跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])]),r("h3",{attrs:{id:"findindex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#findindex"}},[a._v("#")]),a._v(" findIndex")]),a._v(" "),r("p",[a._v("对于数组中的每个元素，findIndex 方法都会调用一次回调函数（采用升序索引顺序），直到有元素返回 true。只要有一个元素返回 true，findIndex 立即返回该返回 true 的元素的索引值。如果数组中没有任何元素返回 true，则 findIndex 返回 -1。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [\n  {\n    id: 0,\n    name: 'liu'\n  }, \n  {\n    id: 1,\n    name: 'hai'\n  }, \n  {\n    id: 2,\n    name: 'hong'\n  }\n]\n\nfunction init(data) {\n  console.log(data)      \t\t\t\t\t\t// { id: 0, name: 'liu' } { id: 1, name: 'hai' }\n  return data.name === 'hai'\n}\nconsole.log(arr.findIndex(init))  \t\t\t\t// 1\n\n回调函数中支持return返回值，并不影响原来的数组\nreturn: 支持return阻断当前循环与跳出当前函数\nbreak: 不支持break跳出所在的当前整个循环\ncontinue：不支持continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);