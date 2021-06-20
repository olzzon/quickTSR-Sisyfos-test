import { TSRInput } from "../src/index";
import { DeviceType } from "timeline-state-resolver";

export const input: TSRInput = {
	devices: {
		sisyfos0: {
			type: DeviceType.SISYFOS,
			options: {
				host: "127.0.0.1",
				port: 5255,
			},
		},
		sisyfos1: {
			type: DeviceType.SISYFOS,
			options: {
				host: "192.168.0.10",
				port: 5255,
			},
		},
	},
};
