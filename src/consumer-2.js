/**
 * @param {import("@types/aws-lambda").EventBridgeEvent} event
 * @param {import("aws-lambda/handler").Context} context
 * @param {import("aws-lambda/handler").Callback} cb
 */
export const handler = (event, context, cb) => {
  console.log("processing event", event.id, context.awsRequestId);
  if (event.detail.value == "success") {
    console.log("Everything ok", event.id, context.awsRequestId);
  } else {
    throw new Error(
      `Some trouble eventId:${event.id} requestId:${context.awsRequestId}`
    );
  }
};
