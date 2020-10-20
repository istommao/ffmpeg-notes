# ffmpeg-notes
ffmpeg notes


## 视频裁剪

```bash
ffmpeg -y -ss 5 -t 13 -accurate_seek -i input.mp4 -codec copy -avoid_negative_ts 1 output.mp4
```

- [ffmpeg视频精准剪切](https://zhuanlan.zhihu.com/p/97914917)


## 从视频中取出音频

```bash
ffmpeg -i input.mp4 -vn -y -acodec copy output.aac
```

## 音频转码

```shell
ffmpeg -i demo.wav -vn -ar 44100 -ac 2 -b:a 192k demo.mp3
```

```shell
ls *.wav | xargs -L 1 -I % ffmpeg -i % -vn -ar 44100 -ac 2 -b:a 192k %.mp3
```

## 图片或视频旋转

https://stackoverflow.com/questions/3937387/rotating-videos-with-ffmpeg


```bash
ffmpeg -i {input_file} -vf "transpose=1" {output_file}

# Use -vf "transpose=2,transpose=2" for 180 degrees.
0 = 90CounterCLockwise and Vertical Flip (default)
1 = 90Clockwise
2 = 90CounterClockwise
3 = 90Clockwise and Vertical Flip
```

## nvidia ffmpeg transcoding guide

https://devblogs.nvidia.com/nvidia-ffmpeg-transcoding-guide/


## 音视频基础

52im.net 即时通讯网

http://www.52im.net/thread-228-1-1.html

##  阮一峰 FFmpeg 视频处理入门教程

http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html

