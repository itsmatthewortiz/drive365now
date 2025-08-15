const { Resend } = require('resend');

// Initialize Resend client with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);
    const { name, email, phone, message, vehicleYear, vehicleMake, vehicleModel } = formData;

    // Split name into first and last
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Get current date in YYYY-MM-DDTHH:MM:SS-HH:MM format
    const now = new Date();
    const requestDate = now.toISOString().slice(0, 19) + now.toString().slice(28, 33); // YYYY-MM-DDTHH:MM:SS-HH:MM

    // Construct the XML ADF
    const adfXml = `<?xml version="1.0" encoding="UTF-8"?>
<?adf version="1.0"?>
<adf>
  <prospect>
    <requestdate>${requestDate}</requestdate>
    <vehicle>
      <year>${vehicleYear || ''}</year>
      <make>${vehicleMake || ''}</make>
      <model>${vehicleModel || ''}</model>
    </vehicle>
    <customer>
      <contact>
        <name part="first">${firstName}</name>
        <name part="last">${lastName}</name>
        <phone>${phone || ''}</phone>
        <email>${email || ''}</email>
      </contact>
    </customer>
    <vendor>
      <contact>
        <name part="full">Drive365</name>
      </contact>
    </vendor>
  </prospect>
</adf>`;

    // Send email using Resend API
    const emailResult = await resend.emails.send({
      from: 'Drive365 <drive365now@gmail.com>',
      to: 'drive365auto@sellyserver.co',
      subject: 'New Lead from Drive365 Website (ADF/XML)',
      text: `New lead submission. See XML below:\n\n${adfXml}\n\nLead Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nVehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}\nMessage: ${message}`,
      html: `
        <h2>New Lead from Drive365 Website</h2>
        <h3>Lead Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Vehicle:</strong> ${vehicleYear} ${vehicleMake} ${vehicleModel}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <h3>ADF/XML Data:</h3>
        <pre>${adfXml}</pre>
      `
    });

    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      throw new Error('Failed to send email via Resend API');
    }

    console.log('Email sent successfully:', emailResult.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Lead submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error processing lead:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Failed to submit lead.', error: error.message }),
    };
  }
};