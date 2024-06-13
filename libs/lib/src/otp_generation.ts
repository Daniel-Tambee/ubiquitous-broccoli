import { BadRequestException } from '@nestjs/common';

const { authenticator } = require('otplib');
const cache = require('memory-cache'); // Replace with a more robust cache solution if needed

// Function to generate a TOTP token with a timestamp
export const generateTOTP = (): any => {
  try {
    const token = authenticator.generate('cool key');
    const timestamp = Date.now();
    cache.put('otp_tokens', token, 30 * 60 * 1000); // Cache for 30 minutes
    return token;
  } catch (error) {
    throw new BadRequestException(undefined, error);
  }
};

// Function to verify a TOTP token
export const verifyTOTP = (token: string): boolean => {
  const window = 5 * 60 * 1000; // 5-minute verification window (adjust as needed)
  const currentTime = Date.now();

  // Check the latest token and past tokens within the window
  try {
    for (let i = 0; i <= 5; i++) {
      const cachedToken = cache.get(`otp_tokens_${currentTime - window * i}`);
      if (cachedToken && authenticator.check(token, 'cool key')) {
        return true;
      }
    }

    // No valid token found within the window
    return false;
  } catch (error) {
    throw new BadRequestException(undefined, error);
  }
};
