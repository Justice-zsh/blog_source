---
title: hexo butterfly标签
date: 2021-08-02 16:39:03
tags:
 - hexo
 - 标签样式
categories:
 - Hexo
---

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
class 【可选】标签，不同的标签有不同的配色（ default / primary / success / info / warning / danger ）
no-icon  【可选】不展示 icon
style 【可选】可以覆盖配置中的 style（simple/modern/flat/disabled）

{% note simple %}
默认 提示块
{% endnote %}

{% note default simple %}
default 提示块
{% endnote %}

{% note primary simple %}
primary 提示块
{% endnote %}

{% note success simple %}
success 提示块
{% endnote %}

{% note info simple %}
info 提示块
{% endnote %}

{% note warning simple %}
warning 提示块
{% endnote %}

{% note danger simple %}
danger 提示块
{% endnote %}
