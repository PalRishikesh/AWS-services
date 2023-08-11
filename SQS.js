const AWS = require("aws-sdk");
const AWSREGION = process.env.region;
AWS.config.update({ region: AWSREGION });
const ssmClient = new AWS.SSM({ apiVersion: '2014-11-06' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
const { v4: uuidv4 } = require('uuid');

let count = 0;
let sqsURL = "";

// Getting sqs url for sending notification
const getSQSUrl = async () => {
    //    const notificationsqsurl =await ssmClient.getParameter({
    //         Name: '/#/#url',
    //         WithDecryption: true,
    //     }).promise();
    //     return notificationsqsurl.Parameter.Value;
    return "testurl";
}

// Sending message list inside sqs queue, naximum 10 message in a single batch
const processRequest = async (messageList, sqsUrl) => {
    let chunkSize = 2;
    let allChunkList = [];


    for (let index = 0; index < messageList.length; index++) {
        const chunk = messageList.slice(index, index + chunkSize);
        console.log("chunk :", chunk);
        allChunkList.push(chunk);
    }
    for (const singleMessage of allChunkList) {

        var params = {
            QueueUrl: sqsUrl,
            Entries: []
        };
        for (const message of singleMessage) {
            params.Entries.push({
                Id: uuidv4(),
                MessageBody: JSON.stringify(message)
            });
        }
        console.log("params: ", params);
        await sqs.sendMessageBatch(params).promise();
    }
    return 1;
}


exports.handler = async (event) => {
    let statusCode = 200;
    const token = event.headers.authorization;
    const requestBody = JSON.parse(event.body);
    const messageList = requestBody.message_list;
    console.log("messageList : ", messageList);
    console.log("token : ", token);
    if (count == 0) {
        sqsURL = await getSQSUrl();
        count = 1;
    }
    console.log("SQS Url: ", sqsURL);
    let response;
    await processRequest(messageList, sqsURL);
    response = {
        statusCode,
        body: JSON.stringify({
            message: 'Notification send successfully'
        })
    };
    return response;
};
