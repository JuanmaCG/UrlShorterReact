export const shortenUrl = async (longUrl: string, alias?: string) => {
  try {
    const response = await fetch('https://urlshorter-kybx.onrender.com/', {
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
      console.log(data)
      return {
        data: null,
        error: {
          message: data.error || 'Failed to shorten URL',
          type: 'error'
        }
      };
    }

    return {
      data: alias ? data.alias : data.shortedUrl,
      error: null
    };
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

export const qrResponse = async (url: string) => {
  try {
    const response = await fetch('https://urlshorter-kybx.onrender.com/generateQr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
