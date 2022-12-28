## 切换默认源

```bash
npm config set registry https://registry.npmjs.org
```

## 检查 npm 源

```bash
npm get registry
```

## npm设置代理

```bash
npm config set proxy http://127.0.0.1:12639
npm config set https-proxy http://127.0.0.1:12639
```

## npm取消代理

```bash
npm config delete proxy
npm config delete https-proxy
```



## 安装nrm

```bash
npm i -g nrm
```

## nrm添加源

```bash
nrm add tencent https://mirrors.tencent.com/npm/
```

## nrm删除源

```bash
nrm del tencent
```

## 测试速度

```bash
nrm test tencent
```

