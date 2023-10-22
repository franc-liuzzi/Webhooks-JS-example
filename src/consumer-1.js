/**
 * @param {import("@types/aws-lambda").EventBridgeEvent} event
 * @param {import("aws-lambda/handler").Context} context
 * @param {import("aws-lambda/handler").Callback} cb
 */
export const handler = function (event, context, cb) {
  console.log("event", event, context);

  console.log(`Start processing for aws request "${context.awsRequestId}"`);

  setTimeout(() => {
    console.log(
      `Everything ok after waiting 10s for event "${context.awsRequestId}"`
    );
    cb();
  }, 10000);
};
