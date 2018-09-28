---
title: CentOS 7 yum 安装 Nginx
conmment: true
customerLayoutList: true
---

#### 1.添加CentOS 7 Nginx yum资源库,打开终端,使用以下命令:
``` bash
sudo rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

#### 2.安装Nginx
``` bash
sudo yum install -y nginx
```

#### 3.启动Nginx
``` bash
sudo systemctl start nginx.service
```

> CentOS 7 开机启动Nginx
``` bash
sudo systemctl enable nginx.service
```
> 杀死nginx
``` bash
killall -9 nginx
```
> 启动nginx
``` bash
nginx -c nginx.conf
```
> 查看是否启动
``` bash
ps aux|grep nginx
```

> 如果一切进展顺利的话，现在你可以通过你的域名或IP来访问你的Web页面来预览一下Nginx的默认页面。
> 如果看到这个页面,那么说明你的CentOS 7 中 web服务器已经正确安装。

<picture>
  <source srcset="/nginx/nginx_default.png">
  <img class="nginx_default" alt="Image">
</picture>