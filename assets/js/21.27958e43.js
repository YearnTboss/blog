(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{225:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.mongodb.com/manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网手册"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("MongoDB提供高性能数据持久性。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("MongoDB的复制工具称为副本集，它提供：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._m(56),t._m(57),t._v(" "),t._m(58),t._m(59),t._v(" "),s("blockquote",[s("p",[t._v("要修改现有索引，需要删除并重新创建索引。例外是 TTL索引，可以通过"),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/command/collMod/#dbcmd.collMod",target:"_blank",rel:"noopener noreferrer"}},[t._v("collMod"),s("OutboundLink")],1),t._v("命令与"),s("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/command/collMod/#index",target:"_blank",rel:"noopener noreferrer"}},[t._v("index"),s("OutboundLink")],1),t._v("集合标志一起 修改。")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 概述")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("MongoDB 是一个基于分布式文件存储的数据库。是由字段和值对组成的数据结构。MongoDB文档类似于JSON对象。字段的值可以包括其他文档，数组和文档数组。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[this._v("#")]),this._v(" 特点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"高性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高性能","aria-hidden":"true"}},[this._v("#")]),this._v(" 高性能")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("对嵌入式数据模型的支持减少了数据库系统的I / O活动。")]),this._v(" "),e("li",[this._v("索引支持更快的查询，并且可以包含来自嵌入式文档和数组的键。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"高可用性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用性","aria-hidden":"true"}},[this._v("#")]),this._v(" 高可用性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("自动故障转移和")]),this._v(" "),e("li",[this._v("数据冗余。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mongodb-crud操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-crud操作","aria-hidden":"true"}},[this._v("#")]),this._v(" MongoDB CRUD操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("插入：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.insertOne() 版本3.2中的新功能\ndb.collection.insertMany() 版本3.2中的新功能\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v('db.users.insertOne(\n{\nname: "tboss",\nage: 30\n}\n)')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("查询：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.find()\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v('db.users.find(\n{age: { $gt: 18 } },\n{name: "tboss" }\n).limit(20)')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("更新")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.updateOne() 版本3.2中的新功能\ndb.collection.updateMany() 版本3.2中的新功能\ndb.collection.replaceOne() 版本3.2中的新功能\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v('db.users.updateMany(\n{age: { $gt: 18 } },\n{$set: { name: "tyw" } }\n)')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("删除")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.deleteOne() 版本3.2中的新功能\ndb.collection.deleteMany() 版本3.2中的新功能\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("db.users.deleteMany(\n{age: { $gt: 18 } }\n)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"聚合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合","aria-hidden":"true"}},[this._v("#")]),this._v(" 聚合")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.collection.aggregate([\n    { $match: { status: 0 } },  //精确匹配\n    { $group: { _id: "$cust_id",total: { $sum: "amount" } } }   //精确匹配\n]);\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引","aria-hidden":"true"}},[this._v("#")]),this._v(" 索引")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("单个索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("对于单字段索引和排序操作，索引键的排序顺序（即升序或降序）无关紧要，因为MongoDB可以在任一方向上遍历索引。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.createIndex( { name: 1 } )    //单个索引\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("复合索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("对于复合索引和排序操作，索引键的排序顺序（即升序或降序）可以确定索引是否可以支持排序操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.createIndex({name: 1, age: -1}, {background: true})   //复合索引\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("多键索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("如果索引包含数组值的字段，MongoDB会为数组的每个元素创建单独的索引条目。这些多键索引允许查询通过匹配数组的元素或元素来选择包含数组的文档。如果索引字段包含数组值，MongoDB会自动确定是否创建多键索引; 您不需要显式指定多键类型。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.collection.createIndex({"stock.size": 1 })   //多键索引\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json5 extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json5"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("_id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ijk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("stock")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"M"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("quantity")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("quantity")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"L"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property unquoted"}},[t._v("quantity")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("文字索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("支持在集合中搜索字符串内容。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.collection.createIndex( { name: "text" } )  //文字索引\ndb.collection.createIndex( { name: "text", desc: "text" } )  //文字复合索引\ndb.collection.createIndex( { "$**": "text" } )  //通配符文字索引--为包含集合中每个文档的字符串数据的每个字段编制索引\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("散列索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("索引在其范围内具有更随机的值分布，但仅支持相等匹配且不支持基于范围的查询。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.collection.createIndex( { _id: "hashed" } )  //散列索引--不支持多键\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("唯一索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("索引的唯一属性会导致MongoDB拒绝索引字段的重复值。除了唯一约束之外，唯一索引在功能上可与其他MongoDB索引互换。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("部分索引(版本3.2中的新功能。)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("部分索引仅索引符合指定过滤器表达式的集合中的文档。通过索引集合中的文档子集，部分索引具有较低的存储要求，并降低了索引创建和维护的性能成本。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.createIndex(\n   { cuisine: 1, name: 1 },\n   { partialFilterExpression: { rating: { $gt: 5 } } }\n)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("稀疏索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("索引的稀疏属性可确保索引仅包含具有索引字段的文档的条目。索引会跳过没有索引字段的文档。您可以将稀疏索引选项与唯一索引选项组合，以拒绝具有字段重复值的文档，但忽略没有索引键的文档。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.scores.createIndex( { score: 1 } , { sparse: true } )\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("如果某些文档中不包含score字段，则直接跳过")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("TTL索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("TTL索引是MongoDB可用于在一定时间后自动从集合中删除文档的特殊索引。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("语法中 name 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("background")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",[t._v('建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为false。')])]),t._v(" "),s("tr",[s("td",[t._v("unique")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",[t._v("建立的索引是否唯一。指定为true创建唯一索引。默认值为false.")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",[t._v("索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称。")])]),t._v(" "),s("tr",[s("td",[t._v("dropDups")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",[t._v("3.0+版本已废弃。在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 false.")])]),t._v(" "),s("tr",[s("td",[t._v("sparse")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",[t._v("对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 false.")])]),t._v(" "),s("tr",[s("td",[t._v("expireAfterSeconds")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("integer")]),t._v(" "),s("td",[t._v("指定一个以秒为单位的数值，完成 TTL设定，设定集合的生存时间。")])]),t._v(" "),s("tr",[s("td",[t._v("v")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("index version")]),t._v(" "),s("td",[t._v("索引的版本号。默认的索引版本取决于mongod创建索引时运行的版本。")])]),t._v(" "),s("tr",[s("td",[t._v("weights")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("document")]),t._v(" "),s("td",[t._v("索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。")])]),t._v(" "),s("tr",[s("td",[t._v("default_language")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",[t._v("对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语")])]),t._v(" "),s("tr",[s("td",[t._v("language_override")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",[t._v("对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的language，默认值为 language.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"索引管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 索引管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("列出索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("db.collection.getIndexes()\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.getCollectionNames().forEach(function(collection) {\n   indexes = db[collection].getIndexes();\n   print("Indexes for " + collection + ":");\n   printjson(indexes);\n});\n//列出所有索引\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("删除索引")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('db.collection.dropIndex( { "name": 1 } );   //删除指定索引\ndb.collection.dropIndexes();    //删除所有索引\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("修改索引")])])}],!1,null,null,null);e.default=a.exports}}]);