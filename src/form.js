function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var name = data.name;
    var email = data.email;
    var message = data.message;

    sheet.appendRow([new Date(), name, email, message]);

    MailApp.sendEmail({
        to: "shivcreations40@gmail.com",
        subject: "New Contact Form Submission",
        htmlBody: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`
    });

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
