import { RemoteSlavePort } from "@websh/remote-slave-port";
export const WebShellApp = new RemoteSlavePort('SOUTH-TOOTH');
WebShellApp.command('proc-close',()=>true);