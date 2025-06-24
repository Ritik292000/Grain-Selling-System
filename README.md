# 🌾 Grain Selling System

A **blockchain-based grain selling management system** designed to trace and manage the entire selling cycle of grains—from farmers to end consumers—while ensuring transparency, traceability, and better customer engagement.

This project was developed as part of learning blockchain technology with **KBA** and is built using **Hyperledger Fabric**, **Node.js**, and **Angular**, and deployed using **Minifab**.

---

## 🚀 Key Features

- 📦 **Traceability**: Track every step of the grain selling lifecycle.
- 👨‍🌾 **Farmer-Centric**: Allows farmers to register and monitor their produce.
- 👥 **Customer Visibility**: Enables end users to verify grain origin and journey.
- 🔗 **Blockchain-Powered**: Leverages Hyperledger Fabric for decentralized and tamper-proof records.
- 🌐 **Modern Tech Stack**: Angular for frontend, Node.js for backend, deployed on Minifab network.

---

## 🛠️ Tech Stack

| Layer       | Technology               |
|-------------|--------------------------|
| Frontend    | Angular                  |
| Backend     | Node.js                  |
| Blockchain  | Hyperledger Fabric       |
| Deployment  | Minifab                  |

---

## 📌 Modules (Overview)

- **Farmer Onboarding**
- **Grain Registration & Lifecycle Tracking**
- **Transaction & Sale Logging**
- **Verification and Auditing**
- **Customer View and Interaction Layer**

---

## ⚙️ How to Run

> You need Node.js, Angular CLI, and Minifab installed locally.

```bash
# Clone the repository
git clone https://github.com/Ritik292000/Grain-Selling-System.git
cd Grain-Selling-System

# Deploy Fabric network
cd blockchain
./minifab up

# Start Backend (Node.js)
cd backend
npm install
node index.js

# Start Frontend (Angular)
cd frontend
npm install
ng serve
