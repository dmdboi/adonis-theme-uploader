import { ViewContract } from '@ioc:Adonis/Core/View'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UploadThemeConfig } from '@ioc:Dmdboi/UploadTheme'

let AdmZip = require('adm-zip')

export class ThemeUploader {
  constructor(private uploadThemeConfig: UploadThemeConfig) {}

  public async getUploadThemePage(view: ViewContract) {
    return view.render('uploader/upload.edge')
  }

  public async uploadThemeToDir(ctx: HttpContextContract) {
    try {
      const theme = ctx.request.file('theme', {
        extnames: ['zip'],
      })

      if (!theme) {
        return
      }

      if (!theme.isValid) {
        return theme.errors
      }

      const filename = `${theme?.clientName}`
      await theme?.moveToDisk('themes/', { name: filename })

      let zip = new AdmZip(`tmp/uploads/themes/${filename}`)
      await zip.extractAllTo('resources/views/pages', true)

      ctx.session.flash('success', `🎨 Theme uploaded.`)
      return ctx.response.redirect(this.uploadThemeConfig.routeName)
    } catch (e) {
      console.log(e)

      ctx.session.flash('error', `❌ Failed to upload theme.`)
      return ctx.response.redirect(this.uploadThemeConfig.routeName)
    }
  }
}
