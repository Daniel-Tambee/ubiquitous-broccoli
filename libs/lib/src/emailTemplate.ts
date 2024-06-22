// src/emailTemplate.ts
export const getPasswordResetTemplate = (userName: string, otp: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
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
            background-color: #fff; /* Change background color to white */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #FB8519; /* Change header background color to #FB8519 */
            color: #fff;
        }
        .content {
            padding: 20px;
        }
        .otp {
            display: block;
            width: fit-content;
            margin: 20px auto;
            padding: 10px 20px;
            text-align: center;
            background-color: #FB8519;
            color: #fff;
            border-radius: 5px;
            font-size: 1.2em;
            letter-spacing: 0.1em;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #FB8519; /* Change footer background color to #FB8519 */
            font-size: 12px;
            color: #fff; /* Change footer text color to white */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset</h1>
        </div>
        <div class="content">
            <p>Hi ${userName},</p>
            <p>You recently requested to reset your password for your Yola Farms account. Use the OTP below to reset your password:</p>
            <div class="otp">${otp}</div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            <p>Thanks,<br>The Yola Farms Team</p>
        </div>
        <div class="footer">
            <p>If you’re having trouble using the OTP, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
`;
