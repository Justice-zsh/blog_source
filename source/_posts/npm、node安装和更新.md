---
title: npm、node安装和更新
date: 2021-08-02 16:31:45
tags:
 - npm
 - node
 - 服务器
categories:
 - 包管理器
---
# npm丶node安装和更新

### 安装npm
```bash
$ sudo apt install npm -y
```
{% note warning flat %}
ubuntu 安装npm时会把node一起安装了
{% endnote %}
### 设置淘宝镜像
```bash
$ npm config set registry http://registry.npm.taobao.org
```
### 可以使用nrm管理npm镜像
```bash
$ npm install -g nrm 
```
### 查看镜像列表
```bash
$ nrm ls
```
### 切换镜像
```bash
$ nrm use taobao
```
### 更新npm
```bash
$ sudo apt install -g npm 
```
### 安装node版本管理器
```bash
$ sudo apt install -g n
```
### 更新node到稳定版
```bash
n stable
```
### 更新node到最新版本
```bash
n lastest
```
### 更新node到指定版本
```bash
n 14.17.4
```