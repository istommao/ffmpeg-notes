# ffmpeg-notes
ffmpeg notes


## 从视频中取出音频

```bash
ffmpeg -i input.mp4 -vn -y -acodec copy output.aac
```
