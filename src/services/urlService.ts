export const shortenUrl = async (longUrl: string, alias?: string) => {
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
    return alias ? data.alias : data.shortedUrl;
  };

export const qrResponse = async (url: string) => {
  const response = await fetch('https://urlshorter-kybx.onrender.com/generateQr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( {url} )
  });

  
   const data = await response.json();
   return data.qrCodeImage;
}
