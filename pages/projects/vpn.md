# Personal VPN Setup

![VPN Setup](../assets/images/vpn-setup.png)

## 🔹 Project Type: Cybersecurity | Cloud Security | Networking
### Tools & Technologies: AWS EC2, WireGuard, Ubuntu, Security Hardening

### **Project Overview**
Deployed a secure personal VPN using **WireGuard** on an **AWS EC2 instance** to ensure **private and encrypted** internet access.

### **Objectives**
- Enhance personal privacy by encrypting internet traffic.
- Secure internet access on untrusted networks (e.g., public Wi-Fi).
- Implement security hardening to prevent unauthorized access.

### **Implementation Steps**
#### **1️⃣ Provisioning AWS EC2 Instance**
- Deployed an **Ubuntu 22.04 server** on AWS.
- Configured **security groups** to allow inbound **UDP traffic** for WireGuard.

#### **2️⃣ Installing & Configuring WireGuard**
- Installed WireGuard VPN on the EC2 instance.
- Configured **client-to-server tunnels** for secure traffic routing.

#### **3️⃣ Network Configuration & Security Hardening**
- Enabled **IP forwarding** and configured **iptables firewall**.
- Implemented **fail2ban** to prevent brute-force attacks.
- Configured **Cloudflare WARP** as an additional security layer.

### **🔗 GitHub Repository**
[View on GitHub](https://github.com/your-repo/personal-vpn-setup)
