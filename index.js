const TelegramBot =  require("telegram-node-bot")
const token=""
const tg = new TelegramBot.Telegram(token)
const TelegramBaseController = TelegramBot.TelegramBaseController
const TextCommand = TelegramBot.TextCommand
class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    respectHandler($) {
        $.sendMessage(`Press F (X) to Pay Respects is an action prompt featured in a quick time event from the 2014 first-person shooter Call of Duty: Advanced Warfare. Upon the release of the game in November 2014, many players of the game mocked the funeral cutscene for its forced element of interactivity that seemed out-of-place at a memorial service.`)
    }
    start($){
        $.sendMessage("F to pay respects meme is misunderstood. hence @arcsaber made a bot that wont get him banned")
    }
    get routes() {
        return {
            'pay_respects': 'respectHandler',
            'start':'start'
        }
    }
}

tg.router
    .when(new TextCommand('/f', 'pay_respects'),new PingController())
    .when(new TextCommand('/start', 'start'),new PingController())
    