import uuid from 'uuid';

declare var AWS: any;

export default class AwsIntegration {

  static s3Bucket: any;
  static dynamoDb: any;

  static init(): void {
    AwsIntegration.configureAWS();
  }

  static configureAWS(): void {
    let bucketName = 'cfs-forms';
    let bucketRegion = 'us-east-1';
    let IdentityPoolId = 'us-east-1:260f2138-2272-44b2-9c14-134339e9ef97';

    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });

    AwsIntegration.s3Bucket = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: bucketName}
    });

    AwsIntegration.dynamoDb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
  }

  static async uploadFile(_file: File, _uuid: string, _s3Path: string): Promise<any> {
    let fileName: string = _uuid + '_' + _file.name;
    let itemPath: string = encodeURIComponent(_s3Path) + '/';
    let itemKey: string = itemPath + fileName;

    const s3Result = await AwsIntegration.s3Bucket.putObject({
      Key: itemKey,
      Body: _file,
      ACL: 'public-read'
    }).promise();

    console.log('Successfully uploaded file.');

    return {s3: s3Result}
  }

  static async postToDatabase(_tableName: string, _item: any): Promise<any> {
    let dbParams: any = {
      TableName: _tableName,
      Item: _item
    };
    const dynamoResult = await AwsIntegration.dynamoDb.putItem(dbParams).promise();
    return dynamoResult;
  }
}