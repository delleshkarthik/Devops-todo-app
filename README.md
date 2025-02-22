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
### Accessing Amazon EC2 Dashboard**
1. Go to the **AWS Management Console**: [AWS Console](https://aws.amazon.com/console/)
2. Log in with your **AWS credentials**.
3. Navigate to the **EC2 Dashboard**:  
   - Click on **Services** → Search for **EC2** and select it.  
   - You should now see the **EC2 Instances page**.

![png](https://github.com/delleshkarthik/todo/blob/main/62bd9629-1740-4933-bbb1-7ddda48bcb6a.jpg?raw=true)

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
8. Select the instance and then connect you will notice a new ubuntu terminal .
![png](https://github.com/delleshkarthik/Devops-todo-app/blob/main/e9e5e686-2326-4c99-a919-954fb534eb1a.jpg?raw=true)
![png](https://github.com/delleshkarthik/Devops-todo-app/blob/main/46a739df-344e-4d8c-99a6-0947d1893187.jpg?raw=true)

### 3️⃣ Connect to EC2 via SSH and in**  
1.Once your EC2 instance is running execute the build commands.
2.setup git ssh keys.
3.goto your publicips:8080 for jenkins.
4.setup jenkins.

![png](https://github.com/delleshkarthik/Devops-todo-app/blob/main/48eac0fb-0c9b-4c77-8250-e2d8b4cf8b6a.jpg?raw=true)

### 4️⃣ Deploy your app**  
1. push the repo into **Docker**.  
2. Build the jenkins project *Your project name*.  
3. Run your build commands in Ubuntu.  
4. goto to publicips:8000
5. now it is integrated with ***CICD*** pipeline.    
7. Any changes on git will be appeared on publicips:8000.
![png](https://github.com/delleshkarthik/Devops-todo-app/blob/main/image.png?raw=true)
