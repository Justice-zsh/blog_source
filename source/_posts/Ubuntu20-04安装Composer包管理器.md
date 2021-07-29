---
title: Ubuntu20.04安装Composer包管理器
date: 2021-07-29 18:03:08
tags: [Composer,Ubuntu,开发环境]
categories: Composer
---


### 下载安装脚本 － composer-setup.php － 到当前目录。
```bash
sudo  php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
```
### 执行安装过程。
```bash
sudo php composer-setup.php
```
### 删除安装脚本。
```bash
sudo  php -r "unlink('composer-setup.php');"
```
### 打开命令行窗口并执行如下命令将前面下载的 composer.phar 文件移动到 /usr/local/bin/
```bash
sudo mv composer.phar /usr/local/bin/composer
```
### 现在可以使用composer查看 
 * composer 更新

```bash
composer self-update
``` 
 * composer 设置镜像

```bash
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```
 * composer 清除缓存

 ```bash
composer clear 
```





