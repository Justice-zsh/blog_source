---
title: WSL2搭建环境(PHP+Nginx+Mysql)
date: 2021-07-29 16:56:04
tags: [php,mysql,nginx,wsl] 
categories: WSL
---

### Mysql 安装

```bash
$ sudo apt install mysql-server
```

### Mysql 启动

```bash
$ sudo service mysql start
```

### 获取mysql数据库账号密码，使用Navicat可视化工具查看数据库

```bash
$ sudo cat /etc/mysql/debian.cnf  
```
* 复制账号（user）密码（password）

### 安装PHP以及扩展

```bash
$ sudo apt install php7.4 php7.4-fpm php7.4-bcmath php7.4-dev php7.4-mysql php7.4-gd php7.4-curl php7.4-xml php7.4-zip php7.4-json
``` 

### 启动php-fpm
 ```bash
$ sudo service php7.4-fpm start
``` 
###  安装Nginx

```bash
$ sudo apt install nginx -y
```
{% note warning flat %}
 -y 代表同意安装
{% endnote %}

###  修改nginx配置

* 进入Nginx目录

```bash
$ cd /etc/nginx/sites-available 
```
* 拷贝一份Nginx默认配置

```bash
$ sudo cp default weibo.dev.com
```
* vim 修改文件

```bash
$ sudo vim weibo.dev.com
```
* 我的Nginx简单配置(仅供参考)

```nginx
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        # listen 443 ssl default_server;
        # listen [::]:443 ssl default_server;
        root /mnt/d/HsCode/laravel_weibo/public
        index index.html index.htm index.nginx-debian.html;
        server_name weibo.dev.com;
        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                #try_files $uri $uri/ =404;
                try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                # With php-fpm (or other unix sockets):
                fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
                # With php-cgi (or other tcp sockets):
                fastcgi_pass 127.0.0.1:9000;
        }
        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #       deny all;
        #}
}
```
### 创建软连接
```bash
$ sudo ln -s /etc/nginx/sites-available/weibo.dev.com /etc/nginx/sites-enabled/
```
### 测试Nginx配置是否有问题
```bash
$ sudo nginx -t
```
### 重启Nginx
```bash
$ sudo service nginx restart
``` 
### 添加host
```bash
$ code . /Windows/System32/drivers/etc/hosts 
```
{% note warning flat %}
 code.  使用vscode打开文件，需要安装Windows Terminal
{% endnote %}


