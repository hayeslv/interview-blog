查看端口占用（可以拿到PID）

```bash
lsof -i tcp:7777
```

杀掉进程（通过PID）

```bash
kill -9 7592
```

