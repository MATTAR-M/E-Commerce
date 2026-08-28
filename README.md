# E-Commerce REST API[cite: 9]

E-Commerce REST API built with NestJS, MongoDB, Redis, AWS S3, and Stripe, featuring authentication, role-based authorization, cart, coupons, payments, refunds, and secure order management[cite: 9].

## 🚀 Tech Stack

*   **Framework:** NestJS 11 & TypeScript[cite: 7, 9]
*   **Database:** MongoDB with Mongoose[cite: 7, 9]
*   **Cache & Rate Limiting:** Redis (ioredis) & @nestjs/throttler[cite: 7, 9]
*   **Cloud Storage:** AWS S3 for media uploads[cite: 7, 9]
*   **Payments:** Stripe Checkout & Webhooks[cite: 7, 9]
*   **Authentication:** JWT (Access & Refresh tokens) & bcrypt[cite: 7, 9]
*   **Mailing:** Nodemailer[cite: 7, 9]

## ⚙️ Installation & Setup

**1. Clone the repository and install dependencies:**
```bash
git clone https://github.com/diaaeldeenn/E-Commerce-Nest-Js
cd E-Commerce-Nest-Js
npm install
```
*[cite: 9]*

**2. Configure Environment Variables:**
Create a `.env.development` or `.env.production` file in the root directory and add the following variables[cite: 1, 2]:

```env
PORT=3000
NODE_ENV=development
MONGO_LOCAL=mongodb://localhost:27017/ECommerce
MONGO_URI=your_mongodb_atlas_uri
JWT_TOKEN=your_jwt_secret
JWT_REFRESH_TOKEN=your_jwt_refresh_secret
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_gmail_app_password
AWS_REGION=us-east-1
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
Redis_URL=redis://your_redis_url
```
*[cite: 1, 2]*

## 🏃‍♂️ Running the Application

Start the server using the built-in NestJS CLI scripts[cite: 7]:

**Development Mode:**
```bash
npm run start:dev
```
*[cite: 7]*

**Production Mode:**
```bash
npm run build
npm run start:prod
```
*[cite: 7]*

