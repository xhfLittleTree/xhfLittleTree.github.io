(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{351:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[s._v("#")]),s._v(" 背景介绍")]),s._v(" "),t("p",[s._v("项目中使用了parcel进行页面的挂载")]),s._v(" "),t("ol",[t("li",[s._v("parcel是什么")])]),s._v(" "),t("p",[s._v("Parcels是single-spa的一个高级特性。一个single-spa 的 parcel，指的是一个与框架无关的组件，由一系列功能构成，可以被应用手动挂载，无需担心由哪种框架实现。"),t("a",{attrs:{href:"https://zh-hans.single-spa.js.org/docs/parcels-overview/",title:"Pacels文档",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pacels文档"),t("OutboundLink")],1)]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("如何使用parcel")])]),s._v(" "),t("p",[s._v("Parcels有3个必填生命周期函数(bootstrap， mount 和 unmount)和1个可选生命周期函数(update)")]),s._v(" "),t("p",[s._v("以下为官网中给出的使用样例：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parcel 的实现")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parcelConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bootstrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用某个框架来创建和初始化dom")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用某个框架卸载dom，做其他的清理工作")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如何挂载parcel")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" domElement "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'place-in-dom-to-mount-parcel'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parcelProps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  domElement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("customProp1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" parcel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" singleSpa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mountRootParcel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parcelConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" parcelProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parcel 被挂载，在mountPromise中结束挂载")]),s._v("\nparcel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mountPromise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'finished mounting parcel!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果我们想重新渲染parcel，可以调用update生命周期方法，其返回值是一个 promise")]),s._v("\n  parcelProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("customProp1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" parcel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parcelProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在此处调用unmount生命周期方法来卸载parcel. 返回promise")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" parcel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unmount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v('[Pacels API](https://zh-hans.single-spa.js.org/docs/parcels-api"Pacels API")')]),s._v(" "),t("p",[s._v("single-spa 对外暴露了两套parcels相关接口。二者的区别主要在于调用者和调用接口的方式。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th"),s._v(" "),t("th",[s._v("mountRootParcel")]),s._v(" "),t("th",[s._v("mountParcel")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("上下文")]),s._v(" "),t("td",[s._v("singleSpa")]),s._v(" "),t("td",[s._v("application")])]),s._v(" "),t("tr",[t("td",[s._v("卸载条件")]),s._v(" "),t("td",[s._v("手动卸载")]),s._v(" "),t("td",[s._v("手动卸载 + 应用被卸载时")])]),s._v(" "),t("tr",[t("td",[s._v("api位置")]),s._v(" "),t("td",[s._v("singleSpa 命名导出")]),s._v(" "),t("td",[s._v("生命周期属性中提供")])])])]),s._v(" "),t("p",[s._v("通常建议使用mountParcelAPI。mountParcel允许你将parcel在应用里当做一个普通组件处理，不需要考虑parcel由哪个框架实现，也不需要强制调用unmount()方法卸载parcel")]),s._v(" "),t("p",[s._v("对以上两个方法的个人理解：\nmountRootParcel 是挂载在主应用上的，当parcel不需要是要手动去卸载，而mountParcel是挂载在子应用上的，当子应用被卸载时，parcel也一起被卸载了")]),s._v(" "),t("p",[s._v("mountRootParcel时singleSpa导出的")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" singleSpa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'single-spa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsingleSpa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mountRootParcel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parcelConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" parcelProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("为了能够绑定在应用的上下文中，mountParcel会作为生命周期属性进行传入。在子应用的生命周期的参数中可以获取到mountParcel")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bootstrap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mountParcel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mountParcel\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其他更多boostrap")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("parcel挂载方法有两个参数"),t("code",[s._v("parcelConfig")]),s._v(" 和 "),t("code",[s._v("parcelProps")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("parcelConfig")]),s._v(" 里面声明parcel的生命周期"),t("br"),s._v(" "),t("code",[s._v("parcelProps")]),s._v(" 里面的"),t("code",[s._v("domElement")]),s._v("是parcel挂载的元素，另外可以传递一些parcel需要的参数")]),s._v(" "),t("p",[s._v("一个parcel对象包含下面的方法：\n"),t("code",[s._v("mount")]),s._v("：parcel.unmount() 返回一个promise，当parcel卸载成功后resolve。promise可能会抛出异常，需进行处理。"),t("br"),s._v(" "),t("code",[s._v("unmount")]),s._v("：parcel.unmount() 返回一个promise，当parcel卸载成功后resolve。promise可能会抛出异常，需进行处理。"),t("br"),s._v(" "),t("code",[s._v("update")]),s._v("：parcel.update(props) 允许你改变传给parcel的参数。注意不是所有的parcel都支持update方法。"),t("br"),s._v(" "),t("code",[s._v("getStatus")]),s._v("：parcel.getStatus() 返回一个字符串代表parcel的状态。所有状态如下：")]),s._v(" "),t("p",[t("code",[s._v("NOT_BOOTSTRAPPED")]),s._v(": 未初始化"),t("br"),s._v(" "),t("code",[s._v("BOOTSTRAPPING")]),s._v(": 初始化中"),t("br"),s._v(" "),t("code",[s._v("NOT_MOUNTED")]),s._v(": 完成初始化，未挂载"),t("br"),s._v(" "),t("code",[s._v("MOUNTED")]),s._v(": 激活状态，且已挂载至DOM"),t("br"),s._v(" "),t("code",[s._v("UNMOUNTING")]),s._v(": 卸载中"),t("br"),s._v(" "),t("code",[s._v("UPDATING")]),s._v(": 更新中"),t("br"),s._v(" "),t("code",[s._v("SKIP_BECAUSE_BROKEN")]),s._v(": 在初始化、挂载、卸载或更新时发生异常。其他parcel可能会被正常使用，但当前parcel会被跳过。"),t("br"),s._v(" "),t("code",[s._v("loadPromise")]),s._v("：parcel.loadPromise() 返回一个promise，当parcel被装载(loaded)后resolve。"),t("br"),s._v(" "),t("code",[s._v("bootstrapPromise")]),s._v("：parcel.bootstrapPromise() 返回一个promise，当parcel初始化后resolve。"),t("br"),s._v(" "),t("code",[s._v("mountPromise")]),s._v("：parcel.mountPromise() 返回一个promise，当parcel加载后resolve。通常用于检测parcel生成的DOM是否已经挂载。"),t("br"),s._v(" "),t("code",[s._v("unmountPromise")]),s._v("：parcel.unmountPromise() 返回一个promise，当parcel卸载后resolve。")]),s._v(" "),t("h2",{attrs:{id:"项目中的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中的使用"}},[s._v("#")]),s._v(" 项目中的使用")]),s._v(" "),t("p",[s._v("在子应用的mount生命周期中，获取mountParcel将其挂载到子应用的window上")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Promise")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parcel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mountParcel")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mountParcel\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 时间过长会导致超时")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("因为项目是vue框架，所以在parcel的mount生命周期中使用new Vue去挂载画面")])])}),[],!1,null,null,null);t.default=e.exports}}]);