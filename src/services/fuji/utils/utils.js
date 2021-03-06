import axios from "axios";
import { tools } from "@/utils/ipfs";
import rosBag from "@/utils/rosBag";
import config from "~config";

export async function parseResult(result, options = { topics: ["/data"] }) {
  axios.get(`${config.IPFS_GATEWAY}${result}`).then(() => {
    console.log("result ipfs hash resolved");
  });
  const r = await tools.cat(result);
  let message = {};
  await rosBag(
    new Blob([r]),
    function (bag) {
      try {
        message = JSON.parse(bag.message.data);
      } catch (error) {
        console.log(error);
      }
    },
    options
  );
  return message;
}

export function loadScript(src) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
