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
            background-color: #800080; /* Purple background color */
            color: #00FF00; /* Green text color */
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff; /* White background for the container */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #800080; /* Purple header background */
            color: #00FF00; /* Green header text color */
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
            background-color: #800080; /* Purple background for the OTP */
            color: #00FF00; /* Green OTP text color */
            border-radius: 5px;
            font-size: 1.2em;
            letter-spacing: 0.1em;
        }
        .footer {
            text-align: center;
            padding: 10px;
            background-color: #800080; /* Purple footer background */
            font-size: 12px;
            color: #00FF00; /* Green footer text color */
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
            <p>You recently requested to reset your password for your MCRP account. Use the OTP below to reset your password:</p>
            <div class="otp">
            <a href=${otp}>Click Here</a>
            </div>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
            <p>Thanks,<br>The MCRP Team</p>
        </div>
        <div class="footer">
            <p>If you’re having trouble using the OTP, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
`;
