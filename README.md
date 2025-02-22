# DevOps To-Do Application

<h2>A simple To-Do application deployed using AWS EC2, Jenkins, and GitHub SSH key integrations to automate the CI/CD pipeline.</h2>

## 🚀 Features  
✅ CRUD operations for task management  
✅ **CI/CD pipeline** automated using Jenkins  
✅ **GitHub SSH keys** for secure deployment  
✅ **AWS EC2** instance for hosting the application  
✅ **Dockerized environment** for consistent deployment 


## 🛠️ Tech Stack  
- **Frontend**: React / Vue / Angular *(whichever you used)*  
- **Backend**: Node.js / Python / FastAPI *(your backend choice)*  
- **Database**: PostgreSQL / MongoDB *(your DB choice)*  
- **CI/CD**: **Jenkins + GitHub Actions (SSH Key Integrations)**  
- **Deployment**: **AWS EC2**  
- **Containerization**: Docker (if used)  

## ⚡ Project Setup  

### 1️⃣ Clone the Repository or create a git repository of your project
```bash
git clone https://github.com/yourusername/devops-todo.git
cd devops-todo
```
## ⚡ Project Setup  

### **2️⃣ Launching an EC2 Instance**  
1. Click **Launch Instance**.  
2. Choose an **Amazon Machine Image (AMI)** (e.g., Ubuntu 22.04 LTS).  
3. Select an **Instance Type** (e.g., `t2.micro` for free-tier).  
4. Configure the instance:  
   - Set up storage (default is fine).  
   - Add security group rules:  
     - **Allow HTTP (80), HTTPS (443), and SSH (22)** for access.  
5. Click **Launch** and **create a new key pair** (or use an existing one).  
6. **Download the key (`.pem` file) and store it safely**.  
7. Click **Launch Instances** to start the server.  

### **3️⃣ Connect to EC2 via SSH**  
Once your EC2 instance is running:  
```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```
![png](https://github.com/delleshkarthik/todo/blob/main/62bd9629-1740-4933-bbb1-7ddda48bcb6a.jpg?raw=true)

