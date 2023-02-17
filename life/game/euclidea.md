# Euclidea Game

Website: <https://www.euclidea.xyz/en/>
Online Version: <https://www.euclidea.xyz/en/game/packs>
- Euclidea几何构建全关卡通关攻略大全 <https://m.yoyou.com/game/euclidea/151204.html>

## 单词

| 单词          | 中文            | 近义词   |
|---------------|---------------|----------|
| perpendicular | 垂直            | vertical |
| compass       | 指南针;圆规     |          |
| straightedge  | 直尺            |          |
| bisector      | 二等分物;平分线 |          |

新东方数学专业词汇表：<https://www.koolearn.com/dict/tag_1561_1.html>

## 三角形定义与性质总结

### 内心 (innercenter)

- 三条角平分线的交点
- 内切圆圆心
- 到三条边距离相等

<canvas id="incenter" width="200" height="100" style="border:1px solid #d3d3d3;"></canvas>
<script>
    var incenter = document.getElementById('incenter');
    var ctx = incenter.getContext("2d");
    ctx.moveTo(40, 80);ctx.lineTo(160, 80);ctx.stroke();
    ctx.moveTo(40, 80);ctx.lineTo(80, 40);ctx.stroke();
    ctx.moveTo(80, 40);ctx.lineTo(160, 80);ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
</script>

### 外心

- 三条中垂线的交点
- 外接圆圆心
- 到三个顶点距离相等

### 重心

- 三条中线的交点
- 三条中线的三等分点，距顶点为距对边距离的两倍

### 垂心 (orthocenter)

- 三条高的交点

## 圆的性质定理总结

### 定义

| 定义   | 描述                                         |
|-------|--------------------------------------------|
| 圆     | 平面上到定点的距离等于定长的所有点组成的图形 |
| 圆心   | 定点称为圆心                                 |
| 半径   | 定长称为半径                                 |
| 圆弧   | 圆上任意两点间的部分                         |
| 优弧   | 大于半圆的弧                                 |
| 劣弧   | 小于半圆的弧                                 |
| 弦     | 连接圆上任意两点的线段                       |
| 直径   | 经过圆心的弦                                 |
| 圆心角 | 顶点在圆心上的角                             |
| 圆周角 | 顶点在圆周上的角                             |

