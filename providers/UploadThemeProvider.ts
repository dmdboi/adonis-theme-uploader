import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class UploadThemeProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    const config = this.app.container.resolveBinding('Adonis/Core/Config').get('uploadTheme', {})

    /** register theme uploader provider */
    this.app.container.singleton('Dmdboi/UploadTheme', () => {
      const { ThemeUploader } = require('../src/UploadTheme')
      return new ThemeUploader(config)
    })
  }
}
