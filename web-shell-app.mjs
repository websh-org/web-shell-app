import { RemoteSlavePort } from "@websh/remote-slave-port";
export const WebShellApp = new RemoteSlavePort('SOUTH-TOOTH');
export const manifest = WebShellApp.manifest.bind(WebShellApp);
export const command = WebShellApp.command.bind(WebShellApp);


/**
 * Apps can override these
 */

WebShellApp.command('proc-close',()=>true);
WebShellApp.command('proc-init',()=>true);

/**
 * Autofocus - so we can switch between windows and keep the correct focus
 * TODO: Add opt-out option for this, which means that it should run when the
 * remote slave port is first connected.
 */
window.addEventListener("load", ()=> {
  document.addEventListener('focus', e=>{
    WebShellApp.lastActiveElement = e.target;
  },true)
  window.addEventListener('focus', e=>{
    if (WebShellApp.lastActiveElement && document.activeElement === document.body) {
      requestIdleCallback(()=>WebShellApp.lastActiveElement.focus())
    }
  }) 
})
