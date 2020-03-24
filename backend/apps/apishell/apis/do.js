/* 
 * (C) 2020 TekMonks. All rights reserved.
 */
const SHELL = require(`${__dirname}/lib/shell.js`);

exports.doService = async jsonReq => {
	if (!validateRequest(jsonReq)) {LOG.error("Validation failure."); return CONSTANTS.FALSE_RESULT;}
	
	LOG.info("Got do request for command: " + jsonReq.cmd);

	try {
		const out = await SHELL.runShell(jsonReq.cmd);
		return {result: true, ...out} 
	} catch (err) {LOG.error(`Error do'ing command: ${jsonReq.cmd}, error is: ${err}`); return CONSTANTS.FALSE_RESULT;}
}

const validateRequest = jsonReq => (jsonReq && jsonReq.cmd);
