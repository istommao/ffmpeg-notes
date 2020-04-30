# 初识ffmpeg

- 音频处理
- 视频处理
- 图像处理

```shell
brew install ffmpeg
```


## 常用参数

| 参数         | 说明  |
|  ----:       | :----  |
|   -h               |  帮助 |
|   -i filename      |  输入文件 |
|   -t duration      | 设置处理时长 hh:mm:ss    |
|   -ss position      | 设置开始时间 hh:mm:ss    |
|   -b:v bitrate      |  设置视频码率   |
|   -b:a bitrate      |  设置音频码率   |
|   -r fps            |  设置帧率       |
|   -s wxh            |  设置帧大小 格式微 WxH    |
|   -c:v codec        |  设置视频编码器  |
|   -c:a codec        |  设置音频编码器  |
|   -ar freq        |  设置音频采样率  |
|   -an               |  disable audio |
|  -vol volume        | change audio volume (256=normal) |
| -vn                 | disable video |