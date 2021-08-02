---
title: swoole安装
date: 2021-08-02 16:32:15
tags:
 - php
 - swoole
categories:
 - Swoole
---

# Swoole安装

### 从gitee上获取swoole源码

- https://gitee.com/swoole/swoole/tags

### 下载源码
```bash
$ wget https://gitee.com/swoole/swoole/repository/archive/v4.7.0
```
### 解压源码
```bash
$ unzip v4.7.0
```
### 进入解压的目录
```bash
cd 解压目录 
```
### 执行命令
```bash
$ phpize && ./configure && make && make install
```
{% note warning flat %}
注意： 根据自身终端用户权限 确认是否需要添加  {% label sudo red %}
{% endnote %}
### 编译安装成功后再php.ini中加入extension=swoole.so
{% note warning flat %}
注意：swoole依靠cli模式，所以需要修改cli模式对应的php.ini才能生效 
{% endnote %}
### 查看是否成功安装
```bash
$ php -m
```