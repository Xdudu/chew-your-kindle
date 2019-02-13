## 关于
kindle 一直是最近几年地铁上的好伙伴，多么嘈杂的时光，看着看着都能安静下来。最近将剪贴板的内容用脚本整理一下，一来以电子的形式记录，算是一种呼应；二来打印在新买的方格本上，当作物理上的足迹。

## 用法
``` shell
node chew.js [path to your clippings file] [path to output chewed json]
```
若第二个 `path` 省略，默认输出在原剪贴板文件所在文件夹，文件名为 `chewed.json`

## 输出格式
``` JSON
[
  {
    "title": "追寻逝去的时光",
    "author": "周克希",
    "type": "标注",
    "markDay": "2017/1/27",
    "markTime": "下午2:17:24",
    "sentence": "一般的听众和观众，只有在一种已经被他们慢慢领会的艺术的程式化作品中，才能感受到妩媚和优雅，领略到大自然的种种形态，而一个富有独创性的艺术家却正是从屏弃这些程式化的作品开始他的创作的"
  }
]
```
其中 `type` 有 `"标注"` 和 `"笔记"` 两种

---------------------
#### 线上浏览[地址](https://xdudu.github.io/chew-your-kindle/)
#### 打印效果
<div style="text-align: center;">
<img src="chew-1.jpg" alt="打印-1" style="margin: 10px; width: 100%; max-width: 600px"/>
<img src="chew-2.jpg" alt="打印-2" style="margin: 10px; width: 100%; max-width: 600px"/>
<img src="chew-3.jpg" alt="打印-3" style="margin: 10px; width: 100%; max-width: 600px"/>
</div>
