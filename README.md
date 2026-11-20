# 电网装备试验凭据

该项目归集设备配置、试验工况、遥测事件和投运审批的引用资料。`fixtures/observations.json` 为虚构设备及合成记录，用于本地验证来源数据，不代表实际试验或电网运行结论。

本地环境使用 Node.js 22。运行 `npm test` 可检查合成资料是否可解析；容器环境可运行 `docker build -t spg-trial-evidence .`，随后运行 `docker run --rm spg-trial-evidence`。
