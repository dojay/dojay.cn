---
title: TCP 三次握手四次挥手
conmment: true
customerLayoutList: true
---

### 三次握手

  客户端 对 服务端 说：在吗？
  
  服务端 对 客户端 说：我在。

  客户端 对 服务端 说：好的，我知道。

### 为什么TCP的链接需要三次握手

  正常情况下，客户端对服务端互相通知到就可以发送数据了。但是如果客户端的通知发送因为网络延迟等原因导致发送时间过长，
这个时候，客户端会再次发送。然而在发送的过程中，服务端收到了刚才延迟的那条通知。然后返回消息给客户端，然而这个通知在客户端
已经失效了。所以，为了防止服务端回复本该失效的请求，所以要多一次握手，来建立可靠的链接。

---

### 四次挥手

  客户端 对 服务端 说：我要断开链接了。
  
  服务端 对 客户端 说：好的，我知道了，等我把所有的数据回复给你完毕。

  服务端 对 客户端 说：我全部发送完毕了，你可以断开了。

  客户端 对 服务端 说：好的，那我断开了。

### 为什么要四次挥手

  正常情况下，客户端说要断开链接的时候，服务端也发送完毕，这个时候，断开链接是没有问题的。但是在客户端要求断开链接的时候，客户端最后请求的数据，
服务端还没有完全的返回，那么客户端就会等待关闭状态。如果最后客户端没有对服务端说断开链接，那么服务端会以为客户端还有数据要发送。这么多互相通知
都是为了确保TCP的传输是可靠的。


当然，这种链接如果长时间没有回应的话，双方也不会一直在等待，都有一个超时的时间，超过以后会自动关闭。