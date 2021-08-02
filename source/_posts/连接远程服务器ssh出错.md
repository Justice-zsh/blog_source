---
title: 连接远程服务器ssh出错
date: 2021-08-02 16:32:50
tags:
 - SSH
 - 服务器
categroies:
 - 问题解决
---

### 记录一下关于ssh连接远程服务器遇到的问题
{% note warning flat %}
问题： Someone could be eavesdropping on you right now (man-in-the-middle attack)!
{% endnote %}

{% note info flat %}
原因：目标主机的key和本地保存的key不一致导致的，需要删除本地留存的秘钥
{% endnote %}

{% note success flat %}
解决：
 ```bash
 $ rm -f  /root/.ssh/known_hosts
 ```
{% endnote %}
