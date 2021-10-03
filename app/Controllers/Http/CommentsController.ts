import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comment from "App/Models/Comment";

export default class CommentsController {
  public async index ({}: HttpContextContract) {
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
    return Comment.query().preload('user').preload('post')
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
