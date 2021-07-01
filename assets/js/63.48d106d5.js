(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{183:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"使用-apt-安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 APT 安装 Docker")]),t._v(" "),s("h2",{attrs:{id:"docker安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 更新软件源\nsudo apt-get update\n# 安装所需依赖\nsudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common\n# 安装 GPG 证书\ncurl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n# 新增软件源信息\nsudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"\n# 再次更新软件源\nsudo apt-get -y update\n# 安装 Docker CE 版\nsudo apt-get -y install docker-ce\n')])])]),s("h2",{attrs:{id:"配置用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置用户组","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置用户组")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# 建立 docker 用户组\nsudo groupadd docker\n# 将当前用户加入 docker 组：\nsudo usermod -aG docker $USER\n")])])]),s("h2",{attrs:{id:"配置docker-加速器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置docker-加速器","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置Docker 加速器")]),t._v(" "),s("p",[t._v("在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#中国")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#阿里云加速")]),t._v("\nsudo mkdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /etc/docker\nsudo tee /etc/docker/daemon.json <<"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EOF'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://20v9zh9c.mirror.aliyuncs.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nEOF\nsudo systemctl daemon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("reload\nsudo systemctl restart docker\n\n")])])]),s("p",[t._v("验证加速器是否配置成功：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo systemctl restart docker\ndocker info\n...\n# 出现如下语句即表示配置成功\nRegistry Mirrors:\n https://registry.docker-cn.com/\n...\n")])])]),s("p",[t._v("DaoCloud 加速器")]),t._v(" "),s("blockquote",[s("p",[t._v("简介：DaoCloud 加速器 是广受欢迎的 Docker 工具，解决了国内用户访问 Docker Hub 缓慢的问题。DaoCloud 加速器结合国内的 CDN 服务与协议层优化，成倍的提升了下载速度。")])]),t._v(" "),s("p",[t._v("(DaoCloud 官网)[https://www.daocloud.io/mirror#accelerator-doc]")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://95822026.m.daocloud.io\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);