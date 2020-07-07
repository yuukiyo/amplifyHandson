import json


def handler(event, context):
  print(json.dumps(event))
  return {
    'statusCode': 200,
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    },
    'body': json.dumps('My Name is CognitoAuth')
  }

