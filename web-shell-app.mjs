import { RemoteSlavePort } from "@websh/remote-slave-port";
export const WebShellApp = new RemoteSlavePort('SOUTH-TOOTH');
WebShellApp.command('app-close',()=>true);