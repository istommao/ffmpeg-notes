# 视频

## 从视频中取出音频

```bash
ffmpeg -i input.mp4 -vn -y -acodec copy output.aac
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
