async function sendDocupassRequest() {
    const apiKey = "DIUpzefRmzzxeLWGpecDvK4C8GOIUqam"; // Replace with your actual API Key
  
    const data = {
      "version": 3,
      "customData": "johndoe",
      "mode": 0,
      "profile": "eb2fbd00660d4d2d85afb6f4082e3dea"
    };
  
    try {
      const response = await fetch('https://api2.idanalyzer.com/docupass', {
        method: 'POST',
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`API Error: HTTP Status ${response.status}`);
      }
  
      const responseData = await response.json();
  
      const reference = responseData.reference;
      const url = responseData.url;
      const qrCode = responseData.qrCode;
  
      console.log("Reference:", reference);
      console.log("URL:", url);
      console.log("QR Code:", qrCode); 
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  sendDocupassRequest(); 