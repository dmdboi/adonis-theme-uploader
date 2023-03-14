declare module '@ioc:Dmdboi/UploadTheme' {
  import { ViewRendererContract } from '@ioc:Adonis/Core/View'
  import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  export interface UploadThemeConfig {
    routeName: string
    dirName: string
  }

  export interface UploadThemeContract {
    getUploadThemePage(view: ViewRendererContract): void

    uploadThemeToDir(ctx: HttpContextContract): void
  }

  const UploadTheme: UploadThemeContract

  export default UploadTheme
}
