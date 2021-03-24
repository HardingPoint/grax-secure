const { env } = process;
const { getBaseUrlHost, getBaseUrlPath, getBaseUrlPort, getBaseUrlProtocol } = require("./getUrlProperties");

const DEFAULT_BASE_URL_HOST = "api.grax.io";
const DEFAULT_BASE_URL_PATH = "/test/api";
const DEFAULT_BASE_URL_PORT = 443;
const DEFAULT_BASE_URL_PROTOCOL = "https:"

const BASE_URL_HOST = env.GRAX_CONFIG_URL && getBaseUrlHost(env.GRAX_CONFIG_URL);
const BASE_URL_PATH = env.GRAX_CONFIG_URL && getBaseUrlPath(env.GRAX_CONFIG_URL);
const BASE_URL_PORT = env.GRAX_CONFIG_URL && getBaseUrlPort(env.GRAX_CONFIG_URL);
const BASE_URL_PROTOCOL = env.GRAX_CONFIG_URL && getBaseUrlProtocol(env.GRAX_CONFIG_URL);

module.exports = {
  graxBax: {
    graxConfigUrl: env.GRAX_CONFIG_URL,
    baseUrlHost: BASE_URL_HOST || DEFAULT_BASE_URL_HOST, // env["ENGAGEMENTGRAPH_APIURLHOST"] || "https://api.grax.io",
    baseUrlPath: BASE_URL_PATH || DEFAULT_BASE_URL_PATH, // env["ENGAGEMENTGRAPH_APIURLPATH"] || "/dev/api",
    baseUrlPort: BASE_URL_PORT || DEFAULT_BASE_URL_PORT,
    baseUrlProtocol: BASE_URL_PROTOCOL || DEFAULT_BASE_URL_PROTOCOL,
    apiKey: env.ENGAGEMENTGRAPH_GATEWAYTOKEN,
    apiToken: env.ENGAGEMENTGRAPH_APITOKEN,
    plainConfig: env.GRAX_USE_PLAIN_CONFIG,
    licenseToken: env.ENGAGEMENTGRAPH_LICENSETOKEN
  },
  backup: {
    attachmentBatchSize: env.ATTACHMENT_BATCH_SIZE || 5000,
    processingSecondsPerRecord: env.ATTACHMENT_PROCESSING_SECONDS_PER_RECORD || 4
  },
  cipher: {
    salt: env.SALT || "528DB3A0C5F797426150EAE99927EFB960DB9579277A2CF0C95D11F29AB7BB7F"
  },
  elastic: {
    aws: {
      url: env.ESENDPOINT,
      accessKey: env.ESACCESSKEYID || env.S3ACCESSKEYID,
      secretAccessKey: env.ESSECRETACCESSKEY || env.S3SECRETACCESSKEY,
      region: env.ESREGION || env.S3REGION
    },
    bonsaiUrl: env.BONSAI_URL,
    // todo: converge to URL (with auth prefix) once we've elminated grax configuration
    elasticIo: {
      url: env.FOUNDELASTICSEARCH_URL || `https://${env.FOUNDELASTICSEARCH_HOST}`,
      user: env.FOUNDELASTICSEARCH_USER || "elastic",
      password: env.FOUNDELASTICSEARCH_PASSWORD
    },
    gatewayPath: env.ELASTIC_GATEWAY_PATH,
    dateTimeFormat: "YYYY-MM-DDTHH:mm:ss",
    requestTimeout: 12000000
  },
  env: env.NODE_ENV || "development",
  restoration: {
    sleepDuration: env.RESTORE_SLEEP_DURATION || 720,
    syncId: env.GRAX_SYNCHID,
    historyObjectName: "grax_history_tracking",
    destinationSalesforce: {
      userName: env.GRAX_DESTINATION_SFDC_USERNAME,
      password: env.GRAX_DESTINATION_SFDC_PASSWORD,
      token: env.GRAX_DESTINATION_SFDC_TOKEN,
      url: env.GRAX_DESTINATION_SFDC_URL
    },
    maxBatches: process.env.GRAX_MAX_BATCHES || -1,
    maxRestore: process.env.GRAX_MAX_RESTORE || 1000,
    orgToRestore: process.env.GRAX_ORG_TO_RESTORE,
    objectTypesToRestore: process.env.GRAX_OBJECT_TYPES_TO_RESTORE || ""
  },
  storage: {
    providerName: env.GRAX_STORAGE_PROVIDER_NAME || null,
    aws: {
      accessKey: env.BUCKETEER_AWS_ACCESS_KEY_ID || env.S3ACCESSKEYID || env.ACCESSKEYID,
      secretAccessKey:
        env.BUCKETEER_AWS_SECRET_ACCESS_KEY || env.S3SECRETACCESSKEY || env.SECRETACCESSKEY,
      bucket: env.BUCKETEER_BUCKET_NAME || env.S3BUCKET,
      region: env.BUCKETEER_AWS_REGION || env.S3REGION || env.AWSREGION || env.REGION,
      switchUserEnabled: env.S3ASSUMEROLEENABLED,
      roleArn: env.S3ASSUMEROLEARN,
      externalId: env.S3ASSUMEROLEEXTERNALID,
      refreshInterval: env.S3ASSUMEROLE_REFRESH_CREDS_IN_HOUR
    }
  }
};
