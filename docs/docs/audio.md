# 音频处理

## 音频转码

```shell
ffmpeg -i demo.wav -vn -ar 44100 -ac 2 -b:a 192k demo.mp3
```

```shell
ls *.wav | xargs -L 1 -I % ffmpeg -i % -vn -ar 44100 -ac 2 -b:a 192k %.mp3
```
