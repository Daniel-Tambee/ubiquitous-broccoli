import { v4 as uuidv4 } from 'uuid';
import { SHA256,enc} from 'crypto-js';

// Function to generate a shortened ID
export const generateShortId = () => {
    // Generate a UUID
    const id = uuidv4();
    console.log('Original UUID:', id);

    // Hash the UUID using SHA-256 and encode it to base64
    const hash = SHA256(id).toString(enc.Base64);

    // Replace non-alphanumeric characters to ensure it’s a valid identifier
    const base64url = hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Truncate the hash to 6 characters
    const shortId = base64url.substring(0, 6);
    return shortId;
}

// Generate and print a shortened ID
const shortId = generateShortId();
console.log(shortId);
