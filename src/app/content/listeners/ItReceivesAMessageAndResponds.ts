import { Listener } from '@exteranto/core'

import { HelloMessage } from '@/messages/HelloMessage'

export class ItReceivesAMessageAndResponds implements Listener {
  /**
   * Handle the fired event.
   *
   * @param {HelloMessage} message
   */
  public handle (message: HelloMessage) : void {
    console.log(message)
    console.assert(message.payload === 'Hello World From Middleware')

    message.respond('Response')
  }
}
