import { Tabs } from '@exteranto/api'
import { Autowired, Listener, Param } from '@exteranto/core'

import { HelloMessage } from '@/messages/HelloMessage'

export class ItSendsMessagesToATab implements Listener {

  @Autowired
  private tabs: Tabs

  @Param('exteranto.docs')
  private docsUrl: string

  /**
   * Handle the fired event.
   */
  public handle () : void {
    this.tabs.open(this.docsUrl)
      .then(tab => new Promise(resolve => setTimeout(() => resolve(tab), 1000)))
      .then(tab => (tab as any).send(new HelloMessage('Hello World')))
      .then(response => console.assert(response === 'Response', response))
      .then(_ => this.tabs.query({ url: this.docsUrl }))
      .then(tabs => tabs[0].close())
      .catch(console.error)
  }
}
