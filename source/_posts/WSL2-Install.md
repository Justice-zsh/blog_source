---
title: WSL2 Install
date: 2021-07-29 13:54:23
tags: WSL
categories: WSL
comments: true
---

{% note warning flat %}
 系统：Windows 10
 版本：20H2
 终端：PowerShell
{% endnote %}

###  打开Windows功能管理
 * 打开适用于Linux的Windows子系统
 * 虚拟机平台

###  以管理员身份打开PowerShell并运行

```bash
  $ dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
###  检查运行WSL2的要求

* 若要更新到WSL2，对于x64系统，版本1903或更高版本，采用内部版本18362或更高版本
* 对于 ARM64 系统：版本2004或更高版本，采用 内部版本19041或更高版本
* 低于 18362 的版本不支持 WSL 2
* 查看本机系统版本,使用 winver命令：

```bash
 $ winver
```
* 升级系统具体方法 系统设置->更新安全或者微软官网下载更新软件

###  启用虚拟机功能

* 安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要虚拟化功能才能使用此功能
* 以管理员身份打开 PowerShell 并运行：

```bash
    $   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
###  重启计算机

###  下载Linux内核安装包
     
     http://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
* 下载完成后双击运行

###  将WSL2设置为默认版本

  * 打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本：

```bash
    $ wsl --set-default-version 2
```

###  打开Microsoft Store 安装 Linux分发（Ubuntu 20.04 ）

###  打开Ubuntu 20.04 进行初始化设置（账号和密码）
