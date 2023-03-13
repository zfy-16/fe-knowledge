# 业务对象展示编辑封装想考

常见的后台系统需求：

页面上方过滤条件组、下方表格展示、表格工具栏中还有一些常用的操作（新建、导出等）、表格操作列中还有常用操作（编辑、查看、删除）。

上述的功能大部分就是 ProTable 封装目标，但是深入到项目使用中后，具体的按钮的逻辑还是可以继续封装常见的功能。下列是对于这些功能再封装的思考:

## 新建、编辑、查看功能逻辑都是展示一个弹框，一系列操作后关闭弹框进行下一步。

查看不同开发人员对于该类需求的开发逻辑时，发现对于同一个需求大家有不同的实现思路，以弹窗显隐逻辑为例：一种处理是在主页面中 modal 是以`{visible && <Modal><Content ></Content></Modal>}`的形式，还有是以`<Component visible={visible}></Component>`,Component 中又包含了 Modal 的形式。对于类似逻辑，认为各自有优缺点，所以为了探索哪种处理更优雅、也为了能封装一层、不需要每次拷贝代码，所以对于此逻辑进行了总结、封装。模板代码查看 template 中代码。

这里列出封装思路及思考：

1. 首先弹窗采用`<Modal><Content/></Modal>`的形式，visible 只会在入口页面用到，Content 中只有内容展示，这样可以职责更清晰。
2. Modal 的功能按钮需要用到 Content 中值时，在 Content 中暴漏方法，在主页面以 ref 的形式调用。
3. 弹窗中功能对于查看新建编辑有不同的状态，有的开发逻辑是根据 editInfo 是否为 null 来判断，但是这样无法判断查看和编辑，所以在主页面还是需要定义一个当前弹窗出现的状态，有三种`edit | view | new`。该状态需要在判断使用接口等情况用到，也需要下发到 modal content 中，因为它可能需要用到来让弹框中表单是否是 disable 态。