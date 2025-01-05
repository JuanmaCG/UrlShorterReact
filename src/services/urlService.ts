import { ApiResult } from "../types/apiResult";
import { ShortenResponse } from "../types/shortenResponse";

export const shortenUrl = async (longUrl: string, alias?: string) => {
  try {
    const response = await fetch('http://localhost:3000/api/shorten/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        longUrl, 
        alias: alias || undefined 
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return {
        data: null,
        error: {
          message: data.error || 'Failed to shorten URL',
          type: 'error'
        }
      };
    }

    return {
      data: {shortedUrl: data.shortedUrl, shortedCompleteUrl: data.shortedCompleteUrl, alias: data.alias, aliasCompleteUrl: data.aliasCompleteUrl, token: data.token} as ShortenResponse,
      error: null
    } as ApiResult;
  } catch (error) {
    return {
      data: null,
      error: {
        message: error instanceof Error ? error.message : 'Failed to shorten URL',
        type: 'error'
      }
    };
  }
};

export const qrResponse = async (url: string, token: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/shorten/${url}/qr`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate QR code');
    }
    
    const data = await response.json();
    return {
      data: data.qrCodeImage,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: {
        message: error instanceof Error ? error.message : 'Failed to generate QR code',
        type: 'error'
      }
    };
  }
};
