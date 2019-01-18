import { Middleware } from '@exteranto/core'
import { HelloMessage } from '@/messages/HelloMessage'

export class ItTransformsAMessage implements Middleware {
  /**
   * Transform the incoming request.
   *
   * @param {HelloMessage} event
   */
  public async handle (event: HelloMessage) : Promise<any> {
    event.payload = event.payload + ' From Middleware'

    return event
  }
}
