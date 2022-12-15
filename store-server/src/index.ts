import Koa from 'koa'
import apiRouter from './api'
import loadFixtures from './fixtures'
import appConfig from './config'

const app = new Koa()

app.use(apiRouter.routes())

app.listen(8000)

loadFixtures(appConfig.clearDataBeforeLodingFixture)