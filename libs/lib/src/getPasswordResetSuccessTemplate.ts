// src/emailTemplate.ts
export const getPasswordResetSuccessTemplate = (userName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #FB8519;
            color: #fff;
        }
        .content {
            padding: 20px;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #FB8519;
            font-size: 12px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Hi ${userName},</p>
            <p>Your password for your Yola Farms account has been successfully reset. If you did not make this change or if you believe an unauthorized person has accessed your account, please contact our support team immediately.</p>
            <p>For security reasons, we recommend that you do not share your password with anyone.</p>
            <p>Thanks,<br>The Yola Farms Team</p>
        </div>
        <div class="footer">
            <p>If you need any assistance, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
`;
