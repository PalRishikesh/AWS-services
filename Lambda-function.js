
const jsonData =  [{"Dp_Record_Id": 2, 
                  "DP_TYPE": "NSDL",
                  "DP_ID": "40877589", 
                  "CLIENT_ID": "1232", 
                  "Default_flag": "Y"}]

return {
  "statusCode": 200,
  "headers": {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "content-type":"application/json",
  },
  "body": jsonData
}
