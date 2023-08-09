const AWS  = require("aws-sdk");
const SES = new AWS.SES({ region: 'us-east-1'});

let emailList = ["palrishikesh07@gmail.com"];

const sendMail = async()=>{
    const params = {
        Destination:{
            ToAddresses: emailList,
        },
        Message:{
            Body:{
                Text:{
                    Data: 'Congratulations for you Feedback'
                },
            },
            Subject:{
                Data:'Welcome to Project'
            }
        },
        Source: "events@#.com",
    };
    return SES.sendEmail(params).promise();
    
}

// sendMail();

// test = async()=>{
//     await sendMail();
// }
// test();

// Create Template 
const createTemplate=()=>{
    var params = {
        Template: { /* required */
          TemplateName: 'sendSampleTemplate', /* required */
          HtmlPart: `<div class="canvas">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#F9F9F9;" id="bodyTable">
            <tbody>
              <tr>
                <td align="center" valign="top" style="padding-right:10px;padding-left:10px;" id="bodyCell"> 
      
                  <table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperBody">
                    <tbody><tr>
                      <td align="center" valign="top">
      
                        <table border="0" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border-color:#E5E5E5; border-style:solid; border-width:0 1px 1px 1px;" width="100%" class="tableCard">
                          <tbody><tr>
                            <td height="3" style="font-size:1px;line-height:3px;" class="topBorder">&nbsp;</td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="padding-bottom: 20px;" class="imgHero">
                            
                              <a href="#" target="_blank" style="text-decoration:none;">
                                <img src="{{logo}}"   alt="" border="0" style="width:100px;   height:auto; display:block;">
                              </a>
                            </td>
                          </tr>
      
                          <tr>
                            <td align="center" valign="top" style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" class="mainTitle">
                              
                              <h2 class="text" style="color:#000000; font-family:Poppins, Helvetica, Arial, sans-serif; font-size:28px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:36px; text-transform:none; text-align:center; padding:0; margin:0">
                                Thank you for your feedback!
                              </h2>
      
                            </td>
                          </tr>
      
                          <tr>
                            <td align="center" valign="top" style="padding-left:20px;padding-right:20px;" class="containtTable ui-sortable">
      
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableTitleDescription" style="">
                                <tbody><tr>
                                  <td align="center" valign="top" style="padding-bottom: 10px;" class="mediumTitle">
                                    <!-- Medium Title Text // -->
                                    <p class="text" style="color:#555; font-family:Poppins, Helvetica, Arial, sans-serif; font-size:18px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:26px; text-transform:none; text-align:left; padding-top:50px;">
                                      Thank you for your feedback on ...
                                    </p>
                                  </td>
                                </tr>
      
                                <tr>
                                  <td align="center" valign="top" style="padding-bottom: 20px;" class="description">
                                    <!-- Description Text// -->
                                    <p class="text" style="color:#666666; font-family:Open Sans, Helvetica, Arial, sans-serif; font-size:14px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:22px; text-transform:none; text-align:left;padding:20px 0;">
                                     Rest assured your feedback will be reviewed and addressed as soon as possible. We are committed to improving our application, services and value to ensure our members are successful in achieving their goals.
                                    </p>
                                    <p class="text" style="color:#666666; font-family:Open Sans, Helvetica, Arial, sans-serif; font-size:14px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:22px; text-transform:none; text-align:left;padding:10px 0;">
                                      Your membership, engagement, feedback are appreciated and we will continue to work each day to earn your loyalty!
                                    </p>
                                    <p class="text" style="color:#666666; font-family:Open Sans, Helvetica, Arial, sans-serif; font-size:14px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:22px; text-transform:none; text-align:left;padding:10px;">
                                      - The Best Team
                                    </p>
                               
                                  </td> 
                                </tr>
                                <tr>
                                  <td align="center" valign="top" style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;" class="socialLinks">
                                    
                                    <a href="https://www.alt.org/" target="_blank" style="display:inline-block;" class="website">
                                      <img src="{{image1}}" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px">
                                    </a> 
                                    <a href="https://www.linkedin.com/in//" target="_blank" style="display:inline-block;" class="linkdin">
                                      <img src="{{image2}}" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px">
                                    </a>      
                                    <a href="https://www.instagram.com/" target="_blank" style="display: inline-block;" class="instagram">
                                      <img src="{{image3}}" alt="" width="40" border="0" style="height:auto; width:100%; max-width:40px; margin-left:2px; margin-right:2px">
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" valign="top" style="padding: 0px 10px 10px;" class="footerEmailInfo">
                                    <!-- Information of NewsLetter (Subscribe Info)// -->
                                    <p class="text" style="color:#777777; font-family:Open Sans, Helvetica, Arial, sans-serif; font-size:10px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:20px; text-transform:none; text-align:center; padding:0; margin:0;">
                                      This message was produced and distributed by Altius Consulting, CO LLC, in Fort Collins, Co
                                      <br> © 2020, Teams and its affiliates. All rights reserved. Teams is a registered trademark of Altius Consulting, CO, LLC.
                                    </p>
                                  </td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                          <tr>
                            <td height="20" style="font-size:1px;line-height:1px;">&nbsp;</td>
                          </tr>
                        </tbody></table>                
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                          <tbody><tr>
                            <td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
                          </tr>
                        </tbody></table>
      
                      </td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
            </tbody>
          </table>
          </div>`,
          SubjectPart: 'Feedback Received',
          TextPart: `Thank you for feedback`
        }
      };
      SES.createTemplate(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
}

// createTemplate();

// Send email from template 
let jsonData = {
    "logo":"http://127.0.0.1/assets/admin/images/logo_black.png",
    "image1":"http://127.0.0.1/assets/admin/images/1.png",
    "image2":"http://127.0.0.1/assets/admin/images/2.png",
    "image3":"http://127.0.0.1/assets/admin/images/3.png"
}
let stringifyData = JSON.stringify(jsonData);


const sendTemplateEmail=()=>{
    let params = {
        Destination: { /* required */
          ToAddresses: emailList
        },
        Source: 'events@#.com', /* required */
        Template: 'sendfeedbackTemplate', /* required */
        TemplateData: stringifyData, /* required */
      };
      // Create the promise and SES service object
      SES.sendTemplatedEmail(params).promise();
}
// sendTemplateEmail();

// Deleting Template

const deleteTemplateEmail=()=>{
    var params = {
        TemplateName:'sendSampleTemplate'
    }
    SES.deleteTemplate(params).promise();
}

deleteTemplateEmail();