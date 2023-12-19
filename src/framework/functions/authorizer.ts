import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerEvent
} from 'aws-lambda'

const parseArn = (arn: string) => {
  const [left, right] = arn.split('/', 2)
  const [, , service, region, accountId, apiId] = left.split(':')
  const [stage, method, resourcePath] = right.split('/')
  return {
    service,
    region,
    accountId,
    apiId,
    stage,
    method,
    resourcePath
  }
}

export const handler = async (
  event: APIGatewayTokenAuthorizerEvent
): Promise<APIGatewayAuthorizerResult> => {
  const defaultDeny = {
    principalId: 'unknown',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Deny',
          Resource: '*',
          Action: [] as string[]
        }
      ]
    }
  }
  try {
    const token = event.authorizationToken

    if (token === '123') {
      const { service, region, accountId, apiId, stage } = parseArn(
        event.methodArn
      )

      return {
        // to-do change to user id
        principalId: '123',
        policyDocument: {
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Resource: `arn:aws:${service}:${region}:${accountId}:${apiId}/${stage}/*`,
              Action: ['execute-api:Invoke']
            }
          ]
        }
      }
    }

    return defaultDeny
  } catch (error) {
    console.error(JSON.stringify(error, null, 2))

    return defaultDeny
  }
}
