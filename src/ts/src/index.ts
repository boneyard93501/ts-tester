/* eslint-disable */
// @ts-nocheck

import "@fluencelabs/js-client.node";
import { Fluence, registerService } from "@fluencelabs/js-client.api";
import { krasnodar as nodes } from "@fluencelabs/fluence-network-environment";

import { registerTService } from "./.aqua/two_party_mpc.js";

const connectTo = nodes[0].multiaddr;
if (typeof connectTo !== "string") {
  throw new Error("connectTo is not a string");
}
const main = async () => {
  await Fluence.connect(connectTo);

  console.log("connectTo: ", connectTo);

  registerTService({
    generate_session_id: () => {
      // return await generateSessionId();
      console.log("generate_session_id");
    },
  });


  // process.exit(0);
};

main().catch((error) => {
  console.error(error);
});