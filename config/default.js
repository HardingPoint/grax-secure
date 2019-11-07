const { env } = process;
const defaultConfigName = require("../lib/configuration/configurationAdapters/environment/defaultConfigName");

module.exports = {
  graxBax: {
    baseUrlHost: "api.grax.io", //env["ENGAGEMENTGRAPH_APIURLHOST"] || "https://api.grax.io",
    baseUrlPath: "/test/api", //env["ENGAGEMENTGRAPH_APIURLPATH"] || "/dev/api",
    apiKey: env["ENGAGEMENTGRAPH_GATEWAYTOKEN"],
    apiToken: env["ENGAGEMENTGRAPH_APITOKEN"],
    plainConfig: env["GRAX_USE_PLAIN_CONFIG"],
    licenseToken: env["ENGAGEMENTGRAPH_LICENSETOKEN"]
  },
  backup: {
    attachmentBatchSize: env["ATTACHMENT_BATCH_SIZE"] || 5000
  },
  cipher: {
    salt:
      env["SALT"] ||
      "528DB3A0C5F797426150EAE99927EFB960DB9579277A2CF0C95D11F29AB7BB7F"
  },
  elastic: {
    aws: {
      url: env["ESENDPOINT"],
      accessKey: env["ESACCESSKEYID"] || env["S3ACCESSKEYID"],
      secretAccessKey: env["ESSECRETACCESSKEY"] || env["S3SECRETACCESSKEY"],
      region: env["ESREGION"] || env["S3REGION"]
    },
    bonsaiUrl: env["BONSAI_URL"],
    //todo: converge to URL (with auth prefix) once we've elminated grax configuration
    elasticIo: {
      url:
        env["FOUNDELASTICSEARCH_URL"] ||
        "https://" + env["FOUNDELASTICSEARCH_HOST"],
      user: env["FOUNDELASTICSEARCH_USER"] || "elastic",
      password: env["FOUNDELASTICSEARCH_PASSWORD"]
    },
    dateTimeFormat: "YYYY-MM-DDTHH:mm:ss",
    requestTimeout: 12000000
  },
  env: env["NODE_ENV"] || "development",
  restoration: {
    sleepDuration: env["RESTORE_SLEEP_DURATION"] || 720,
    syncId: env["GRAX_SYNCHID"],
    historyObjectName: "grax_history_tracking",
    destinationSalesforce: {
      userName: env["GRAX_DESTINATION_SFDC_USERNAME"],
      password: env["GRAX_DESTINATION_SFDC_PASSWORD"],
      token: env["GRAX_DESTINATION_SFDC_TOKEN"],
      url: env["GRAX_DESTINATION_SFDC_URL"]
    },
    maxBatches: process.env["GRAX_MAX_BATCHES"] || -1,
    maxRestore: process.env["GRAX_MAX_RESTORE"] || 1000,
    orgToRestore: process.env["GRAX_ORG_TO_RESTORE"],
    objectTypesToRestore: process.env["GRAX_OBJECT_TYPES_TO_RESTORE"] || ""
  },
  storage: {
    providerName: env["GRAX_STORAGE_PROVIDER_NAME"] || null,
    aws: {
      accessKey:
        env["BUCKETEER_AWS_ACCESS_KEY_ID"] ||
        env["S3ACCESSKEYID"] ||
        env["ACCESSKEYID"],
      secretAccessKey:
        env["BUCKETEER_AWS_SECRET_ACCESS_KEY"] ||
        env["S3SECRETACCESSKEY"] ||
        env["SECRETACCESSKEY"],
      bucket: env["BUCKETEER_BUCKET_NAME"] || env["S3BUCKET"],
      region:
        env["BUCKETEER_AWS_REGION"] ||
        env["S3REGION"] ||
        env["AWSREGION"] ||
        env["REGION"],
      switchUserEnabled: env["S3ASSUMEROLEENABLED"],
      roleArn: env["S3ASSUMEROLEARN"],
      externalId: env["S3ASSUMEROLEEXTERNALID"],
      refreshInterval: env["S3ASSUMEROLE_REFRESH_CREDS_IN_HOUR"]
    }
  }
};
